import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import { MoreHorizontal } from 'lucide-react';
import { TableCell, TableRow } from '@/components/ui/table';

import { Invoice } from '@/lib/models/invoices';

import { useTransition } from 'react';
import { useRouter } from 'next/navigation';

import moment from 'moment';

import { 
  resetStatus,
  getInvoice,
  selectData,
  selectStatus,
} from '@/lib/features/document_ocr/document.slice'

import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";
import { stat } from 'fs';

export function InvoiceRow({ invoice, handleShowModalDialog }: { invoice: Invoice, handleShowModalDialog: any }) {

  let router = useRouter();
  const [isPending, startTransition] = useTransition();

  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);

  function editAction(formData: FormData) {
    
    const id = (formData.get('id')? formData.get('id') : -1) as number;
    dispatch(getInvoice(id as number));
    // startTransition(() => {
    //   router.replace(`/document_ocr?${createQueryString("id", value)}`);
    // });
  }

  function deleteAction(formData: FormData) {
    
    const id = (formData.get('id')? formData.get('id') : -1) as number;
    dispatch(getInvoice(id as number));
    // startTransition(() => {
    //   router.replace(`/document_ocr?${createQueryString("id", value)}`);
    // });
  }

  return (
    <TableRow>
      <TableCell className="font-medium">{invoice.item}</TableCell>
      <TableCell>
          {invoice.vendor}
      </TableCell>
      <TableCell className="hidden md:table-cell">{invoice.place}</TableCell>
      <TableCell className="hidden md:table-cell">{moment(invoice.date).format("DD/MM/YYYY")}</TableCell>
      <TableCell className="hidden md:table-cell">
        <Badge variant="active" className="capitalize">
          {invoice.item_type}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <Badge variant="active" className="capitalize">
          {invoice.type}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">{invoice.amount}</TableCell>
      <TableCell>        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <form action={editAction}>
                <input name="id" type="hidden" value={invoice.id} />
                <button type="submit">Edit</button>
              </form>
            </DropdownMenuItem>
            <DropdownMenuItem><button type="button" value={invoice.id} onClick={(e) => handleShowModalDialog(e.target.value)}>Delete</button></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
    
  );
}
