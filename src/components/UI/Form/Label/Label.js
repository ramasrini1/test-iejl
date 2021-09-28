/** @jsx jsx */
import { jsx, Label as ThemeLabel } from "theme-ui";

function Label({ type, title }) {
  return (
    <ThemeLabel type={type} className="form__label">
      {title}
    </ThemeLabel>
  );
}

export default Label;

Label.defaultProps = {
  type: "text",
  title: "Label",
};
