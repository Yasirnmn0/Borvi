import GridCardSection from "@/components/common/GridCardSection";
import { categoryList } from "@/data/homedata";

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
