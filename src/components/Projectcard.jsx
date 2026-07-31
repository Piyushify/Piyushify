import { useState } from "react"
import Caret from "./icons/Caret.jsx"

function Projectcard({address, image, title, description}){
  const [showDesc, setshowDesc] = useState(false);
  return (
    <ul>
      <li>
        <article className="shadow-md rounded-3xl p-5 inset-shadow-sm">
          <a href={address} target="_blank">
            <img src={image} className=" rounded-2xl shadow-md inset-shadow-sm"/>
          </a>
          <h3 className="flex items-center justify-center font-bold text-xl md:text-2xl lg:text-3xl pt-4">{title}
            <button onClick={() => setshowDesc(!showDesc)}>
              <Caret className={`transition-transform duration-300 w-5 h-5 fill-current 
              ${ showDesc ? "rotate-180" : ""}`} />
            </button></h3>
          {showDesc && (
            <p className="text-lg md:text-xl lg:text-2xl p-3 mt-3 inset-shadow-xs shadow-xs rounded-3xl">{description}</p>
          )}
          </article>
      </li>
    </ul>
  )
}

export default Projectcard