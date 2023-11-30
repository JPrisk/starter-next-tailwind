
function Star() {
    return <span className="bg-green-600 text-white text-md">★</span>;
  }
  

export default function Stars() {
    return (
      <div className="flex flex-row space-x-1">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
    )
  }

