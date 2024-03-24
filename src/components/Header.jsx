// *******************************************************************************************************************

// Header.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoMdSearch,
  IoMdMenu,
} from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import "./Header.scss"; // Import your Sass file
import logo from "../img/shopping-online.jpg";

const Header = () => {
  const initialMenuItems = [
    "Home",
    "Electronics",
    "Books",
    "Music",
    "Movies",
    "Clothing",
    "Games",
  ];
  const [additionalItems, setAdditionalItems] = useState([
    "Furniture",
    "Travel",
    "Botanical",
  ]);

  const [displayedItems, setDisplayedItems] = useState(initialMenuItems);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  // Function to handle hovering over dropdown item
  const handleItemHover = (item) => {
    setHoveredItem(item);
  };

  // Function to handle resizing and adjusting menu items
  useEffect(() => {
    const handleResize = () => {
      if (!headerRef.current || !menuRef.current) return;

      const headerWidth = headerRef.current.offsetWidth;
      const menuWidth = menuRef.current.offsetWidth;
      const remainingWidth = headerWidth - menuWidth;

      // Check if remaining width is negative
      if (remainingWidth < 0) {
        // Move items to "More" section if they don't fit in the header
        const lastItem = displayedItems.pop();
        setDisplayedItems([...displayedItems]);
        setAdditionalItems([...additionalItems, lastItem]);
      } else {
        // Reintegrate items from "More" section back into the main menu if there's enough space
        const firstAdditionalItem = additionalItems[0];
        if (
          firstAdditionalItem &&
          remainingWidth >=
            document.getElementById(firstAdditionalItem.toLowerCase())
              .offsetWidth
        ) {
          const removedItem = additionalItems.shift();
          setDisplayedItems([...displayedItems, removedItem]);
          setAdditionalItems([...additionalItems]);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [displayedItems, additionalItems]);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // Mobile
  // const [mobileOpen, setMobileOpen] = useState(false);
  // // handle menu click

  return (
    <header id="header" className="header" ref={headerRef}>
      <div className="header-title">
        <img src={logo} alt="" className="logo" />
        <h1>E-COM</h1>
      </div>
      <div>
        <nav id="menu" className="menu" ref={menuRef}>
          {displayedItems.map((item) => (
            <div
              key={item.toLowerCase()}
              id={item.toLowerCase()}
              className="menu-item"
            >
              {item}
            </div>
          ))}
          <div
            className="category"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <span className="menu-drop">More</span>
            {isDropdownVisible ? (
              <IoIosArrowUp className="icon" style={{ color: "blue" }} />
            ) : (
              <IoIosArrowDown className="icon" />
            )}
            {isDropdownVisible && (
              <div className="dropdown">
                {additionalItems.map((item) => (
                  <div
                    className="menu-drop-item"
                    key={item.toLowerCase()}
                    onMouseEnter={() => handleItemHover(item)}
                    onMouseLeave={() => handleItemHover(null)}
                  >
                    {item}{" "}
                    {hoveredItem === item && (
                      <FaCheck style={{ margin: "5px", color: "blue" }} />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
      <div className="search">
        <IoMdSearch style={{ fontSize: "25px", marginRight: "10px" }} />
        <input placeholder="Search something" className="search-box" />
      </div>
    </header>
  );
};

export default Header;

// import React, { useState, useRef } from "react";
// import { IoMdSearch, IoMdMenu } from "react-icons/io";
// import { FaCheck } from "react-icons/fa6";
// import "./Header.scss"; // Import your Sass file
// import logo from "../img/shopping-online.jpg";

// const Header = () => {
//   const initialMenuItems = [
//     "Home",
//     "Electronics",
//     "Books",
//     "Music",
//     "Movies",
//     "Clothing",
//     "Games",
//   ];
//   const additionalItems = ["Furniture", "Travel", "Botanical"];

//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const headerRef = useRef(null);

//   // Function to toggle mobile menu
//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   return (
//     <header id="header" className="header" ref={headerRef}>
//       <div className="header-title">
//         <div className="icon-container">
//           <IoMdMenu className="menu-icon" onClick={toggleMobileMenu} />
//         </div>
//         <img src={logo} alt="" className="logo" />
//         <h1>E-COM</h1>
//       </div>
//       <div className={`menu${mobileMenuOpen ? " mobile-open" : ""}`}>
//         <nav>
//           {initialMenuItems.map((item) => (
//             <div key={item.toLowerCase()} className="menu-item">
//               {item}
//             </div>
//           ))}
//           <div className="category">
//             <span className="menu-drop">More</span>
//             <div className="dropdown">
//               {additionalItems.map((item) => (
//                 <div key={item.toLowerCase()} className="menu-drop-item">
//                   {item}
//                   <FaCheck style={{ margin: "5px", color: "blue" }} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </nav>
//       </div>
//       <div className="search">
//         <IoMdSearch style={{ fontSize: "25px", marginRight: "10px" }} />
//         <input placeholder="Search something" className="search-box" />
//       </div>
//     </header>
//   );
// };

// export default Header;
