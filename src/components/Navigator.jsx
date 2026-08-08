function Navigator() {
  return (
    <nav className="fixed right-0 -translate-y-[50%] top-[50dvh] flex backdrop-blur-sm items-center px-2 py-3 pr-3 rounded-l-3xl shadow-md duration-200 ease-in-out">
      <div className="z-998 *:w-2.5 *:h-2.5 *:bg-current gap-0.5 *:rounded-sm  rounded-xl grid grid-cols-2 inset-shadow-sm shadow-sm border-2 border-current/2 backdrop-blur-sm p-1.25">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navigator