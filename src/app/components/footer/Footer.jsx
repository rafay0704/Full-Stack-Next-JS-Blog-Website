import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'

const Footer = () => {

  return (
    <div className={styles.container}>
      <div> @ 2023 Rafay, All rights reserved  </div>
      <div className={styles.social}>
        <Image src="/fb.png" alt='fb' className={styles.icon} width={15} height={15}/>
        <Image src="/insta.png" alt='insta' className={styles.icon} width={15} height={15}/>
        <Image src="/linkedin.png" alt='linkedin' className={styles.icon} width={15} height={15}/>
        <Image src="/snapchat.png" alt='snapchat' className={styles.icon} width={15} height={15}/>     
      </div>
    </div>
  )
}

export default Footer