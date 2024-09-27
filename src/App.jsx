import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

import Diagnose from './pages/Diagnose'
import Home from './pages/Home'

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route index="/home" element={<Home />} />
    <Route path='/Diagnose' element={<Diagnose />} />
  </Route>
))
function App() {
  return (
    <>
    <RouterProvider router={router}>
    </RouterProvider>
    </>
  )
}

export default App
