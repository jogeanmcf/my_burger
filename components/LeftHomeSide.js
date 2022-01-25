import Link from "next/link";
import styles from '../styles/Home.module.css'

const LeftHomeSide = () => {
    return (
        <div className={styles.leftSide}>
           
            <div>
                <h1>Cansado de ficar esperdo por sua refeição?</h1>
                <p>Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a crescente influência da mídia obstaculiza a apreciação da importância das posturas dos órgãos dirigentes com relação às suas atribuições.</p>
                <button>Faça seu pedido   &#8594;</button>
            </div>
        </div>
    );
}

export default LeftHomeSide;
