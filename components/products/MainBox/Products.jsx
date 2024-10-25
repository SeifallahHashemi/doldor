import Product from "./Product";
import SpecialProduct from "./SpecialProduct";

export default function Products() {
    return (
        <div className="w-full flex flex-col items-center gap-10 mt-20">
            <SpecialProduct />
            <Product />
        </div>
    )
}
