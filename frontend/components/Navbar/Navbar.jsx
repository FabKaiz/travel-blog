import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import styles from"./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav__container}>
      <div className={styles.nav__item_container}>
        <Link href="/" passHref>
          <>
            <Image src={logo} alt="Tracel Blog Logo" width={148} height={148} />
          </>
        </Link>
      </div>
      <div className={styles.nav__item_container}>
        <p>todo</p>
      </div>
    </div>
  );
};

export default Navbar;
