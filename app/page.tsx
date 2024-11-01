import { BgHome } from "@/components/bg_home";

export default function Home() {
  return (
    <section className="relative flex h-full w-screen flex-row">
      <div className="relative flex h-[calc(100%-13vh)] w-1/2 flex-col items-center justify-center gap-5 px-4 py-2 sm:h-full [&>*]:transition-all [&>*]:duration-500">
        <h1 className="w-full text-center font-serif text-3xl sm:text-7xl">
          NoProcrast
        </h1>
        <h2 className="sm:text-md px-3 text-center text-sm italic">
          ¿De qué manera una plataforma puede ayudar a los estudiantes de la
          Universidad de Cundinamarca, sede Fusagasugá, a gestionar mejor su
          carga académica y mitigar la procrastinación?
        </h2>
      </div>
      <BgHome />
      <footer>
        <a href="/#activities">ver mas</a>
      </footer>
    </section>
  );
}
