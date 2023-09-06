import ItemSneaker from "@/components/ItemSneaker";
import Title from "@/components/Title";

export default function Home() {
  
  const sneakers = [
    {
      titulo: "Nike AF1",
      dia: "03",
      mesAno: "Abr/23",
      imagem: "https://place-hold.it/40x40/666"
    }
  ]
  

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
     
      <section className="flex flex-wrap p-20 bg-neutral-100">
      
      {sneakers.map((sneaker) => {
        return <ItemSneaker sneaker={sneaker}/>
      })}
      
      </section>
      
    </>
  );
}
