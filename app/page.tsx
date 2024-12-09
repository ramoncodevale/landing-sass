import Image from "next/image";
import NavBar from "./_components/navbar";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import { Check } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./_components/ui/card";

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

      <div className="flex flex-col items-center p-52">
        <h1 className="text-6xl font-bold text-black">
          Preço Simples e Transparente
        </h1>
        <p className="mt-4 text-center text-xl text-gray-600">
          Pra que inúmeros planos quando nós sabemos exatamente, o que é melhor
          para você? <br /> Assine o nosso plano mensal Pro Premium VIP e
          garanta mensalmente um ebook novo de
          <br /> programação. E por menos de um café por dia.
        </p>

        <div className="p-20">
          <Card className="h-[426px] w-[418px]">
            <CardTitle>
              <h3 className="mt-5 text-center text-2xl font-semibold text-black">
                Plano Pro Premium VIP
              </h3>
              <p className="mt-3 text-center text-sm text-customGray">
                Tudo que você precisa para seus estudos
              </p>
            </CardTitle>

            <CardDescription className="mt-10 flex flex-col pl-20">
              <h3 className="text-4xl font-semibold text-black">
                R$ 29<span className="text-xl text-gray-600">/mês</span>
              </h3>

              <div className="mt-5 flex items-center gap-2">
                <Check className="text-customGreen" />
                <p className="text-sm text-gray-600">1 ebook por mês</p>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <Check className="text-customGreen" />
                <p className="text-sm text-gray-600">Curadoria Especial</p>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <Check className="text-customGreen" />
                <p className="text-sm text-gray-600">Acesso ilimitado</p>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <Check className="text-customGreen" />
                <p className="text-sm text-gray-600">
                  Cancele a qualquer momento
                </p>
              </div>
            </CardDescription>

            <CardFooter className="mt-14 flex items-center justify-center">
              <Button className="h-[40px] w-[332px] rounded-md bg-black">
                Assine Agora
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Home;
