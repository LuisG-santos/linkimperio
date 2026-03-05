import { Avatar, AvatarImage } from "./_components/ui/avatar";
import InfoCards from "./_components/ui/infoCards";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl bg-[url('/wmobile.jpg')] bg-cover lg:max-w-full lg:bg-[url('/wallpaper.PNG')] lg:bg-cover lg:items-center flex-col items-center pt-5 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-4 sm:items-start lg:items-center">
          <Avatar className="h-42 w-42">
            <AvatarImage src="logo.jpg" alt="Avatar" />
          </Avatar>
          
          <div className="bg-black/35 backdrop-blur-sm p-5 rounded-2xl text-center [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]">
            <h1 className="font-bebas-neue text-3xl text-white">
            Bem-vindo ao Império das Ervas
          </h1>
            <p className="font-bebas-neue text-xl text-white decoration-white">
            ⎯ Fale conosco para mais informações. ⎯
          </p>
          </div>
          
        </div>

        <div className="flex flex-col max-w-[350px] justify-start">
          <InfoCards />
        </div>

        <footer className="mt-auto w-full bg-zinc-200 py-5 text-center text-sm text-gray-500">
          <p className="text-black">
            &copy; 2026 Império das Ervas. Todos os direitos reservados.
          </p>

          <p className="text-sm">Desenvolvido por <a href="https://br.linkedin.com/in/luisgustavo-nunes" className="text-blue-500 underline">Luis Gustavo</a></p>
        </footer>
      </main>
    </div>
  );
}
