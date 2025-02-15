"use client"

import { Tweet } from "@/types/tweet"
import { getFormatRelativeTime } from "@/utils/get-format-relative";
import { Heart, MessageCircle, Repeat } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Props = {
   tweet: Tweet;
   hideComments?: boolean;
}
export const TweetItem = ({ tweet, hideComments }: Props) => {

   const [liked, setLiked] = useState(tweet.liked);

   const handleLikeButton = () => {
      setLiked(!liked);
   }

   return (
      <div className="flex gap-2 p-6 border-b-2 border-zinc-900">
         <div className="size-12 overflow-hidden rounded-full">
            <Link href={`/${tweet.user.slug}`} className="">
               <img src={tweet.user.avatar} alt={tweet.user.name} className="w-full " />
            </Link>
         </div>
         <div className="flex-1">
            <div className="flex flex-wrap items-center gap-x-3 h-8">
               <Link href={`/${tweet.user.slug}`} className="font-bold text-lg">{tweet.user.name}</Link>
               <div className="text-xs text-zinc-500">@{tweet.user.slug} - {getFormatRelativeTime(tweet.dataPost)}</div>
            </div>
            <div className="py-4 text-lg">{tweet.body}</div>
            {tweet.image &&
               <div className="w-full">
                  <img src={tweet.image} className="w-full rounded-2xl" />
               </div>
            }
            <div className="flex mt-2 text-zinc-500">

               {!hideComments &&
                  <div className="flex-1">
                     <Link href={`/tweet/${tweet.id}`}>
                        <div className="inline-flex items-center gap-1 cursor-pointer">
                           <MessageCircle className="size-6" />
                           <span className="text-lg">{tweet.commentCount}</span>
                        </div>
                     </Link>
                  </div>
               }
               <div className="flex-1">
                  <div className="inline-flex items-center gap-1 ">
                     <Repeat className="size-6" />
                     <span className="text-lg">{tweet.retweetCount}</span>
                  </div>
               </div>
               <div className="flex-1">
                  <div onClick={handleLikeButton} className={`inline-flex items-center gap-1 cursor-pointer ${liked && 'text-red-600'} `}>
                     <Heart className={`size-6 ${liked && 'text-red-600 fill-red-600'} `} />
                     <span className="text-lg">{tweet.likeCount}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}