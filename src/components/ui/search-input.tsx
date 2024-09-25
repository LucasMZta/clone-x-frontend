"use client"

import { Search } from "lucide-react"
import { Input } from "./input"
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
   defaultValue?: string;
   hideOnSearch?: boolean;
}
export const SearchInput = ({ defaultValue, hideOnSearch }: Props) => {
   const router = useRouter();
   const patHName = usePathname();
   const [searchInput, setSearchInput] = useState(defaultValue ?? '');

   const handleSearchEnter = () => {
      if (searchInput) {
         router.push(`/search?q=${encodeURIComponent(searchInput).toLowerCase()}`)
      }
   }

   if (hideOnSearch && patHName === '/search') return null

   return (
      <Input
         placeholder="Buscar"
         Icon={Search}
         value={searchInput}
         onChange={e => setSearchInput(e.target.value)}
         onEnter={handleSearchEnter}
         filled
      />
   )
}