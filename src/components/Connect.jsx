function Connect(){
  return (
    <section className="p-6 flex flex-col pb-20 ">
      <h2 className="pb-10 text-center font-bold text-3xl md:text-3xl lg:text-4xl text-shadow-sm">Connect</h2>
      <form className="flex gap-5 flex-col *:text-shadow-sm">
        <input type="text" placeholder="Full Name" className="shadow-md inset-shadow-xs rounded-3xl w-full text-lg md:text-xl lg:text-2xl px-4 py-3 focus:ring-2 outline-none focus:ring-current/20"/>
        <input type="text" placeholder="Email Address" className="shadow-md inset-shadow-xs rounded-3xl w-full text-lg md:text-xl lg:text-2xl px-4 py-3 focus:ring-2 outline-none focus:ring-current/20"/>
        <textarea placeholder="Message" rows="4" className="shadow-md inset-shadow-xs rounded-3xl text-lg md:text-xl lg:text-2xl p-4 focus:ring-2 outline-none focus:ring-current/20 resize-none"></textarea>
        <button className="shadow-md inset-shadow-xs text-lg md:text-xl lg:text-2xl font-bold self-center py-2 px-3 rounded-3xl">Submit</button>
      </form>
    </section>
  )
}

export default Connect