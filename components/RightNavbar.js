import styles from '../styles/Home.module.css'
import Image from 'next/image';

const Promotions = () => {
    
}

const RightNavbar = () => {
    return (
        <div className={styles.rightSide}>
            <img src='/hamb.png' width={350} height={250}></img>
            <nav className={styles.rightNavbar}>
                <button className={styles.btn2}>Pesquisar</button>
                <button className={styles.btn1}>Login</button>
            </nav>

        </div>
        
    );
}

export default RightNavbar;