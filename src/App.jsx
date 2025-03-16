import HomePageNavbar from "./components/HomePageNavbar/HomePageNavbar.jsx";
import HomePageTagline from "./components/HomePageTagline/HomePageTagline.jsx";
import HomePageFirstHeading from "./components/HomePageFirstHeading/HomePageFirstHeading.jsx";
import HomePageServices from "./components/HomePageServices/HomePageServices.jsx";
import HomePageContact from "./components/HomePageContact/HomePageContact.jsx";
import HomePageFooter from "./components/HomePageFooter/HomePageFooter.jsx";
import "./App.css";

function App() {
  return (
    <>
      <HomePageNavbar />
      <HomePageTagline />
      <HomePageFirstHeading />
      <HomePageServices />
      <HomePageContact />
      <HomePageFooter />
    </>
  );
}

export default App;
