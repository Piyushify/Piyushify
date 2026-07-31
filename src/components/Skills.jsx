import Cicon from "./icons/Cicon.jsx"
import Htmlicon from "./icons/Htmlicon.jsx"
import Cssicon from "./icons/Cssicon.jsx"
import Jsicon from "./icons/Jsicon.jsx"
import Phpicon from "./icons/Phpicon.jsx"
import Mysqlicon from "./icons/Mysqlicon.jsx"
import Reactjsicon from "./icons/Reactjsicon.jsx"
import Tailwindcssicon from "./icons/Tailwindcssicon.jsx"


function Skills(){
  return (
    <section className="p-5 pb-0">
      <h2 className="p-6 text-center font-bold text-2xl md:text-3xl lg:text-4xl text-shadow-lg">Skills</h2>
      <ul className="text-xl font-semibold *:py-2 *:my-5 *:text-center *:shadow-sm *:inset-shadow-sm *:rounded-2xl *:flex *:items-center *:justify-center">
        <li><Cicon/> C language</li>
        <li><Htmlicon/> HTML</li>
        <li><Cssicon/> CSS</li>
        <li><Jsicon/> JavaScript</li>
        <li><Phpicon/> Php</li>
        <li><Mysqlicon/> Mysql</li>
        <li><Reactjsicon/> ReactJS</li>
        <li><Tailwindcssicon/> Tailwind CSS</li>
      </ul>
      </section>
  )
}

export default Skills