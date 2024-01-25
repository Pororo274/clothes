const ulStyle = {
  flexDirection: "column",
  gap: "24px",
  justifyContent: "start",
};

export default function FooterNav({
  header,
  children,
}: {
  header: string;
  children: React.ReactNode;
}) {
  return (
    <div className="footer-nav">
      <h3
        className="h3"
        style={{
          textAlign: "center",
        }}
      >
        {header}
      </h3>
      <ul
        className="footer-nav__ul"
        style={{
          marginTop: "24px",
        }}
      >
        <div className="wrapper" style={ulStyle}>
          {children}
        </div>
      </ul>
    </div>
  );
}
