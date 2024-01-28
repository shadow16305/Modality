"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CarouselProps {
  items: {
    index: number;
    text: string;
    img: string;
    source: string;
  }[];
}

const TestimonialsCarousel: React.FC<CarouselProps> = ({ items }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      orientation="vertical"
      className="relative mt-48"
      setApi={setApi}
    >
      <CarouselContent className="lg:h-[300px] 2xl:h-[840px]">
        {Array.from(items).map((item) => (
          <CarouselItem
            key={item.index}
            className="flex items-center ps-40 lg:basis-full 2xl:basis-auto"
          >
            <div className="flex items-start justify-center gap-x-8">
              <Image
                src={item.img}
                alt={item.source}
                width={134}
                height={134}
                className={`transition-all duration-300 ${current === item.index ? "2xl:ms-20" : "grayscale"} `}
              />
              <div className="flex flex-col items-end gap-y-6">
                <p
                  className={`transition-all duration-500 ${current === item.index ? "opacity-100" : "opacity-0"}`}
                >
                  " {item.text} "
                </p>
                <p
                  className={`transition-all duration-500 ${current === item.index ? "opacity-100" : "opacity-0"}`}
                >
                  {item.source}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute left-0 top-1/2 flex -translate-y-1/2 flex-col">
        <CarouselPrevious className="border-none bg-transparent text-cyan hover:bg-transparent hover:text-cyan" />
        <span className="py-20 text-cyan">{current}/8</span>
        <CarouselNext className="border-none bg-transparent text-cyan hover:bg-transparent hover:text-cyan" />
      </div>
    </Carousel>
  );
};

export default TestimonialsCarousel;
