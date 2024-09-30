import { tweet1, tweet4 } from "@/data/tweet"
import { TweetItem } from "../tweet/tweet-item"

export const ProfileFeed = () => {
   return (
      <div>
         <TweetItem tweet={tweet1} />
         <TweetItem tweet={tweet4} />
         <TweetItem tweet={tweet4} />
         <TweetItem tweet={tweet1} />
      </div>
   )
}