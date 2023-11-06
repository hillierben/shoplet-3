"use client"

import Link from 'next/link'
import React from 'react'
import styles from '../styles/paginate.module.css'
import { useRouter } from 'next/navigation'

export default function Paginate({pageNo, noProducts, params}) {

  console.log(params)

  const page = pageNo < 1 ? 1 : pageNo

  return (
    <div className={styles.pagidiv}>
      <Link href={`/${params?.category}/${page - 1 < 1 ? 1 : page - 1}`} className={page >= 2 ? styles.pagibtn : styles.pagibtnHide}>&#8592;</Link>
      <p className={styles.pagipge}>Page {pageNo}</p>
      <Link href={`/${params?.category}/${page + 1}`} className={noProducts >= 8 ? styles.pagibtn : styles.pagibtnHide}>&rarr;</Link>
    </div>
  )
}
