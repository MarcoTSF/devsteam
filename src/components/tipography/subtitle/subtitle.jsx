import Styles from './subtitle.module.css'

export default function Subtitle({children}) {
    return (
        <h2 className={Styles.subtitle}>{children}</h2>
    )
}