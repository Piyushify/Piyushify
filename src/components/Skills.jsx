import Cicon from "./icons/Cicon.jsx"
import Htmlicon from "./icons/Htmlicon.jsx"
import Cssicon from "./icons/Cssicon.jsx"
import Jsicon from "./icons/Jsicon.jsx"
import Tsicon from "./icons/Tsicon.jsx"
import Phpicon from "./icons/Phpicon.jsx"
import Mysqlicon from "./icons/Mysqlicon.jsx"
import Reactjsicon from "./icons/Reactjsicon.jsx"
import Tailwindcssicon from "./icons/Tailwindcssicon.jsx"
import Cppicon from "./icons/Cppicon.jsx"
import Linuxicon from "./icons/Linuxicon.jsx"
import Giticon from "./icons/Giticon.jsx"
import Githubicon from "./icons/Githubicon.jsx"

function Skills(){
  return (
    <section className="p-6 flex flex-col pb-20">
      <h2 className="pb-10 text-center font-bold text-3xl md:text-3xl lg:text-4xl text-shadow-sm">Skills</h2>
      <ul className="text-center flex flex-col items-center justify-center *:text-shadow-sm">
        <li>
          <h3 className="pb-5 font-bold text-xl md:text-3xl lg:text-4xl">Frontend Dev.</h3>
          <ul className="pb-5 text-md *:font-bold flex gap-3.5 *:shadow-sm *:inset-shadow-sm *:rounded-3xl flex-wrap *:flex *:w-fit *:flex-row *:p-3 *:items-center justify-center *:justify-center">
            <li><Htmlicon className="w-5 h-5 mr-1"/>HTML</li>
            <li><Cssicon className="w-5 h-5 mr-1"/> CSS</li>
            <li><Jsicon className="w-5 h-5 mr-1"/> JavaScript</li>
            <li><Tsicon className="w-5 h-5 mr-1"/> TypeScript</li>
            <li><Reactjsicon className="w-5 h-5 mr-1"/>React</li>
            <li><Tailwindcssicon className="w-5 h-5 mr-1"/> Tailwind</li>
          </ul>
        </li>
        <li>
          <h3 className="pb-5 font-bold text-xl md:text-3xl lg:text-4xl text-shadow-sm">Backend & Databases</h3>
          <ul className="pb-5 text-md *:font-bold flex gap-3.5 *:shadow-sm *:inset-shadow-sm *:rounded-3xl flex-wrap *:flex *:w-fit *:flex-row *:p-3 *:items-center justify-center *:justify-center">
            <li><Phpicon className="w-5 h-5 mr-1"/> PHP</li>
            <li><Mysqlicon className="w-5 h-5 mr-1"/> MySQL</li>
          </ul>
        </li>
        <li>
          <h3 className="pb-5 font-bold text-xl md:text-3xl lg:text-4xl text-shadow-sm">Systems Programming</h3>
          <ul className="pb-5 text-md *:font-bold flex gap-3.5 *:shadow-sm *:inset-shadow-sm *:rounded-3xl flex-wrap *:flex *:w-fit *:flex-row *:p-3 *:items-center justify-center *:justify-center">
            <li><Cicon className="w-5 h-5 mr-1"/> C</li>
            <li><Cppicon className="w-5 h-5 mr-1"/> C++</li>
            
            
          </ul>
        </li>
        <li>
          <h3 className="pb-5 font-bold text-xl md:text-3xl lg:text-4xl text-shadow-sm">Tools & DevOps</h3>
          <ul className="text-md *:font-bold flex gap-3.5 *:shadow-sm *:inset-shadow-sm *:rounded-3xl flex-wrap *:flex *:w-fit *:flex-row *:p-3 *:items-center justify-center *:justify-center">
            <li><Giticon className="w-5 h-5 mr-1"/> Git</li>
            <li><Githubicon className="w-5 h-5 mr-1"/> GitHub</li>
            <li><Linuxicon className="w-5 h-5 mr-1"/> Linux</li>
          </ul>
        </li>
      </ul>
      </section>
  )
}

export default Skills