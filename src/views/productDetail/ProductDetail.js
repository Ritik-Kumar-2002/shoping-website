import React, { useState } from "react";
import { useSelector } from "react-redux";
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import { FavoriteBorder } from '@mui/icons-material';
import { useDispatch } from "react-redux";
import AddToCartBox from "./AddToCart";
import { AddToBag } from "../../store/action/AddtoBag";

const ProductDetail = () => {
    const dispatch = useDispatch();

    const [OpenDialogBox, setOpenDialogBox] = useState(false);
    const cartData = useSelector((state) => state.CartReducer)
    
    const [FootwearSize, SetFootwearSize] = useState(-1);
    const [url, SetImageURL] = useState(cartData !== null ? cartData.image : "");

    const CompleteProductDetail = { ...cartData, shoeSize: FootwearSize, Quantity: 1 }

    const footSizeHandler = (size) => {
        SetFootwearSize(size);
        console.log("size after selection ", CompleteProductDetail);
    }
    console.log("cart data is ", cartData);
    return (
        <>
            <div className="ProdDet-wrap">
                <div className="ProdDet-wrap1">
                    <div style={{border:'2px solid green'}}>
                        <InnerImageZoom src={url} hideCloseButton='0' hideHint='0' zoomScale={2} className="zoom-image" />
                    </div>
                    <div className="Image-collection">
                        <div className="Images">
                            <img src={cartData.image} onClick={() => SetImageURL(cartData.image)}></img>
                        </div>
                        <div className="Images">
                            <img src={cartData.image2} onClick={() => SetImageURL(cartData.image2)}></img>
                        </div>
                        <div className="Images">
                            <img src={cartData.image3} onClick={() => SetImageURL(cartData.image3)} ></img>
                        </div>
                        <div className="Images">
                            <img src={cartData.image4} onClick={() => SetImageURL(cartData.image4)}></img>
                        </div>
                        <div className="Images">
                            <img src={cartData.image5} onClick={() => SetImageURL(cartData.image5)}></img>
                        </div>

                    </div>
                </div>
                <div className="ProdDet-wrap2">
                    <p className="heading2" fontSize='1.2rem' > {cartData.type.toUpperCase()} Originals </p>
                    <p className="heading3" style={{ fontWeight: 'bold', fontStyle: 'italic' }}> {cartData.name} </p>
                    <p className="heading4" fontWeight={"bold"}>  MRP:  {cartData.price} </p>
                    <p className="heading4" style={{ fontWeight: "bold", fontSize: '1.2rem' }}>  sizes </p>

                    <div className="foot-siz-wrap">
                        <div onClick={() => footSizeHandler(3)}>3</div>
                        <div onClick={() => footSizeHandler(4)}>4</div>
                        <div onClick={() => footSizeHandler(5)}>5</div>
                        <div onClick={() => footSizeHandler(6)}>6</div>
                        <div onClick={() => footSizeHandler(7)}>7</div>
                        <div onClick={() => footSizeHandler(8)}>8</div>
                        <div onClick={() => footSizeHandler(9)}>9</div>
                        <div onClick={() => footSizeHandler(10)}>10</div>
                    </div>
                    <div>
                        <button variant='outlined'
                            className="button-style"
                            onClick={() => {
                                // dispatch(OpenAddToCartDialog(true))
                                setOpenDialogBox(true)
                                dispatch(AddToBag(CompleteProductDetail))
                            }
                            }>  Add to Cart &nbsp;  → </button>
                        {/* <AddToCartBox setOpenDialogBox={setOpenDialogBox} OpenDialogBox={OpenDialogBox} 
                        TotalData={CompleteProductDetail}/> */}

                        <FavoriteBorder />
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProductDetail;