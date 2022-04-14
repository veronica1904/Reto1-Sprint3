import Description from "../components/Description";
import EarlyAccess from "../components/EarlyAccess";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Productive from "../components/Productive";
import Quote from "../components/Quote";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Description></Description>
      <Features></Features>
      <Productive></Productive>
      <Quote></Quote>
      <EarlyAccess></EarlyAccess>
      <Footer></Footer>
    </div>
  );
}

export default App;
