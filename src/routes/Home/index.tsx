import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="p-10">
        <h1 className="text-5xl font-bold mb-2">Desafio Github API</h1>
        <p className="text-2xl text-zinc-400 font-bold mb-2">
          DevSuperior - Escola de programação
        </p>
        <Link to={"/search"}>
          <button className="text-base text-white bg-blue-600 px-4 py-2 rounded-md border-none">
            Começar
          </button>
        </Link>
      </div>
    </>
  );
}
