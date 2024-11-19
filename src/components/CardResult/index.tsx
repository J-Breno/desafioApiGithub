type Props = {
  name: string;
  avatar_url: string;
  html_url: string;
  followers: number;
  bio: string;
};

export default function CardResult({
  name,
  avatar_url,
  html_url,
  followers,
  bio,
}: Props) {
  return (
    <>
      <div className="flex flex-row justify-center items-center mt-14">
        <div className="bg-zinc-100 px-8 py-6 mb-10 flex flex-row box-border rounded-md w-1251 h-80 ">
          <img className="w-64 h-68" src={avatar_url} alt="Imagem de perfil" />
          <div className="flex flex-col gap-4 mx-6 w-902 h-68 border border-zinc-300 rounded-md bg-white p-4 ">
            <h3 className="text-blue-600 text-xl font-medium">Informações</h3>
            <div className="flex flex-col gap-1 ">
              <div className="w-872 h-10 border border-zinc-200 rounded-md p-2">
                  <p><span className="font-semibold">Perfil:</span> {html_url}</p>
              </div>
              <div className="w-872 h-10 border border-zinc-200 rounded-md p-2">
                  <p><span className="font-semibold">Seguidores:</span> {name}</p>
              </div>
              <div className="w-872 h-10 border border-zinc-200 rounded-md p-2">
                  <p><span className="font-semibold">Localidade:</span> {followers}</p>
              </div>
              <div className="w-872 h-auto border border-zinc-200 rounded-md p-2">
                  <p><span className="font-semibold">Biografia:</span> {bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
