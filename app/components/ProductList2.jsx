
import styles from '../styles/productList.module.css'


export default async function ProductList2() {
  
  const flap = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await flap.json()

  data?.forEach((date) => {
    console.log(date.body)
  })

  return (
    <div>
      Poop
      {/* <ul>
        {data.map((date) => (
          <li key={date.id}>{date.body}</li>
          ))}
      </ul> */}
    </div>

  )
}
