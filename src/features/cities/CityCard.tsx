import "./CityCard.scss";
import type { CityWeather } from "../../types";

type CityCardProps = {
  city: CityWeather;
};

export default function CityCard({ city }: CityCardProps) {
  return (
    <div className="city-card">
      <h3>{city.name}</h3>
      <p>{city.temperature}°C</p>
    </div>
  );
}
