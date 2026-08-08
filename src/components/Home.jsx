import dp from "../assets/dp.webp"
import Githubicon from "./icons/Githubicon.jsx"
import LinkedInicon from "./icons/LinkedInicon.jsx"
import Emailicon from "./icons/Emailicon.jsx"
function Home() {
  let greet = "Hi there 👋🏼";
  let info = "A BCA student.";
  return (
    <section className="h-svh flex items-center flex-col justify-center p-6 pt-20">
      <img src={dp} className="w-32 h-32 self-start rounded-full shadow-md backdrop-blur-4xl bg-current/2"/>
      <p className="text-3xl md:text-5xl lg:text-7xl w-screen py-3 px-6 font-semibold">{greet}</p>
      <p className="text-3xl md:text-5xl lg:text-7xl">I'm <b className="underline decoration-[#bb8866aa] decoration-dashed decoration-2">Piyush Sharma</b>.</p>
      <p className="text-3xl md:text-5xl lg:text-7xl">{info}</p>
      <div className="flex items-center justify-evenly w-full mt-4">
        <a href="https://github.com/piyushify" target="_blank">
          <Githubicon className="w-10 h-10 shadow-lg rounded-full"/>
        </a>
        <a href="https://www.linkedin.com/in/piyush-sharma-b7253a2a2" target="_blank">
          <LinkedInicon className="w-10 h-10 rounded-full shadow-lg"/>
        </a>
        <a>
          <Emailicon className="w-10 h-10 shadow-lg rounded-full"/>
        </a>
      </div>
    </section>
  )
}

export default Home
