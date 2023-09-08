"use client"
import Image from "next/image";
import { useTheme } from '@/components/contexts/ThemeContext';

export default function Loading() {
  const { theme } = useTheme();
  return (
    <div className={`loading ${theme} center`}>
        <Image
        src='/assets/loading.gif'
        alt="loading"
        width={220}
        height={143}
        priority={true}
         />
    </div>
  )
}