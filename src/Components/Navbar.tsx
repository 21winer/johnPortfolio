import { Code, Menu, X, ChevronUp } from "lucide-react"
import { useState, useEffect } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showScroll, setShowScroll] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true)
      } else {
        setShowScroll(false)
      }
    }

    window.addEventListener('scroll', checkScroll)
    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  return (
    <div className="relative">
      <div className="flex justify-between items-center p-4">
        <div>
          <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
            <Code className="mr-2 w-7 h-7"/>
            JOHN
            <span className="text-accent">CODE</span>
          </a>
        </div>
        
        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <ul className="flex justify-between space-x-4 font-bold">
            <li>
              <a href="#Home" className="btn btn-md btn-ghost">
                Accueil
              </a>
            </li>
            <li><a href="#About" className="btn btn-md btn-ghost">
              A propos
            </a></li>
            <li>
              <a href="#Competences" className="btn btn-md btn-ghost">
                Compétences
              </a>
            </li>
            <li>
              <a href="#Projets" className="btn btn-md btn-ghost">
                Projets
              </a>
            </li>
            <li>
              <a href="#Contact" className="btn btn-md btn-ghost">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Bouton Hamburger Mobile */}
        <button 
          onClick={toggleMenu}
          className="md:hidden z-50 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Bouton Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 btn btn-accent rounded-full p-3 z-40 transition-opacity duration-300 ${
          showScroll ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      {/* Menu Mobile */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      >
        <div 
          className={`absolute right-0 top-0 h-full w-64 bg-base-300/95 shadow-xl transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col p-6 pt-20">
            <ul className="flex flex-col space-y-2 font-bold">
              <li>
                <a 
                  href="#Home" 
                  className="block px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={closeMenu}
                >
                  Accueil
                </a>
              </li>
              <li>
                <a 
                  href="#About" 
                  className="block px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={closeMenu}
                >
                  A propos
                </a>
              </li>
              <li>
                <a 
                  href="#Competences" 
                  className="block px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={closeMenu}
                >
                  Compétences
                </a>
              </li>
              <li>
                <a 
                  href="#Projets" 
                  className="block px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={closeMenu}
                >
                  Projets
                </a>
              </li>
              <li>
                <a 
                  href="#Contact" 
                  className="block px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar