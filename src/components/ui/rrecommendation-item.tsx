"user client"

import { User } from "@/types/user"
import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";

type Props = {
   user: User;
}
export const RecommendationItem = ({ user }: Props) => {

   const [following, setFollowing] = useState(false);

   const handleFollowButton = () => {
      setFollowing(true);
   }

   return (
      <div className="flex items-center">
         <div className="size-10 mr-3 rounded-full overflow-hidden">
            <Link href={`/${user.slug}`}>
               <img src={user.avatar} alt={user.name} className="" />
            </Link>
         </div>
         <div className="flex-1 overflow-hidden">
            <Link href={`/${user.slug}`} className="block truncate" >{user.name}</Link>
            <div className="text-sm text-zinc-400 truncate">@{user.slug}</div>
         </div>
         <div className="pl-2 w-20 self-start">
            {!following &&
               <Button label="Seguir" onClick={handleFollowButton} size="small" />
            }
         </div>
      </div>
   )
}

export const RecommendationItemSkeleton = () => {
   return (
      <div className="flex items-center animate-pulse">
         <div className="size-10 mr-2 rounded-full bg-zinc-600 "></div>
         <div className="flex-1 flex flex-col gap-1">
            <div className="bg-zinc-600 w-3/4 h-4 rounded"></div>
            <div className="bg-zinc-600 w-2/4 h-4 rounded"></div>
         </div>
      </div>
   )
}