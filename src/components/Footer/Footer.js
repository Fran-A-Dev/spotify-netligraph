import styles from "./Footer.module.scss";

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <a href="https://frantheman.dev">Fran_The_Dev</a>
    </footer>
  );
};

export default Footer;
