import "./index.css"

export default function ElipseStatitics({ number, description }) {
  return (
    <figure className="container-elipse">
      <div className="elipse">
        <h2 clasName="number-elipse">{number}</h2>
      </div>
      <strong className="description-elipse">{description}</strong>
    </figure>
  )
}