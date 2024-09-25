import React from "react";
import CategorySplasher from "@/components/eventCategory/CategorySplasher";
import CategoryContainer from "@/components/eventCategory/CategoryContainer";
import {
  eventCategorDummy_1,
  eventCategorDummy_2,
  eventCategorDummy_3,
  eventCategorDummy_4,
  eventCategorDummy_5,
  eventCategorDummy_6,
  eventCategorDummy_7,
  eventCategorDummy_8,
  eventCategorDummy_9,
  eventCategorDummy_10,
  eventCategorDummy_11,
  eventCategorDummy_12,
  eventCategorDummy_13,
  eventCategorDummy_14,
  eventCategorDummy_15,
  eventCategorDummy_16,
  eventCategorDummy_17,
  eventCategorDummy_18,
  eventCategorDummy_19,
  eventCategorDummy_20,
} from "@/components/dummy/eventCategorDummy";

const eventCategoryPG = () => {
  const eventCategories = [
    { title: "Venues", sub_heading: "", data: eventCategorDummy_1 },
    {
      title: "Welcome Drinks",
      sub_heading: "Drinks Options",
      data: eventCategorDummy_2,
    },
    { title: "Music", sub_heading: "", data: eventCategorDummy_3 },
    {
      title: "Meals - Main Course",
      sub_heading: "Meat Options",
      data: eventCategorDummy_4,
    },
    {
      title: "Meals - Main Course ",
      sub_heading: "Seafood Options",
      data: eventCategorDummy_5,
    },
    {
      title: "Meals - Main Course",
      sub_heading: "Vegetarian/Vegan Options",
      data: eventCategorDummy_6,
    },
    {
      title: "Meals",
      sub_heading: "Cold Appetizers",
      data: eventCategorDummy_7,
    },
    {
      title: "Meals",
      sub_heading: "Hot Appetizers",
      data: eventCategorDummy_8,
    },
    { title: "Meals", sub_heading: "Salad", data: eventCategorDummy_9 },
    {
      title: "Desserts",
      sub_heading: "Dessert Table",
      data: eventCategorDummy_10,
    },
    {
      title: "Desserts",
      sub_heading: "Specialty Desserts",
      data: eventCategorDummy_11,
    },
    {
      title: "Beverages",
      sub_heading: "Non-Alcoholic",
      data: eventCategorDummy_12,
    },
    {
      title: "Beverages",
      sub_heading: "Alcoholic ",
      data: eventCategorDummy_13,
    },
    { title: "Wedding flowers ", sub_heading: "", data: eventCategorDummy_14 },
    { title: "Photography", sub_heading: "", data: eventCategorDummy_15 },
    {
      title: "Wedding Invitations",
      sub_heading: "",
      data: eventCategorDummy_16,
    },
    {
      title: "Wedding Gifts (For Guests)",
      sub_heading: "",
      data: eventCategorDummy_17,
    },
    { title: "Wedding Halls", sub_heading: "", data: eventCategorDummy_18 },
    { title: "Bridal wears", sub_heading: "", data: eventCategorDummy_19 },
    { title: "Groom wears", sub_heading: "", data: eventCategorDummy_20 },
  ];

  return (
    <div className="mb-20 w-full">
      <CategorySplasher />

      {/*here it's Loop through event categories and render CategoryContainer for each */}
      <div className="flex w-full flex-col items-center justify-center">
        {eventCategories.map((category, index) => (
          <CategoryContainer
            key={index}
            category={category.data}
            title={category.title}
            sub_heading={category.sub_heading}
          />
        ))}
      </div>
    </div>
  );
};

export default eventCategoryPG;
