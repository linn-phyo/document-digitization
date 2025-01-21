'use client';

import '../../public/bootstrap-dialog.css';

import { useSearchParams } from 'next/navigation'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { InvoicesTable } from './invoices-table';

export default function DocumentListingPage() { 

  const searchParams = useSearchParams();

  let pageNo = 1;
  let newOffset = 0;
  let totalItems = 10;

  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      </header>
      <main className="grid flex-1 items-start gap-2 sm:px-6 sm:py-0 md:gap-4 bg-muted/40">
        <Tabs defaultValue="all">
          <div className="flex items-center">
          </div>
          <TabsContent value="all">
            <InvoicesTable 
            currentPageNo={pageNo}
            offset={newOffset*pageNo}
            totalItems={totalItems}
            searchParams={searchParams}
            />
          </TabsContent>
        </Tabs>
      </main>
    </div>
    
  );
}

