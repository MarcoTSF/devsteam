import Styles from './container.module.css'

export default function Conatiner({children}) {
    return (
        <div className={Styles.container}>
            {children}
        </div>
    )
}