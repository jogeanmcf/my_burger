import styles from '../styles/MenuItemCard.module.css'

function MenuItemCard({hamburger, onClick})  {
    return (
        <div className={styles.menuItemCard} key={hamburger.id.toString()} onClick={onClick}>
            <img src={hamburger.image} width={60} height={60}></img>
            <h4>{hamburger.name}</h4>
        </div>
    );
}

export default MenuItemCard;