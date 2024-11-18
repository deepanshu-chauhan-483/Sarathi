'use client'

import { useState } from 'react'
import { Link } from 'react-router-dom' // Corrected import for Link as a named import from react-router-dom
import { Menu, X } from 'lucide-react'
import { Button } from '@mui/material'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="border-b border-blue-500">
      <div className="container px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2"> {/* Use 'to' instead of 'href' for react-router-dom */}
            <span className="text-xl font-bold">Company Name</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <NavLink to="/">Explore</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <NavLink to="/health">Health</NavLink>
            <NavLink to="/policies">Policies</NavLink>
            <NavLink to="/community">Community</NavLink>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outlined">Join</Button> {/* Corrected variant name */}
            <Button variant="contained">Sign Up</Button>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <NavLink to="/" onClick={toggleMenu}>Explore</NavLink>
            <NavLink to="/jobs" onClick={toggleMenu}>Jobs</NavLink>
            <NavLink to="/health" onClick={toggleMenu}>Health</NavLink>
            <NavLink to="/policies" onClick={toggleMenu}>Policies</NavLink>
            <NavLink to="/community" onClick={toggleMenu}>Community</NavLink>
          </nav>
          <div className="flex flex-col space-y-4 px-4 py-6">
            <Button variant="outlined" onClick={toggleMenu}>Join</Button>
            <Button variant="contained" onClick={toggleMenu}>Sign Up</Button>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ to, children, ...props }) {
  return (
    <Link 
      to={to} 
      className="text-sm font-medium transition-colors hover:text-primary"
      {...props}
    >
      {children}
    </Link>
  )
}
