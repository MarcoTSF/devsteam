import Styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.container}>
        <div className={Styles.row}>
          <div className={Styles.colum}>
            <p className={Styles.p}>Copyright &copy; 2023 - Marco Salvador</p>
            <span className={Styles.span}>Página desenvolvida para fins didáticos.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;