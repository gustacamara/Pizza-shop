import { Link } from "react-router-dom";

export function NotFound() {
  return ( 
    <div className="flex-col flex items-center justify-center h-screen gap-2">
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <p className="text-accent-foreground">
        Voltar para o <Link to="/" className="text-sky-500 dark:text-sky-400">Dashboard</Link>
      </p>
    </div>
  )
}