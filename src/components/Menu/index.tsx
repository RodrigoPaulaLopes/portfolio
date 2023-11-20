export default function Menu() {
  return (
    <header className="w-11/12 h-1/5">
      <div className="navbar bg-black">
        <div className="navbar-start">
          <div className="dropdown text-emerald-700">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              <li>
                <a className="text-white">Home</a>
              </li>
              <li>
                <a className="text-white">Sobre</a>
              </li>
              <li>
                <a className="text-white">Habilidades</a>
              </li>
              <li>
                <a className="text-white">Projetos</a>
              </li>
              <li>
                <a className="text-white">Contato</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-3 ml-5">
          <i className="devicon-linkedin-plain text-2xl rounded-xl text-emerald-700"></i>
          <i className="devicon-github-original text-2xl text-emerald-700"></i>
        </div>
      </div>
    </header>
  );
}
