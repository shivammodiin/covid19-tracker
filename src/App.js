import React from "react";
import Card from "./components/Cards/Card";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Chart from "./components/Chart/Chart";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <h1>App</h1>
      <Card />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
