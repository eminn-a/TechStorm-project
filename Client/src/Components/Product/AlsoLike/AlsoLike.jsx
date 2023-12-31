import AlsoLikeSingleItem from "./AlsoLikeSingleItem";
import { useEffect, useState } from "react";
import * as getService from "../../../Services/productService";

const AlsoLike = () => {
  const [latestProduct, setlatestProduct] = useState([]);

  useEffect(() => {
    getService
      .getLatest(3)
      .then((result) => setlatestProduct(result))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <section className="item content">
      <div className="container">
        <div className="underlined-title">
          <div className="editContent">
            <h1 className="text-center latestitems">YOU MAY ALSO LIKE</h1>
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
          <AlsoLikeSingleItem key={x._id} {...x} />
        ))}
      </div>
    </section>
  );
};

export default AlsoLike;
