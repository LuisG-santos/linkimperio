import { Avatar, AvatarImage } from "./_components/ui/avatar";
import { Button } from "./_components/ui/button";
import { DialogTrigger } from "./_components/ui/dialog";
import InfoCards from "./_components/ui/infoCards";
import { Dialog } from "./_components/ui/dialog";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl lg:max-w-full lg:bg-[url('/folhas.jpg')] lg:items-center flex-col items-center pt-5 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-4 sm:items-start lg:items-center">
          <Avatar className="h-42 w-42">
            <AvatarImage src="logo.jpg" alt="Avatar" />
          </Avatar>
          <h1 className="font-bebas-neue text-3xl">
            Bem-vindo ao Império das Ervas
          </h1>
          <p className="font-bebas-neue text-xl">
            ⎯ Fale conosco para mais informações. ⎯
          </p>
        </div>

        <div className="flex flex-col max-w-[350px] justify-start">
          <InfoCards />
        </div>

        <footer className="mt-auto w-full bg-zinc-200 py-5 text-center text-sm text-gray-500">
          <p className="text-black">
            &copy; 2026 Império das Ervas. Todos os direitos reservados.
          </p>
        </footer>
      </main>
    </div>
  );
}
