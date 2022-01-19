import Image from 'next/image'

function MenuItemDescription({hamburger}) {
    return(
        <div>
            <Image src={hamburger.image} width={200} height={200}/>
        </div>
    );
}

export default MenuItemDescription;