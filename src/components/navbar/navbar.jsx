import Styles from './navbar.module.css'
import {BsCart4} from 'react-icons/bs'

import Logo from '@/components/logo/logo'

export default function Navbar() {
    return (
        <nav className={Styles.navbar}>
            <Logo />
            <input type="text" />
            <BsCart4 size={40} />
        </nav>
    )
}