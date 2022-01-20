import "./index.css"

export default function CardStatitics({ title, image }) {
  return (
    <figure className="card-statitics my-2 w-100">
      <h2>{title}</h2>
      <img src={image} alt={title} />
    </figure>
  )
}
