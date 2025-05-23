import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border bg-muted py-6">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 md:flex-row md:justify-between">
        <div>
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} Luis Paulo. Todos os direitos reservados.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/LuisErlacher" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-brand-blue transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a 
            href="https://linkedin.com/in/luis-paulo-perlacher" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-brand-blue transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
