import Head from 'next/head'
import Image from 'next/image'
import LeftHomeSide  from '../components/LeftHomeSide'
import RightHomeSide from '../components/RightHomeSide'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.homePage}>

        <LeftHomeSide/>
      
        <RightHomeSide/>

    </div>
  )
}
