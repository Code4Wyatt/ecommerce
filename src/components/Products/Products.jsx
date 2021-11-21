import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Example Product",
    image:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Product Description Example",
    price: "£10",
  },
  {
    id: 2,
    name: "2nd Example Product",
    image:
      'https://cdn.vox-cdn.com/thumbor/3o5bkD-T3oQ3EIfXotA4k9P97TY=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/22443013/5.png',
    description: "2nd Product Description Example",
    price: "£20",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
