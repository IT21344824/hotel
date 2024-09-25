import React from "react";
import CategorySplasher from "@/components/eventCategory/CategorySplasher";
import CategoryContainer from "@/components/eventCategory/CategoryContainer";
import {
  eventCategorDummy_1,
  eventCategorDummy_2,
} from "@/components/dummy/eventCategorDummy";

const eventCategoryPG = () => {
  const eventCategories = [
    { title: "Venues", sub_heading: "", data: eventCategorDummy_1 },
    {
      title: "Welcome Drinks",
      sub_heading: "Drinks Options",
      data: eventCategorDummy_2,
    },
  ]; // Add more categories as needed

  return (
    <div className="mb-20">
      <CategorySplasher />
      {/* Loop through event categories and render CategoryContainer for each */}
      {eventCategories.map((category, index) => (
        <CategoryContainer
          key={index}
          category={category.data}
          title={category.title}
          sub_heading={category.sub_heading}
        />
      ))}
    </div>
  );
};

export default eventCategoryPG;
