import { tweet1, tweet2, tweet3, tweet4 } from "@/data/tweet"
import { TweetItem } from "../tweet/tweet-item"

export const HomeFeed = () => {
   return (
      <div>
         <TweetItem tweet={tweet1} />
         <TweetItem tweet={tweet2} />
         <TweetItem tweet={tweet3} />
         <TweetItem tweet={tweet4} />
      </div>
   )
}
