import { Body1, H4 } from "../Typography";
import { ProductsContainerStyled, ProductStyled } from "./style";

const Products = ({ products }) => {
  return (
    <ProductsContainerStyled>
      {
        products.map((product) => (
            <ProductStyled>
                <div className="text">
                    <H4>{product.name}</H4>
                    <Body1>from <br/> USD {product.price}</Body1>
                </div>

                <div className="image">
                    <img src={product.image} alt={product.name} />
                </div>
            </ProductStyled>
        ))
      }
    </ProductsContainerStyled>
  );
};

export default Products;
