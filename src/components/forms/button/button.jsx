import Styles from './button.module.css'

export default function Button({children}) {
    return (
        <button className={Styles.button}>{children}</button>
    )
}