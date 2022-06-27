import { useState } from "react";

export default function SignIn(){
    
    function handleSubmit(){
        
    }
    return(
        <div className="flex justify-center w-full h-[100vh] bg-gray-100">
            <form className="flex flex-col w-max-800 gap-4 p-8 bg-white">
                <input
                    className="bg-gray-200 p-3"
                    placeholder="Digite seu email"
                    type="email"
                />
                <input
                    className="bg-gray-200 p-3"
                    placeholder="Digite seu telefone"
                    type="phonenumber"
                />
                <input
                    className="bg-gray-200 p-3"
                    placeholder="Digite sua senha"
                    type="password"
                />
                <input
                    className="bg-gray-200 p-3"
                    placeholder="Repita sua senha"
                    type="password"
                />
                <button
                    className="bg-yellow-500 px-6 h-12 text-white"
                >Registrar</button>
            </form>
        </div>
    );
}