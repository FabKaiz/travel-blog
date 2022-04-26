import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.png'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.nav__container}>
      <div className={styles.nav__item_container}>
        <Link href="/">
          <a href="">
            <Image src={logo} alt="Tracel Blog Logo" width={148} height={148} />
          </a>
        </Link>
      </div>
      <div className={styles.nav__item_container}>
        <p>TODO ITEMS</p>
      </div>
    </div>
  )
}

export default Navbar
