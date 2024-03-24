// // Carousel.js
// import React, { useState, useEffect } from "react";
// import "./Carousel.scss"; // Import your Sass file

// const Carousel = () => {
//   const [carouselData, setCarouselData] = useState([
//     { id: "1", src: "http://fakeimg.pl/300/?text=1" },
//     { id: "2", src: "http://fakeimg.pl/300/?text=2" },
//     { id: "3", src: "http://fakeimg.pl/300/?text=3" },
//     { id: "4", src: "http://fakeimg.pl/300/?text=4" },
//     { id: "5", src: "http://fakeimg.pl/300/?text=5" },
//   ]);
//   const [carouselInView, setCarouselInView] = useState([1, 2, 3, 4, 5]);
//   //   const [carouselPlayState, setCarouselPlayState] = useState(null);

//   //   useEffect(() => {
//   //     const interval = setInterval(() => {
//   //       next();
//   //     }, 1500);

//   //     return () => clearInterval(interval);
//   //   }, [carouselPlayState]);

//   const previous = () => {
//     const updatedData = [...carouselData];
//     const updatedInView = [...carouselInView];

//     updatedData.unshift(updatedData.pop());
//     updatedInView.push(updatedInView.shift());

//     setCarouselData(updatedData);
//     setCarouselInView(updatedInView);
//   };

//   const next = () => {
//     const updatedData = [...carouselData];
//     const updatedInView = [...carouselInView];

//     updatedData.push(updatedData.shift());
//     updatedInView.unshift(updatedInView.pop());

//     setCarouselData(updatedData);
//     setCarouselInView(updatedInView);
//   };

//   //   const add = () => {
//   //     const newItem = {
//   //       id: carouselData.length + 1,
//   //       src: `http://fakeimg.pl/300/?text=${carouselData.length + 1}`,
//   //     };

//   //     setCarouselData((prevData) => [...prevData, newItem]);
//   //     next();
//   //   };

//   //   const play = () => {
//   //     if (carouselPlayState) {
//   //       clearInterval(carouselPlayState);
//   //       setCarouselPlayState(null);
//   //     } else {
//   //       const interval = setInterval(() => {
//   //         next();
//   //       }, 1500);

//   //       setCarouselPlayState(interval);
//   //     }
//   //   };

//   return (
//     <div className="carousel">
//       <div className="carousel-container">
//         {carouselData.map((item, index) => (
//           <img
//             key={item.id}
//             className={`carousel-item carousel-item-${carouselInView[index]}`}
//             src={item.src}
//             alt={`Item ${item.id}`}
//           />
//         ))}
//       </div>
//       <div className="carousel-controls">
//         <button
//           className="carousel-control carousel-control-previous"
//           onClick={previous}
//         >
//           Previous
//         </button>
//         {/* <button className="carousel-control carousel-control-add" onClick={add}>
//           Add
//         </button>
//         <button
//           className="carousel-control carousel-control-play"
//           onClick={play}
//         >
//           Play
//         </button> */}
//         <button
//           className="carousel-control carousel-control-next"
//           onClick={next}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

// *********************************************************************************
// actual crousel
// import React, { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
// import { FaCircle } from "react-icons/fa";
// import { TbCapsuleHorizontalFilled } from "react-icons/tb";
// import "./Carousel.scss";
// import img1 from "../img/pexels-scott-webb-1903965.jpg";
// import img2 from "../img/pexels-moose-photos-1037999.jpg";
// import img3 from "../img/pexels-ready-made-3847646.jpg";
// import img4 from "../img/pexels-eric-mufasa-1350789.jpg";
// import img5 from "../img/pexels-stas-knop-1579240.jpg";

