import React from "react";

const Header = ({ data }) => {
  return (
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{data.name}</h1>
              <p className="text-gray-600">{data.title}</p>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {["About", "Skills", "Experience", "Projects", "Education"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-600 hover:text-primary-600 transition-colors duration-300 font-medium"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
        </div>
      </header>
  );
};

export default Header;
