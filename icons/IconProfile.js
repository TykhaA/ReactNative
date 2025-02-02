import * as React from "react";
import Svg, { Path } from "react-native-svg";

const IconProfile = ({ props, color = "#FF6C00" }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.8}
      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
      style={{
        stroke: { color },
        stroke: { color },
        strokeOpacity: 0.8,
      }}
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.8}
      d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      clipRule="evenodd"
      style={{
        stroke: "#212121",
        stroke: "color(display-p3 .1294 .1294 .1294)",
        strokeOpacity: 0.8,
      }}
    />
  </Svg>
);
export default IconProfile;
