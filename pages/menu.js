import MenuItemCard from '../components/MenuItemCard';
import db from '../shared/db.json'
import styles from '../styles/Menu.module.css'
import React, {Component} from 'react';
import Image from 'next/image';


function MenuItemDescription({hamburger}) {
    
    if(hamburger==null) {
        return <div></div>
    } else {
        return (
            <div key={hamburger.id}>
                <Image src={hamburger.image} width={300} height={300} alt=''></Image>
                <h3>{hamburger.name}</h3>
                <p>{hamburger.ingredients}</p>
                <h4>Sobre</h4>
                <p>{hamburger.about}</p>
            </div>
        );
    }
    
}

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
                
                {this.state.menuItens.map((item)=> <MenuItemCard hamburger={item} key={item.id.toString()} onClick={()=> this.myClick(item)}/>)}
                
                <MenuItemDescription hamburger={this.state.selectedHamburger} key={item.id.toString()}/>

            </div>
        );
    }
}

export default Menu;