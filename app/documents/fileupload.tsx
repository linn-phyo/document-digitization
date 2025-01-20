"use client";

import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';

import {createContext, useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';

import { 
    upload,
    resetStatus,
    selectStatus
 } from '@/lib/features/document_ocr/document.slice'

import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";

export function FileUpload() {

    const dispatch = useAppDispatch();
    const status = useAppSelector(selectStatus);

    const [file, setFile] = useState<any>()

    let router = useRouter();

    useEffect(()=>{    
        console.log("EFFECT STATUS >>> ", status);
        if(status === "uploaded") {
            dispatch(resetStatus());
            router.push(`${process.env.NEXT_PUBLIC_APP_URL}/document_ocr`, { scroll: false });
        }
    },[status]);

    function handleChange(event: any) {
        setFile(event.target.files[0])
    }
    
    function handleSubmit() {
                
        let imageFile = URL.createObjectURL(file);
        dispatch(upload({file: imageFile, filename: file.name, language: ""}));
    }

    return(
        <div>
            <h1>Choose Image File to Process</h1>
            <br/>

            <input type="file" 
                className="w-3/12 text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-logo file:hover:bg-logo/50 file:text-white rounded"
                onChange={handleChange} />
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
            <br/>

            <Button size="lg" variant="default" className="gap-1"
                onClick={handleSubmit}>
                <Upload className="h-4 w-4" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Upload a bill
                </span>
            </Button>
        </div>
    )
}