import { useDispatch, useSelector } from "react-redux";
import { setColor, StateType, toggleTheme } from "./redux";
import { CheckBox, ThemeContext, ThemeType } from "grommet";
import { useContext } from "react";

function Choose() {
  const { color1, color2, theme } = useSelector(
    (state: StateType) => state.theme
  );
  const grommet_theme = useContext(ThemeContext) as ThemeType;
  const bg = grommet_theme?.global?.colors?.background;
  const background =
    bg === undefined ? "#fff" : typeof bg === "string" ? bg : bg[theme];

  const dispatch = useDispatch();
  return (
    <div
      style={{ backgroundColor: background }}
      className="fixed left-1/2 gap-2 transform -translate-x-1/2 flex flex-col sm:flex-row sm:text-2xl text-xl sm:bottom-9 bottom-1 items-center justify-center sm:justify-between w-full sm:w-10/12 p-3 rounded-md">
      <div className="flex-center gap-2">
        <label htmlFor="color1">Primary color </label>
        <input
          type="color"
          name="color1"
          value={color1}
          onChange={(e) =>
            dispatch(setColor({ whichColor: "color1", color: e.target.value }))
          }
        />
      </div>
      <div className="flex-center gap-2">
        <label htmlFor="color2">Secondary Color</label>
        <input
          type="color"
          name="color2"
          value={color2}
          onChange={(e) =>
            dispatch(setColor({ whichColor: "color2", color: e.target.value }))
          }
        />
      </div>

      <CheckBox
        label={<div className="text-2xl">Dark Theme </div>}
        reverse
        toggle
        checked={theme === "dark"}
        onChange={() => dispatch(toggleTheme())}
      />
    </div>
  );
}

export default Choose;
