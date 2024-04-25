import PokemonCard from "./components/PokemonCard";
import { MyContextProvider } from "./context";

function App() {
  return (
    <MyContextProvider>
      <div style={{ backgroundColor: "#f0f0f0" }}>
        <PokemonCard />
      </div>
    </MyContextProvider>
  );
}

export default App;
