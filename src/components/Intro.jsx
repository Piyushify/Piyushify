import dp from "../assets/dp.png"
import Githubicon from "./icons/Githubicon.jsx"
import LinkedInicon from "./icons/LinkedInicon.jsx"
function Intro() {
  let greet = "Hi there 👋🏼";
  let info = "A BCA student.";
  return (
    <section className="h-dvh flex items-center flex-col justify-center p-6 pt-20">
      <img src={dp} className="w-32 h-32 self-start rounded-full inset-shadow-sm shadow-lg"/>
      <p className="text-3xl md:text-5xl lg:text-7xl w-screen py-3 px-6 font-semibold">{greet}</p>
      <p className="text-3xl md:text-5xl lg:text-7xl">I'm <b>Piyush Sharma</b>.</p>
      <p className="text-3xl md:text-5xl lg:text-7xl">{info}</p>
      <div className="flex items-center justify-start w-full *:m-1">
        <a href="https://github.com/piyushify" target="_blank"><Githubicon/></a>
        <a href="https://www.linkedin.com/in/piyush-sharma-b7253a2a2" target="_blank"><LinkedInicon/></a>
      </div>
    </section>
  )
}

export default Intro
