import Image from 'next/image'

function MenuItemDescription({hamburger, key}) {
    
    if(hamburger==null) {
        return <div></div>
    } else {
        return (
            <div key={key}>
                <Image src={hamburger.image} width={300} height={300} alt=''></Image>
                <h3>{hamburger.name}</h3>
                <p>{hamburger.ingredients}</p>
                <h4>Sobre</h4>
                <p>{hamburger.about}</p>
            </div>
        );
    }
    
}

export default MenuItemDescription;