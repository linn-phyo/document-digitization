'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
  } from '@/components/ui/card';

import { ArrowRight, HandCoins, Utensils, Car } from 'lucide-react';

import { useRouter, useSearchParams } from "next/navigation";

import { 
    selectStatus,
    selectData,
  } from '@/lib/features/document_ocr/dashboard.slice'
  
import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";

export function ItemType() {

    
    const router = useRouter();
    const searchParams = useSearchParams();

    const status = useAppSelector(selectStatus);
    const data = useAppSelector(selectData);

    const OnClickCard = (e: any) => {
        const cardID = e.currentTarget.dataset.id;
        if(cardID == "upload") {
            router.replace(`/documents`)
        } else {
            const params = new URLSearchParams(searchParams);
            params.set("itemtype",cardID );
            router.replace(`/invoice_listing?${params.toString()}`);
        }
        
      };

    return(
        <div className="grid grid-cols-4 gap-4 mb-3">
            <div className="mt-2">
              <div className="flex flex-row items-center">
                <Card className='min-w-full cursor-pointer' data-id="transportation" onClick={OnClickCard}>
                    <CardHeader>
                        <CardTitle>
                            <div className='flex flex-row'><Car /> <span className='pl-4'>Transportation Bills</span></div>
                        </CardTitle>
                        <CardDescription>
                            Number of Receipts :
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className='flex justify-between items-center'>
                            <div className='text-2xl'>{data.countTransportation}</div>
                            <div className="order-last"><ArrowRight/></div>
                        </div>
                    </CardContent>
                    <CardFooter>
                    
                    </CardFooter>
                </Card>
              </div>
          </div>
          <div className="mt-2">
              <div className="flex flex-row items-center">
                <Card className='min-w-full cursor-pointer' data-id="meal" onClick={OnClickCard}>
                    <CardHeader>
                        <CardTitle>
                            <div className='flex flex-row'><Utensils /> <span className='pl-4'>Meal Bills</span></div>
                        </CardTitle>
                        <CardDescription>
                            Number of Receipts :
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className='flex justify-between items-center'>
                            <div className='text-2xl'>{data.countMeal}</div>
                            <div className="order-last"><ArrowRight/></div>
                        </div>
                    </CardContent>
                    <CardFooter>
                    
                    </CardFooter>
                </Card>
              </div>
          </div>
          <div className="mt-2">
              <div className="flex flex-row items-center">
                <Card className='min-w-full cursor-pointer' data-id="expense" onClick={OnClickCard}>
                    <CardHeader>
                        <CardTitle>
                            <div className='flex flex-row'><HandCoins /> <span className='pl-4'>General Bills</span></div>
                        </CardTitle>
                        <CardDescription>
                            Number of Receipts :
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className='flex justify-between items-center'>
                            <div className='text-2xl'>{data.countGeneral}</div>
                            <div className="order-last"><ArrowRight/></div>
                        </div>
                    </CardContent>
                    <CardFooter>
                    
                    </CardFooter>
                </Card>
              </div>
          </div>
          <div className="mt-2">
              <div className="flex flex-row items-center">
                <Card className='min-w-full  cursor-pointer' data-id="upload" onClick={OnClickCard}>
                    <CardHeader>
                        <CardTitle>Document Information Extraction</CardTitle>
                        <CardDescription>
                        Upload Documents for processing
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className='flex justify-between items-center'>
                            <div className='text-2xl'>Upload a bill</div>
                            <div className="order-last"><ArrowRight/></div>
                        </div>
                    </CardContent>
                    <CardFooter>
                    
                    </CardFooter>
                </Card>
              </div>
          </div>
        </div>
    );
}