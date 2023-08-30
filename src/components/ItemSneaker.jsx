"use client"

import { useState } from "react";
import { HeartIcon } from '@heroicons/react/24/outline'

export default function ItemSneaker({ sneaker }) {
  
    const [favorito, setFavorito] = useState(true)
  
    return (
    <>
      <dev>
        <div
          id="card"
          className="flex flex-row w-40 m-2 justify-center items-center"
        >
            { favorito ?
                <HeartIcon onClick={() => setFavorito(false)} className="h-6 w-6 text-rose-600"></HeartIcon>
                :
                <HeartIcon onClick={() => setFavorito(true)} className="h-6 w-6 text-black"></HeartIcon>
            }
            
          <div className="flex flex-col">
            <span>{sneaker.dia}</span>
            <span>{sneaker.mesAno}</span>
          </div>
          <img src={sneaker.imagem} alt="" />
          <span className="font-bold text-center line-clamp-1">
            {sneaker.titulo}
          </span>
        </div>
      </dev>
    </>
  );
}
