import styles from '../styles/Home.module.css'
import React, { Component } from 'react';
import Carousel from "react-simply-carousel";
import db from '../shared/db.json'  

const PromoCard = ({promoItem}) => {
    return (
        <div className={styles.promoCard} key={promoItem.id.toString()} style={{width:200}} >
            <h1>{promoItem.name}</h1>
            {/* <p>{promoItem.about}</p> */}
            <h4>{promoItem.price}</h4>
            <h3> por {promoItem.newPrice}</h3>
        </div>
    );
}

class Promotions extends Component{

    constructor(props){
        super(props);
        this.state = {
            activeSlideIndex: 0,
            promotions: db.promotions,
        }
    }

    setActiveSlideIndex = (newActiveSlideIndex) => {
        this.setState({
          activeSlideIndex: newActiveSlideIndex%3,
        });
      };

    render(){
        const list = ["oi", "tudo ", "bem ", "com ", "vc" ]

        return(
            <div className={styles.promotions}>
                <Carousel
                    updateOnItemClick
                    containerProps={{
                        style: {
                          width: "100%",
                          justifyContent: "space-between"
                        }
                      }}
                    activeSlideIndex={this.state.activeSlideIndex}
                    onRequestChange={this.setActiveSlideIndex}
                    itemsToShow={2}
                    itemsToScroll={1}
                    easing="linear"
                    forwardBtnProps={{
                        children:"❯",
                        style: {
                            width: 20,
                            height: 60,
                            minWidth: 60,
                            alignSelf: "center",
                            color: "white",
                            backgroundColor: "transparent",
                            border: "none",
                            fontSize: "20px",
                            fontWeight: "bold"
                        }
                          }
                    }
                    backwardBtnProps={{
                            children:"❰",
                            style: {
                                width: 20,
                                height: 60,
                                minWidth: 60,
                                alignSelf: "center",
                                color: "white",
                                backgroundColor: "transparent",
                                border: "none",
                                fontSize: "20px",
                                fontWeight: "bold"
                            }
                              }
                    }
                    speed={600}

                >
                    
                    
                    {this.state.promotions.map((item) => <PromoCard promoItem={item}/>)}
                
                </Carousel>
            </div>
        );
    }
}



const RightNavbar = () => {
    return (
        <div className={styles.rightSide}>
            <img src='/hamb.png' width={350} height={250}></img>
            <nav className={styles.rightNavbar}>
                <button className={styles.btn2}>Pesquisar</button>
                <button className={styles.btn1}>Login</button>
            </nav>
            <div className={styles.promotions}>
                <Promotions/>
            </div>
        </div>
        
    );
}

export default RightNavbar;