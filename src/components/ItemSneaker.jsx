"use client";

import { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import useSelecionar from "@/hooks/sneakers";

export default function ItemSneaker({ sneaker }) {

  const {selecionado, selecionar} = useSelecionar();

  return (
    <>
      <div>
        <div
          onClick={() => selecionar(!selecionado, sneaker)}
          id="card"
          className={`w-80 h-20 cursor-pointer border-2 hover:border-t-4 rounded-md p-1 font-bold  ${selecionado ? "text-rose-600 border-rose-600" : "text-neutral-600 border-neutral-600"} flex flex-row m-2 justify-center items-center`}
        >
          <div className="flex flex-col font-medium">
            <span className="text-center">{sneaker.day}</span>
            <span>{sneaker.monthYear}</span>
          </div>
          <img className="pl-1 pr-1 w-20 h-20" src={sneaker.imageSrc} alt="" />
          <span className="text-center line-clamp-1 block">
            {sneaker.name}
          </span>
        </div>
      </div>
    </>
  );
}
