import Link from "next/link";

type Props = {
   label: string;
   count: number;
}
export const TrendingItem = ({ count, label }: Props) => {
   return (
      <Link
         href={`/search?q=${encodeURIComponent(label).toLowerCase()}`}
         className="group/item"
      >
         <div className="group-hover/item:underline font-bold">{label}</div>
         <div className="text-sm text-zinc-400">{count}{count > 1 ? ' posts' : ' post'}</div>
      </Link>
   )
}

export const TrendingItemSkeleton = () => {
   return (
      <div className="flex flex-col gap-1 animate-pulse">
         <div className="bg-zinc-600 w-3/4 h-4 rounded"></div>
         <div className="bg-zinc-600 w-1/4 h-4 rounded"></div>
      </div>
   )
}