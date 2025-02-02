import * as React from "react";
import Svg, { Path } from "react-native-svg";

const IconArrowBack = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#212121"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.8}
      d="M20 12H4M10 18l-6-6 6-6"
      style={{
        stroke: "#212121",
        stroke: "color(display-p3 .1294 .1294 .1294)",
        strokeOpacity: 0.8,
      }}
    />
  </Svg>
);
export default IconArrowBack;
