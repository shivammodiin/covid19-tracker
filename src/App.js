import React from "react";
import Card from "./components/Cards/Card";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Chart from "./components/Chart/Chart";
import { fetchData, fetchDailyData, FetchCountries } from "./api/index";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import covid19tracker from "./components/covid19tracker.png";
import SocialLinks from "./SocialLinks";

class App extends React.Component {
  state = {
    data: [],
    fetchedDailyData: [],
    fetchedCountry: [],
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    const fetchedDailyData = await fetchDailyData();
    const fetchedCountry = await FetchCountries();
    // console.log(fetchedCountry);
    this.setState({
      data: fetchedData,
      fetchedDailyData,
      fetchedCountry,
    });
  }

  handleChange = async (country) => {
    const fetchedCountryData = await fetchData(country);

    this.setState({ data: fetchedCountryData, country });
  };

  render() {
    const { data, fetchedDailyData, fetchedCountry, country } = this.state;
    // console.log(data);
    return (
      <div className="container">
        <SocialLinks dp="Social" />

        <img src={covid19tracker} alt="covid19tracker" className="imagecovid" />
        <Card data={data} country={country} />
        <SocialLinks dp="mobile" />

        <CountryPicker
          handleChange={this.handleChange}
          fetchedCountry={fetchedCountry}
          data={data}
        />
        <Chart
          data={data}
          country={country}
          fetchedDailyData={fetchedDailyData}
        />
      </div>
    );
  }
}

export default App;
