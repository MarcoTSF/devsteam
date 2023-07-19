import Styles from "./input.module.css";

const Input = ({ fullWidth, ...props }) => {
  return (
    <input 
        className={`${Styles.input} ${fullWidth && Styles.fullWidth}`} 
        {...props}
    />
  );
};

export default Input;