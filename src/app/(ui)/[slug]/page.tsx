"use client"

import { ProfileFeed } from "@/components/profile/profile-feed";
import { Button } from "@/components/ui/button";
import { GeneralHeader } from "@/components/ui/general-header";
import { user } from "@/data/user";
import { Link2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Page() {

   const pathName = usePathname();

   const isMe = user.slug === pathName.substring(1);

   return (
      <div>
         <GeneralHeader backHref="/">
            <div className="font-bold text-lg">{user.name}</div>
            <div className="text-xs text-zinc-500">{user.postCount} posts</div>
         </GeneralHeader>
         <section className="border-b-2 border-zinc-900">
            <div className="bg-zinc-500 h-28 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url('${user.cover}')` }}>
            </div>
            <div className="-mt-12 flex justify-between items-end">
               <img src={user.avatar} alt={user.name} className="size-24 rounded-full" />
               <div className="w-32">
                  {isMe ?
                     <Link href={`/${user.slug}/edit`}>
                        <Button label="Editar Perfil" size="medium" />
                     </Link>
                     :
                     <Button label="Seguir" size="medium" />
                  }
               </div>
            </div>
            <div className="px-6 mt-4">
               <div className="text-xl font-bold">{user.name}</div>
               <div className="text-zinc-500">@{user.slug}</div>
               <div className="py-5 text-lg text-zinc-500">{user.bio}</div>
               {user.link &&
                  <div className="flex gap-2 items-center">
                     <Link2 className="size-6" />
                     <Link href={user.link} className="text-blue-500" target="_blank">{user.link}</Link>
                  </div>
               }
               <div className="my-5 flex gap-6 text-lg text-zinc-500">
                  <div> <span className="text-zinc-100">126</span> Seguindo </div>
                  <div> <span className="text-zinc-100">74</span> Seguidores </div>
               </div>
            </div>

            <ProfileFeed />

         </section>
      </div>
   )
}