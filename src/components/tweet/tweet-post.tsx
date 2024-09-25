"use client"

import { Image } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { user } from "@/data/user"

export const TweetPost = () => {

   const handleImageUpload = () => {

   }

   const handlePostClick = () => {

   }

   return (
      <div className="flex px-8 py-6 border-b-2 border-zinc-900 gap-6">
         <div className="size-12 rounded-full overflow-hidden" >
            <img src={user.avatar} alt={user.name} className="w-full" />
         </div>
         <div className="flex-1 space-y-2">
            <div
               className="rounded cursor-text p-2 min-h-14 outline-none text-zinc-100 text-lg empty:before:content-[attr(data-placeholder)] empty:before:text-zinc-500"
               contentEditable
               role="textbox"
               data-placeholder="O que está acontecendo?"
            >
            </div>
            <div className="flex items-center justify-between">
               <Image className="size-6 cursor-pointer" onClick={handleImageUpload} />
               <div className="w-28">
                  <Button size="medium" label="Postar" onClick={handlePostClick} />
               </div>
            </div>
         </div>
      </div>
   )
}