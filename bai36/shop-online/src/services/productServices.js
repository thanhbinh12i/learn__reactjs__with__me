import { get } from "../utils/request";

export const GetProductList = async () => {
      const result = await get("products");
      return result;
}
