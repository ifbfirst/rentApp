
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";


export  const HomePage =() =>{

  return (
    <>
      <Hero /> 
      <InfoBoxes />
      <HomeProperties/>
      <Footer/>
    </>
  );
}

export default HomePage;