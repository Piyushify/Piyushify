import Menuicon from "./icons/Menuicon.jsx"


function Header() {
  return (
    <header className="fixed top-0 flex w-screen shadow-sm backdrop-blur-sm justify-between px-4 py-3 ">
      <div>
        <h1 className="font-black text-3xl md:text-4xl lg:text-5xl text-shadow-lg">Piyushify</h1>
        <h2 className="text-xs font-semibold text-center text-[#bb8866]! text-shadow-md">Growing with the flow</h2>
      </div>
      <button onClick={() => alert("clicked")}>
        <Menuicon className="fill-current w-7 h-7 backdrop-filter-md"/>
      </button>
      
    </header>
  )
}

export default Header
