import styles from '../styles/MenuItemCard.module.css'
import Image from 'next/image'

function MenuItemCard({hamburger, onClick})  {
    return (
        <div className={styles.menuItemCard} key={hamburger.id.toString()} onClick={onClick}>
            <Image src={hamburger.image} width={60} height={60}></Image>
            <h4>{hamburger.name}</h4>
        </div>
    );
}

export default MenuItemCard;