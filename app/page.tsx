import NavBar from "./_components/navbar";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";

const Home = () => {
  return (
    <section>
      <NavBar />

      <div className="flex flex-col items-center p-20">
        <h1 className="text-6xl font-bold text-black">
          Simplifique Seus Estudos
        </h1>
        <p className="mt-2 text-center text-xl text-gray-600">
          Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e
          receba todos <br /> os meses um ebook novo de programação
        </p>

        <div className="flex items-center gap-3 pt-16">
          <Input
            className="border-customGray h-[40px] w-[279px] border"
            placeholder="Coloque seu email"
          />
          <Button>Assine Agora</Button>
        </div>
        <p className="mt-1 text-xs font-light text-gray-600">
          Comece sua assinatura agora mesmo. Cancele quando quiser.
        </p>
      </div>

      
    </section>
  );
};

export default Home;
