import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Loading from "./components/Loading";
import Result from "./components/Result";
import Title from "./components/Title";

type ResultStateType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
};
function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [city, setCity] = useState<string>("");
  const [result, setResult] = useState<ResultStateType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: "",
  });
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=fdd22da9d09f4449bce55405230503&q=${city}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => {
        setResult({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
        });
        setCity("");
        setLoading(false);
      })
      .catch((err) => alert("エラー"));
  };
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <Title />
          <Form setCity={setCity} getWeather={getWeather} city={city} />

          {loading ? <Loading /> : <Result result={result} />}
        </div>
      </div>
    </div>
  );
}

export default App;
