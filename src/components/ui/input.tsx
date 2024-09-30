import { Eye, EyeOff, LucideProps } from "lucide-react";
import { ComponentProps, ForwardRefExoticComponent, KeyboardEvent, RefAttributes, useState } from "react"

interface Props extends ComponentProps<'input'> {
   filled?: boolean;
   Icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
   password?: boolean;
   onEnter?: () => void
}

export const Input = ({ filled, Icon, password, onEnter, ...props }: Props) => {

   const [showPassword, setShowPassord] = useState(false);

   const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.code.toLowerCase() === 'enter' && onEnter) {
         onEnter();
      }

   }

   return (
      <div className={`has-[:focus]:border-zinc-200 flex items-center h-14 rounded-3xl border-2 border-zinc-700 ${filled && 'bg-zinc-800 text-zinc-400'}`}>
         {Icon &&
            <Icon className="ml-4" />
         }
         <input
            type={password && !showPassword ? 'password' : props.type ?? 'text'}
            {...props}
            onKeyUp={handleKeyUp}
            className="flex-1 outline-none bg-transparent h-full px-4"
         />
         {password &&
            <>
               {showPassword ?
                  <Eye className="size-6 cursor-pointer mr-4 text-zinc-400" onClick={() => setShowPassord(!showPassword)} />
                  :
                  <EyeOff className="size-6 cursor-pointer mr-4 text-zinc-400" onClick={() => setShowPassord(!showPassword)} />
               }
            </>
         }
      </div>
   )
}