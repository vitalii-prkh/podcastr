import React from "react";
import {EmblaCarouselType} from "embla-carousel";
import {cn} from "@/lib/utils";

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export function useDotButton(
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void,
): UseDotButtonType {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const onDotButtonClick = React.useCallback(
    (index: number) => {
      if (!emblaApi) {
        return;
      }

      emblaApi.scrollTo(index);

      if (onButtonClick) {
        onButtonClick(emblaApi);
      }
    },
    [emblaApi, onButtonClick],
  );

  const onInit = React.useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) {
      return;
    }

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
}

type DotButtonProps = {
  selected: boolean;
  onClick: () => void;
};

export function DotButton(props: DotButtonProps) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={cn(
        "size-2.5 cursor-pointer rounded-full bg-white-3 transition-all duration-500",
        {"bg-white-1": props.selected},
      )}
    />
  );
}
