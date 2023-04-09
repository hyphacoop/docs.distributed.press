import Pill from "./Pill"

export default function({ ownerAccess, publisherAccess, adminAccess }) {
  const colour = "#ADADAD"
  return (<div style={{ display: "block", fontSize: "1em", margin: "0.5em 0" }}>
    {ownerAccess && <Pill colour={colour}>Resource owner</Pill>}
    {publisherAccess && <Pill colour={colour}>Publisher</Pill>}
    {adminAccess && <Pill colour={colour}>Admin</Pill>}
  </div>)
}

