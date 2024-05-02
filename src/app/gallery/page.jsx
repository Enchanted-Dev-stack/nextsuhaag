import React from "react";
import Swiper from "../../components/Gallery/Swiper";
import Card from "../../components/Card";
import WeddingCards from "../../components/Gallery/WeddingCards";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Gallery() {
  return (
    <>
    <Navbar />
    <main className="bg-[#fae3ea] p-1 sm:p-4 font-Outfit">
      <div className="py-3 px-2">
        <Swiper />
      </div>
      <div className="works my-3 m-auto">
        <h1 className="text-2xl sm:text-3xl font-semibold px-2">Our Works</h1>
        <div className="
          grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-2 lg:gap-4
        ">
          {/* flex justify-evenly gap-2 lg:gap-4 overflow-auto py-2 */}
          <Card
            title="Photography"
            img="https://images.unsplash.com/photo-1516724562728-afc824a36e84?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D"
          />
          <Card
            title="Management"
            img="https://i.pinimg.com/736x/6b/d8/c4/6bd8c40fe0a22f95240b294c514578ee.jpg"
          />
          <Card
            title="Mehendi"
            img="https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/000/615/129/original/movie'ing_moments.jpg?1544101567"
          />
          <Card
            title="Invitations"
            img="https://i.pinimg.com/736x/d2/11/bb/d211bb860059d78a5bdcc43f50b8db08.jpg"
          />
          <Card
            title="Hair Styling"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1sxe6IVTeZiu-s9F2dAtYot1RntExeyo2zkWCwEfV6-vtekf_qm82PuzFP-Nv3wHomE&usqp=CAU"
          />
          <Card
            title="Venues"
            img="https://www.betterhalf.ai/_next/static/media/magarath.0f6133ce.webp"
          />
        </div>
      </div>
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold px-2 mt-5 mb-2">Dream events crafted by us</h1>
        <div className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 xs:gap-6">
          <WeddingCards />
          <WeddingCards />
          <WeddingCards />
          <WeddingCards />
          <WeddingCards />
          <WeddingCards />
          <WeddingCards />
          <WeddingCards />
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}

export default Gallery;
