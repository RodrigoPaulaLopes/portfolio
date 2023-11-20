import Avatar from "../../components/Avatar";

export default function Home() {
  return (
    <section className="h-full flex items-center justify-center w-full">
      <div className="h-full flex items-center flex-col gap-5 w-11/12">
        <Avatar />
        <h1 className="text-3xl leading-none font-medium">Olá, eu sou o</h1>
        <span className="text-4xl leading-none text-emerald-700 font-medium">
          Rodrigo lopes :)
        </span>
        <p className="leading-none font-medium text-gray-300">
          Desenvolvedor De Full-Stack
        </p>
        <div className="flex flex-col gap-4 w-11/12">
          <button className="btn w-full bg-gradient-to-r from-emerald-300 to-emerald-700 text-white rounded-xl">
            Download CV
          </button>
          <button className="btn w-full btn-outline  border-emerald-300 text-white rounded-xl">
            Entrar em contato
          </button>
        </div>
      </div>
    </section>
  );
}
