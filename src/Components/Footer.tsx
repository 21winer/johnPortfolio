import { Whatsapp } from "iconsax-react"
import { Code, Github, Linkedin } from "lucide-react"

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center p-10">
            <aside>
                <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
                    <Code className="mr-2 w-7 h-7" />
                    JOHN
                    <span className="text-accent">CODE</span>
                </a>
                <p>Copyright © {new Date().getFullYear()} - Tous droits reservés</p>
            </aside>
            <nav id="Contact">
                <div className="grid grid-flow-col gap-4">
                    <a href="https://wa.me/96145043" target="_blank" rel="noopener noreferrer">
                        <Whatsapp size={27} color="#FFFFFF"/>
                    </a>
                    <a href="https://www.linkedin.com/in/jeansimou" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-7 h-7"/>
                    </a>
                    <a href="https://github.com/21winer" target="_blank" rel="noopener noreferrer">
                        <Github className="w-7 h-7"/>
                    </a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer