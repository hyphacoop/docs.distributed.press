export default function({ colour, children }) {
  return <span style={{ backgroundColor: colour, color: "white", padding: "0.1em 0.3em", borderRadius: "5px", marginRight: "0.5em" }}>{children}</span>
}
