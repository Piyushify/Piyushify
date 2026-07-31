import Menuicon from "./icons/Menuicon.jsx"


function Header() {
  return (
    <header className="fixed top-0 flex w-screen shadow-sm backdrop-blur-sm justify-between px-4 py-3 text-3xl md:text-4xl lg:text-5xl *:text-shadow-lg">
      <div>
        <h1 className="font-black">Piyushify</h1>
        <h2 className="text-xs font-semibold text-center">Growing with the flow</h2>
      </div>
      <button onClick={() => alert("clicked")}>
        <Menuicon/>
      </button>
      
    </header>
  )
}

export default Header
