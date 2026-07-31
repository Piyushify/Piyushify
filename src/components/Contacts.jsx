function Contacts(){
  return (
    <section className="p-5">
      <h2 className="py-6 text-center font-bold text-2xl md:text-3xl lg:text-4xl text-shadow-lg">Contacts</h2>
      <form className="inset-shadow-sm shadow-sm p-5 rounded-3xl flex gap-5 flex-col">
        <input type="text" placeholder="Full Name" className="shadow-md rounded-2xl w-full text-lg md:text-xl lg:text-2xl px-4 py-2 focus:ring-2 outline-none focus:ring-current/20"/>
        <input type="text" placeholder="Email Address" className="shadow-md rounded-2xl w-full text-lg md:text-xl lg:text-2xl px-4 py-2 focus:ring-2 outline-none focus:ring-current/20"/>
        <textarea placeholder="Comment" className="shadow-md rounded-2xl text-lg md:text-xl lg:text-2xl p-4 focus:ring-2 outline-none focus:ring-current/20"></textarea>
        <button className="shadow-md inset-shadow-sm text-lg md:text-xl lg:text-2xl font-bold self-center py-1 px-2 rounded-xl">Submit</button>
      </form>
    </section>
  )
}

export default Contacts