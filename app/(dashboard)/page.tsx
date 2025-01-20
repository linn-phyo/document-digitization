'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

import { ColumnsChart } from './columns-chart';
import { DonutChart } from './donut-chart';
import { ItemType } from './itemtype';

import  Select  from 'react-select';

import { 
  resetStatus,
  getDashboardData,
  selectStatus,
  selectData,
} from '@/lib/features/document_ocr/dashboard.slice'

import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";

export default function DocumentPage() { 

  const dispatch = useAppDispatch();

    const status = useAppSelector(selectStatus);
    const data = useAppSelector(selectData);

  const optionsCurrency = [
    { value: 'jpy', label: '¥ JPY' },
    { value: 'usd', label: '$ USD' },
    { value: 'euro', label: '€ Euro' }
  ]

  const [currency, setCurrency] = useState(optionsCurrency[0]);

  const setNewCurrency = (data: any) => {
    console.log("SELECT Currency >> ", data.label.split(' ')[0]);
    setCurrency(data);
    dispatch(getDashboardData({currency: data.value}));
  }

  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      </header>
      <main className="grid flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-4 bg-muted/40">
        <ItemType/>
        <div className="flex justify-end">
            <div className="w-1/4 flex flex-row justify-end items-center">
              <label className="basis-1/5">Currency :</label>
              <Select name="type" className="w-30 basic-single" classNamePrefix="select" options={optionsCurrency} defaultValue={optionsCurrency[0]} isClearable={false} onChange={setNewCurrency} />
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-2">
          <div className="col-span-2 mt-2">
            <Card className='min-w-full cursor-pointer'>
                <CardHeader>
                    <CardTitle>
                    </CardTitle>
                    <CardDescription>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                  <ColumnsChart currency={currency} setCurrency={setCurrency}/>
                </CardContent>
                <CardFooter>
                
                </CardFooter> 
            </Card>
          </div>
          <div className="mt-2">
            <Card className='min-w-full cursor-pointer'>
                <CardHeader>
                    <CardTitle>
                    </CardTitle>
                    <CardDescription>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                  <DonutChart/>
                </CardContent>
                <CardFooter>
                
                </CardFooter> 
            </Card>
          </div>
        </div>
      </main>
    </div>
    
  );
}

