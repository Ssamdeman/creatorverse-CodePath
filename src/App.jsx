import { useRoutes } from 'react-router-dom'
import './App.css'

import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'

function App() {
  const routes = useRoutes([
    { path: "/", element: <ShowCreators /> },
    { path: "/creator/:id", element: <ViewCreator /> },
    { path: "/new", element: <AddCreator /> },
    { path: "/edit/:id", element: <EditCreator /> }
  ])

  return routes
}

export default App