"use client";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useEffect, useState } from "react";

interface FilterCarouselProps {
  value?: string | null;
  isLoading?: boolean;
  onSelect?: (value: string | null) => void;
  data: {
    value: string;
    label: string;
  }[];
}

export const FilterCarousel = ({
  value,
  onSelect,
  data,
  isLoading,
}: FilterCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
const [current, setCurrent] = useState(0);
const [count, setCount] = useState(0);
useEffect(() => {
  if (!api) {
  return;
  }

  setCount(api.scrollSnapList().length);
  setCurrent(api.selectedScrollSnap()+1);

  api.on("select", () => {
    setCurrent(api.selectedScrollSnap()+1);
  });
}, [api]);

  return (

    
    <div className="relative w-full py-2">
      {/* Left Fade */}
      <div
        className={cn(
          "absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none",
          current === 1 && "hidden"
        )}
      />
      <Carousel
      setApi={setApi}
        opts={{ align: "start", dragFree: true }}
        className="w-full"
      >
        <CarouselContent className="-ml-2">
          {/* All Button */}
          <CarouselItem className="pl-2 basis-auto">
            <Badge
              variant={value === null ? "default" : "secondary"}
              className={cn(
                "rounded-full px-4 py-2 cursor-pointer whitespace-nowrap text-sm font-medium transition-all duration-200",
                "hover:scale-105 active:scale-95",
                value === null
                  ? "shadow-md"
                  : "hover:bg-muted"
              )}
            > All
            </Badge>
          </CarouselItem>

          {/* Dynamic Items */}
          {data.map((item) => (
            <CarouselItem
              key={item.value}
              className="pl-2 basis-auto"
            >
              <Badge
                variant={value === item.value ? "default" : "secondary"}
                onClick={() => onSelect?.(item.value)}
                className={cn(
                  "rounded-full px-4 py-2 cursor-pointer whitespace-nowrap text-sm font-medium transition-all duration-200",
                  "hover:scale-105 active:scale-95",
                  value === item.value
                    ? "shadow-md"
                    : "hover:bg-muted"
                )}
              >
                {item.label}
              </Badge>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <CarouselPrevious className="left-0 z-20 h-8 w-8 rounded-full bg-white shadow-md border hover:bg-muted transition" />
        <CarouselNext className="right-0 z-20 h-8 w-8 rounded-full bg-white shadow-md border hover:bg-muted transition" />
      </Carousel>

      

      {/* Right Fade */}
      <div
        className={cn(
          "absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none"
        )}
      />
    </div>
  );
};