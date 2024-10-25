import Categories from "./Categories";
import Products from "./Products";

export default function MainBox() {
  return (
    <div className="w-full min-h-[300px] flex flex-col px-5">
      <Categories />
      <Products/>
    </div>
  )
}
