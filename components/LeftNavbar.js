import Link from "next/link";
import styles from '../styles/Home.module.css'

const LeftNavbar = () => {
    return (
        <div className={styles.leftSide}>
            <nav className={styles.leftNavbar}>
                <ul>
                    <Link href='/'><a><li>Home</li></a></Link>
                    <Link href='menu'><a><li>Menu</li></a></Link>
                    <Link href='/'><a><li>Sobre nós</li></a></Link>
                    <Link href='/'><a><li>Contato</li></a></Link>
                </ul>
            </nav>
            <div>
                <h1>Cansado de ficar esperdo por sua refeição?</h1>
                <p>Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a crescente influência da mídia obstaculiza a apreciação da importância das posturas dos órgãos dirigentes com relação às suas atribuições.</p>
                <button>Faça seu pedido</button>
            </div>
        </div>
    );
}

export default LeftNavbar;
