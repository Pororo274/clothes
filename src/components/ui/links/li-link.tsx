import { Link } from "react-router-dom";

const linkStyle = {
  fontSize: "16px",
  color: "var(--black)",
};

export default function LiLink({
  to,
  children,
}: {
  to: string;
  children: string;
}) {
  return (
    <li className="link-li">
      <Link to={to} style={linkStyle}>
        {children}
      </Link>
    </li>
  );
}
