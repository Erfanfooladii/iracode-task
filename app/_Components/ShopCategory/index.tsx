import SliderCategory from "./Slider";
import styles from "./style.module.css";
const ShopCategory = () => {
  const sliderData = [
    {
      img: "",
      title: "mice",
    },
  ];
  return (
    <section>
      <div className="main_conatiner">
        <h2 className={styles.category_title}>Shop by Category</h2>
        <SliderCategory data={sliderData} />
      </div>
    </section>
  );
};
export default ShopCategory;
