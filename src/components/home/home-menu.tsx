import { Home, User, X } from "lucide-react";
import { Logo } from "../ui/logo";
import { SearchInput } from "../ui/search-input";
import { NavItem } from "../nav/nav-item";
import { NavLogout } from "../nav/nav-logout";

type Props = {
   closeAction: () => void;
}

export const HomeMenu = ({ closeAction }: Props) => {
   return (
      <div className="fixed inset-0 p-6 bg-zinc-950 space-y-6 lg:hidden">
         <div className="flex justify-between items-center">
            <Logo size={32} />
            <div onClick={closeAction} className="cursor-pointer size-12 flex justify-center items-center rounded-full border border-zinc-800">
               <X className="size-6" />
            </div>
         </div>

         <div>
            <SearchInput />
         </div>

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
            <NavLogout />
         </nav>
      </div>
   )
}