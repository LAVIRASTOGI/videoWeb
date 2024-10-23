
'use client'
import { sidebarLinks } from "@/constant"
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation"

function Sidebar() {
    const pathname = usePathname();
    return (
        <section className="flex gap-4 flex-col bg-dark-1 h-screen sticky 
        left-0 top-0 w-fit justify-between p-6 pt-28 max-sm:hidden lg:w-[260px]">
            <div className="flex flex-col gap-6">
                {sidebarLinks.map((link) => {
                    const isActive = pathname === link.route || pathname.startsWith(`/${link.route}`)
                    return (<Link href={link.route} key={link.label}
                        className={cn('flex gap-4 p-4 rounded-lg justify-start', {
                            'bg-blue-1': isActive
                        })}
                    >
                        <Image src={link.imgURL} width={24} height={24} alt={link.label} />
                        <p className="text-lg font-semibold max-lg:hidden">
                            {link.label}
                        </p>

                    </Link>)
                })}
            </div>

        </section>
    )
}

export default Sidebar