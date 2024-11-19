import React, {  useState } from "react";
import * as inputSearch from "../../services/service";
import CardResult from "../CardResult";

type FormData = {
  nomePerfil: string;
};

export default function CardSearch() {
  const [name, setName] = useState<React.ReactNode>(null);

  const [formData, setFormData] = useState<FormData>({
    nomePerfil: "",
  });

  function handleInputChange(e: any) {
    const value = e.target.value;
    const name = e.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(e: any) {
    e.preventDefault();
    inputSearch
      .findByName(formData.nomePerfil)
      .then((res) => {
        setName(
          <CardResult
            name={res.data.name}
            avatar_url={res.data.avatar_url}
            html_url={res.data.html_url}
            followers={res.data.followers}
            bio={res.data.bio}
          />
        );
      })
      .catch(() => {
        setName(
          <h1 className="text-3xl py-10 px-36 font-semibold">
            Erro ao buscar usuário
          </h1>
        );
      });
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-14">
        <div className="bg-blue-100 px-8 py-14 box-border rounded-md w-1251 h-72 ">
          <h2 className="text-5xl font-semibold">Encontre um perfil Github</h2>
          <form
            onSubmit={handleFormSubmit}
            className=" flex flex-col justify-start gap-3 mt-3"
          >
            <input
              className="p-3 placeholder-zinc-400 h-10 w-72 rounded-md"
              type="text"
              name="nomePerfil"
              value={formData.nomePerfil}
              placeholder="Usuário Github"
              onChange={handleInputChange}
            />
            <button
              className="bg-blue-600 px-4 py-2 rounded-md w-24 h-10"
              type="submit"
            >
              Encontrar
            </button>
          </form>
        </div>
      </div>
      {name}
    </>
  );
}
