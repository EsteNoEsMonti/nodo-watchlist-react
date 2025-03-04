import { useEffect, useState } from "react";
import Header from "./components/Header"
import MovieList from "./components/MovieList";
import WatchlistModal from "./components/WatchlistModal"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [watchlist, setWatchlist] = useState(() => {
    const savedWatchlist = localStorage.getItem("watchlist");
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  })

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  return (
    <>
      <Header setIsModalOpen={setIsModalOpen} hasWatchlistItems={watchlist.length} />

      <WatchlistModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        watchlist={watchlist}
        setWatchlist={setWatchlist}
      />

      <MovieList
        watchlist={watchlist}
        setWatchlist={setWatchlist}
      />

    </>
  )
}

export default App
