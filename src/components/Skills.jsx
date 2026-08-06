import Cicon from "./icons/Cicon.jsx"
import Htmlicon from "./icons/Htmlicon.jsx"
import Cssicon from "./icons/Cssicon.jsx"
import Jsicon from "./icons/Jsicon.jsx"
import Phpicon from "./icons/Phpicon.jsx"
import Mysqlicon from "./icons/Mysqlicon.jsx"
import Reactjsicon from "./icons/Reactjsicon.jsx"
import Tailwindcssicon from "./icons/Tailwindcssicon.jsx"
import Cppicon from "./icons/Cppicon.jsx"
import Linuxicon from "./icons/Linuxicon.jsx"
import Bashicon from "./icons/Bashicon.jsx"
import Giticon from "./icons/Giticon.jsx"
import Githubicon from "./icons/Githubicon.jsx"

function Skills(){
  return (
    <section className="p-5">
      <h2 className="p-6 text-center font-bold text-2xl md:text-3xl lg:text-4xl text-shadow-lg">Skills</h2>
      <ul className="text-lg flex gap-3.5 font-semibold *:py-2 *:shadow-sm *:inset-shadow-sm *:rounded-2xl flex-wrap *:flex *:w-fit *:p-2 *:items-center justify-center *:justify-center">
        <li><Htmlicon className="w-6 h-6 mr-1"/> HTML5</li>
        <li><Cssicon className="w-6 h-6 mr-1"/> CSS3</li>
        <li><Jsicon className="w-6 h-6 mr-1"/> JavaScript</li>
        <li><Reactjsicon className="w-6 h-6 mr-1"/>React</li>
        <li><Tailwindcssicon className="w-6 h-6 mr-1"/> Tailwind CSS</li>
        <li><Phpicon className="w-6 h-6 mr-1"/> PHP</li>
        <li><Mysqlicon className="w-6 h-6 mr-1"/> MySQL</li>
        <li><Giticon className="w-6 h-6 mr-1"/> Git</li>
        <li><Githubicon className="w-6 h-6 mr-1"/> GitHub</li>
        <li><Cicon className="w-6 h-6 mr-1"/> C</li>
        <li><Cppicon className="w-6 h-6 mr-1"/> C++</li>
        <li><Linuxicon className="w-6 h-6 mr-1"/> Linux</li>
        <li><Bashicon className="w-6 h-6 mr-1"/> Bash</li>
        
      </ul>
      </section>
  )
}

export default Skills