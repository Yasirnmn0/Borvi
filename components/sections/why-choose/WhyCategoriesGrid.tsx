import GridCardSection from "@/components/common/GridCardSection";
import { categoryList } from "@/data/homedata";

export default function WhyCategoriesGrid() {
  return (
    <GridCardSection
      heading={
        <>
          Quality Equipment for{" "}
          <span className="text-[#0c7a4b]">Every Need</span>
        </>
      }
      subtitle="Explore our wide range of well-maintained equipment across multiple categories."
      items={categoryList}
      columns="6"
    />
  );
}
