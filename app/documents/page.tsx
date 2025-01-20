'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardHeaderTitle,
  CardHeaderSubTitle,
  CardHeaderDescription
} from '@/components/ui/card';
import { FileUpload } from './fileupload';

export default function DocumentPage() { 

  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      </header>
      <main className="grid flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-4 bg-muted/40">
        <Tabs defaultValue="all">
          <div className="flex items-center">
            {/* <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="draft">Draft</TabsTrigger>
              <TabsTrigger value="archived" className="hidden sm:flex">
                Archived
              </TabsTrigger>
            </TabsList> */}
            {/* <div className="ml-auto flex items-center gap-2">
              <Button size="sm" variant="outline" className="h-8 gap-1">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Export
                </span>
              </Button>
              <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Product
                </span>
              </Button>
            </div> */}
          </div>
          <TabsContent value="all">
            <Card>
              <CardHeader>
                <CardHeaderTitle>AI-Powered and ML enabled</CardHeaderTitle>
                <CardHeaderSubTitle className='pt-2'>Handwriting Invoice/receipt Automation</CardHeaderSubTitle>
                <CardHeaderDescription className='pt-2'>An Artificial Intelligence that makes fewer mistakes than human accountants.</CardHeaderDescription>
              </CardHeader>
                <div className='pl-4 pr-4'>
                  <hr className='h-1 bg-zinc-700 border-0 rounded md:my-5 dark:bg-gray-700'/>
                </div>
              
              <CardHeader>
                <CardTitle>Document Information Extraction</CardTitle>
                <CardDescription>
                  Upload Documents for processing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FileUpload />
              </CardContent>
              <CardFooter>
                
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
    );
}

