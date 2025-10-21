import CityList from "../features/cities/CityList";
import Header from "../widgets/Header";

const mockData = [
  {
    id: 1,
    name: "Katowice",
    temperature: 20,
  },
  {
    id: 2,
    name: "Warszawa",
    temperature: 17,
  },
  {
    id: 3,
    name: "Gdańsk",
    temperature: 15,
  },
];

function App() {
  return (
    <div className="app-container">
      <Header />
      <CityList cities={mockData} />
    </div>
  );
}

export default App;
