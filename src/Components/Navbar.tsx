import { Code, Sun, Moon } from "lucide-react"

function Navbar({ toggleTheme, theme }: { toggleTheme: () => void; theme: string }) {
  return (
    <div className="flex justify-center md:justify-between items-center p-4">
      <div>
        <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
          <Code className="mr-2 w-7 h-7"/>
          JOHN
          <span className="text-accent">CODE</span>
        </a>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <ul className="flex justify-between space-x-4 font-bold">
          <li>
            <a href="#" className="btn btn-md btn-ghost">
              Accueil
            </a>
          </li>
          <li><a href="#" className="btn btn-md btn-ghost">
            A propos
          </a></li>
          <li>
            <a href="#" className="btn btn-md btn-ghost">
              Compétences
            </a>
          </li>
          <li>
            <a href="#" className="btn btn-md btn-ghost">
              Mes Projets
            </a>
          </li>
          <li>
            <a href="#" className="btn btn-md btn-ghost">
              Contact
            </a>
          </li>
        </ul>
        <button onClick={toggleTheme} className="btn btn-md btn-ghost">
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </div>
  )
}

export default Navbar
