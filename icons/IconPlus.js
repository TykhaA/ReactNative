import * as React from "react";
import Svg, { Path } from "react-native-svg";

const IconPlus = ({ props, color = "#FF6C00" }) => (
  <Svg {...props} width={13} height={13} fill="#FF6C00">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 0H6V6H0V7H6V13H7V7H13V6H7V0Z"
      fill={color}
    />
  </Svg>
);
export default IconPlus;
