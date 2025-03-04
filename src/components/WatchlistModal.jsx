import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, FilmReel } from "@phosphor-icons/react"
import MovieCardWatchlist from "./MovieCardWatchlist"
import EmptyWatchlist from "./EmptyWatchlist"

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2, ease: "easeIn" } },
}

const WatchlistModal = ({ isModalOpen, setIsModalOpen, watchlist, setWatchlist }) => {
  const onClose = () => setIsModalOpen(false)

  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter((movie) => movie.id !== id))
  }

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          {/* Fondo negro con animación de opacidad */}
          <motion.div
            className="fixed inset-0 bg-black/90 z-40"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={backdropVariants}
          />

          {/* Modal animado */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            {/* <div className="bg-gray-100 rounded-xl shadow-xl w-11/12 max-w-md overflow-hidden"> */}
            <div className="bg-gray-950 rounded-xl shadow-xl w-11/12 max-w-md overflow-hidden">
              {/* Encabezado del modal */}
              <div className="bg-gray-800 text-white flex justify-between items-center p-4">
                <h2 className="text-xl font-bold flex items-center">
                  <FilmReel size={24} className="mr-2 text-yellow-500" />
                  My Watchlist
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-300 hover:text-white transition-transform duration-200 hover:scale-110"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Contenido */}
              <div className="p-6">
                {watchlist.length === 0 ? (
                  <EmptyWatchlist />
                ) : (
                  <div className="space-y-3">
                    {watchlist.map((movie) => (
                      <MovieCardWatchlist
                        key={movie.id}
                        movie={movie}
                        removeFromWatchlist={removeFromWatchlist}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default WatchlistModal
