import { SignupForm } from "@/components/auth/signup-form";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";

export default function Page() {
   return (
      <div className="max-w-lg mx-auto px-6 mt-12">
         <Logo size={56} />
         <h1 className="mt-10 text-2xl">Crie a sua conta</h1>
         <div className="mt-10 mb-14 flex flex-col gap-6">

            <SignupForm />

         </div>
         <div className="flex flex-col justify-center items-center gap-2 md:flex-row">
            <div className="text-zinc-500">Ja tem uma conta?</div>
            <Link href={'/signin'} className="hover:underline">Entrar no Z</Link>
         </div>
      </div>
   )
}