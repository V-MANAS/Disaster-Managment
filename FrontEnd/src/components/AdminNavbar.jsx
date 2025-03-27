// import  { useState } from "react";
// import { NavLink } from "react-router-dom";
// import styles from "./AdminNavbar.module.css";
// import chatbotIcon from "../assets/chatbot.png";
// import rakshaLogo from "../assets/raksha-logo.png";
// import Chatbot from "./Chatbot";

// function Navbar() {
//   const [isChatbotVisible, setIsChatbotVisible] = useState(false);

//   const toggleChatbot = () => {
//     setIsChatbotVisible(!isChatbotVisible);
//   };

//   return (
//     <div className={styles.navContainer}>
//       <div className={styles.chatbot} onClick={toggleChatbot}>
//         <img src={chatbotIcon} alt="chatbot" height="55px" width="55px" />
//       </div>
//       <nav className={styles.nav}>
//         <div className={styles.logoImage}>
//           <NavLink to="/"  className={({ isActive }) =>
//                 isActive ? styles.active : styles.navLink
//               }><img src={rakshaLogo} alt="logo" /></NavLink>
          
//         </div>
//         <ul>
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? styles.active : styles.navLink
//               }
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/guide"
//               className={({ isActive }) =>
//                 isActive ? styles.active : styles.navLink
//               }
//             >
//               Guide
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/helpline"
//               className={({ isActive }) =>
//                 isActive ? styles.active : styles.navLink
//               }
//             >
//               Helpline
//             </NavLink>
//           </li>
//         </ul>
//       </nav>

//       {isChatbotVisible && (
//         <div className={styles.chatbotPopup}>
//           <Chatbot />
//           <button onClick={toggleChatbot} className={styles.closeButton}>
//             Close
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;



// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import styles from "./AdminNavbar.module.css";
// import chatbotIcon from "../assets/chatbot.png";
// import rakshaLogo from "../assets/raksha-logo.png";
// import Chatbot from "./Chatbot";

// function Navbar() {
//   const [isChatbotVisible, setIsChatbotVisible] = useState(false);
//   // const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); // Admin login state

//   const toggleChatbot = () => {
//     setIsChatbotVisible(!isChatbotVisible);
//   };

 

//   return (
//     <div className={styles.navContainer}>
//       <div className={styles.chatbot} onClick={toggleChatbot}>
//         <img src={chatbotIcon} alt="chatbot" height="55px" width="55px" />
//       </div>
//       <nav className={styles.nav}>
//         <div className={styles.logoImage}>
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive ? styles.active : styles.navLink
//             }
//           >
//             <img src={rakshaLogo} alt="logo" />
//           </NavLink>
//         </div>
//         <ul>
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? styles.active : styles.navLink
//               }
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/guide"
//               className={({ isActive }) =>
//                 isActive ? styles.active : styles.navLink
//               }
//             >
//               Guide
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/helpline"
//               className={({ isActive }) =>
//                 isActive ? styles.active : styles.navLink
//               }
//             >
//               Helpline
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? styles.active : styles.navLink
//               }
//             >
//               Logout
//             </NavLink>
//           </li>
         
//         </ul>
//       </nav>

//       {isChatbotVisible && (
//         <div className={styles.chatbotPopup}>
//           <Chatbot />
//           <button onClick={toggleChatbot} className={styles.closeButton}>
//             Close
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;





import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./AdminNavbar.module.css";
import chatbotIcon from "../assets/chatbot.png";
import rakshaLogo from "../assets/raksha-logo.png";
import Chatbot from "./Chatbot";

function AdminNavbar() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); // Admin login state
  const navigate = useNavigate();

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  useEffect(() => {
    // Check if the admin is logged in
    const isLoggedIn = localStorage.getItem("loggedIn") === "true" && localStorage.getItem("role") === "admin";
    setIsAdminLoggedIn(isLoggedIn);
  }, []);

  const handleLogout = () => {
    // Clear login data from localStorage
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("role");
    setIsAdminLoggedIn(false); // Update state to reflect logout
    navigate("/"); // Redirect to home page
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.chatbot} onClick={toggleChatbot}>
        <img src={chatbotIcon} alt="chatbot" height="55px" width="55px" />
      </div>
      <nav className={styles.nav}>
        <div className={styles.logoImage}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
          >
            <img src={rakshaLogo} alt="logo" />
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/guide"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              Guide
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/helpline"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              Helpline
            </NavLink>
          </li>
          <li>
            {isAdminLoggedIn ? (
              <button onClick={handleLogout} className={styles.logoutButton}>
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.navLink
                }
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>

      {isChatbotVisible && (
        <div className={styles.chatbotPopup}>
          <Chatbot />
          <button onClick={toggleChatbot} className={styles.closeButton}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default AdminNavbar;
