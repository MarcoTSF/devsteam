import Styles from "./container.module.css";

const Container = ({ children }) => {
    return (
        <div className={Styles.container}>
            {children}
        </div>
    )
}

export default Container;