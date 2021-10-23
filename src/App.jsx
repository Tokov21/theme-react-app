import React from "react";

import ThemeButton from "./components/ThemeButton";

import styles from "./App.module.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: styles.light,
    };

    this.changeTheme = () => {
      this.setState((prevState) => {
        if (prevState.theme === styles.light) {
          return { theme: styles.dark };
        }
        return { theme: styles.light };
      });
    };
  }

  render() {
    return (
      <div className={this.state.theme}>
        <ThemeButton
          defaultTheme={this.state.theme}
          changeTheme={this.changeTheme}
        />
        <div>Text for test</div>
      </div>
    );
  }
}

export default App;
