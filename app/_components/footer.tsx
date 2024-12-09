import Image from "next/image";

const Footer = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="flex items-center gap-3">
        <Image src="/sun.png" alt="Sun Image" width={22} height={20} />
        <p className="text-xl font-bold text-black">LivroSaaS</p>
      </div>
      <p className="mt-3 text-xs font-light text-gray-600">
        2024 LivroSaaS Todos os direitos reservados
      </p>
    </section>
  );
};

export default Footer;
