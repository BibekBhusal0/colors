import { ThemeContext, ThemeType } from "grommet";
import { Fragment, useContext } from "react";
import SingleColor from "./singleColors";
import { theme } from "../theme/redux";

const modes: theme[] = ["light", "dark"];

function AllColors() {
  const theme = useContext(ThemeContext) as ThemeType;
  const colors = theme.global?.colors;
  if (!colors) return null;
  return (
    <>
      <h1 className="text-4xl py-5">All Colors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 pb-40">
        {Object.entries(colors).map(([name, color]) => {
          if (typeof color === "undefined") return null;
          if (typeof color === "string")
            return <SingleColor key={name} name={name} color={color} />;
          return (
            <Fragment key={name}>
              {modes.map((key) => {
                if (typeof color[key] === "undefined") return null;
                <SingleColor
                  key={`${name}-${key}`}
                  name={`${name}-light`}
                  color={color[key]}
                />;
              })}
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
export default AllColors;
