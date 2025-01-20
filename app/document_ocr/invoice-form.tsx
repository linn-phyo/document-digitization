"use client";

import React from 'react';
import {ChangeEvent, useEffect, useState, useRef} from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { DateTimePicker } from '@/components/ui/datetimepicker';
import { showToast } from '@/lib/utils/toast-helper';
import Flag from 'react-flagkit';

import moment from 'moment';

import { 
    upload,
    resetStatus,
    saveData,
    updateData,
    selectData,
    selectStatus,
    selectErrorMessage,
} from '@/lib/features/document_ocr/document.slice'

import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";

import { JPY_to_USD } from '@/lib/utils/constants';

export function InvoiceLayout() {

    let router = useRouter();
    const searchParams = useSearchParams();

    const dispatch = useAppDispatch();

    const errorMessage = useAppSelector(selectErrorMessage);
    const status = useAppSelector(selectStatus);
    const data = useAppSelector(selectData);

    const initialized = useRef(false);

    const [invoiceId, setInvoiceId] = useState("");
    const [formData, setFormData] = useState({
        filename: "",
        file: null,
        type: "",
        default_language: "",
        vendor: "",
        place: "",
        item: "",
        item_type: "",
        qty: 0,
        date: new Date(),
        checkin_time: new Date(),
        checkout_time: new Date(),
        currency: "",
        amount: 0});

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const setNewDate = (newDate: any) => {
        // setDate(newDate);
        setFormData({ ...formData, ["date"]: moment(newDate, "DD/MM/YYYY").toDate() });
      }

    const setNewCheckinTime = (newCheckinTime: any) => {
        // setCheckinTime(newCheckinTime);
        setFormData({ ...formData, ["checkin_time"]: moment(newCheckinTime, "DD/MM/YYYY hh:mm:ss").toDate() });
    }

    const setNewCheckoutTime = (newCheckoutTime: any) => {
        // setCheckoutTime(newCheckoutTime);
        setFormData({ ...formData, ["checkout_time"]: moment(newCheckoutTime, "DD/MM/YYYY hh:mm:ss").toDate() });
    }

    useEffect(()=>{

        if (!initialized.current) {
            if(data) {
                setInvoiceId(data.id);
            } else {
                router.push("/documents");
            }
            initialized.current = true;
        }

        if(status === "uploaded" || status === 'edit') dispatch(resetStatus());

        if(status === "success") {
            router.push("/invoice_listing");
        } else if(status === "edit") {
            console.log("EDIT ID >> ", data.id);
        } else if(status === "failed" && errorMessage != "") {
            showToast("error", errorMessage);
        } else if(status === "failed") {
            showToast("error", "Failed to save!");
        }

    });

    useEffect(() => {

        if(data) {

            setFormData({
                filename: data.filename,
                file: data.file,
                type: data.type,
                default_language: data.default_language,
                vendor: data.vendor,
                place: data.place,
                item: data.item,
                item_type: data.item_type,
                qty: data.qty,
                date: moment(moment.utc(data.date), "DD/MM/YYYY").toDate(),
                checkin_time: moment(moment.utc(data.checkin_time), "DD/MM/YYYY hh:mm:ss").toDate(),
                checkout_time: moment(moment.utc(data.checkout_time), "DD/MM/YYYY hh:mm:ss").toDate(),
                currency: data.currency,
                amount: data.amount
            });
        } else {
            router.push("/documents");
        }

      }, [data]);

    const setLanguage = (event: any) => {
        console.log("SELECTED LANGUAGE >> ", event.target.value);
        dispatch(upload({file: formData.file, filename: formData.filename, language: event.target.value}));
    }

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission behavior

        if(invoiceId > 0) {    
            console.log("UPDATE >> ", formData);
            dispatch(updateData({id: invoiceId, data: formData}));
        } else {
            dispatch(saveData({data: formData}));
        }

        // dispatch(saveData({data: formData}));
      };

      const handleCancel = () => {
        router.push("/documents");
      };

    return(
        <div>
            {
                (() => {
                    if(formData.type == "receipt") {
                        return (
                            <b>Receipt</b>
                        )
                    } else if(formData.type == "voucher") {
                        return (
                            <b>Voucher</b>
                        )
                    } else {
                        return (
                            <b>Undefined</b>
                        )
                    }
                })()  
            }  is found in the image.

            <div className="grid grid-cols-4 gap-4 mt-3">
                <div className="flex gap-2 items-center" onChange={setLanguage}>
                    <div className="flex-initial w-36"><label>Translate  :</label></div>
                    <div className="flex-initial w-28">
                        <label htmlFor="language_en">
                            <Badge variant="inactive" className="capitalize has-[:checked]:bg-blue-300">
                                <Flag country="US" />&nbsp;&nbsp;&nbsp;US
                                <input id="language_en" name="language" type="radio" value="en" className='sr-only' checked={formData.default_language === 'en'}/>
                            </Badge>
                        </label>
                    </div>
                    <div className="flex-initial w-28">
                        <label htmlFor="language_de">
                            <Badge variant="inactive" className="capitalize has-[:checked]:bg-blue-300">
                                <Flag country="DE" />&nbsp;&nbsp;&nbsp;DE
                                <input id="language_de" name="language" type="radio" value="de" className='sr-only' checked={formData.default_language === 'de'}/>
                            </Badge>
                        </label>
                    </div>
                    <div className="flex-initial w-28">
                        <label htmlFor="language_fr">
                            <Badge variant="inactive" className="capitalize has-[:checked]:bg-blue-300">
                                <Flag country="FR" />&nbsp;&nbsp;&nbsp;FR
                                <input id="language_fr" name="language" type="radio" value="fr" className='sr-only' checked={formData.default_language === 'fr'}/>
                            </Badge>
                        </label>
                    </div>
                    <div className="flex-initial w-28">
                    <label htmlFor="language_jp">
                            <Badge variant="inactive" className="capitalize has-[:checked]:bg-blue-300">
                                <Flag country="JP" />&nbsp;&nbsp;&nbsp;JP
                                <input id="language_jp" name="language" type="radio" value="jp" className='sr-only' checked={formData.default_language === 'jp'}/>
                            </Badge>
                        </label>
                    </div>
                </div>
            </div>

            <form className="flex items-center w-full justify-between" onSubmit={handleSubmit}>
                <div className="grid grid-flow-col gap-4 mt-3">
                    <div>

                        <div className="mt-2">
                            <div className="flex flex-row items-center">
                                <label className="basis-2/5">Vendor :</label>
                                <Input type="text" 
                                    name="vendor"
                                    onChange={handleInputChange}
                                    value={formData.vendor}
                                    size={35} 
                                    className="basis-2/5 text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"/>
                            </div>
                        </div>

                        <div className="mt-2">
                            <div className="flex flex-row items-center">
                                <label className="basis-2/5">Place :</label>
                                <Input type="text" 
                                    name="place"
                                    onChange={handleInputChange}
                                    value={formData.place}
                                    size={35} 
                                    className="basis-2/5 text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"/>
                            </div>
                        </div>
                        
                        <div className="mt-2">
                            <div className="flex flex-row items-center">
                                <label className="basis-2/5">Item :</label>
                                <Input type="text" 
                                    name="item"
                                    onChange={handleInputChange}
                                    value={formData.item}
                                    size={35} 
                                    className="basis-2/5 text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"/>
                            </div>
                        </div>
                        
                        <div className="mt-2">
                            <div className="flex flex-row items-center">
                                <label className="basis-2/5">Item Type :</label>
                                <Input type="text" 
                                    name="item_type"
                                    onChange={handleInputChange}
                                    value={formData.item_type}
                                    size={35} 
                                    className="basis-2/5 text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"/>
                            </div>
                        </div>
                        
                        <div className="mt-2">
                            <div className="flex flex-row items-center">
                                <label className="basis-2/5">Qty :</label>
                                <Input type="text" 
                                    name="qty"
                                    onChange={handleInputChange}
                                    value={formData.qty}
                                    size={35} 
                                    className="basis-2/5 text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"/>
                            </div>
                        </div>
                        
                        <div className="mt-2">
                            <div className="flex flex-row items-center">
                                <label className="basis-2/5">Date :</label>
                                <DateTimePicker size={35} value={formData.date} timeDisplay={false} onChange={setNewDate}/>
                            </div>
                        </div>

                        <div className="mt-2">
                            <div className="flex flex-row items-center">
                                <label className="basis-2/5">Check-in Time :</label>
                                <DateTimePicker size={35} value={formData.checkin_time} timeDisplay={true} onChange={setNewCheckinTime}/>
                            </div>
                        </div>

                        <div className="mt-2">
                            <div className="flex flex-row items-center">
                                <label className="basis-2/5">Check-out Time :</label>
                                <DateTimePicker size={35} value={formData.checkout_time} timeDisplay={true} onChange={setNewCheckoutTime}/>
                            </div>
                        </div>

                        <div className="mt-2">
                            <div className="flex flex-row items-center">
                                <label className="basis-2/5">Amount :</label>
                                <Input type="text" 
                                    name="amount"
                                    onChange={handleInputChange}
                                    value={formData.amount}
                                    size={35} 
                                    className="basis-2/5 text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"/>
                            </div>
                        </div>

                        <div className="mt-6 pl-80">
                            <div className="flex flex-row items-center">
                                <Button type='submit' size="lg" variant="default" className="gap-1">
                                    <Upload className="h-4 w-4" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Save
                                    </span>
                                </Button>
                                
                                <Button type='button' size="lg" variant="outline" className="gap-1 ml-2" onClick={handleCancel}>
                                    <X className="h-4 w-4" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Cancel
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='ml-1'><h5>{formData.filename}</h5><img src={formData.file} className='w-3/6 h-fill' /></div>
                </div>
            </form>
        </div>
    )

    
}