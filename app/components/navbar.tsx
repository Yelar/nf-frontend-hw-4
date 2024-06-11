'use client'
import React from 'react';
import Link from 'next/link';
import ProductModal from './productModal';
import {useState} from 'react'
const Navbar = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);
  
  return (
    <nav className="bg-[#012f34] h-16 flex items-center justify-between px-4">
        <Link href="/">
            <div className="text-white text-xl font-semibold">
                YLX
            </div>
        </Link>
      
      <button onClick={handleModalOpen}className="bg-white text-black px-4 py-2 rounded hover:bg-[#0056b3] transition duration-300">
        Place an Item
      </button>
      {isModalOpen && <ProductModal onClose={handleModalClose} />}
    </nav>
  );
}

export default Navbar;
