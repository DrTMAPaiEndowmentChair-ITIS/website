"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@/components/icons";

type CarouselContextProps = {
  scrollerRef: React.RefObject<HTMLDivElement | null>;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  orientation: "horizontal" | "vertical";
};

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

function Carousel({
  orientation = "horizontal",
  className,
  children,
  opts: _opts,
  ...props
}: React.ComponentProps<"section"> & {
  orientation?: "horizontal" | "vertical";
  /** Accepted for API compatibility; CSS scroll-snap does not use Embla opts. */
  opts?: { align?: string; [key: string]: unknown };
}) {
  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const updateScrollState = React.useCallback(() => {
    const node = scrollerRef.current;
    if (!node) return;
    const prev = orientation === "horizontal" ? node.scrollLeft > 4 : node.scrollTop > 4;
    const next =
      orientation === "horizontal"
        ? node.scrollLeft + node.clientWidth < node.scrollWidth - 4
        : node.scrollTop + node.clientHeight < node.scrollHeight - 4;
    setCanScrollPrev((current) => (current === prev ? current : prev));
    setCanScrollNext((current) => (current === next ? current : next));
  }, [orientation]);

  const scrollByPage = React.useCallback(
    (direction: -1 | 1) => {
      const node = scrollerRef.current;
      if (!node) return;
      const amount =
        orientation === "horizontal"
          ? node.clientWidth * 0.85 * direction
          : node.clientHeight * 0.85 * direction;
      node.scrollBy({
        left: orientation === "horizontal" ? amount : 0,
        top: orientation === "vertical" ? amount : 0,
        behavior: "smooth",
      });
    },
    [orientation]
  );

  const scrollPrev = React.useCallback(() => scrollByPage(-1), [scrollByPage]);
  const scrollNext = React.useCallback(() => scrollByPage(1), [scrollByPage]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  React.useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;
    let frame = 0;
    const scheduleUpdate = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        updateScrollState();
      });
    };
    updateScrollState();
    node.addEventListener("scroll", scheduleUpdate, { passive: true });
    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(node);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      node.removeEventListener("scroll", scheduleUpdate);
      observer.disconnect();
    };
  }, [updateScrollState]);

  return (
    <CarouselContext.Provider
      value={{
        scrollerRef,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        orientation,
      }}
    >
      <section
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </section>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { scrollerRef, orientation } = useCarousel();

  return (
    <div
      ref={scrollerRef}
      className={cn(
        "no-scrollbar overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth snap-x snap-mandatory",
        orientation === "vertical" && "overflow-y-auto overflow-x-hidden snap-y"
      )}
      data-slot="carousel-content"
    >
      <div
        className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)}
        {...props}
      />
    </div>
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full snap-start",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
}

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon-sm",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "absolute touch-manipulation",
        orientation === "horizontal"
          ? "top-1/2 -left-12 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft01Icon strokeWidth={2} />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

function CarouselNext({
  className,
  variant = "outline",
  size = "icon-sm",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "absolute touch-manipulation",
        orientation === "horizontal"
          ? "top-1/2 -right-12 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight01Icon strokeWidth={2} />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, useCarousel };
