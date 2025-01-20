import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

import Link from 'next/link';
import {
  Home,
  Receipt,
  Upload,
} from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';

import Image from 'next/image';

import { Logo } from '@/components/icons';
import TreeFreeLogo from '../public/treefreelogo-only.png';
import { NavItem } from './nav-item';
import Providers from '@/lib/provider/providers';
import { StoreProvider } from "@/lib/provider/store-provider";
import ToastProvider from "@/lib/provider/toast-provider";

export const metadata = {
  title: 'Document Digitization',
  description:
    'Document Digitization'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="flex min-h-screen w-full flex-col">
      <StoreProvider>
      <Providers>
        <main className="flex min-h-screen w-full flex-col bg-muted/40">
          <DesktopNav />
          {children}
        </main>
      </Providers>
      </StoreProvider>
      <ToastProvider />
      </body>
    </html>
  );
}


function DesktopNav() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        {/* <Link
          href="https://vercel.com/templates/next.js/admin-dashboard-tailwind-postgres-react-nextjs"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <TreeFreeLogo className="h-3 w-3 transition-all group-hover:scale-110" />
          
          <span className="sr-only">Acme Inc</span>
        </Link> */}

        <Image src={TreeFreeLogo} alt="" className="h-7 w-7 transition-all group-hover:scale-110" />

        <NavItem href="/" label="Dashboard">
          <Home className="h-5 w-5 text-[#616C38]" />
        </NavItem>

        <NavItem href="/documents" label="Invoices">
          <Upload className="h-5 w-5 text-[#616C38]" />
        </NavItem> 

        <NavItem href="/invoice_listing" label="Invoices">
          <Receipt className="h-5 w-5 text-[#616C38]" />
        </NavItem>  
      </nav>
    </aside>
  );
}

