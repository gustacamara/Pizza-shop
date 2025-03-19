import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <h1>Cabeça de nois tudo </h1>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
