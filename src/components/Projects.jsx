import Projectcard from "./Projectcard.jsx"
import SafeBites from "../assets/SafeBites.webp"

function Projects(){
  return (
    <section className="p-6 flex flex-col pb-20">
      <h2 className="pb-10 text-center font-bold text-3xl md:text-3xl lg:text-4xl text-shadow-sm">Projects</h2>
      <Projectcard 
        address="https://piyushify.github.io/safebites/"
        image={SafeBites}
        title="SafeBites"
        tech=" ● Reactjs ● Tailwindcss"
        description="It is a website intended to provide a safe eating experience by giving a hygiene rating to restaurants, hotels, cafes, etc."/>
    </section>
  )
}

export default Projects