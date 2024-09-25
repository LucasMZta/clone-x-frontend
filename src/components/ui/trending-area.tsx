import { TrendingItem, TrendingItemSkeleton } from "./trending-item"

export const TrendingArea = () => {
   return (
      <div className="bg-zinc-800 rounded-3xl p-6">
         <h2 className="text-xl pb-6">O que está acontecendo</h2>
         <div className="flex flex-col gap-4">
            <TrendingItem label="#lucasmartins" count={254} />
            <TrendingItem label="#lucas" count={1} />
            <TrendingItemSkeleton />
            <TrendingItemSkeleton />
         </div>
      </div>
   )
}