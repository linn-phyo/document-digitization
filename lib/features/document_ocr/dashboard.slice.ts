
import { createAppSlice } from "@/lib/app.slice";
import type { AppThunk } from "@/lib/store";
import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import DataInvoice from "@/lib/data/documents.json"

import { useIndexedDB } from "@/lib/utils/indexeddb-helper";
import { DBConfig } from "@/lib/data/dbconfig";

import { ParseAllObjects } from "@/lib/utils/utils"

import { Invoice } from '@/lib/models/invoices';

import moment, { invalid } from 'moment';

export interface DashboardState {
  data: any;
  status: "idle" | "loading" | "success" | "failed";
}

const initialState: DashboardState = {
  data: {
    countMeal: 0,
    countTransportation: 0,
    countGeneral: 0,
    values: [],
    labels: [],
    donutValues: [],
    donutLabels: [],
  },
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

let selectedCurrency = "jpy";

export const getDashboardData = createAsyncThunk('getDashboardData', async ( filterData: any ) => {
  await initDB();
  selectedCurrency = filterData.currency;
  const response = await getAllValue(DBConfig.invoiceTable);
  return response;
});

// If you are not using async thunks you can use the standalone `createSlice`.
export const dashboardSlice = createAppSlice({
  name: "dashboard",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({

    initIndexedDB: (state) => {
      
      if(!isDBConnecting) initDB();
    },

    resetStatus: (state) => {
      
      state.status = "idle";
      console.log("RESET STATUS IN SLICE >> ", state.status);
    },

  }),

  extraReducers(builder) { 
    builder

      .addCase(getDashboardData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getDashboardData.fulfilled, (state, action) => {
        
        let totalJPY = 0;
        let totalUSD = 0;
        let totalEURO = 0;

        let totalMeal = 0;
        let totalTransportation = 0;
        let totalGeneral = 0;

        let countMeal = 0;
        let countTransportation = 0;
        let countGeneral = 0;

        console.log("SELECTED CURRENCY >> ", selectedCurrency);

        if(action.payload) {
          const itemList = ParseAllObjects<Invoice>(action.payload);
          if(itemList?.length) {
            itemList?.map((invoice: any) => {
              if(invoice.item_type == "meal") {
                countMeal++;
                if(invoice.currency == selectedCurrency) totalMeal = totalMeal + Number(invoice.amount.slice(2, invoice.amount.length).replace(/[\s,]/g, ''));
              } else if(invoice.item_type == "transportation") {
                countTransportation++;
                if(invoice.currency == selectedCurrency) totalTransportation = totalTransportation + Number(invoice.amount.slice(2, invoice.amount.length).replace(/[\s,]/g, ''));
              } else if(invoice.item_type == "expense") {
                countGeneral++;
                if(invoice.currency == selectedCurrency) totalGeneral = totalGeneral + Number(invoice.amount.slice(2, invoice.amount.length).replace(/[\s,]/g, ''));
              }

              if(invoice.currency == "jpy") {
                // totalJPY = totalJPY + Number(invoice.amount.slice(2, invoice.amount.length).replace(/[\s,]/g, ''));
                totalJPY++;
              } else if(invoice.currency == "usd") {
                // totalUSD = totalUSD + Number(invoice.amount.slice(2, invoice.amount.length).replace(/[\s,]/g, ''));
                totalUSD++;
              }  else if(invoice.currency == "euro") {
                // totalEURO = totalEURO + Number(invoice.amount.slice(2, invoice.amount.length).replace(/[\s,]/g, ''));
                totalEURO++;
              }

            });
          }
        }

        state.data.labels = [];
        state.data.values = [];

        state.data.donutLabels = [];
        state.data.donutValues = [];

        state.data.labels.push("Transportation");
        state.data.values.push(totalTransportation.toFixed(2));

        state.data.labels.push("Meal");
        state.data.values.push(totalMeal.toFixed(2));

        state.data.labels.push("General");
        state.data.values.push(totalGeneral.toFixed(2));

        state.data.donutLabels.push("JPY");
        state.data.donutValues.push(Number(totalJPY.toFixed(2)));

        state.data.donutLabels.push("USD");
        state.data.donutValues.push(Number(totalUSD.toFixed(2)));

        state.data.donutLabels.push("EURO");
        state.data.donutValues.push(Number(totalEURO.toFixed(2)));

        state.data.countMeal = countMeal;
        state.data.countTransportation = countTransportation;
        state.data.countGeneral = countGeneral;
        state.status = 'success';
      })
      .addCase(getDashboardData.rejected, (state, action) => {
        state.status = 'failed';
      })
  },

  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectData: (dashboard) => dashboard.data,
    selectStatus: (dashboard) => dashboard.status,
  },
});

export const { initIndexedDB, resetStatus } = dashboardSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectData, selectStatus } = dashboardSlice.selectors;