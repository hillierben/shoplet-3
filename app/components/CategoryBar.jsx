import React from 'react'
import styles from '../styles/categoryBar.module.css'

export default function CategoryBar() {
  return (
    <div className={styles.categories}>
      <ul className={styles.catul}>
        <li>Mens</li>
        <li>Womens</li>
        <li>Tops</li>
        <li>T-Shirts</li>
        <li>Trousers</li>
        <li>Shorts</li>
        <li>Hats</li>
        <li>Bags</li>
        <li>Accessories</li>
      </ul>
      <div className={styles.catsml}>Categories ---</div>
    </div>
  )
}
