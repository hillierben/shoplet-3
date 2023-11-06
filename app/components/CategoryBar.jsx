"use client"

import React, { useState } from 'react'
import styles from '../styles/categoryBar.module.css'
import Link from 'next/link'

export default function CategoryBar() {

  return (
    <div className={styles.categories}>
      <ul className={styles.catul}>
        <Link href={`/products/1`}>All</Link>
        <Link href={`/mens/1`} >Mens</Link>
        <Link href={`/womens/1`}>Womens</Link>
        <Link href={`/tops/1`}>Tops</Link>
        <Link href={`/t-shirts/1`}>T-Shirts</Link>
        <Link href={`/trousers/1`}>Trousers</Link>
        <Link href={`/shorts/1`}>Shorts</Link>
        <Link href={`/hats/1`}>Hats</Link>
        <Link href={`/bags/1`}>Bags</Link>
        <Link href={`/accessories/1`}>Accessories</Link>
      </ul>
      <div className={styles.catsml}>Categories ---</div>
    </div>
  )
}
