import Hearticon from "./icons/Hearticon.jsx"
function Footer() {
  return (
    <footer className="bg-[#f6f6f6] shadow-[0_-1px_3px_rgba(0,0,0,0.1)] backdrop-blur-sm justify-between p-2 text-sm md:text-2xl lg:text-4xl *:text-shadow-md font-bold text-center">
      <p>Made with <Hearticon className="w-4 h-4 inline shadow-md rounded-b-full bg-linear-to-b from-[#f6f6f6] from-30% to-[#4b4b4b]/10 to-30%"/> by Piyush Sharma</p>
      <p>Piyushify &copy; 2026</p>
    </footer>
  )
}

export default Footer
