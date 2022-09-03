import cn from 'clsx'
import s from './Layout.module.css'
import { Navbar } from '@components/common'

interface Props {}

const NAV_ITEMS = [
  { id: 0, name: "Home", path: '/'},
  { id: 1, name: "About", path: '/about'},
  { id: 2, name: "Programs and Lessons", path: '/coaching'},
  { id: 2, name: "Contact", path: '/contact'},
];

const Layout: React.FC<Props> = ({
  children,
}) => {
  const navBarlinks = NAV_ITEMS.map((c) => ({
    label: c.name,
    href: `${c.path}`,
  }))

  return (
      <div className={cn(s.root)}>
        <Navbar links={navBarlinks} />
        <main className="fit">{children}</main>
      </div>
  )
}

export default Layout
