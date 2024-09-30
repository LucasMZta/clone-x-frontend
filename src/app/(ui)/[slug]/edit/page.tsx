"use client"

import { Button } from "@/components/ui/button";
import { GeneralHeader } from "@/components/ui/general-header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { user } from "@/data/user";
import { Camera, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Page() {

   const pathName = usePathname();

   const isMe = user.slug === pathName.substring(1);

   return (
      <div>
         <GeneralHeader backHref={`/${user.slug}`}>
            <div className="font-bold text-lg">Editar Perfil</div>
         </GeneralHeader>
         <section className="border-b-2 border-zinc-900">
            <div className="flex justify-center items-center gap-4 bg-zinc-500 h-28 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url('${user.cover}')` }}>
               <div className="cursor-pointer bg-zinc-900/80 flex items-center justify-center size-12 rounded-full hover:opacity-80">
                  <Camera className="size-6" />
               </div>
               <div className="cursor-pointer bg-zinc-900/80 flex items-center justify-center size-12 rounded-full hover:opacity-80">
                  <X className="size-6" />
               </div>
            </div>
            <div className="-mt-12">
               <img src={user.avatar} alt={user.name} className="size-24 rounded-full" />
               <div className="-mt-24 size-24 flex justify-center items-center">
                  <div className="cursor-pointer bg-zinc-900/80 flex items-center justify-center size-12 rounded-full hover:opacity-80">
                     <Camera className="size-6" />
                  </div>
               </div>
            </div>
         </section>
         <section className="p-6 flex flex-col gap-4">
            <label>
               <p className="text-lg text-zinc-500 mb-2">Nome</p>
               <Input placeholder="Digite seu nome" value={user.name} />
            </label>
            <label>
               <p className="text-lg text-zinc-500 mb-2">Bio</p>
               <Textarea placeholder="Descreva você mesmo" rows={4} value={user.bio} />
            </label>
            <label>
               <p className="text-lg text-zinc-500 mb-2">Link</p>
               <Input placeholder="Digite um link" value={user.link} />
            </label>
            <Button label="Salvar Alterações" size="large" />
         </section>
      </div>
   )
}