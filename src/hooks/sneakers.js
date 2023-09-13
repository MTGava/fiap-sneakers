import { useState } from "react";

export default function useSelecionar() {

    const [selecionado, setSelecionado] = useState(false);

    function selecionar(selecionado, sneaker) {
        setSelecionado(selecionado)
        if (selecionado == true) {
            const options = {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ id: sneaker.id, sneaker: sneaker })
            }

            fetch('http://localhost:8080/sneakersSelected', options)
                .then(response => response.json())
                .then(response => console.log(response))
                .catch(err => console.error(err));
        } else {
            const options = {
                method: 'DELETE'
            }

            fetch(`http://localhost:8080/sneakersSelected/${sneaker.id}`, options)
                .then(response => response.json())
                .then(response => console.log(response))
                .catch(err => console.error(err));
        }

    }

    return { selecionar, selecionado }
}