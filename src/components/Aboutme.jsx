import college from "../assets/college.webp"
function Aboutme(){
  return (
    <section className="p-6 flex flex-col pb-20">
      <h2 className="pb-10 text-center font-black text-3xl md:text-3xl lg:text-4xl text-shadow-sm decoration-[#bb8866aa] decoration-dashed decoration-2">About Me</h2>
      
      <ul className="p-6 text-xl text-center font-semibold flex flex-col gap-6 items-center justify-center shadow-sm rounded-4xl inset-shadow-sm *:text-shadow-sm">
        <li>
          I'm a BCA student at <br/> <a className="font-bold"><img src="/src/assets/college.webp" className="w-5 inline mr-1"/>Shillong College.</a>
        </li>
        <li>I love designing clean, modern and responsive websites.</li>
        <li>
          My current focus is mastering JavaScript while improving my UI/UX design skills and building meaningful projects.
        </li>
      </ul>
      </section>
  )
}

export default Aboutme