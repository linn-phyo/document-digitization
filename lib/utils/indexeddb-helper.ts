
import { DBConfig } from "@/lib/data/dbconfig";

import moment from 'moment';

// Interface defining the return type for useIndexedDB hook
interface UseIndexedDBResult {
  initDB: any;
  getValue: (tableName: string, id: number) => Promise<any>;
  getValueByFilter: (tableName: string, formData: Date, toDate: Date, type: string, itemType: string) => Promise<any>;
  getAllValue: (tableName: string) => Promise<any[]>;
  putValue: (tableName: string, value: object) => Promise<IDBValidKey | null>;
  putBulkValue: (tableName: string, values: object[]) => Promise<any[]>;
  updateValue: (tableName: string, id: number, newItem: object) => Promise<IDBValidKey | null>;
  // updateValue: (params: {
  //   tableName: string;
  //   id: number;
  //   newItem: any;
  // }) => void;
  deleteValue: (tableName: string, id: number) => number | null;
  deleteAll: (tableName: string) => void;
  isDBConnecting: boolean;
}

export const useIndexedDB = (
  databaseName: string,
  tableNames: string[]
): UseIndexedDBResult => {
    let db: IDBDatabase | null = null;
    let isDBConnecting: boolean = true;

    const initDB = () => {
        const request = indexedDB.open(databaseName, DBConfig.version);
  
        // Handle database upgrade
        request.onupgradeneeded = () => {
          const database = request.result;
          tableNames.forEach((tableName) => {
            if (!database.objectStoreNames.contains(tableName)) {
              let objectStore = database.createObjectStore(tableName, {
                autoIncrement: true,
                keyPath: "id",
              });

              objectStore.createIndex("imageIndex", "filename", { unique: false });
              objectStore.createIndex("currencyIndex", "currency", { unique: false });
              // objectStore.createIndex("dateIndex", "date", { unique: false });
              // objectStore.createIndex("typeIndex", "type", { unique: false });
              // objectStore.createIndex("itemTypeIndex", "item_type", { unique: false });

            }
          });
        };
  
        // Handle successful database connection
        request.onsuccess = () => {
          console.info("Success initializing IndexedDB >> helper");
          db = request.result
          isDBConnecting = false;
        };
  
        // Handle errors in database connection
        request.onerror = () => {
          console.error("Error initializing IndexedDB:", request.error);
          isDBConnecting = false;
        };
  };

  if (!db) {
    initDB();
  }

  // Helper function to get a transaction for a specific table
  const getTransaction = (tableName: string, mode: IDBTransactionMode) => {
    if (!db) throw new Error("Database is not initialized");
    return db.transaction(tableName, mode).objectStore(tableName);
  };

  // Function to get a specific value from the table by ID
  const getValue = (tableName: string, id: number): Promise<any> => {
      return new Promise((resolve, reject) => {
        try {
          const store = getTransaction(tableName, "readonly");
          const request = store.get(id);
          request.onsuccess = () => resolve(request.result);
          request.onerror = () => reject(request.error);
        } catch (error) {
          reject(error);
        }
      });
    };

  // Function to get a specific value from the table by Filter
  const getValueByFilter = (tableName: string, fromDate: Date, toDate: Date, type: string, itemType: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      try {
        const store = getTransaction(tableName, "readonly");
        const request = store.getAll();
        request.onsuccess = () => {
          let result = request.result;
          if(itemType != "")
            result = result.filter(data => (data.item_type == itemType));

          if(type != "")
            result = result.filter(data => (data.type == type));

          if(fromDate != null && toDate == null) {
            console.log("FILTERS >> ", moment(fromDate, "DD/MM/YYYY hh:mm:ss").toDate());
            result = result.filter(data => (moment(data.date).toDate() >= moment(fromDate).toDate()));
          }
          else if(fromDate == null && toDate != null)
            result = result.filter(data => (data.date <= toDate));
          else if(fromDate != null && toDate != null)
            result = result.filter(data => (data.date >= fromDate && data.date <= toDate));

          resolve(result);
        } 
        request.onerror = () => reject(request.error);
      } catch (error) {
        reject(error);
      }
    });
  };

  // Function to get all values from a specific table
  const getAllValue = (tableName: string): Promise<any[]> => {
    return new Promise((resolve, reject) => {
      try {
        const store = getTransaction(tableName, "readonly");
        const request = store.getAll();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      } catch (error) {
        reject(error);
      }
    });
  };

  // Function to insert or update a single value in a specific table
  const putValue = (
    tableName: string,
    value: object
  ): Promise<IDBValidKey | null> => {
    return new Promise((resolve, reject) => {
      try {
        const store = getTransaction(tableName, "readwrite");
        const imageIndex = store.index("imageIndex",);

        console.log("Find IMG NAME >> ", value.filename);
        const request = imageIndex.get(value.filename);
        request.onsuccess = () => {
          const data = request.result;
          console.log("FOUND >> ", request);
          if(data) {
            reject("Duplicate Data!");
          } else {
            const requestInsert = store.put(value);
            requestInsert.onsuccess = () => resolve(requestInsert.result);
            requestInsert.onerror = () => reject(requestInsert.error);
          }
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  // Function to insert or update multiple values in a specific table
  const putBulkValue = async (
    tableName: string,
    values: object[]
  ): Promise<any[]> => {
    try {
      const store = getTransaction(tableName, "readwrite");
      values.forEach((value) => store.put(value));
      return getAllValue(tableName);
    } catch (error) {
      throw new Error("Bulk insert failed: " + error);
    }
  };

  // Function to update a specific value by ID in a specific table
  // const updateValue = ({
  //   tableName,
  //   id,
  //   newItem,
  // }: {
  //   tableName: string;
  //   id: number;
  //   newItem: any;
  // }) => {
  //   try {
  //     const store = getTransaction(tableName, "readwrite");
  //     const request = store.get(id);
  //     request.onsuccess = () => {
  //       const data = request.result;
  //       const updatedItem = data ? { ...data, ...newItem } : { id, newItem };
  //       store.put(updatedItem);
  //     };
  //   } catch (error) {
  //     console.error("Update value failed: ", error);
  //   }
  // };

  const updateValue = async (
    tableName: string,
    id: number,
    newItem: any,
  ): Promise<IDBValidKey | null> => {

    return new Promise((resolve, reject) => {
      try {
        const store = getTransaction(tableName, "readwrite");
        const request = store.get(id);
        request.onsuccess = () => {
          const data = request.result;
          const updatedItem = data ? { ...data, ...newItem } : { id, newItem };
          
          const requestUpdate = store.put(updatedItem);
          requestUpdate.onsuccess = () => resolve(requestUpdate.result);
          requestUpdate.onerror = () => reject(requestUpdate.error);
        };
      } catch (error) {
        reject(error);
      }
    });
  };

  // Function to delete a specific value by ID from a specific table
  const deleteValue = (tableName: string, id: number): number | null => {
    try {
      const store = getTransaction(tableName, "readwrite");
      console.log("DELETE ID >> ", id);
      store.delete(id);
      return id;
    } catch (error) {
      console.error("Delete value failed: ", error);
      return null;
    }
  };

  // Function to delete all values from a specific table
  const deleteAll = (tableName: string) => {
    try {
      const store = getTransaction(tableName, "readwrite");
      store.clear();
    } catch (error) {
      console.error("Delete all values failed: ", error);
    }
  };

  return {
    initDB,
    getValue,
    getValueByFilter,
    getAllValue,
    putValue,
    putBulkValue,
    updateValue,
    deleteValue,
    deleteAll,
    isDBConnecting,
  };
};