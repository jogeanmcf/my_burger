import MenuItemCard from '../components/MenuItemCard';
import db from '../public/db.json'
import styles from '../styles/Menu.module.css'
import React, {Component} from 'react';
import MenuItemDescription from '../components/MenuItemDescription'
import Navbar from "../components/Navbar"


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
            <div className="flex flex-1 overflow-hidden">
                <Navbar/>
                <div className='grid grid-cols-2 h-[100vh] w-[50%] py-20 px-10'>
                {this.state.menuItens.map((item)=> <MenuItemCard hamburger={item} key={item.id.toString()} onClick={()=> this.myClick(item)}/>)}
                </div>  
                
                <MenuItemDescription hamburger={this.state.selectedHamburger}/>
                
            </div>
        );
    }
}

export default Menu;