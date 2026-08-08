import Githubicon from "./icons/Githubicon.jsx"
import LinkedInicon from "./icons/LinkedInicon.jsx"
import Emailicon from "./icons/Emailicon.jsx"
import Closeicon from "./icons/Closeicon.jsx"
import Moonicon from "./icons/Moonicon.jsx"

function Menupanel() {
  return (
    <div className="fixed z-999 top-0 right-0 w-screen h-dvh backdrop-blur-sm translate-x-100">
      <nav className=" p-8 fixed flex flex-col top-0 right-0 w-3/4 text-xl h-dvh bg-[#f6f6f6]">
        <div className="flex justify-between w-100%">
          <button><Moonicon className="w-8 h-8 fill-current"/></button>
          <button><Closeicon className="w-8 h-8 fill-current"/></button>
        </div>
        <ul className="grow my-8">
          <a>
          <li className="py-3 text-center font-bold">Blog</li>
          </a>
          <a>
          <li className="py-3 text-center font-bold">Resume</li>
          </a>
          <a>
          <li className="py-3 text-center font-bold">Certificates</li>
          </a>
          <a>
          <li className="py-3 text-center font-bold">LeetCode</li>
          </a>
          <a>
          <li className="py-3 text-center font-bold">Codeforces</li>
          </a>
          <a>
          <li className="py-3 text-center font-bold">CodePen</li>
          </a>
          <a>
          <li className="py-3 text-center font-bold">CSS Battle</li>
          </a>
        </ul>
        <div className="flex items-center justify-between w-full *:m-1">
        <a href="https://github.com/piyushify" target="_blank">
          <Githubicon className="w-9 h-9 shadow-lg rounded-full border-3 border-[#f6f6f6]"/>
        </a>
        <a href="https://www.linkedin.com/in/piyush-sharma-b7253a2a2" target="_blank">
          <LinkedInicon className="w-9 h-9 shadow-lg rounded-full border-3 border-[#f6f6f6]"/>
        </a>
        <a>
          <Emailicon className="w-9 h-9 shadow-lg rounded-full border-3 border-[#f6f6f6]"/>
        </a>
      </div>
      </nav>
    </div>
  )
}
export default Menupanel