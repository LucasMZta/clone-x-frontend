type Props = {
   placeholder: string;
   rows: number;
   value?: string;
}
export const Textarea = ({ placeholder, rows, value }: Props) => {
   return (
      <div className="has-[:focus]:border-zinc-200 flex items-center rounded-3xl border-2 border-zinc-700">
         <textarea
            placeholder={placeholder}
            value={value}
            rows={rows}
            className="flex-1 outline-none bg-transparent p-5 h-full resize-none"
         >

         </textarea>
      </div>
   )
}