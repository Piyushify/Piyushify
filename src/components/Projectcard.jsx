import { useState } from "react"
import Careticon from "./icons/Careticon.jsx"

function Projectcard({address, image, title, tech, description}){
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
              <Careticon className={`transition-transform duration-300 w-5 h-5 fill-current 
              ${ showDesc ? "rotate-180" : ""}`} />
            </button></h3>
          {showDesc && (
          <>
            <fieldset className="border-2 border-current/5 p-3 rounded-2xl text-md md:text-lg lg:text-xl mt-3 text-center rounded-3xl">
              <legend><b>Tech</b></legend>
              <p>{tech}</p>
            </fieldset>
            <fieldset className="text-md md:text-lg lg:text-xl p-3 mt-3 border-2 border-current/5 text-center rounded-3xl mb-3">
              <legend><b>Description</b></legend>
              <p>{description}</p>
              </fieldset>
          </>
        )}
          <div className="flex justify-evenly mt-3">
            <button className="shadow-md inset-shadow-sm rounded-2xl py-2 px-3 font-bold">Visit Site</button>
            <button className="shadow-md inset-shadow-sm rounded-2xl py-2 px-3 font-bold">Github</button>
          </div>
          </article>
      </li>
    </ul>
  )
}

export default Projectcard