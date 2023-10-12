import CoffeeCatalog from "./components/CoffeeCatalog"
import Menubar from "./components/Menubar"
import Topbar from "./components/Topbar"


const App = () => {
  return (
    <>
      <div className="glow-effect"></div>
      <Topbar />
      <CoffeeCatalog />
      <Menubar />
    </>
  )
}

export default App


