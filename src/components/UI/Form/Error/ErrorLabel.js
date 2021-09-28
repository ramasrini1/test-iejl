/** @jsx jsx */
import { jsx } from "theme-ui";
import "./ErrorLabel.css";

function Button({ children, show }) {
  if (!show) return null;
  return <span className="error">{children}</span>;
}

export default Button;