// const Carousel = () => {
//   const [carouselData, setCarouselData] = useState([
//     { id: "1", src: img1, data: "Books" },
//     { id: "2", src: img2, data: "Plant" },
//     { id: "3", src: img3, data: "Furniture" },
//     { id: "4", src: img4, data: "Headphones" },
//     { id: "5", src: img5, data: "Video Games" },
//   ]);
//   const [carouselInView, setCarouselInView] = useState([1, 2, 3, 4, 5]);

//   // const previous = () => {
//   //   const updatedData = [...carouselData];
//   //   const updatedInView = [...carouselInView];

//   //   updatedData.unshift(updatedData.pop());
//   //   updatedInView.push(updatedInView.shift());

//   //   setCarouselData(updatedData);
//   //   setCarouselInView(updatedInView);
//   // };

//   // const next = () => {
//   //   const updatedData = [...carouselData];
//   //   const updatedInView = [...carouselInView];

//   //   updatedData.push(updatedData.shift());
//   //   updatedInView.unshift(updatedInView.pop());

//   //   setCarouselData(updatedData);
//   //   setCarouselInView(updatedInView);
//   // };
//   const [activeIndex, setActiveIndex] = useState(0);

//   const previous = () => {
//     const updatedData = [...carouselData];
//     const updatedInView = [...carouselInView];

//     updatedData.unshift(updatedData.pop());
//     updatedInView.push(updatedInView.shift());

//     setCarouselData(updatedData);
//     setCarouselInView(updatedInView);
//     setActiveIndex(
//       (activeIndex - 1 + carouselData.length) % carouselData.length
//     );
//   };

//   const next = () => {
//     const updatedData = [...carouselData];
//     const updatedInView = [...carouselInView];

//     updatedData.push(updatedData.shift());
//     updatedInView.unshift(updatedInView.pop());

//     setCarouselData(updatedData);
//     setCarouselInView(updatedInView);
//     setActiveIndex((activeIndex + 1) % carouselData.length);
//   };

//   useEffect(() => {
//     carouselInView.forEach((item, index) => {
//       const element = document.querySelector(`.carousel-item-${index + 1}`);
//       if (element) element.src = carouselData[index].src;
//     });

//     carouselData.slice(0, 5).forEach((data, index) => {
//       const element = document.querySelector(`.carousel-item-${index + 1}`);
//       if (element) element.src = data.src;
//     });
//   }, [carouselData, carouselInView]);

//   return (
//     <>
//       <div className="heading-container">
//         <h1>Featured Products</h1>
//         <p>Explore and discover a variety of Products</p>
//       </div>
//       <div className="carousel">
//         <div className="carousel-container">
//           {carouselInView.map((item, index) => (
//             <>
//               <img
//                 key={item}
//                 className={`carousel-item carousel-item-${item}`}
//                 src={carouselData[item - 1].src}
//                 alt={`Item ${item}`}
//               />

//               {index === 2 && (
//                 <div className="carousel-item-data">
//                   {carouselData[activeIndex].data}
//                 </div>
//               )}
//             </>
//           ))}
//         </div>
//         <div className="carousel-controls">
//           <FaArrowLeft
//             className="carousel-control-previous"
//             onClick={previous}
//             size={25}
//           />
//           <div className="circle">
//             {carouselInView.map((item, index) => (
//               <React.Fragment key={index}>
//                 {index === activeIndex ? (
//                   <TbCapsuleHorizontalFilled
//                     style={{ color: "#5356FF", padding: "10px" }}
//                     size={20}
//                   />
//                 ) : (
//                   <FaCircle style={{ color: "#9CAFAA", padding: "10px" }} />
//                 )}
//               </React.Fragment>
//             ))}
//           </div>
//           <FaArrowRight
//             className="carousel-control-next"
//             onClick={next}
//             size={25}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Carousel;

// ******************************************************************************************************************
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { TbCapsuleHorizontalFilled } from "react-icons/tb";
import "./Carousel.scss";
import img1 from "../img/pexels-scott-webb-1903965.jpg";
import img2 from "../img/pexels-moose-photos-1037999.jpg";
import img3 from "../img/pexels-ready-made-3847646.jpg";
import img4 from "../img/pexels-eric-mufasa-1350789.jpg";
import img5 from "../img/pexels-stas-knop-1579240.jpg";

