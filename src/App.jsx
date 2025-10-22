import { Route, Routes } from "react-router-dom"
import NavBar from "./layouts/NavBar"
import StatementPiece from "./components/PencilBoys"
import Footer from "./layouts/Footer"
import PageNotFound from "./components/PageNotFound"

import Landing from "./pages/Landing"
import About from "./routes/About"
import Archives from "./routes/Archives"
import Shop from "./routes/Shop"
import Cart from "./components/Cart"
import ScrollUp from "./components/functionalComponents/ScrollUp"
import { useEffect } from "react"

import { useThemeStore } from "./store"


function App() {
  const setTheme = useThemeStore((state) => state.setTheme)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme)
    }

    setTheme(savedTheme)
  }, [setTheme])


  return (
    <div className="scroll-smooth transition-all duration-300 font-Kumbh bg:white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-200">
      <NavBar />
      <Routes>
        <Route path={'*'} element={<PageNotFound />} />
        <Route path={'/'} element={<Landing />} />
        <Route path={'/cart'} element={<Cart />} />
        <Route path={'/login'} element={<StatementPiece />} />
        <Route path={'/account'} element={<StatementPiece />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/archives'} element={<Archives />} />
        <Route path={'/shop'} element={<Shop />} />
      </Routes>
      {/* <ScrollUp /> */}
      <Footer  />      
    </div>
  )
}

export default App

//
