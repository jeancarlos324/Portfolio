import { motion } from "framer-motion";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
interface CarouselProps {
  className?: string;
  data: { [key: string]: any }[];
  itemKey: string;
  labelField: string;
}
const CarouselMultiple = ({
  className,
  data,
  itemKey,
  labelField,
}: CarouselProps) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={2500}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass={className}
      keyBoardControl
      minimumTouchDrag={120}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={4}
      swipeable
    >
      {data.map((image) => (
        <motion.div key={image[itemKey]} className="h-full flex flex-col justify-center items-center hover:scale-110 duration-300 hover:drop-shadow-normal">
          <img src={image[labelField]} className="h-[8rem] w-[9rem] p-3 animation-litle-card " />
          <span className="text-sm">{image?.title}</span>
        </motion.div>
      ))}
    </Carousel>
  );
};

export default CarouselMultiple;
