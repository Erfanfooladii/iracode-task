import SliderCategory from "./Slider";
import styles from "./style.module.css";
const ShopCategory = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/categories");
    const dataApi = await res.json();
    return (
      <section>
        <div className="main_container">
          <h2 className={styles.category_title}>Shop by Category</h2>
          <div className={styles.category_sliderBox}>
            <SliderCategory data={dataApi} />
          </div>
        </div>
      </section>
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "error notfound";
    return (
      <div className="p-4 bg-red-100 text-red-800 rounded">
        <h3>Error for load categories!</h3>
        <p>{errorMessage}</p>
      </div>
    );
  }
};
export default ShopCategory;
