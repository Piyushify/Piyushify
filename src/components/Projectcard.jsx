function Projectcard({address, image, title, tech, description}){
  return (
    <ul>
      <li>
        <article className="p-6 shadow-sm rounded-4xl overflow-hidden inset-shadow-sm *:text-shadow-sm">
          <h3 className="pb-4 font-bold text-2xl md:text-2xl lg:text-3xl text-shadow-sm text-center">{title}</h3>
          <p className="px-2 text-lg text-center">{description}</p>
          <p className="p-2 text-lg text-center">{tech}</p>
          <div className="flex mt-4 *:grow *:py-3 *:font-bold gap-4 *:rounded-3xl *:inset-shadow-sm *:shadow-xs *:text-shadow-sm">
            <button className="">Visit-Site</button>
            <button className="">GitHub</button>
          </div>
          </article>
      </li>
    </ul>
  )
}

export default Projectcard