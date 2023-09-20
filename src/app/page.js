import ItemSneaker from "@/components/ItemSneaker";
import Title from "@/components/Title";
import Badge from "@/components/Badge";

async function carregarSneakersApi() {
  const url = "http://localhost:8080/sneakers"
  const resposta = await fetch(url)
  const json = await resposta.json()
  return json
}

async function carregarBrandsApi() {
  const url = "http://localhost:8080/brands"
  const resposta = await fetch(url)
  const json = await resposta.json()
  return json
}


export default async function Home() {
  // const sneakers = await carregarSneakersApi()
  const sneakers = carregarSneakers()
  const brands = carregarsBrands()

  return (
    <>
      <nav
        className="flex p-4 justify-between
                    bg-gradient-to-r from-black 
                    via-black to-rose-800">
        <ul className="flex items-center gap-20 text-rose-600">
          <li>
            <a href="#">
              <h1 className="font-medium text-3xl">Fiap Sneakers</h1>
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

      <Title>Marcas</Title>
      <section className="flex flex-wrap p-20 bg-neutral-100">
        {brands.map(brand => <Badge brand={brand} />)}
      </section>

      <Title>Lançamentos</Title>

      <section className="flex flex-wrap p-20 bg-neutral-100">
        {sneakers.map(sneaker => <ItemSneaker sneaker={sneaker} />)}
      </section>
    </>
  );
}


function carregarsBrands() {
  return [
    {
      "name": "Nike",
      "imageSrc": "https://droper-media.us-southeast-1.linodeobjects.com/166202253219512.webp"
    },
    {
      "name": "Air Jordan",
      "imageSrc": "https://droper-media.us-southeast-1.linodeobjects.com/166202253016569.webp"
    },
    {
      "name": "Yeezy",
      "imageSrc": "https://droper-media.us-southeast-1.linodeobjects.com/16620225316960.webp"
    },
    {
      "name": "Adidas",
      "imageSrc": "https://droper-media.us-southeast-1.linodeobjects.com/166202253538982.webp"
    }
  ]
}
function carregarSneakers() {
  return [
    {
      "id": 1,
      "name": "Fucking Awesome x adidas Samba Black",
      "day": "9",
      "monthYear": "set/23",
      "imageSrc": "https://droper-media.us-southeast-1.linodeobjects.com/492023175837480.webp"
    },
    {
      "id": 2,
      "name": "Air Jordan 5 Burgundy (2023)",
      "day": "9",
      "monthYear": "set/23",
      "imageSrc": "https://droper-media.us-southeast-1.linodeobjects.com/295202313133443.webp"
    },
    {
      "id": 3,
      "name": "Nike Dunk High Airbrush Swoosh White",
      "day": "5",
      "monthYear": "set/23",
      "imageSrc": "https://droper-media.us-southeast-1.linodeobjects.com/592023165055416.webp"
    },
    {
      "id": 4,
      "name": "New Balance 550 Olive Suede",
      "day": "5",
      "monthYear": "set/23",
      "imageSrc": "https://droper-media.us-southeast-1.linodeobjects.com/592023173415706.webp"
    },
    {
      "id": 5,
      "name": "New Balance 550 Mushroom",
      "day": "5",
      "monthYear": "set/23",
      "imageSrc": "https://droper-media.us-southeast-1.linodeobjects.com/59202317361612.webp"
    },
    {
      "id": 6,
      "name": "New Balance 550 Grey Suede",
      "day": "5",
      "monthYear": "set/23",
      "imageSrc": "https://droper-media.us-southeast-1.linodeobjects.com/592023173738420.webp"
    },
    {
      "id": 7,
      "name": "Air Jordan 1 Mid SE Sky J Purple",
      "day": "5",
      "monthYear": "set/23",
      "imageSrc": "https://droper-media.us-southeast-1.linodeobjects.com/592023174227122.webp"
    },
    {
      "id": 8,
      "name": "Nike Air Force 1 Low GS Grey Citron Fuchsia",
      "day": "5",
      "monthYear": "set/23",
      "imageSrc": "https://droper-media.us-southeast-1.linodeobjects.com/592023174428785.webp"
    },
    {
      "id": 9,
      "name": "Air Jordan 1 High OG Palomino",
      "day": "2",
      "monthYear": "set/23",
      "imageSrc": "https://droper-media.us-southeast-1.linodeobjects.com/295202313103077.webp"
    },
    {
      "id": 10,
      "name": "adidas Samba ADV Orchard Night Indigo",
      "day": "2",
      "monthYear": "set/23",
      "imageSrc": "https://droper-media.us-southeast-1.linodeobjects.com/2882023131728663.webp"
    },
    {
      "id": 11,
      "name": "Air Jordan 4 Frozen Moments",
      "day": "1",
      "monthYear": "set/23",
      "imageSrc": "https://droper-media.us-southeast-1.linodeobjects.com/2482023195252521.webp"
    },
    {
      "id": 12,
      "name": "Nike Air Max 1 '87 Sofvi",
      "day": "1",
      "monthYear": "set/23",
      "imageSrc": "https://droper-media.us-southeast-1.linodeobjects.com/2882023131351443.webp"
    },
    {
      "id": 13,
      "name": "Puma Palermo OG New Navy",
      "day": "1",
      "monthYear": "set/23",
      "imageSrc": "https://droper-media.us-southeast-1.linodeobjects.com/308202317374803.webp"
    },
    {
      "id": 14,
      "name": "adidas Campus 00s Pink Fusion",
      "day": "1",
      "monthYear": "set/23",
      "imageSrc": "https://droper-media.us-southeast-1.linodeobjects.com/192023171723472.webp"
    },
    {
      "id": 15,
      "name": "adidas Samba OG Silver Green",
      "day": "1",
      "monthYear": "set/23",
      "imageSrc": "https://droper-media.us-southeast-1.linodeobjects.com/192023184816637.webp"
    }
  ]

}
