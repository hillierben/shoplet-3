
import ProductList from "../../components/ProductList";

export default async function Home({params}) {

  return (
    <div>
      <div className="pge-prd-list">
        <ProductList params={params}/>
      </div>
  </div>
   
  )
}
