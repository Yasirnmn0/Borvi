import GridCardSection from "@/components/common/GridCardSection";

const categoryList = [
  { title: "Power Tools", image: "/images/Categories/drill.png" },
  { title: "Cleaning Equipment", image: "/images/Categories/cleaner1.png" },
  { title: "Gardening", image: "/images/Categories/lawnmower1.png" },
  { title: "Camping & Outdoor", image: "/images/Categories/tent.png" },
  { title: "Bikes & Sports", image: "/images/Categories/BikeCycle.png" },
  { title: "Construction", image: "/images/Categories/ladder.png" },
];

export default function WhyCategoriesGrid() {
  return (
    <GridCardSection
      heading={
        <>
          Browse Equipment <span className="text-[#0c7a4b]">Categories</span>
        </>
      }
      subtitle="Find the right equipment for your needs"
      items={categoryList}
      columns="6"
    />
  );
}
