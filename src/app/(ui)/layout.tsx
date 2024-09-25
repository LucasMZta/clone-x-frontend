"use client"

import { NavItem } from "@/components/nav/nav-item";
import { NavLogout } from "@/components/nav/nav-logout";
import { NavMyProfile } from "@/components/nav/nav-my-profile";
import { Logo } from "@/components/ui/logo";
import { RecommendationArea } from "@/components/ui/recommendation-area";
import { SearchInput } from "@/components/ui/search-input";
import { TrendingArea } from "@/components/ui/trending-area";
import { Home, User, User2, User2Icon } from "lucide-react";
import { ReactNode } from "react";

type Props = {
   children: ReactNode;
}
export default function Layout({ children }: Props) {
   return (
      <main className="min-h-screen flex justify-center mx-auto max-w-7xl">
         <section className="hidden lg:flex flex-col sticky top-0 h-screen w-60 xl:w-72  px-3 border-r-2 border-zinc-900">
            <div className="flex-1 mt-6">
               <Logo size={24} />
               <nav className="mt-11">
                  <NavItem
                     href='/home'
                     Icon={Home}
                     label="Pagina inicial"
                  />
                  <NavItem
                     href='/profile'
                     Icon={User}
                     label="Meu perfil"
                  />
               </nav>
            </div>
            <div className="mb-6 space-y-4">
               <NavLogout />
               <NavMyProfile />
            </div>
         </section>
         <section className="flex-1 max-w-lg"> {children} </section>
         <aside className="hidden lg:flex flex-col gap-6 sticky top-0 h-fit w-96 px-8 py-6 border-l-2 border-zinc-900">
            <SearchInput hideOnSearch />
            <TrendingArea />
            <RecommendationArea />
         </aside>
      </main>
   )
}