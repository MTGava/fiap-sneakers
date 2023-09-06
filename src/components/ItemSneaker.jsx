"use client";

import { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";

export default function ItemSneaker({ sneaker }) {
  const [selecionado, setSelecionado] = useState(true);

  return (
    <>
      <div>
        <div
          onClick={() => setSelecionado(!selecionado)}
          id="card"
          className={`cursor-pointer border-2 hover:border-t-4 rounded-md p-1 font-bold  ${selecionado ? "text-rose-600 border-rose-600" : "text-slate-600 border-slate-600"} flex flex-row m-2 justify-center items-center`}
        >
          <div className="flex flex-col">
            <span className="text-center">{sneaker.dia}</span>
            <span>{sneaker.mesAno}</span>
          </div>
          <img className="pl-1 pr-1" src={sneaker.imagem} alt="" />
          <span className="text-center line-clamp-1">
            {sneaker.titulo}
          </span>
        </div>
      </div>
    </>
  );
}
