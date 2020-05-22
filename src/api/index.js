import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  try {
    let changedURL = url;

    if (country) {
      changedURL = `${url}/countries/${country}`;
    }

    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changedURL);
    // console.log(confirmed);

    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,

      date: dailyData.reportDate,
    }));
    // console.log(modifiedData);
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const FetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    // console.log(countries);

    return countries.map(({ name }) => name);
  } catch (error) {
    console.log(error);
  }
};
