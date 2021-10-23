import PropTypes from "prop-types";
import styles from "./ThemeButton.module.css";

export default function ThemeButton(props) {
  const { defaultTheme, changeTheme } = props;

  return (
    <button
      id={styles.btn}
      className={`${styles.btn} ${defaultTheme}`}
      onClick={changeTheme}
    >
      Change theme
    </button>
  );
}

ThemeButton.propTypes = {
  defaultTheme: PropTypes.string,
  changeTheme: PropTypes.func,
};
