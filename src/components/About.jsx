import Bulleticon from "./icons/Bulleticon.jsx"

function About(){
  return (
    <section className="p-5">
      <h2 className="py-8 text-center font-bold text-2xl md:text-3xl lg:text-4xl text-shadow-lg">About</h2>
      <ul className="text-xl font-semibold p-4 py-2 *:py-2 shadow-md inset-shadow-sm rounded-3xl">
        <li ><Bulleticon/> I am in 3rd semester of BCA at Shillong College, Shillong, Meghalaya.</li>
        <li><Bulleticon/> I learn by building and breaking things rather than just from books.</li>
        <li><Bulleticon/> My interests are web development, linux and more.</li>
        <li><Bulleticon/> Coding does't make me tired, it removes my tiredness.</li>
      </ul>
      </section>
  )
}

export default About