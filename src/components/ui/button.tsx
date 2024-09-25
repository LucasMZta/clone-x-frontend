import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
   base: 'flex justify-center items-center cursor-pointer bg-zinc-100 text-zinc-950 rounded-3xl font-semibold',
   variants: {
      size: {
         small: 'h-7 text-xs', //3
         medium: 'h-10 text-md', //2
         large: 'h-14 text-lg' //1
      }
   },
   defaultVariants: {
      size: 'large'
   }
})

interface Props extends VariantProps<typeof buttonVariants> {
   label: string;
   onClick?: () => void;
}

export const Button = ({ label, onClick, size }: Props) => {
   return (
      <div onClick={onClick} className={buttonVariants({ size })}>
         {label}
      </div>
   )
}