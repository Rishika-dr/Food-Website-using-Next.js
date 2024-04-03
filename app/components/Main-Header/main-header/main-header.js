
import Link from 'next/link';
import logo from '@/assets/logo.png';
import classes from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackground from '@/app/components/Main-Header/main-header-background/main-header-background';
import NavLink from '@/app/components/Main-Header/nav/nav-link';

export default function MainHeader() {
    return (
      <>
        <MainHeaderBackground />
        <header className={classes.header}>
          <Link className={classes.logo} href="/">
              <Image src={logo} alt="A plate with food on it." priority/>
              Nextlevel food
          </Link>
          <nav className={classes.nav}>
            <ul>
              <li>
                <NavLink href="/meals">Browse Meals</NavLink>
              </li>
              <li>
                <NavLink href="/community">Foodies Community</NavLink>
              </li>
            </ul>
          </nav>
        </header>
    </>
    );
}