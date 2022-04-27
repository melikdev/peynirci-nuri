import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navlinks}>
        <Link href="/">Anasayfa</Link>
      </div>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image src="/img/logo.png" alt="" width="100" height="100" />
          </a>
        </Link>
      </div>
      <div className={styles.navlinks}>
        <Link href="/ürünler">Ürünler</Link>
      </div>
      <div className={styles.navlinks}>
        <Link href="/hakkımızda">Hakkımızda</Link>
      </div>
    </div>
  )
}

export default Navbar