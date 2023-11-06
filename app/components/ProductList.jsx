/* eslint-disable @next/next/no-img-element */
import styles from '../styles/productList.module.css'
import supabase from "../config/supabaseClient";
import Paginate from './Paginate';

export const dynamic = "force-dynamic";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function ProductList({pageNo, checkLength, params}) {

  // conver url param to Number. If less than 1, set to 1 as default
  const paginate = params?.productsPaginate > 1 ? Number(params.productsPaginate) : 1
  console.log(paginate)

  const { data } = await supabase
    .from('products')
    .select()
    // .like('categories', '%unis%')
    .range(((paginate -1) * 8), (((paginate - 1) * 8) + 7))
  
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
    <>
      <Paginate pageNo={paginate} noProducts={products.length} />
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
    </>
  )
}

