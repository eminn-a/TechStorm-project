import { useEffect, useState } from "react";
import SingleLatestItem from "./SingleLatesItem";
import * as productService from "../../../Services/productService";

const LatestItems = () => {
  const [latestProduct, setlatestProduct] = useState([]);

  useEffect(() => {
    productService
      .getLatest(6)
      .then((result) => setlatestProduct(result))
      .catch((err) => alert(err.message));
  }, []);
  return (
    <section className="item content">
      <div className="container">
        <div className="underlined-title">
          <div className="editContent">
            <h1 className="text-center latestitems">LATEST ITEMS</h1>
          </div>
          <div className="wow-hr type_short">
            <span className="wow-hr-h">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </span>
          </div>
        </div>

        {latestProduct.map((x) => (
          <SingleLatestItem key={x._id} {...x} />
        ))}

        {latestProduct.length === 0 && (
          <>
            <h1 className="text-center">There is no products</h1>
            <br />
            <br />
          </>
        )}
      </div>
    </section>
  );
};

export default LatestItems;
