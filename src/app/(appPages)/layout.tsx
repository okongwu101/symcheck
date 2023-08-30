import Link from "next/link";
import { IconHeartRateMonitor } from '@tabler/icons-react';
import { ReactNode } from "react";

export default function AppPagesLayout({children}: {children: ReactNode}) {
    return(
        <div>
            <div className="container min-w-full flex justify-between px-10 py-6 bg-blue-100">
                <div className='font-serif font-semibold text-base lg:text-xl'>
                    <span>sym</span>
                    <span className='text-rose-600'>CH</span>
                    <span>eck</span>
                </div>
                <div>
                    <Link
                        href="/diagnosis"
                    >
                        <IconHeartRateMonitor />
                    </Link>
                </div>
            </div>
            
            {children}
        </div>
    )
}