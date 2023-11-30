
export default function Card({ name, from, comment }) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div>
        Video
      </div>
      <div>
        <h3>
            <span>{name}</span>
            ,
            <span>{from}</span>
        </h3>
        <div>
            "
            {comment}
            "
        </div>
      </div>
    </div>
  )
}