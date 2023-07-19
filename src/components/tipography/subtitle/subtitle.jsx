import Styles from "./subtitle.module.css";

const Subtitle = (props) => {
    return (
        <h2 className={Styles.subtitle}>{props.children}</h2>
    )
}

export default Subtitle;