import Projectcard from "./Projectcard.jsx"
import safebites from "../assets/safebites.webp"

function Projects(){
  return (
    <section className="p-5">
      <h2 className="py-6 text-center font-bold text-2xl md:text-3xl lg:text-4xl text-shadow-lg">Projects</h2>
      <Projectcard 
        address="https://piyushify.github.io/safebites/"
        image={safebites}
        title="Safebites"
        tech=" ● Html ● Css ● Javascript"
        description="It is a website intended to provide a safe eating experience by giving a hygiene rating to restaurants, hotels, cafes, etc."/>
    </section>
  )
}

export default Projects