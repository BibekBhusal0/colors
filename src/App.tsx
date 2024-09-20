import Choose from "./theme/choose";
import AllColors from "./components/allColors";

function App() {
  return (
    <>
      <div className="text-8xl pt-40 font-semibold">
        Generate Color Theme with Google Material Theme
      </div>

      <AllColors />
      <Choose />
    </>
  );
}

export default App;
