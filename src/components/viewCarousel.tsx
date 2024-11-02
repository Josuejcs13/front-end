import { getImageUrl } from "@/util/getImageUrl";
import FavoriteCheckbox from "./favoriteCheckBox";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Recipe } from "@/types";
import { useCallback, useEffect, useState } from "react";
import useRecipes from "@/hooks/useRecipes";

type ViewCarouselProp = {
  array: Recipe[];
};

const ViewCarousel = ({ array }: ViewCarouselProp) => {
  const { isLoading, getNextRecipes } = useRecipes();

  const [api, setApi] = useState<CarouselApi | null>(null); 

  const logSlidesInView = useCallback(
    (carouselApi: CarouselApi) => {
      if (!carouselApi) return; 

      const recipesInView = carouselApi.slidesInView();

      const isNextToEnd = recipesInView.some((index) =>
        [array.length - 1, array.length - 2, array.length - 3].includes(index)
      );

      if (isNextToEnd && !isLoading) {
        getNextRecipes();
        carouselApi.off("slidesInView", logSlidesInView);
      }
    },
    [array.length, getNextRecipes, isLoading]
  );

  useEffect(() => {
    if (api) {
      api.on("slidesInView", logSlidesInView);
      return () => {
        api.off("slidesInView", logSlidesInView); 
      };
    }
  }, [api, logSlidesInView]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="pb-5">
        {array.map((recipe) => (
          <CarouselItem key={recipe.ID} className="basis-[55%] pl-8 ">
            <div className="flex rounded-2xl w-[13.5rem] h-full shadow-lg bg-white">
              <div className="p-4 relative">
                <img
                  src={getImageUrl(recipe.image)}
                  alt={recipe.title}
                  className="rounded-2xl h-32 object-cover"
                />
                <h3 className="font-bold pt-3">{recipe.title}</h3>
                <FavoriteCheckbox
                  id={recipe.ID}
                  className="absolute right-7 top-6"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ViewCarousel;
