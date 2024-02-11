export const Footer = () => {
  return (
    <footer>
        <p className="text-center text-gray-600 py-10 text-lg">
          &copy; {new Date().getFullYear()} {" | "}
          <a href="https://github.com/rody-huancas/" target="_blank" className="text-indigo-600 font-medium uppercase underline">Rody Huancas</a> 
        </p>
    </footer>
  )
}
