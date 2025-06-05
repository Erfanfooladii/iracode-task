import Image from "next/image";
import Logo from "../../assets/images/logo_white.svg";
import styles from "./syle.module.css";
import { IoSearchOutline } from "react-icons/io5";
import { LuChevronDown, LuUser } from "react-icons/lu";
import { CiShuffle } from "react-icons/ci";
import { BsHeart } from "react-icons/bs";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CgMenuLeft } from "react-icons/cg";
import { AiOutlineAppstore } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";

const Header = () => {
  const buttonsNavbar = [
    {
      title: "Home",
      icon: <LuChevronDown />,
    },
    {
      title: "Shop",
      icon: <LuChevronDown />,
    },
    {
      title: "Product",
      icon: <LuChevronDown />,
    },
    {
      title: "Page",
      icon: <LuChevronDown />,
    },
    {
      title: "Blog",
      icon: <LuChevronDown />,
    },
    {
      title: "Boy Now",
    },
  ];
  return (
    <>
      <header className={styles.header_container}>
        <div className="main_container">
          <div className={styles.header_boxs}>
            <button className={styles.button_menu}>
              <CgMenuLeft />
            </button>
            <div className={styles.logo}>
              <Image src={Logo} alt="logo image" />
            </div>
            <div className={styles.search_box}>
              <form>
                <input type="text" placeholder="Search product" />
                <button>
                  <IoSearchOutline className={styles.icon_search} />
                </button>
              </form>
            </div>

            <ul className={styles.list_buttons}>
              <li>
                <span>Login</span>
                <LuUser className={styles.icon_buttons} />
              </li>
              <li>
                <span>Compare</span>
                <CiShuffle className={styles.icon_buttons} />
              </li>
              <li>
                <span>Wishlist</span>
                <BsHeart className={styles.icon_buttons} />
              </li>
              <li className={styles.button_search}>
                <IoSearchOutline color="#fff" size={30} />
              </li>
              <li>
                <span>0</span>
                <MdOutlineShoppingBag className={styles.icon_shop} />
              </li>
            </ul>
          </div>
        </div>
      </header>
      <nav className={styles.navbar}>
        <div className="main_container">
          <div className={styles.navbar_full}>
            <div className={styles.navbar_buttons}>
              <div className={styles.box_categories}>
                <AiOutlineAppstore size={20} />
                <p>Browse All Categories</p>
              </div>
              <ul>
                {buttonsNavbar.map((item, index) => (
                  <li key={index}>
                    <span>{item.title}</span>
                    {item.icon}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.box_support}>
              <BiSupport size={37} />
              <div>
                <span>1900100888</span>
                <p>Support Center</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
