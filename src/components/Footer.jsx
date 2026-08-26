import Hearticon from "./icons/Hearticon.jsx"
function Footer() {
  return (
    <footer className="bg-[#f6f6f6] shadow-[0_-1px_3px_rgba(0,0,0,0.1)] backdrop-blur-sm justify-between p-4 text-md md:text-2xl lg:text-4xl *:text-shadow-md font-bold text-center">
      <p>Made with <Hearticon className="w-4 h-4 inline"/> by Piyush Sharma</p>
      <p>Piyushify &copy; 2026</p>
    </footer>
  )
}

export default Footer
