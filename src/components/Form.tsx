import React, { useState } from "react";

type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
  city: string;
};
const Form = ({ setCity, getWeather, city }: FormPropsType) => {
  return (
    <form onSubmit={getWeather}>
      <input
        type="text"
        name="city"
        placeholder="都市名"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default Form;
