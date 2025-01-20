import { createAppSlice } from "@/lib/app.slice";
import type { AppThunk } from "@/lib/store";
import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import DataInvoice from "@/lib/data/documents.json"

import { useIndexedDB } from "@/lib/utils/indexeddb-helper";
import { DBConfig } from "@/lib/data/dbconfig";

import { Invoice } from '@/lib/models/invoices';

import { ParseAllObjects } from "@/lib/utils/utils"

import { JPY_to_USD } from '@/lib/utils/constants';

import moment from 'moment';

const dataInvoice = DataInvoice;

export interface DocumentOCRState {
  data: any;
  itemList: any;
  errorMessage: string;
  status: "idle" | "loading" | "uploaded" | "loaded"  | "edit"  | "deleted" | "success" | "failed";
}

const initialState: DocumentOCRState = {
  data: null,
  itemList: null,
  errorMessage: "",
  status: "idle",
};

const {
    initDB,
    putValue,
    getValue,
    getValueByFilter,
    getAllValue,
    updateValue,
    deleteValue,
    isDBConnecting,
} = useIndexedDB(DBConfig.name, [DBConfig.invoiceTable]);

export const saveData = createAsyncThunk('saveData', async ( formData: any ) => {
  const response = await putValue(DBConfig.invoiceTable, formData.data);
  return response;
});

export const updateData = createAsyncThunk('updateData', async ( formData: any ) => {
  const response = await updateValue(DBConfig.invoiceTable, Number(formData.id), formData.data);
  return response;
});

export const getAllInvoices = createAsyncThunk('getAllInvoices', async ( filterDate: any ) => {
  const response = await getValueByFilter(DBConfig.invoiceTable, filterDate.fromDate, filterDate.toDate, filterDate.type, filterDate.itemType);
  // const response = await getAllValue(DBConfig.invoiceTable);
  return response;
});

export const getInvoice = createAsyncThunk('getInvoice', async (id: number) => {
  console.log("SELECTED EDIT ITEM in SLICE >>> ", id);
  const response = await getValue(DBConfig.invoiceTable, Number(id));
  return response;
});

// If you are not using async thunks you can use the standalone `createSlice`.
export const documentSlice = createAppSlice({
  name: "document",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({

    resetStatus: (state) => {
      
      state.status = "idle";
      console.log("RESET STATUS >> ", state.status);
    },

    upload: (state, action: PayloadAction< { file: any; filename: ""; language: string } >) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      const { file, filename, language } = action.payload;
      // state.file = file;
      // state.filename = filename;

      let invoiceData = dataInvoice.find(item => {
        return item.filename == filename
       });

      const defaultLanguage = invoiceData.default_language;
      invoiceData = invoiceData[language == "" ? invoiceData.default_language : language];
      invoiceData.id = 0;
      invoiceData.file = file;
      invoiceData.filename = filename;
      invoiceData.default_language = language == "" ? defaultLanguage : language;

      if(invoiceData != null) {
        invoiceData.date = moment(invoiceData.date, "DD/MM/YYYY hh:mm:ss");
        invoiceData.checkin_time = moment(invoiceData.checkin_time, "DD/MM/YYYY hh:mm:ss");
        invoiceData.checkout_time = moment(invoiceData.checkout_time, "DD/MM/YYYY hh:mm:ss");
      }

      console.log("UPLOAD >>", invoiceData);

      state.data = ParseAllObjects<Invoice>(invoiceData);
      state.data.amount = state.data.amount = (state.data.default_language == "en") ? (state.data.amount.slice(0, 1) + ' ' + (Number(state.data.amount.slice(2, state.data.amount.length).replace(/[\s,]/g, '')) * JPY_to_USD).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) : state.data.amount;
      state.status = "uploaded";
      
    },

    deleteByID: (state, action: PayloadAction< { id: number; } >) => {

      if(!isDBConnecting) initDB();
      
      const { id } = action.payload;
      deleteValue(DBConfig.invoiceTable, Number(id));
      state.itemList = null;
      state.status = "deleted";      
    },

  }),

  extraReducers(builder) { 
    builder
      .addCase(saveData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(saveData.fulfilled, (state, action) => {
        
        if(action.payload != null && (action.payload as number) > 0) {
          state.itemList = null;
          state.status = "success";
        } else {
          state.status = "failed";
        }        
      })
      .addCase(saveData.rejected, (state, action) => {
        console.log("REJECT with ERROR >> ", action.error.message);
        state.errorMessage = action.error.message ? action.error.message : "";
        state.status = 'failed';
      })

      .addCase(updateData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateData.fulfilled, (state, action) => {
        
        console.log("UPD PAYLOAD >> ", action.payload);
        if(action.payload != null && (action.payload as number) > 0) {
          state.itemList = null;
          state.status = "success";
        } else {
          state.status = "failed";
        }        
      })
      .addCase(updateData.rejected, (state, action) => {
        state.status = 'failed';
        console.log("ERROR : ", action.payload);
      })

      .addCase(getAllInvoices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllInvoices.fulfilled, (state, action) => {
        
        if(action.payload) {
          state.itemList = ParseAllObjects<Invoice>(action.payload);
          state.status = 'loaded';
        }
      })
      .addCase(getAllInvoices.rejected, (state, action) => {
        state.status = 'failed';
      })

      .addCase(getInvoice.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getInvoice.fulfilled, (state, action) => {
        
        console.log("SELECTED EDIT ITEM in SLICE >>> ", action.payload);
        if(action.payload) {
          state.data = ParseAllObjects<Invoice>(action.payload);
          state.itemList = null;
          state.status = "edit";          
        }
      })
      .addCase(getInvoice.rejected, (state, action) => {
        state.status = 'failed';
      });
  },

  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectData: (document) => document.data,
    selectItemList: (document) => document.itemList,
    selectErrorMessage: (document) => document.errorMessage,
    selectStatus: (document) => document.status,
  },
});

// Action creators are generated for each case reducer function.
export const { upload, deleteByID, resetStatus } = documentSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectErrorMessage, selectData, selectItemList, selectStatus } = documentSlice.selectors;