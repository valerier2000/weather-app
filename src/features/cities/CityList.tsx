import CityCard from "./CityCard";
import "./CityList.scss";

export default function CityList() {
  return (
    <div className="city-grid">
      <CityCard />
      <CityCard />
      <CityCard />
      <CityCard />
    </div>
  );
}
