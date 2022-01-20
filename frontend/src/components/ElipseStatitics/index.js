import "./index.css"

export default function ElipseStatitics({ number, description }) {
  return (
    <div className=" my-4">
      <div className=" circulo">
        <h2 clasName="texto">{number}</h2>
      <strong className="texto">{description}</strong>
      </div>

    </div>
  )
}
