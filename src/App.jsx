import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import HomeScreen from "./Container/HomeScreen"
import AboutScreen from "./Container/AboutScreen"
import TechnologyScreen from "./Container/TechnologyScreen"
import Layout from "./Container/Layout"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route index element={<HomeScreen />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="technology" element={<TechnologyScreen />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider 
        router={router}
      />
    </>
  )
}

export default App
