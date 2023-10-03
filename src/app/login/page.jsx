"use client"

import Image from "next/image";
import loginImg from "@/images/login.jpg";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { serverLogin } from "@/actions/user";

export default function Login() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const { push } = useRouter();

    function login(e) {
        e.preventDefault()
        if (email == "matheus@mail.com" && senha == "123") {
            serverLogin()
            toast.success("login realizado com sucesso")
            push("/")
        } else {
            toast.error("usuario e/ou senha invalidos")
        }
    }

    return(
        <div className="flex">
            <aside className="hidden lg:flex h-screen">
                <Image src={loginImg} className="h-auto object-cover"/>                
            </aside>
            <main className="flex flex-col justify-center items-center p-4 h-screen w-full">
                <h2>Fiap Sneakers</h2>

                <form onSubmit={login} className="flex flex-col gap-2">
                    <label htmlFor="email" >E-mail</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="bg-slate-600 p-1 rounded"
                        />

                    <label htmlFor="senha">Senha</label>
                    <input 
                        type="password" 
                        id="senha" 
                        value={senha}
                        onChange={(event) => setSenha(event.target.value)}
                        className="bg-slate-600 p-1 rounded"/>

                    <button className="bg-black text-white p-2 rounded mt-2">Entrar</button>
                </form>
            </main>
        </div>
    )
}