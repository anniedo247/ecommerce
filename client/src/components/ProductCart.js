import React from "react";
import {Col} from "react-bootstrap";
import StarRatings from 'react-star-ratings';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faEye } from "@fortawesome/free-regular-svg-icons";


export const ProductCart = ({ product }) => {
  const truncateText = (text, length) => {
    if (text.length > length) {
      return text.slice(0, length - 1) + "...";
    }
  };
  return (
    <Col xl={3} lg={4} md={6} className="d-flex justity-content-center">
      <div className=" mb-5 product-card">
        <div className="product-card--wrapper">
          <img src={product.images[0]} />
          <div className="product-card--image-top">
            <div className="heart-icon"><FontAwesomeIcon
                  icon={faHeart}
                  size="lg"
                /></div>
                <div className="view-icon"><FontAwesomeIcon
                  icon={faEye}
                  size="lg"
                /></div>
            <div className="add-to-cart" style={{fontFamily:"'eb garamond', serif",fontSize:"23px"}}>Add to cart</div>
            </div>
        </div>
        <h5 style={{fontFamily:"Josefin Sans', sans-serif",letterSpacing:"0.1em"}}>{truncateText(product.name, 19)}</h5>
        <StarRatings
          rating={3.5}
          starRatedColor="grey"
          // changeRating={this.changeRating}
          numberOfStars={5}
          starDimension="22px"
          starSpacing="3px"
          name='rating'
        />
        <p style={{fontFamily:"'EB Garamond', serif",fontSize:"18px",marginTop:"6px"}}>{new Intl.NumberFormat().format(product.price)} VND</p>
      </div>
    </Col>
  );
};
