import { user } from "@/data/user"
import { RecommendationItem, RecommendationItemSkeleton } from "./rrecommendation-item"

export const RecommendationArea = () => {
   return (
      <div className="bg-zinc-800 rounded-3xl p-6">
         <h2 className="text-xl pb-6">Quem seguir</h2>
         <div className="flex flex-col gap-4">
            <RecommendationItem user={user} />
            <RecommendationItemSkeleton />
            <RecommendationItemSkeleton />
         </div>
      </div>
   )
}