import { TweetItem } from "@/components/tweet/tweet-item";
import { TweetPost } from "@/components/tweet/tweet-post";
import { GeneralHeader } from "@/components/ui/general-header";
import { tweet1, tweet2, tweet3, tweet4 } from "@/data/tweet";

export default function Page() {
   return (
      <div>
         <GeneralHeader backHref="/">
            <div className="font-bold text-lg">Voltar</div>
         </GeneralHeader>
         <div className="border-t-2 border-zinc-900">
            <TweetItem tweet={tweet1} />
            <div className="border-y-8 border-zinc-900">
               <TweetPost />
            </div>

            <TweetItem tweet={tweet2} hideComments />
            <TweetItem tweet={tweet3} hideComments />
            <TweetItem tweet={tweet4} hideComments />
         </div>
      </div>
   )
}