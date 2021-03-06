import Link from 'next/link'
import styles from '../styles/Home.module.css'
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
             
            <ul>
                <Link href='/'><a><li>Home</li></a></Link>
                <Link href='menu'><a><li>Menu</li></a></Link>
                <Link href='/'><a><li>Sobre nós</li></a></Link>
                <Link href='/'><a><li>Contato</li></a></Link>
            </ul>
            <div>
                <Link href='/login'><button className={styles.btn1}>Login</button></Link>
                
            </div>
        </nav>
    );
}




export default Navbar;