const Carousel = () => {
  const [carouselData, setCarouselData] = useState([
    { id: "1", src: img5, data: "Play Latest Games" },
    { id: "2", src: img2, data: "Listen to your Playlist" },
    { id: "3", src: img1, data: "Lets Grow Plants" },
    { id: "4", src: img4, data: "Decorate your Home" },
    { id: "5", src: img3, data: "Reading is Good" },
  ]);
  const [carouselInView, setCarouselInView] = useState([1, 2, 3, 4, 5]);

  // const previous = () => {
  //   const updatedData = [...carouselData];
  //   const updatedInView = [...carouselInView];

  //   updatedData.unshift(updatedData.pop());
  //   updatedInView.push(updatedInView.shift());

  //   setCarouselData(updatedData);
  //   setCarouselInView(updatedInView);
  // };

  // const next = () => {
  //   const updatedData = [...carouselData];
  //   const updatedInView = [...carouselInView];

  //   updatedData.push(updatedData.shift());
  //   updatedInView.unshift(updatedInView.pop());

  //   setCarouselData(updatedData);
  //   setCarouselInView(updatedInView);
  // };
  const [activeIndex, setActiveIndex] = useState(0);

  const previous = () => {
    const updatedData = [...carouselData];
    const updatedInView = [...carouselInView];

    updatedData.unshift(updatedData.pop());
    updatedInView.push(updatedInView.shift());

    setCarouselData(updatedData);
    setCarouselInView(updatedInView);
    setActiveIndex(
      (activeIndex - 1 + carouselData.length) % carouselData.length
    );
  };

  const next = () => {
    const updatedData = [...carouselData];
    const updatedInView = [...carouselInView];

    updatedData.push(updatedData.shift());
    updatedInView.unshift(updatedInView.pop());

    setCarouselData(updatedData);
    setCarouselInView(updatedInView);
    setActiveIndex((activeIndex + 1) % carouselData.length);
  };

  useEffect(() => {
    carouselInView.forEach((item, index) => {
      const element = document.querySelector(`.carousel-item-${index + 1}`);
      if (element) element.src = carouselData[index].src;
    });

    carouselData.slice(0, 5).forEach((data, index) => {
      const element = document.querySelector(`.carousel-item-${index + 1}`);
      if (element) element.src = data.src;
    });
  }, [carouselData, carouselInView]);

  return (
    <>
      <div className="heading-container">
        <h1>Featured Products</h1>
        <p>Explore and discover a variety of Products</p>
      </div>
      <div className="carousel">
        <div className="carousel-container">
          {carouselInView.map((item, index) => (
            <>
              <div
                style={{
                  backgroundImage: `url(${carouselData[item - 1].src})`,
                  backgroundSize: "cover",
                }}
                key={item}
                className={`carousel-item carousel-item-${item}`}
                // src={carouselData[item - 1].src}
                alt={`Item ${item}`}
              >
                <div className="carousel-item-data">
                  {carouselData[item - 1].data}
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="carousel-controls">
          <FaArrowLeft
            className="carousel-control-previous"
            onClick={previous}
            size={25}
          />
          <div className="circle">
            {carouselInView.map((item, index) => (
              <React.Fragment key={index}>
                {index === activeIndex ? (
                  <TbCapsuleHorizontalFilled
                    style={{ color: "#5356FF", padding: "10px" }}
                    size={20}
                  />
                ) : (
                  <FaCircle style={{ color: "#9CAFAA", padding: "10px" }} />
                )}
              </React.Fragment>
            ))}
          </div>
          <FaArrowRight
            className="carousel-control-next"
            onClick={next}
            size={25}
          />
        </div>
      </div>
    </>
  );
};

export default Carousel;
