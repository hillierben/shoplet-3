/* eslint-disable @next/next/no-img-element */
import styles from '../styles/productList.module.css'
import supabase from "../config/supabaseClient";
import Paginate from './Paginate';
import Products from './Products';
import CategoryBar from './CategoryBar';

export const dynamic = "force-dynamic";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function ProductList({params}) {

  const allCategories = ['all', 'mens', 'womens', 'tops', 't-shirts', 'trousers', 'shorts', 'hats', 'bags', 'accessories']

  // conver url param to Number. If less than 1, set to 1 as default
  const paginate = params?.productsPaginate > 1 ? Number(params.productsPaginate) : 1
  const category = params?.category

  const { data } = await supabase
    .from('products')
    .select()
    .textSearch('categories', `${category}`)
    .range(((paginate -1) * 8), (((paginate - 1) * 8) + 7))

  !data && console.log('loading')
  
  // copy all products into a new list - later this function will FILTER out products based on SEARCH and CATEGORIES
  const products = []
  data?.map((item) => {
    products?.push(item)
  })

  return (
    <>
    <CategoryBar />
      <Paginate pageNo={paginate} noProducts={products.length} params={params} />
      {!data && <h1>Loading...</h1>}
        <Products products={products} />
    </>
  )
}

