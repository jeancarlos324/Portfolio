import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import type { HTMLMotionProps } from "framer-motion";
import { useEffect, useState } from "react";
import "../Sliders/Carousel.css";
const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

type dataProp = { [key: string]: any };
interface CaroulselImagesProps extends HTMLMotionProps<"div"> {
  images: dataProp[] | { id: number; image: string }[];
  className?: string;
  hImage?: string;
}
const CaroulselImages = ({
  images,
  className,
  hImage,
}: CaroulselImagesProps) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [newImages, setNewImages] = useState<string[]>([]);
  const imageIndex = wrap(0, images.length, page);
  useEffect(() => {
    convertToData();
  }, []);
  const convertToData = () => {
    const newData = images.map((image) => image.image);
    setNewImages(newData);
  };
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className={`${className} relative overflow-hidden bg-primary-color`}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div className={`${hImage} w-full`}>
          <motion.img
            className="h-full w-full cursor-grab"
            key={page}
            src={newImages[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </motion.div>
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        <i className="fa-solid fa-angle-left rotate-180 text-[#ffffff88]  "></i>
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        <i className="fa-solid fa-angle-right text-[#ffffff88] "></i>
      </div>
    </div>
  );
};

export default CaroulselImages;
