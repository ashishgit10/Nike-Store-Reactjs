import Product from './Product'
import Data from './Data'
const Shop = () => {
    const { Products } = Data;
    return (
        <Product Products={Products} />
    )
}
export default Shop;