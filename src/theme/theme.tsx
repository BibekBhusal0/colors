import {
  argbFromHex,
  themeFromSourceColor,
  applyTheme,
} from "@material/material-color-utilities";

export const theme = themeFromSourceColor(argbFromHex("#f82506"), [
  {
    name: "custom-1",
    value: argbFromHex("#ff0000"),
    blend: true,
  },
]);
console.log(JSON.stringify(theme, null, 2));
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(theme, { target: document.body, dark: systemDark });
