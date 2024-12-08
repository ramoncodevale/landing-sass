import Image from "next/image";
import NavBar from "./_components/navbar";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import { Check } from "lucide-react";

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
            className="h-[40px] w-[279px] rounded-md border border-customGray"
            placeholder="Coloque seu email"
          />
          <Button className="bg-black">Assine Agora</Button>
        </div>
        <p className="mt-1 text-xs font-light text-gray-600">
          Comece sua assinatura agora mesmo. Cancele quando quiser.
        </p>
      </div>

      <h1 className="text-center text-5xl font-bold text-black">
        Como funciona?
      </h1>

      <div className="flex items-center justify-center gap-16">
        <Image src="/woman.svg" alt="Image Woman" width={392} height={392} />

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-16">
            <p className="text-3xl text-gray-600">Acesso a 1 ebook por Mês</p>
            <Check className="text-customGreen" />
          </div>

          <div className="mt-9 flex items-center gap-16">
            <p className="text-3xl text-gray-600">Curadoria especial</p>
            <Check className="text-customGreen" />
          </div>

          <div className="mt-9 flex items-center gap-16">
            <p className="text-3xl text-gray-600">Cancele quando quiser</p>
            <Check className="text-customGreen" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
