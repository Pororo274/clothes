import "../../assets/style/button.css";

interface ButtonProps {
  children: string;
  className: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button className={"button " + props.className}>{props.children}</button>
  );
}
