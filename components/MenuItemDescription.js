import Image from 'next/image'
import styles from '../styles/Menu.module.css'

function MenuItemDescription({hamburger, key}) {
    
    if(hamburger==null) {
        return <div key={key} className={styles.itemDescription}><Image src='/sanduba.svg' height={300} width={300} alt=''></Image></div>
    } else {
        return (
            <div key={key} className={styles.itemDescription}>
                <h3>{hamburger.name}</h3>
                <Image src={hamburger.image} width={400} height={210} alt='' className={styles.img}></Image>
                <p>{hamburger.ingredients}</p>
                <h4>Sobre</h4>
                <p>{hamburger.about}</p>
            </div>
        );
    }
    
}

export default MenuItemDescription;