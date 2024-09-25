"use client"

import { Menu } from "lucide-react"
import { Logo } from "../ui/logo"
import { useState } from "react"
import { HomeMenu } from "./home-menu"

export const HomeHeader = () => {

   const [showMenu, setShowMenu] = useState(false);

   return (
      <header className="flex justify-between items-center p-6 border-b-2 border-zinc-900">
         <div className="lg:hidden">
            <Logo size={24} />
         </div>
         <div className="hidden lg:block text-2xl">
            Pagina Inicial
         </div>
         <div className="cursor-pointer lg:hidden" onClick={() => setShowMenu(true)}>
            <Menu className="size-7" />
         </div>

         {showMenu &&
            <HomeMenu
               closeAction={() => setShowMenu(false)}
            />
         }
      </header>
   )
}