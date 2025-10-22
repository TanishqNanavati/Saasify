"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    {
        label:'Home',
        href:'/'
    },
    {
        label:'Companiens',
        href:'/companiens'
    },
    {
        label:'My Journey',
        href:'/my-journey'
    }
];

const NavItems = () => {
    const pathName = usePathname();
  return (
    <nav className="flex items-center gap-4">
        {
            navItems.map(({label,href})=>(
                <Link
                    href={href}
                    key={label}
                    className={cn(
                        "text-gray-600 hover:text-primary transition",
                        pathName === href && "text-primary font-semibold"
                    )}
                    >
                    {label}
                </Link>

            ))
        }
    </nav>
  )
}

export default NavItems
