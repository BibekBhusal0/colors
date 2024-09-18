import { Grommet, GrommetExtendedProps } from "grommet";
import { useSelector } from "react-redux";
import { StateType } from "./redux";
import {
  argbFromHex,
  themeFromSourceColor,
  hexFromArgb,
  Scheme,
} from "@material/material-color-utilities";

const rgbaToHEX = (scheme: Scheme) => {
  const result: Record<string, string> = {};

  const extractColors = (obj: any) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        extractColors(value); // Recursively go through nested objects
      } else if (typeof value === "number") {
        const cleanKey = key.startsWith("props-") ? key.slice(6) : key; // Remove 'props-' prefix
        result[cleanKey] = hexFromArgb(value); // Convert ARGB to HEX
      }
    });
  };

  extractColors(scheme);
  return result;
};

function ThemeProvider(props: GrommetExtendedProps) {
  const { color1, theme } = useSelector((state: StateType) => state.theme);
  const MD_theme = themeFromSourceColor(argbFromHex(color1), [
    {
      name: "main theme",
      value: argbFromHex("#000000"),
      blend: true,
    },
  ]);

  const crrTheme = MD_theme.schemes[theme];
  console.log(JSON.stringify(rgbaToHEX(crrTheme), null, 2));
  return (
    <Grommet
      {...props}
      theme={{
        global: {
          colors: rgbaToHEX(crrTheme),
        },
      }}

      //
    ></Grommet>
  );
}

export default ThemeProvider;
