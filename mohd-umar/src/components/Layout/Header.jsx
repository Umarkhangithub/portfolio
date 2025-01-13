import { NavLink } from "react-router-dom";
import ButtonComponent from "../UI/Button";
import Resume from "../../assets/Resume.pdf";
import "./Header.scss";

const Header = () => {
  return (
    <div className="fixed top-0 navbar backdrop-blur-lg bg-opacity-85 bg-black shadow-sm z-50 ">
      <div className="flex justify-between items-center w-[1200px] mx-auto">
        
        {/* Left: Drawer Menu for Mobile */}
        <div className="grid grid-flow-col navbar-start">
          <div className="w-auto drawer lg:hidden mr-10">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer" className="drawer-button">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>
              </label>
            </div>

            {/* Sidebar Menu */}
            <div className="drawer-side">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-sky-500 text-base-content min-h-full w-60 p-4">
                {["/", "/about", "/education", "/services", "/contact"].map((path, index) => (
                  <li key={index}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive
                          ? "btn bg-sky-500 text-white w-full"
                          : "btn bg-white text-sky-500 hover:bg-sky-700 hover:text-white w-full"
                      }
                    >
                      {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <ButtonComponent>
                    <NavLink to="/userauth">Add Project</NavLink>
                  </ButtonComponent>
                </li>
              </ul>
            </div>
          </div>

          {/* Logo */}
          <div className="col-span-2 w-full">
            <NavLink to="/" className="text-2xl font-bold">
              Mohd <span className="text-sky-500">Umar</span>
            </NavLink>
          </div>
        </div>

        {/* Center: Navigation Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/education", label: "Education" },
              { to: "/services", label: "Services" },
              { to: "/projectlist", label: "Project" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? " bg-sky-500 text-white"
                      : "  text-sky-500 hover:bg-sky-700 hover:text-white"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Resume & Add Project Button */}
        <div className="grid gap-3 grid-flow-col navbar-end mr-4 lg:mr-10">
          <div>
            <ButtonComponent href={Resume} download={"Mohd_Umar.pdf"}>
              Resume
            </ButtonComponent>
          </div>
          <div className="hidden lg:block">
            <ButtonComponent>
              <NavLink to="/addproject">Add Project</NavLink>
            </ButtonComponent>
             {/* userauth */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
