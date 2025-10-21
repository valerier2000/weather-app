import CityCard from "./CityCard";
import "./CityList.scss";
import type { CityWeather } from "../../types";

interface CityListProps {
  cities: CityWeather[];
}

export default function CityList({ cities }: CityListProps) {
  return (
    <div className="city-grid">
      {cities.map((city) => (
        <CityCard key={city.id} city={city} />
      ))}
    </div>
  );
}
