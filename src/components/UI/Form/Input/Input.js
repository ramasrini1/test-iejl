/** @jsx jsx */
import { jsx, Input as ThemeInput } from "theme-ui";

function Input(props) {
  return <ThemeInput {...props} />;
}

export default Input;

Input.defaultProps = {
  value: "",
};
