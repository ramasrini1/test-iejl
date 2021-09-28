import CustomLayout from "./wrapPageElement";
import "./src/components/Layout/Layout.css";

export const wrapPageElement =
  process.env.GATSBY_COMING_SOON === "true" ? CustomLayout : null;
