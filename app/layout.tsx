/*
 * @Author: zitons
 * @Date: 2024-02-10 10:30:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-16 15:21:06
 * @Description: 简介
 */
import "../app/copy.css";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//    title: 'Nodrogen',
//    description: 'Generated by Next.js',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
