import Link from "next/link";
import Logo2 from "./Logo2";
import CategoryBar from "./CategoryBar";
import styles from '../styles/navbar.module.css'

export default function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
          <Logo2/>
          <div className="border border-black py-1 px-2 rounded-3xl">
            <form>
              <input
                placeholder="Search for item"
                className=" bg-[#ffffff]"
              />
            </form>
          </div>
          <span>
            <ul className={styles.navlist}>
              <li><Link href='/sell'>Sell</Link></li>
              <li><Link href='/'>Sign Up</Link></li>
              <li><Link href='/'>Login</Link></li>
              <li><Link href='/'>Logout</Link></li>
            </ul>
            <div className={styles.navlistsml}>FILL</div>
          </span>
      </nav>
      <CategoryBar />
    </>

  )
}
