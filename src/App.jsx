import LineChart from "./components/LineChart/LineChart";
import Navbar from "./components/Navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <div className="container mx-auto my-8">
      <Navbar></Navbar>
      <h1 className="text-7xl mt-5 text-red-500">Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </div>
  );
}

export default App;
