import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
  <>
   <nav className={styles.q1}>
        <ul className={styles.menubar}>
          <li>
            <Link href="/Home">
              Home
            </Link>
          </li>
          <li>
            <Link href="/contect">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/blog">
              blog
            </Link>
          </li>
          <li>
            <Link href="/product">
              Product
            </Link>
          </li>
        </ul>
      </nav>
      </>
 )
}

export default Navbar;