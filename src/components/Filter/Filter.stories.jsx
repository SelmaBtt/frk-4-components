import Filter from "./Filter";
import teaData from "../../../../public/api/product.json";
export default {
  title: "FRK/Filter",
  component: Filter,
};

export const Default = {
  args: {
    teaData: teaData,
  },
};
