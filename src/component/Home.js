import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Data } from "./Data";
import { CartContext } from "../context/CartContext";
import Hero from "./Hero";
import MainContent from "./MainContent";

function Home() {
  const [items, setItems] = useState([]);
  const { lan, setLan } = useContext(CartContext);
  const descriptionAR =
    "شركة خلخال الملكة للمجوهرات هي وجهة مرموقة في عالم صناعة المجوهرات في العراق. تتميز الشركة بتقديم مجموعة متنوعة وفريدة من المصوغات والمجوهرات الفاخرة التي تجسد الأناقة والجمال. تعتبر خلخال الملكة مكانًا حيث يلتقي الحرفية الرفيعة بأحدث التصاميم، مما يضمن تقديم قطع مجوهرات استثنائية تعبر عن ذوق وفخامة العملاء. يتمتع فريق العمل في شركة خلخال الملكة بالخبرة الواسعة في مجال صناعة المجوهرات، ويسعى دائمًا لتحقيق أعلى معايير الجودة والدقة في كل قطعة ينتجونها. كما يتميز الفريق بالاهتمام بتفاصيل العملية الإبداعية والحرفية، مما يجسد روح الابتكار والتميز في كل قطعة تخرج من ورش العمل. خلخال الملكة تلتزم بتقديم خدمة عملاء ممتازة وتجربة تسوق استثنائية، حيث يتمتع العملاء بالاستشارة المهنية والدعم في اختيار القطع المناسبة وفقًا لأذواقهم وميزانياتهم. تهدف الشركة إلى تحقيق رضا العملاء بتقديم قطع مجوهرات تتميز بالجودة العالية والفرادة، مما يجعل كل عميل يشعر بالثقة والرضا بمشترياته من خلخال الملكة.";

  const descriptionEN =
    "Queen's Jewelry Company is a prestigious destination in the world of jewelry industry in Iraq. The company stands out for offering a variety of unique and luxurious jewelry pieces that embody elegance and beauty. Queen's Jewelry is a place where fine craftsmanship meets the latest designs, ensuring the delivery of exceptional jewelry pieces that reflect the taste and luxury of customers. The team at Queen's Jewelry Company has extensive experience in the jewelry industry and always strives to achieve the highest standards of quality and precision in every piece they produce. The team also excels in paying attention to the details of the creative and craftsmanship process, embodying the spirit of innovation and excellence in every piece that comes out of the workshops. Queen's Jewelry is committed to providing excellent customer service and an exceptional shopping experience, where customers enjoy professional consultation and support in choosing the right pieces according to their tastes and budgets. The company aims to achieve customer satisfaction by offering jewelry pieces that are characterized by high quality and uniqueness, making every customer feel confident and satisfied with their purchases from Queen's Jewelry.";

  const description = lan === "AR" ? descriptionAR : descriptionEN;
  useEffect(() => {
    // Fetch data from JSON file
    setItems(Data);
  }, []);

  return (
    <div className="">
      {/* <div
        className={`${
          lan === "AR" ? "text-right" : " text-left"
        } text-[22px] my-6 px-4 text-[#f6cd46]`}
      >
        {lan === "AR" ? "من نحن" : "About Us"}
      </div>
      <div
        className={`${
          lan === "AR" ? "text-right" : "text-left"
        } px-4 text-[17px]`}
      >
        <p>{description}</p>
      </div>
      <div className="slider new-promotions-slider row containers m-auto my-4">
        {items.map((item) => {
          return (
            <div className="col-12 col-md-6" key={item.id}>
              <div className="new-promotions-block">
                <div className="row  mb-4">
                  <div className="col-12 col-lg-12">
                    <Link
                      to={`/matore/${item.id}`}
                      title={lan === "AR" ? item.titleAR : item.titleEN}
                    >
                      <img
                        className="w-100 lazyload w-[440px] h-[385px]"
                        src={item.img}
                        alt={lan === "AR" ? item.titleAR : item.titleEN}
                        title={lan === "AR" ? item.titleAR : item.titleEN}
                      />
                    </Link>
                    <h2 className="text-center">
                      {lan === "AR" ? item.titleAR : item.titleEN}
                    </h2>
                    <div className="text-center promotion-btn">
                      <Link
                        to={`/matore/${item.id}`}
                        title={lan === "AR" ? item.titleAR : item.titleEN}
                        className="bg-[#f6cd46] m-0 hover:bg-[#e1b72e] text-white font-bold py-2 px-4 rounded-md transition duration-300"
                      >
                        {lan === "AR" ? "جربها الان" : "Try Now"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
      {/* <MainContent /> */}
      <Hero />
    </div>
  );
}

export default Home;
