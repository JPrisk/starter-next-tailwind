export function getStar() {
  return <div className="bg-green-600 text-white text-md m-px h-6.5 w-6.5">★</div>;
}

export function getSingleStar() {
    return <div className="bg-white text-green-600 text-md m-px h-6.5 w-6.5">★</div>;
  }

export function getStartSet(count) {
  const components = Array.from({ length: count }, () => getStar());
  return <div className='flex'>{components}</div>;
}
