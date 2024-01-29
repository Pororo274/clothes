import "../../assets/style/button.css";
import { ButtonType } from "../../enums/ButtonType";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: ButtonType;
  style?: object;
}

export default function Button(props: ButtonProps) {
  const className =
    "button " + props.className + ` ${props.type || ButtonType.DARK}`;

  return (
    <button className={className} style={props.style}>
      {props.children}
    </button>
  );
}
