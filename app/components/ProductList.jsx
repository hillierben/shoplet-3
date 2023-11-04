/* eslint-disable @next/next/no-img-element */
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import styles from '../styles/productList.module.css'

export const dynamic = "force-dynamic";

export default async function ProductList() {
  const supabase = createServerComponentClient({cookies})
  
  const { data } = await supabase
    .from('products')
    .select()
    // .range(0, 3)

  
  // copy all products into a new list - later this function will FILTER out products based on SEARCH and CATEGORIES
  const products = []
  data?.map((item) => {
    products?.push(item)
  })

  // convert all prices to 2 decimal places
  function convertTwoDecimal(price) {
    return price.toFixed(2)
  }

  return (
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
  )
}
