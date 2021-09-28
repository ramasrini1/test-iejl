/** @jsx jsx */
import { jsx, Checkbox as ThemeCheckbox, Label } from "theme-ui";

function Checkbox({ onChange, text }) {
  return (
    <Label className="flex">
      <ThemeCheckbox defaultChecked onChange={onChange} />
      {text}
    </Label>
  );
}

export default Checkbox;
