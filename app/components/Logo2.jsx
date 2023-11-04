import styles from '../styles/logo.module.css'

export default function Logo2() {
  return (
    <>
      <div className={`${styles.wrap}`}>
        <h1 className={styles.text}>SH</h1>
          <div className={styles.teardrop}>
            <div className={styles.reflection}>
              <div className={styles.block}></div>
            </div>
          </div>
        <h1 className={styles.text}>PLET</h1>
      </div>
    </>
  )
}
