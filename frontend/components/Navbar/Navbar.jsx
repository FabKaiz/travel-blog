import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.png'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div>
      <div className="loading"></div>
      <div className={styles.nav__container}>
        <div className={styles.nav__item_container}>
          <Link href="/">
            <a href="">
              <Image
                src={logo}
                alt="Tracel Blog Logo"
                width={140}
                height={140}
              />
            </a>
          </Link>
        </div>
        <div className={styles.nav__item_container}>
          <p>
            Blog made by{' '}
            <a
              href="https://github.com/FabKaiz"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#919C8F' }}
            >
              FabKaiz
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
