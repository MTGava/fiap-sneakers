import Title from "@/components/Title";

export default function Home() {
  return (
    <>
      <nav
        className="flex p-4 
                    bg-gradient-to-r from-neutral-900 
                    via-neutral-900 to-rose-800"
      >
        <ul className="flex gap-40 text-rose-600">
          <li>
            <a href="#">
              <h1 className="text-2xl">Fiap Sneakers</h1>
            </a>
          </li>
          <li>
            <a href="#">
              <h1>Marcas</h1>
            </a>
          </li>
          <li>
            <a href="#">
              <h1>Novidades</h1>
            </a>
          </li>
          <li>
            <a href="#">
              <h1>Calendário</h1>
            </a>
          </li>
        </ul>
      </nav>
      <Title>Lançamento</Title>
      <Title>Vistos recentemente</Title>

      <div className="p-20 bg-neutral-100">
        <a href="">
          <div
            id="card"
            className="flex flex-row w-40 justify-center items-center"
          >
            <div className="flex flex-col">
              <span>03</span>
              <span>Abr/23</span>
            </div>
            <img src="https://place-hold.it/40x40/666" alt="" />
            <span className="font-bold text-center line-clamp-1">
              Nome do tênis
            </span>
          </div>
        </a>
      </div>
    </>
  );
}
