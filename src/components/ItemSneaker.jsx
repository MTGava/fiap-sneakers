"use client";

import { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";

export default function ItemSneaker({ sneaker }) {
  const [selecionado, setSelecionado] = useState(true);

  return (
    <>
      <div>
        {selecionado ? (
          <div
            onClick={() => setSelecionado(false)}
            className="cursor-pointer bg-rose-600"
          >
            <div
              id="card"
              className="flex flex-row w-40 m-2 justify-center items-center"
            >
              <div className="flex flex-col">
                <span>{sneaker.dia}</span>
                <span>{sneaker.mesAno}</span>
              </div>
              <img src={sneaker.imagem} alt="" />
              <span className="font-bold text-center line-clamp-1">
                {sneaker.titulo}
              </span>
            </div>
          </div>
        ) : (
          <div
            onClick={() => setSelecionado(true)}
            className="cursor-pointer"
          >
            <div
              id="card"
              className="flex flex-row w-40 m-2 justify-center items-center"
            >
              <div className="flex flex-col">
                <span>{sneaker.dia}</span>
                <span>{sneaker.mesAno}</span>
              </div>
              <img src={sneaker.imagem} alt="" />
              <span className="font-bold text-center line-clamp-1">
                {sneaker.titulo}
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
