import Image from 'next/image';
import Styles from './Logo.module.css';

const Logo = () => {
    return (
        <div className={Styles.logo}>
            <Image src='/logo.svg'  width={60} height={60} />
            <h1 className={Styles.name}>DevSteam</h1>
        </div>
    )
}

export default Logo;