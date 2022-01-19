import Link from 'next/link'
const Navbar = () => {
    return (
        <nav>
            <ul>
                <Link href='/'><a><li>Home</li></a></Link>
                <Link href='menu'><a><li>Menu</li></a></Link>
                <a><li>Sobre nós</li></a>
                <a><li>Contato</li></a>
            </ul>
            <button>Login</button>
        </nav>
    );
}




export default Navbar;
