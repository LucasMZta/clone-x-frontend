import { Logo } from "@/components/ui/logo";
import { redirect } from "next/navigation";

export default function Page() {

  //aqui fara a verificação se esta logado, envia pra home, senao envia pra signin (logar)
  redirect('/home');

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Logo size={80} />
    </div>
  )
}