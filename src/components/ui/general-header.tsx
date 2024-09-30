import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react"

type Props = {
   children: ReactNode;
   backHref: string;
}
export const GeneralHeader = ({ backHref, children }: Props) => {
   return (
      <header className="flex gap-4 items-center p-6">
         <Link href={backHref} className="flex justify-center items-center border-2 border-zinc-500 size-12 rounded-full">
            <ArrowLeft className="size-6" />
         </Link>
         <div className="flex-1">
            {children}
         </div>
      </header>
   )
}