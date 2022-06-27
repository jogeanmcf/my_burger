import Image from 'next/image'
import styles from '../styles/Menu.module.css'

function MenuItemDescription({hamburger, key}) {
    
    if(hamburger==null) {
        return <div key={key} className={styles.itemDescription}><Image src='/sanduba.svg' height={300} width={300} alt=''></Image></div>
    } else {
        return (
            <div key={key} className="flex flex-col h-[100vh]  w-[50%] bg-yellow-400 p-8 g-8">
                <h3 className='text-4xl text-white font-bold'>{hamburger.name}</h3>
                <Image src={hamburger.image} width={400} height={210} alt='' className="w-auto h-auto"></Image>
                <h3 className='text-xl font-semibold text-white m-4'>Sobre</h3>
                <p className='text-lg font-semibold text-white m-4'>{hamburger.about}</p>
                <span>
                    <p className='font-bold'>Ingredientes:</p>
                    <p>{hamburger.ingredients}</p>
                </span>
                
            </div>
        );
    }
    
}

export default MenuItemDescription;