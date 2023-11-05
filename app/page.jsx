import Paginate from "./components/Paginate";
import ProductList from "./components/ProductList";
import ProductList2 from "./components/ProductList2";


export default function Home() {
  return (
    <div>
      <Paginate />
      <div className="pge-prd-list">
        <ProductList />
      </div>
      <Paginate />
  </div>
   
  )
}
