import Logo from '../assets/images/header/logo.svg';
import Cart from '../assets/images/header/cart.svg';
import { useRef, useState } from 'react';
const Header = () => {
  const styles = {
    header: "header bg-mainbgblack",
    container: "container max-w-[1308px] mx-auto",
    header__container: "header__container flex justify-between items-center pt-[30px] pb-[31px] w1320: px-2",
    header__logo: "header__logo block",
    header__link: "header__logo-link",
    header__logo_img: "header__logo-img md:w-100",
    header__nav: "header__nav block md:hidden md:w-screen md:h-screen md:bg-mainbgblack md:absolute md:top-0 md:left-0 md:flex md:pt-40 md:justify-center  md:z-[20]",
    header__nav_list: "header__nav-list flex text-maintextwhite font-normal text-[17px] leading-[27px] first:ml-0 md:flex-col",
    header__nav_item: "header__nav-item ml-10 md:text-center md:ml-0",
    header__nav_link: "header__nav-link",
    header__btn: "header__btn relative",
    header__btn_img: "header__btn-img",
    header__btn_badge: "header__btn-badge w-[18px] h-[18px] rounded-full bg-[#FC5468] absolute flex items-center justify-center text-[11px] leading-[18px] font-normal text-[#fff] top-[-4px] right-[-4px]",
    header__burger_span1: "w-5 h-0.5 block bg-maintextwhite transform duration-500",
    header__burger_span2: "w-5 h-0.5 block bg-maintextwhite mt-1.5 transform duration-500",
    header__btns: "header__buttons flex items-center",
   
  }

  const [toggle, setToggle] = useState({
    isOpen: false,
    header__hamburger: "header__hamburger hidden md:block relative ml-4",
    header__burger_span1: "w-5 h-0.5 block bg-maintextwhite transform duration-500",
    header__burger_span2: "w-5 h-0.5 block bg-maintextwhite mt-1.5 transform duration-500",
    header__burger_span3: "w-5 h-0.5 block bg-maintextwhite mt-1.5 transform duration-500",
  });

  const navRef = useRef();

  const handleToggle = () => {
    navRef.current.classList.toggle('md:hidden');
    if (!toggle.isOpen) {
      setToggle({
        isOpen: !toggle.isOpen,
        header__hamburger: "header__hamburger hidden md:block relative ml-4 py-2",
        header__burger_span1: "w-5 h-0.5 bg-maintextwhite block transform duration-500 rotate-45",
        header__burger_span2: "hidden",
        header__burger_span3: "w-5 h-0.5 bg-maintextwhite block transform duration-500 -rotate-45 -translate-y-0.5"
      });
    }
    else {
      setToggle({
        isOpen: false,
        header__hamburger: "header__hamburger hidden md:block relative ml-4",
        header__burger_span1: "w-5 h-0.5 block bg-maintextwhite transform duration-500",
        header__burger_span2: "w-5 h-0.5 block bg-maintextwhite mt-1.5 transform duration-500",
        header__burger_span3: "w-5 h-0.5 block bg-maintextwhite mt-1.5 transform duration-500",
      });
    }
  }





  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__container}>
          <div className={styles.header__logo}>
            <a className={styles.header__link} href="/">
              <img className={styles.header__logo_img} src={Logo} alt="logo" />
            </a>
          </div>

          <div className={styles.header__nav} onClick={handleToggle} ref={navRef}>
            <ul className={styles.header__nav_list}>
              <li className={styles.header__nav_item}>
                <a className={styles.header__nav_link} href="/">
                  Courses
                </a>
              </li>
              <li className={styles.header__nav_item}>
                <a className={styles.header__nav_link} href="/">
                  Free Workshops
                </a>
              </li>
              <li className={styles.header__nav_item}>
                <a className={styles.header__nav_link} href="/">
                  Blog
                </a>
              </li>
              <li className={styles.header__nav_item}>
                <a className={styles.header__nav_link} href="/">
                  About
                </a>
              </li>
              <li className={styles.header__nav_item}>
                <a className={styles.header__nav_link} href="/">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.header__btns}>
            <button className={styles.header__btn} aria-label="cart" aria-hidden="true" type="button">
              <img className={styles.header__btn_img} src={Cart} alt="cart" />
              <span className={styles.header__btn_badge}>0</span>
            </button>
            <button className={toggle.header__hamburger} type="button" onClick={handleToggle}>
              <span className={toggle.header__burger_span1}></span>
              <span className={toggle.header__burger_span2}></span>
              <span className={toggle.header__burger_span3}></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header