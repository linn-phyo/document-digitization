'use client';

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import {
  TableHead,
  TableRow,
  TableCell,
  TableHeader,
  TableBody,
  Table
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

import { RefreshCcw, PlusCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import  Select  from 'react-select';
import { Input } from '@/components/ui/input';
import { DateTimePicker } from '@/components/ui/datetimepicker';

import ModalDialog from '@/components/ui/modal-dialog';

import { InvoiceRow } from './invoice';

import { showToast } from '@/lib/utils/toast-helper';

import { 
  resetStatus,
  getAllInvoices,
  selectData,
  selectStatus,
  selectItemList,
  deleteByID,
} from '@/lib/features/document_ocr/document.slice'

import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";

export function InvoicesTable({
  currentPageNo,
  offset,
  totalItems
}: {
  currentPageNo: number,
  offset: number;
  totalItems: number;
}) {

  const router = useRouter();

  const dispatch = useAppDispatch();

  const status = useAppSelector(selectStatus);
  const itemList = useAppSelector(selectItemList);

  const initialized = useRef(false)

  const [modal, setModal] = useState(false);
  const [deleteId, setDeleteID] = useState(-1);

  const [formData, setFormData] = useState({
    type: '',
    itemType: '',
    fromDate: null,
    toDate: null,
  });

  let itemPerPage = 10;

  const optionsType = [
    { value: 'receipt', label: 'Receipt' },
    { value: 'voucher', label: 'Voucher' }
  ]

  const optionsItemType = [
    { value: 'meal', label: 'Meal' },
    { value: 'transportation', label: 'Transportation' },
    { value: 'expense', label: 'Expense' },
  ]

  useEffect(() => {
    
    if (!initialized.current) {
      initialized.current = true;
      console.log("EFFECT STATUS >>> ", status);

      if (status === "success") {
        setModal(false);
        showToast("success", "Data has been saved!");
        dispatch(resetStatus());
      }

      dispatch(getAllInvoices(formData));
    }
    
    if(status === "edit") {
      router.push(`/document_ocr`);
    }

    if(status === "deleted") {
      setModal(false);
      dispatch(getAllInvoices(formData));
      showToast("success", "Data has been deleted!");
    }

    //if(itemList == null)
      
    
  }, [status]);

  function prevPage() {
    router.back();
  }

  async function nextPage() {
    
  }

  const handleOnClickLoad = (e: any) => {
    dispatch(getAllInvoices(formData));
  };

  const handleOnClickAdd = (e: any) => {
    router.push(`/documents`);
  };

  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);

  const setNewItemType = (data: any) => {
    if(data)
      setFormData({ ...formData, ["itemType"]: data.value });
    else
      setFormData({ ...formData, ["itemType"]: "" });
  }

  const setNewType = (data: any) => {
    if(data)
      setFormData({ ...formData, ["type"]: data.value });
    else
      setFormData({ ...formData, ["type"]: "" });
  }

  const setNewFromDate = (newDate: any) => {
    // setDate(newDate);
    if(newDate == "")
      setFormData({ ...formData, ["fromDate"]: null });  
    else
      setFormData({ ...formData, ["fromDate"]: newDate });
  }

  const setNewToDate = (newDate: any) => {
    // setDate(newDate);
    if(newDate == "")
      setFormData({ ...formData, ["toDate"]: null });  
    else
      setFormData({ ...formData, ["toDate"]: newDate });
  }

  const handleShowModalDialog = (id: number) => {
    setModal(true);
    setDeleteID(Number(id));
  }

  const handleProcess = () => {
    console.log("SET DELETE ID >> ", deleteId);
    dispatch(deleteByID({id: Number(deleteId)}));
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoices</CardTitle>
        <CardDescription>
          Invoice Listing
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-4 mt-4 mb-12">
          <div className="mt-2">
              <div className="flex flex-row items-center">
                  <label className="basis-1/4">From Date :</label>
                  <DateTimePicker size={30} value={formData.fromdate} onChange={setNewFromDate} timeDisplay={false}/>
              </div>
          </div>
          <div className="mt-2">
              <div className="flex flex-row items-center">
                  <label className="basis-1/4">To Date :</label>
                  <DateTimePicker size={30} value={formData.todate} onChange={setNewToDate} timeDisplay={false}/>
              </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4 mb-12">
          <div className="mt-2">
              <div className="flex flex-row items-center">
                  <label className="basis-1/4">Item :</label>
                  <Select name="itemType" options={optionsItemType} className="basis-2/4" placeholder="-- Select One --" isClearable={true} onChange={setNewItemType} />
              </div>
          </div>
          <div className="mt-2">
              <div className="flex flex-row items-center">
                  <label className="basis-1/4">Type :</label>
                  <Select name="type" options={optionsType} className="basis-2/4" placeholder="-- Select One --" isClearable={true} onChange={setNewType} />
              </div>
          </div>
          <div className="mt-2">
            <div className="flex flex-row items-center">
              <Button size="sm" variant="default" className="gap-1" onClick={handleOnClickLoad}>
                  <RefreshCcw className="h-4 w-4" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Load
                  </span>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-end mb-2">
          <div>
            <Button size="default" className="h-8 gap-1" onClick={handleOnClickAdd}>
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add a bill
              </span>
            </Button>
          </div>
        </div>

        <hr/>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Vendor</TableHead>
              <TableHead>Place</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Item Type</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>
                <span>Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {itemList?.length ? (
              itemList?.map((invoice: any) => (
              <InvoiceRow key={invoice.id} invoice={invoice} handleShowModalDialog={handleShowModalDialog} />
            ))
            ) : (
              <TableRow>
                <TableCell className="font-medium"><span>No record found</span></TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        
      </CardFooter>

      <ModalDialog
        show={modal}
        handleClose={handleClose}
        handleProcess={handleProcess}
      />
    </Card>
  );
}
