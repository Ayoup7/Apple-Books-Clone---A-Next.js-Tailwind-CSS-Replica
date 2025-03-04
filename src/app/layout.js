import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DefaultFooter, DefaultHeader } from "@/components/MainLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DefaultHeader />
        <main className=" dark:bg-slate-900">{children}</main>
        <DefaultFooter />
      </body>
    </html>
  );
}
