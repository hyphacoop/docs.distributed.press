export default function({ httpVerb, path }) {
  let colour = "#ADADAD"
  switch (httpVerb.toUpperCase()) {
    case "POST":
      colour = "#48CA93"
      break
    case "GET":
      colour = "#67AEFA"
      break
    case "DELETE":
      colour = "#F84D46"
      break
    case "PUT":
      colour = "#FBA543"
      break
    case "PATCH":
      colour = "#50E1C3"
      break
  }

  return (<div style={{ display: "inline-block", fontSize: "1em", margin: "0.5em 0" }}>
    <span style={{ backgroundColor: colour, color: "white", padding: "0.1em 0.3em", borderRadius: "5px", marginRight: "0.5em" }}>{httpVerb.toUpperCase()}</span>
    <code style={{ display: "inline-block" }}>{path}</code>
  </div>)

}
