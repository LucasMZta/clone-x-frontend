import { TweetItem } from "@/components/tweet/tweet-item";
import { GeneralHeader } from "@/components/ui/general-header";
import { SearchInput } from "@/components/ui/search-input";
import { tweet1, tweet2, tweet3, tweet4 } from "@/data/tweet";
import { redirect } from "next/navigation";

type Props = {
   searchParams: { //esse searchParams vem do proprio Next.js
      q: string | undefined;
   }
}

export default function Page({ searchParams }: Props) {

   if (!searchParams.q) redirect('/')

   return (
      <div>
         <GeneralHeader backHref="/">
            <SearchInput defaultValue={searchParams.q} />
         </GeneralHeader>
         <div className="border-t-2 border-zinc-900">
            <TweetItem tweet={tweet1} />
            <TweetItem tweet={tweet2} />
            <TweetItem tweet={tweet3} />
            <TweetItem tweet={tweet4} />
         </div>
      </div>
   )
}