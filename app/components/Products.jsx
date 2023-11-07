"use client"

/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styles from '../styles/productList.module.css'

export default function Products({products}) {

  // convert all prices to 2 decimal places
  function convertTwoDecimal(price) {
    return price.toFixed(2)
  }

  return (
    <div>
      {!products && <h1>Loading...</h1>}
      <ul className={styles.list}>
          {products?.map((product) => (
              <li key={product.id} className={styles.item}>
                <div className={styles.container}>
                <img 
                    className={styles.img} 
                    src={product.image} 
                    alt={product.item}
                />
                </div>
                <div className={styles.price}>
                  <span>£
                    <span className={styles.priceText}>
                      {convertTwoDecimal(product.price)}
                    </span>
                  </span>
                </div>
                <div className={styles.info}>
                  <div>{product.item}</div>
                  <div>{product.description}</div>
                </div>
              </li>
          ))}
        </ul>
    </div>
  )
}
