//React is a free and open-source front-end javascript libraby for building user interface based on components.
//1- creating Dynamic Web Applications Becomes easier
//2- Reusable Components
//3- virtual DOM(Document Object Model) Concept - a Virtual DOm is used  to make changes to the Real DOM
//                                                  without directly manupulating the DOM itself
// 4- Easy to Use and Learn (preqisite are HTML and CSS + (Basic javascript))

import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// react-router-dom => used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed
// instead the content is dynamically fetched based on the URL.
// This process is called Routing and it is made possible with the help of React Router Dom
import Slider from "./components/Slider.js";
import data from "./data/data.json";
import Offers from "./components/Offers.js";
import Heading from "./components/Heading.js";
import StarProduct from "./components/StarProduct.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import HotAccessories from "./components/HotAccessories.js";
import ProductReviews from "./components/ProductReviews.js";
import Videos from "./components/Videos.js";
import Banner from "./components/Banner.js";
import Footer from "./components/Footer.js";
import NavOptios from "./components/NavOptios.js";


function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />

      <NavOptios
        miPhones={data.miPhones}
        redmiPhones={data.redmiPhones}
        tv={data.tv}
        laptop={data.laptop}
        fitnessAndLifeStyle={data.fitnessAndLifeStyle}
        home={data.home}
        audio={data.audio}
        accessories={data.accessories}
      />

      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

      <Routes>
          {/* Route: Route component will now help us to establish the link between component’s UI and the URL.  */}
          {/* //ROUTE FOR MUSIC BUTTON */}
        <Route exact path="/music">
          {/* Exact=> It is used to match the exact value with the URL. 
                       For Eg., exact path=’/about’ will only render the component if it exactly matches the path 
                       but if we remove exact from the syntax, then UI will still be rendered even if the structure is like /about/10. */}
          <Route
            path="/music"
            element={
              <HotAccessories
                music={data.hotAccessories.music}
                musicCover={data.hotAccessoriesCover.music}
              />
            }
          />
        </Route>
        {/* //ROUTE FOR SMART DEVICES BUTTON */}
        <Route exact path="/smartDevice">
          <Route
            path="/smartDevice"
            element={
              <HotAccessories
                music={data.hotAccessories.smartDevice}
                musicCover={data.hotAccessoriesCover.smartDevice}
              />
            }
          />
        </Route>
        {/* //ROUTE FOR hOME  */}
        <Route exact path="/home">
          <Route
            path="/home"
            element={
              <HotAccessories
                music={data.hotAccessories.home}
                musicCover={data.hotAccessoriesCover.home}
              />
            }
          />
        </Route>
        {/* //ROUTE FOR LIFESTYLE */}
        <Route exact path="/lifeStyle">
          <Route
            path="/lifeStyle"
            element={
              <HotAccessories
                music={data.hotAccessories.lifeStyle}
                musicCover={data.hotAccessoriesCover.lifeStyle}
              />
            }
          />
        </Route>
        {/* //ROUTE FOR MOBILEACCESORIES */}
        <Route exact path="/mobileAccessories">
          <Route
            path="/mobileAccessories"
            element={
              <HotAccessories
                music={data.hotAccessories.mobileAccessories}
                musicCover={data.hotAccessoriesCover.mobileAccessories}
              />
            }
          />
        </Route>
      </Routes>

      <Heading text="PRODUCT REVIEWS" />

      <ProductReviews productReviews={data.productReviews} />

      <Heading text="VIDEOS" />

      <Videos videos={data.videos} />

      <Heading text="IN THE PRESS" />

      <Banner banner={data.banner} />

      <Footer footer={data.footer} />
      <Heading text="Home Accessories" />
     

    </Router>
  );
}

export default App;
