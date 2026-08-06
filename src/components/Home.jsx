import dp from "../assets/dp.png"
import Githubicon from "./icons/Githubicon.jsx"
import LinkedInicon from "./icons/LinkedInicon.jsx"
import Emailicon from "./icons/Emailicon.jsx"
function Home() {
  let greet = "Hi there 👋🏼";
  let info = "A BCA student.";
  return (
    <section className="h-dvh flex items-center flex-col justify-center p-6 pt-20">
      <img src={dp} className="w-32 h-32 self-start rounded-full inset-shadow-sm shadow-lg"/>
      <p className="text-3xl md:text-5xl lg:text-7xl w-screen py-3 px-6 font-semibold">{greet}</p>
      <p className="text-3xl md:text-5xl lg:text-7xl">I'm <b>Piyush Sharma</b>.</p>
      <p className="text-3xl md:text-5xl lg:text-7xl">{info}</p>
      <div className="flex items-center justify-evenly w-full *:m-1 p-3">
        <a href="https://github.com/piyushify" target="_blank">
          <Githubicon className="w-11 h-11 fill-[#000000] shadow-lg rounded-full border-3 border-[#f6f6f6]"/>
        </a>
        <a href="https://www.linkedin.com/in/piyush-sharma-b7253a2a2" target="_blank">
          <LinkedInicon className="w-11 h-11 border-3 border-[#f6f6f6] rounded-full shadow-lg"/>
        </a>
        <a>
          <Emailicon className="w-11 h-11 fill-current shadow-lg rounded-3xl border-3 border-[#f6f6f6]"/>
        </a>
      </div>
    </section>
  )
}

export default Home
