import React, { useState, useEffect } from "react";
import style from "./Header.module.scss";
import logo from "../../About/logo.png";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { AiOutlineDelete } from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartActive, setIsCartActive] = useState(false);
  const [isCartActivee, setIsCartActivee] = useState(false);
  const [isCartActiveee, setIsCartActiveee] = useState(false);




  const userInfo = useSelector((state) => state.auth.userInfo);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartActive(!isCartActive);
  };
  const toggleCartt = () => {
    setIsCartActivee(!isCartActivee);
  };
  const toggleCarttt = () => {
    setIsCartActiveee(!isCartActiveee);
  };

  const [data, setData] = useState([]);


  

  const getData = () => {
    axios
      .get("https://6686cba783c983911b03a94a.mockapi.io/wish")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        toast.error("Error fetching data");
      });
  };

  useEffect(() => {
    getData(); // Sayfa ilk yüklendiğinde veriyi al
    const interval = setInterval(() => {
      getData(); // Belirli aralıklarla yeniden al (örneğin her 5 saniyede bir)
    }, 1000); // 5000 milisaniye = 5 saniye

    return () => clearInterval(interval); // Component unmount edildiğinde interval'i temizle
  }, []);

  const deleteItem = (id) => {
    axios
      .delete(`https://6686cba783c983911b03a94a.mockapi.io/wish/${id}`)
      .then(() => {
        toast.success("Item deleted successfully");
        getData();
      })
      .catch((err) => {
        toast.error("Error deleting item");
      });
  };

  return (
    <header className={style.header}>
      <a href="/" className={style.logo}>
        <img src={logo} alt="logo" />
      </a>
      <nav className={style.navbar}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/menu">Menu</a>
        <a href="/product">Products</a>
        <a href="/review">Review</a>
        <a href="/contact">Contacts</a>
        <div className={style.licensing}>
          <a onClick={toggleMenu} className={style.Dropdowna}>
            Account
            <svg
              className={style.arrowIcon}
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.57926 7.03499C4.57933 6.73524 4.75993 6.46502 5.03687 6.35032C5.31381 6.23562 5.63258 6.299 5.84457 6.51093L11.2505 11.9168L16.6564 6.51093C16.9472 6.23002 17.4096 6.23404 17.6955 6.51996C17.9814 6.80589 17.9854 7.26821 17.7045 7.55906L11.7745 13.489C11.4851 13.7784 11.0159 13.7784 10.7264 13.489L4.79645 7.55906C4.65743 7.42008 4.57931 7.23157 4.57926 7.03499Z"
                fill="#6D7378"
              ></path>
            </svg>
          </a>
          {isMenuOpen && (
            <ul className={style.Dropdown}>
              {userInfo ? (
                <>
                  <a href="/profile">Profile</a>
                  <a href="/logout">Logout</a>
                </>
              ) : (
                <>
                  <a href="/register">Register</a>
                  <a href="/login">Login</a>
                </>
              )}
            </ul>
          )}
        </div>
      </nav>
      <div className={style.buttons}>
        <button id="search-btn">
          <a href="#menu">
            <i
              className="fas fa-search"
            ></i>
          </a>
        </button>

        <button id="cart-btn" onClick={toggleCart}>
          <i className="fas fa-shopping-cart" onClick={toggleCarttt}></i>
          {isCartActiveee && (
            <div className={style.DropdownnCart}>
              <div className={style.cardscroll}>
                {data.map((item) => (
                  <div className={style.box} id="card" key={item.id}>
                    <div className={style.cardsHeader}>
                      <img
                        src={item.thumbnail}
                        className={style.imgs}
                        alt={item.title}
                      />
                      <div
                        style={{
                          color: "black",
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                        }}
                      >
                        <p className={style.description}>{item.description}</p>
                        <h3 className={style.title}>{item.title}</h3>
                        <span>${item.price}</span>
                      </div>
                    </div>
                    <div className={style["box-bottom"]}>
                      <button
                        type="button"
                        onClick={() => deleteItem(item.id)}
                        className={style.btne}
                      >
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <span id="item-count"></span>
        </button>

        <button id="menu-btn" className={style.menubtn}>
          <i
            className="fas fa-bars"
            onClick={toggleCartt}
            style={{ position: "relative" }}
          >
            {isCartActivee && (
              <div className={style.Dropdownn}>
                <nav className={style.navebar}>
                  <a href="/">Home</a>
                  <a href="/about">About</a>
                  <a href="/menu">Menu</a>
                  <a href="/product">Products</a>
                  <a href="/review">Review</a>
                  <a href="/contact">Contacts</a>
                  {userInfo && (
                    <>
                      <a href="/profile">Profile</a>
                      <a href="/logout">Logout</a>
                    </>
                  )}
                  {!userInfo && (
                    <>
                      <a href="/register">Register</a>
                      <a href="/login">Login</a>
                    </>
                  )}
                </nav>
              </div>
            )}
          </i>
        </button>
      </div>

      {isCartActive && (
        <div className={style["cart-items-container"]}>
          {/* Sepet içeriği buraya eklenebilir */}
        </div>
      )}
    </header>
  );
};

export default Header;
