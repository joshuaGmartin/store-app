// import { useState, useEffect, useContext } from "react";
// import { CartContext } from "../../App";
// import { getNumItems } from "../../modules/handleCart";
// import { Link } from "react-router";
// import styles from "./Header.module.css";
// import {
//   Github,
//   ShoppingCart,
//   Store,
//   House,
//   Menu,
//   SendHorizonal,
// } from "lucide-react";

// function Header() {
//   const { userCart } = useContext(CartContext);
//   const [showMobileNav, setShowMobileNav] = useState(false);
//   // const [showMobileNav, setShowMobileNav] = useState(true);

//   useEffect(() => {
//     if (showMobileNav) {
//       function handleDocumentClick() {
//         console.log("test");
//         setShowMobileNav(false);
//       }

//       document.addEventListener("click", handleDocumentClick);

//       return () => {
//         document.removeEventListener("click", handleDocumentClick);
//       };
//     }
//   }, [showMobileNav]);

//   return (
//     <div className={styles.header}>
//       {/* =============================== non-mobile =============================== */}
//       <div className={styles.headerNonMobile}>
//         <Link to="/" className={styles.logo}>
//           <h1>the.warehouse.store</h1>
//         </Link>
//         <nav className={styles.navBar}>
//           <Link to="/">
//             <House />
//           </Link>
//           <Link to="/shop">
//             <Store />
//           </Link>
//           <Link className={styles.cartLink} to="/cart">
//             <ShoppingCart />
//             <div className={styles.cartCountWrapper}>
//               <div className={styles.cartCount}>{getNumItems(userCart)}</div>
//             </div>
//             {/* testing */}
//             {/* <div className={styles.cartCountWrapper}>
//               <div className={styles.cartCount}>10</div>
//             </div> */}
//             {/* <div className={styles.cartCountWrapper}>
//               <div className={styles.cartCount}>100</div>
//             </div> */}
//             {/* <div className={styles.cartCountWrapper}>
//               <div className={styles.cartCount}>1000</div>
//             </div> */}
//           </Link>
//           <a
//             href="https://github.com/joshuaGmartin/store-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Github />
//           </a>
//         </nav>
//       </div>

//       {/* =============================== mobile =============================== */}
//       <div className={styles.headerMobile}>
//         <Link to="/" className={styles.logo}>
//           <h1>the.warehouse.store</h1>
//         </Link>
//         <Menu
//           className={styles.hamburger}
//           onClick={(e) => {
//             e.stopPropagation();
//             setShowMobileNav(true);
//           }}
//         />

//         {showMobileNav ? (
//           <nav className={styles.navBar}>
//             <Link to="/">
//               <House />
//             </Link>
//             <Link to="/shop">
//               <Store />
//             </Link>
//             <Link className={styles.cartLink} to="/cart">
//               <ShoppingCart />
//               <div className={styles.cartCountWrapper}>
//                 <div className={styles.cartCount}>{getNumItems(userCart)}</div>
//               </div>
//               {/* testing */}
//               {/* <div className={styles.cartCountWrapper}>
//               <div className={styles.cartCount}>10</div>
//             </div> */}
//               {/* iv className={styles.cartCountWrapper}>
//                 <div className={styles.cartCount}>100</div>
//               </div>      <d */}
//               {/* <div className={styles.cartCountWrapper}>
//                 <div className={styles.cartCount}>1000</div>
//               </div> */}
//             </Link>
//             <a
//               href="https://github.com/joshuaGmartin/store-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Github />
//             </a>
//           </nav>
//         ) : null}
//       </div>
//     </div>
//   );
// }

// export default Header;

import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../App";
import { getNumItems } from "../../modules/handleCart";
import { Link } from "react-router";
import styles from "./Header.module.css";
import {
  Github,
  ShoppingCart,
  Store,
  House,
  Menu,
  SendHorizonal,
} from "lucide-react";

function Header() {
  const { userCart } = useContext(CartContext);
  const [showMobileNav, setShowMobileNav] = useState(false);
  // const [showMobileNav, setShowMobileNav] = useState(true);

  useEffect(() => {
    if (showMobileNav) {
      function handleDocumentClick() {
        console.log("test");
        setShowMobileNav(false);
      }

      document.addEventListener("click", handleDocumentClick);

      return () => {
        document.removeEventListener("click", handleDocumentClick);
      };
    }
  }, [showMobileNav]);

  return (
    <>
      <div className={styles.header}>
        {/* =============================== non-mobile =============================== */}
        <div className={styles.headerNonMobile}>
          <Link to="/" className={styles.logo}>
            <h1>the.warehouse.store</h1>
          </Link>
          <nav className={styles.navBar}>
            <Link to="/">
              <House />
            </Link>
            <Link to="/shop">
              <Store />
            </Link>
            <Link className={styles.cartLink} to="/cart">
              <ShoppingCart />
              <div className={styles.cartCountWrapper}>
                <div className={styles.cartCount}>{getNumItems(userCart)}</div>
              </div>
              {/* testing */}
              {/* <div className={styles.cartCountWrapper}>
              <div className={styles.cartCount}>10</div>
              </div> */}
              {/* <div className={styles.cartCountWrapper}>
              <div className={styles.cartCount}>100</div>
              </div> */}
              {/* <div className={styles.cartCountWrapper}>
              <div className={styles.cartCount}>1000</div>
              </div> */}
            </Link>
            <a
              href="https://github.com/joshuaGmartin/store-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </nav>
        </div>

        {/* =============================== mobile =============================== */}
        <div className={styles.headerMobile}>
          <Link to="/" className={styles.logo}>
            <h1>the.warehouse.store</h1>
          </Link>
          <Menu
            className={styles.hamburger}
            onClick={(e) => {
              e.stopPropagation();
              setShowMobileNav(true);
            }}
          />
        </div>
      </div>

      <nav
        className={`${styles.mobileNavBar} ${showMobileNav ? styles.showMobileNav : null}`}
      >
        <Link to="/">
          <House />
        </Link>
        <Link to="/shop">
          <Store />
        </Link>
        <Link className={styles.cartLink} to="/cart">
          <ShoppingCart />
          <div className={styles.cartCountWrapper}>
            <div className={styles.cartCount}>{getNumItems(userCart)}</div>
          </div>
          {/* testing */}
          {/* <div className={styles.cartCountWrapper}>
              <div className={styles.cartCount}>10</div>
              </div> */}
          {/* iv className={styles.cartCountWrapper}>
                <div className={styles.cartCount}>100</div>
                </div>      <d */}
          {/* <div className={styles.cartCountWrapper}>
                <div className={styles.cartCount}>1000</div>
                </div> */}
        </Link>
        <a
          href="https://github.com/joshuaGmartin/store-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
      </nav>
      {/* bug fix: need made header sticky for mobile rubberbanding. Thus, need spacer for rest of site beneath header */}
      <div className={styles.spacer}></div>
    </>
  );
}

export default Header;
