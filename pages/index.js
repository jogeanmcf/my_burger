import Head from 'next/head'
import Image from 'next/image'
import LeftNavbar from '../components/LeftNavbar'
import RightNavbar from '../components/RightNavbar'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.homePage}>

        <LeftNavbar/>
      
        <RightNavbar/>

    </div>
  )
}
