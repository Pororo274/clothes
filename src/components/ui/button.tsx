import "../../assets/style/button.css";
import { ButtonType } from "../../enums/ButtonType";

interface ButtonProps {
  children: string;
  className?: string;
  type?: ButtonType;
}

export default function Button(props: ButtonProps) {
  const className =
    "button " + props.className + ` ${props.type || ButtonType.DARK}`;

  return <button className={className}>{props.children}</button>;
}
