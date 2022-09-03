import { FC } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Logo, Container } from '@components/ui'

interface Link {
  href: string
  label: string
}

interface NavbarProps {
  links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => (
  <NavbarRoot>
    <Container clean className={styles.container}>
      <div className={styles.nav}>
          <Link href="/">
            <a className={styles.logo} aria-label="Logo">
              {/* TODO: Replace with Tennis academy logo */}
              <Logo /> 
            </a>
          </Link>
          <nav className={styles.navMenu}>
            {links?.map((l) => (
              <Link href={l.href} key={l.href}>
                <a className={styles.link}>{l.label}</a>
              </Link>
            ))}
          </nav>
      </div>
    </Container>
  </NavbarRoot>
)

export default Navbar
