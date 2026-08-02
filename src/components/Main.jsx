import Intro from "./Intro.jsx"
import Navigator from "./Navigator.jsx"
import Aboutme from "./Aboutme.jsx"
import Skills from "./Skills.jsx"
import Projects from "./Projects.jsx"
import Contacts from "./Contacts.jsx"
function Main() {
  return (
    <main className="bg-[#f6f6f6] scroll-smooth *:text-shadow-md">
      <Intro/>
      <Navigator/>
      <Aboutme/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </main>
  )
}

export default Main
