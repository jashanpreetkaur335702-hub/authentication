import Providers from "@/components/Providers";
import "./globals.css";
import { ReactNode } from "react";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


type ChildrenProps = {
  children: ReactNode;
};
export default function RootLayout({ children }:ChildrenProps) {
  return (
    <html className={cn("font-sans", geist.variable)}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}