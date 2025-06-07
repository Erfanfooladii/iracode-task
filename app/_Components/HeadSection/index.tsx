import Image, { StaticImageData } from "next/image";
import styles from "./style.module.css";
import img_1 from "../../../assets/images/keyboard.webp";
import { BsBoxSeam, BsFullscreenExit } from "react-icons/bs";
import { FiCreditCard } from "react-icons/fi";
import { IoMdReturnLeft } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
const HeadSection = () => {
  const listItems: {
    span: string;
    h2: string;
    p: string;
    img: StaticImageData;
  }[] = [
    {
      span: "NO.1 GEAR",
      h2: "Popular.",
      p: "Every piece is made to last beyone the season",
      img: img_1,
    },
    {
      span: "NO.1 GEAR",
      h2: "Popular.",
      p: "Every piece is made to last beyone the season",
      img: img_1,
    },
  ];
  const bannerItems = [];
  for (let i = 0; i < 9; i++) {
    bannerItems.push(
      <div key={i} className={styles.banner_item_box}>
        <BsFullscreenExit size={20} />
        <p>Free express shipping worldwide</p>
      </div>
    );
  }

  const supportItems = [
    {
      title: "Free Shipping",
      description: "You will love at great low prices",
      icon: <BsBoxSeam size={25} />,
    },
    {
      title: "Flexible Payment",
      description: "Pay with Multiple Credit Cards",
      icon: <FiCreditCard size={25} />,
    },
    {
      title: "14 Day Returns",
      description: "Within 30 days for an exchange",
      icon: <IoMdReturnLeft size={25} />,
    },
    {
      title: "Premium Support",
      description: "Outstanding premium support",
      icon: <MdSupportAgent size={25} />,
    },
  ];
  return (
    <>
      <section className={styles.headSection}>
        <div className="main_container">
          <div className="">
            <div className={styles.box_cart}>
              {listItems.map((item, index) => (
                <div key={index} className={styles.box_cart_item}>
                  <Image
                    className={styles.box_cart_frame}
                    alt="keyboard iamge"
                    src={item.img}
                  />
                  <div className={styles.box_cart_data}>
                    <span>{item.span}</span>
                    <h2>{item.h2}</h2>
                    <p>{item.p}</p>
                    <button>shop now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className={styles.banner}>
        <div className={styles.banner_item}>{bannerItems}</div>
      </div>
      <div className={styles.support}>
        <div className="main_container">
          <div className={styles.support_box}>
            {supportItems.map((item, index) => (
              <div key={index} className={styles.support_box_item}>
                <div className={styles.support_box_frame}>{item.icon}</div>
                <div className={styles.support_box_titles}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default HeadSection;
