import Providers from "@/components/Providers";
import "./globals.css";
import { ReactNode } from "react";
type ChildrenProps = {
  children: ReactNode;
};
export default function RootLayout({ children }:ChildrenProps) {
  return (
    <html>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}