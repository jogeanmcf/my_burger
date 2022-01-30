import MenuItemCard from '../components/MenuItemCard';
import db from '../shared/db.json'
import styles from '../styles/Menu.module.css'
import React, {Component} from 'react';
import MenuItemDescription from '../components/MenuItemDescription'


class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuItens: db.menu,
            selectedHamburger: null
        }
    }
    
    myClick(hamburger){
        this.setState({selectedHamburger: hamburger});
  
    }
  
    render(){
        return (
            <div className={styles.menu}>
                <div className={styles.allItens}>
                {this.state.menuItens.map((item)=> <MenuItemCard hamburger={item} key={item.id.toString()} onClick={()=> this.myClick(item)}/>)}
                </div>  
                <div className={styles.itemDescription}>
                <MenuItemDescription hamburger={this.state.selectedHamburger}/>
                </div>
            </div>
        );
    }
}

export default Menu;