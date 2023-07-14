import Image from 'next/image'
import Styles from './logo.module.css'

export default function Logo() {
    return (
        <div className={Styles.logo}>
            <Image src='/logo.svg' width={60} height={60} />
            <h1>DevSteam</h1>
        </div>
    )
}