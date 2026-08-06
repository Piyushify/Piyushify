import Githubicon from "./icons/Githubicon.jsx"
import LinkedInicon from "./icons/LinkedInicon.jsx"
import Emailicon from "./icons/Emailicon.jsx"
import Closeicon from "./icons/Closeicon.jsx"
import Moonicon from "./icons/Moonicon.jsx"

function Menupanel() {
  return (
    <div className="fixed z-999 top-0 right-0 w-screen h-dvh backdrop-blur-sm translate-x-0">
      <nav className=" p-4 fixed flex flex-col top-0 right-0 w-3/4 text-xl h-dvh bg-[#f6f6f6]">
        <div className="mx-4 my-2 flex justify-between w-100%">
          <button><Moonicon className="w-8 h-8 fill-current"/></button>
          <button><Closeicon className="w-8 h-8 fill-current"/></button>
        </div>
        <ul className="grow my-4">
          <a>
          <li className="py-2 text-center font-bold">Blog</li>
          </a>
          <a>
          <li className="py-2 text-center font-bold">Resume</li>
          </a>
          <a>
          <li className="py-2 text-center font-bold">CV</li>
          </a>
        </ul>
        <div className="flex items-center justify-evenly w-full *:m-1 p-4">
        <a href="https://github.com/piyushify" target="_blank">
          <Githubicon className="w-9 h-9 fill-[#000000] shadow-lg rounded-full border-3 border-[#f6f6f6]"/>
        </a>
        <a href="https://www.linkedin.com/in/piyush-sharma-b7253a2a2" target="_blank">
          <LinkedInicon className="w-9 h-9 border-3 border-[#f6f6f6] rounded-full shadow-lg"/>
        </a>
        <a>
          <Emailicon className="w-9 h-9 fill-current shadow-lg rounded-3xl border-3 border-[#f6f6f6]"/>
        </a>
      </div>
      </nav>
    </div>
  )
}
export default Menupanel