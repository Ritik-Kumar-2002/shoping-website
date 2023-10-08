import React from "react";
import Header from "./Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "../../views/Home/Home";
import Men from "../../views/Men/Men";
import Women from "../../views/Women/Women";
import Kids from "../../views/Kids/Kids";
import Brand from "../../views/Brand/Brand";
import Sport from "../../views/Sports/Sports";
import Collections from "../../views/Collections/Collections";
import Return from "../../views/return/Return";
import Help from "../../views/Help/help";
import OrderTrack from "../../views/orderTrack/OrderTrack";
import WishList from "../../views/wishList/wishList";
import Footer from "../../views/Footer/Footer";
import MainDrawer from "./Header/component/Drawers/MainDrawer";
import { useSelector } from "react-redux";
import ProductDetail from "../../views/productDetail/ProductDetail";
import ProductBag from "../../views/productBag/productBag";
import Checkout from "../../views/CheckoutPages/Checkout";


const CustomRoute = () =>{

    const showPaper = useSelector((state)=> state.ShowPaper)
    return(
        <>
            <Header />
            { showPaper ? < MainDrawer />: null}
            <Routes >
                <Route exact path = "/" element={<Home />} />
                <Route exact path = "/men" element={<Men />} />
                <Route exact path = "/women" element={<Women />} />
                <Route exact path = "/kid" element={<Kids />} />
                <Route exact path = "/sport" element={<Sport />} />
                <Route exact path = "/brand" element={<Brand />} />
                <Route exact path = "/collections" element={<Collections />} />
                <Route exact path = "/return" element = {<Return />} />
                <Route exact path = "/help" element = {<Help />} />
                <Route exact path = "/ordertrack" element = {<OrderTrack />} />
                <Route exact path = "/wishlist" element = {<WishList />} />
                <Route exact path = "/productDetail" element = {<ProductDetail />} />
                <Route exact path = "/viewBag" element = {<ProductBag />} />
                <Route exact path = "/checkout" element = {<Checkout />} />
            </Routes>
           <Footer />
           
        </>
    )
}
export default CustomRoute;