import React from 'react'
import { List, Queue } from "@phosphor-icons/react";
import logoTicket from '../assets/logoTicket.svg'
import { paddingXPage } from '../utils/paddingPage';
import { motion } from "framer-motion";



const Header = ({ setIsModalOpen, hasWatchlistItems }) => {

  const onOpenModal = () => setIsModalOpen(true)
  return (
    <header className={`bg-gray-800 text-white p-4 flex justify-between items-center shadow-md ${paddingXPage}`}>
      <div className='flex items-center justify-center '>
        <img src={logoTicket} alt="logoTicket" width={50} />
        <h1 className="ml-2.5 text-2xl font-bold">Watchlist</h1>
      </div>
      <button
        onClick={onOpenModal}
        className="flex text-white py-2 px-4 rounded cursor-pointer transition-transform duration-300 hover:text-yellow-400 hover:scale-110"
      >
        My Watchlist
        <motion.span
          key={hasWatchlistItems} // Clave para animar al cambiar de ícono
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="ml-2"
        >
          {hasWatchlistItems ? <Queue size={25} /> : <List size={25} />}
        </motion.span>
      </button>
    </header>
  )
}

export default Header