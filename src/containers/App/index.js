import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './styles.css';
import Helmet from 'react-helmet'

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Helmet title="Some Title Here"/>
        <div className={styles["App-header"]}>
          <img src={logo} className={styles["App-logo"]} alt="logo" />
          <span className={styles["App-header-title"]}>Welcome to React</span>
        </div>
        <p className={styles["App-intro"]}>
          <code>git gud scrub</code>
          <div>Begin coding awesomeness!</div>
        </p>
      </div>
    );
  }
}

export default App;
