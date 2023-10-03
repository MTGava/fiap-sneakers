"use client";

import { useRouter } from 'next/navigation'
import { serverLogout } from '@/actions/user'

export default function NavBar() {
  const { push } = useRouter();

  function handleLogout() {
    serverLogout();
    push("/login");
  }

  return (
    <nav
      className="flex p-4 justify-between
                    bg-gradient-to-r from-black 
                    via-black to-rose-800"
    >
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
        <button onClick={handleLogout}>logout</button>
      </ul>

      
    </nav>
  );
}
