import { Button, CheckBox, Text } from "grommet";
import Choose from "./theme/choose";
import AllColors from "./components/allColors";

function App() {
  return (
    <>
      <div className="text-8xl pt-40 font-semibold">
        Generate Color Theme with Google Material Theme
      </div>
      <Text size="small">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aut
        aliquam inventore omnis eius doloribus quaerat asperiores impedit velit
        dolores rerum quas, neque quae veritatis architecto quia iure incidunt
        expedita.
      </Text>
      <br />
      <br />
      <Button label="Generate Theme" primary color="primary" />
      <CheckBox color="primary" label="Dark Theme" />
      <AllColors />
      <Choose />
    </>
  );
}

export default App;
