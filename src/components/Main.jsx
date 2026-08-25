import Home from "./Home.jsx"
import Menupanel from "./Menupanel.jsx"
import Navigator from "./Navigator.jsx"
import Aboutme from "./Aboutme.jsx"
import Skills from "./Skills.jsx"
import Projects from "./Projects.jsx"
import Connect from "./Connect.jsx"
function Main() {
  return (
    <main className="bg-[#f6f6f6] scroll-smooth">
      <Home/>
      <Menupanel/>
      <Navigator/>
      <Aboutme/>
      <Skills/>
      <Projects/>
      <Connect/>
    </main>
  )
}

export default Main
