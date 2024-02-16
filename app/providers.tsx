/*
 * @Author: zitons
 * @Date: 2024-02-16 15:19:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-16 17:39:37
 * @Description: 简介
 */
// app/providers.jsx

'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>
}