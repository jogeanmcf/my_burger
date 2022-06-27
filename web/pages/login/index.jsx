import Link from "next/link";


export default function Login() {
    return (
        <div className="w-full h-[100vh] bg-gray-100 flex justify-center">
            <form className="flex flex-col content-center gap-4 p-8 bg-white w-max-800">
                <input 
                    className="bg-gray-200 p-3"
                    placeholder="e-mail"
                    type="email"
                    height={16}
                />
                <input 
                    className="bg-gray-200 p-3"
                    placeholder="password"
                    type="password"
                    height={16}
                />
                
                <span className="flex flex-1 justify-around">
                    <button className="h-12 text-yellow-500 hover:text-yellow-600 ">Esqueceu a senha?</button>
                    <button 
                        className="h-12 bg-yellow-400 text-white px-6 hover:bg-yellow-500"

                    >
                        Login
                    </button>
                </span>
                <Link href='/login/register'><button
                    className="h-12 text-yellow-500 hover:text-yellow-600 "
                >Não tenho cadastro</button></Link>
            </form>
        </div>
    );
}   