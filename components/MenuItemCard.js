import styles from '../styles/MenuItemCard.module.css'
import Image from 'next/image'

function MenuItemCard({hamburger, onClick})  {
    return (
        <div className={styles.menuItemCard} onClick={onClick}>
            <Image src={hamburger.image} width={60} height={60} alt=''></Image>
            <h4>{hamburger.name}</h4>
            <h4>{hamburger.price}</h4>
        </div>
    );
}

export default MenuItemCard;