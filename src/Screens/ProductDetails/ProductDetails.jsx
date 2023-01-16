import React,{useEffect} from "react";

import "./productDetails.css";

import CarouselComp from "../Home/MiniComp/CarouselComp";
import { Color } from "../../Color";
import ProductCardComp from "../../MiniComp/ProductCardComp";
import Hader from "../../MiniComp/Hader";

import Youtube from "./Youtube";

import { useLocation, useNavigate,  } from "react-router-dom";
import { url } from "../../Address";
import axios from "axios";



function ProductDetails() {
  const{baseUrl,route,getProductByBrand}=url

  const navigate = useNavigate()

  const { state } = useLocation()
  const peoductByBrand = async(e) => {

    await axios.post(baseUrl+route+getProductByBrand,{
        brandName:e
    },{withCredentials: true }).then(res=>{
       // console.log(res.data)
        navigate('/allProduct', { state: res.data.products })

    }).catch(error=>{
       // console.error(error)
    })

}


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [state])

  return (
    <div>
      <Hader />
      {/* <Categories/> */}

      <CarouselComp featurePhotos={state.images} />

      <div style={{ display: "flex", flexDirection: "column" }}>
        
        <text 
        onClick={()=>{peoductByBrand(state.brandName)}}
        className="view-more-details-page" style={{ color: Color.blue }}>
          view more from {state.brandName}
        </text>

        <text className="product-name-details-page">
          {state.name}
        </text>

        <text className="product-price-details-page">
        {`price ₹${state.price}`}
        </text>
      </div>

      <div>
          <h4>Highlight</h4>
          <ul>
         {/* {state.highlightText && state.highlightText.map((props,index)=>{ */}
          <li className="highlightclass" >

          <p> {state.highlightText} </p>

           </li>

         {/* })}  */}
          </ul>
      </div>

      {/* youtube videos */}
      <Youtube youtube={state.youtubeLinks} />

  <div>    <div>
        <h4>Product Description</h4>
        <p style={{ paddingLeft: "1px" }}>
          {state.description}
        </p>
      </div>

      <div
          style={{
            width: "100%",
            borderColor: Color.black,
            marginTop: "5px",

            position: " -webkit - sticky",
            position: "sticky",
            bottom: 0,
            display: "flex",
            gap: "5px",
          }}
        >
          <button
          onClick={()=>window.open(`tel:900300400`)}
            style={{
              backgroundColor: "#196ddb",
              width: "100%",

              padding: "10px",
              marginTop: "10px",
              borderRadius: "10px",
              borderWidth: "0px",
              bottom: 0,
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}
          >
            <img
              src="https://play-lh.googleusercontent.com/bk3e0glVbvRC4Z0uEZ5Oso5wjS89r1P_X5e-k3N_UBkTPXZLhGv50rRy7LAuDzzC9w=w240-h480-rw"
              width={40}
              height={40}
              alt=""
              style={{
                borderRadius: "50%",
              }}
            />
            <text
              style={{
                fontSize: "25px",
                color: "white",
                fontWeight: "600",
              }}
            >
              Call Now
            </text>
          </button>

          <button

          onClick={()=>window.open('https://wa.me/919876543210/?text=Hi Sam, Whatsup')}
            style={{
              backgroundColor: "#44eb61",
              width: "100%",

              padding: "10px",
              marginTop: "10px",
              borderRadius: "10px",
              borderWidth: "0px",
              bottom: 0,
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=w240-h480-rw"
              width={40}
              height={40}
              alt=""
              style={{
                borderRadius: "50%",
              }}
            />
            <text
              style={{
                fontSize: "25px",
                color: "white",
                fontWeight: "600",
              }}
            >
              join Group
            </text>
          </button>
        </div>
</div>
      <div>
        <div>
          <h4>simmiler products</h4>

          <div className="product-card-container">

            {/* akhane pore similar product dekhano hobe */}

          </div>
        </div>

        {/* <div
          style={{
            width: "100%",
            borderColor: Color.black,
            marginTop: "5px",

            position: " -webkit - sticky",
            position: "sticky",
            bottom: 0,
            display: "flex",
            gap: "5px",
          }}
        >
          <button
          onClick={()=>window.open(`tel:900300400`)}
            style={{
              backgroundColor: "#196ddb",
              width: "100%",

              padding: "10px",
              marginTop: "10px",
              borderRadius: "10px",
              borderWidth: "0px",
              bottom: 0,
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}
          >
            <img
              src="https://play-lh.googleusercontent.com/bk3e0glVbvRC4Z0uEZ5Oso5wjS89r1P_X5e-k3N_UBkTPXZLhGv50rRy7LAuDzzC9w=w240-h480-rw"
              width={40}
              height={40}
              alt=""
              style={{
                borderRadius: "50%",
              }}
            />
            <text
              style={{
                fontSize: "25px",
                color: "white",
                fontWeight: "600",
              }}
            >
              Call Now
            </text>
          </button>

          <button

          onClick={()=>window.open('https://wa.me/919876543210/?text=Hi Sam, Whatsup')}
            style={{
              backgroundColor: "#44eb61",
              width: "100%",

              padding: "10px",
              marginTop: "10px",
              borderRadius: "10px",
              borderWidth: "0px",
              bottom: 0,
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=w240-h480-rw"
              width={40}
              height={40}
              alt=""
              style={{
                borderRadius: "50%",
              }}
            />
            <text
              style={{
                fontSize: "25px",
                color: "white",
                fontWeight: "600",
              }}
            >
              join Group
            </text>
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default ProductDetails;

// style={{
//   backgroundColor: Color.BananaYellow,
//   width: "100%",
//   borderColor: Color.black,
//   padding: "10px",
//   marginTop: "10px",
//   borderRadius: "10px",
//   // position: " -webkit - sticky",
//   // position: "sticky",
//   bottom: 0,
// }}
