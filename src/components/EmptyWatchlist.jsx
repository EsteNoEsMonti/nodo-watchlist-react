import { FilmSlate } from "@phosphor-icons/react"

const EmptyWatchlist = () => {
  return (
    <div className="flex flex-col items-center justify-center text-gray-400 py-10">
      <FilmSlate size={50} className="text-gray-300 mb-2" />
      <h3 className="text-xl font-semibold">Your watchlist is empty</h3>
      <p className="text-gray-500 text-sm mt-1">Add movies to start watching.</p>
    </div>
  )
}

export default EmptyWatchlist
