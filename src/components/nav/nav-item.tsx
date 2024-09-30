"use client"

import { user } from "@/data/user";
import { LucideProps } from "lucide-react";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type Props = {
   label: string;
   Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
   href: string;
   active?: boolean;
}
export const NavItem = ({ Icon, href, label, active }: Props) => {

   const pathName = usePathname(); //nele contem o caminho que está sendo acessado atualmente

   // const isMe = pathName === href || pathName === `/${user.slug}`;
   const isMe = pathName === (href === '/profile' ? `/${user.slug}` : href);

   return (
      <Link href={href} className={`flex items-center gap-6 py-3 ${active || isMe ? 'opacity-100' : 'opacity-50'} hover:opacity-100`}>
         <Icon className="size-6" />
         <div className="text-lg">{label}</div>
      </Link>
   )
}