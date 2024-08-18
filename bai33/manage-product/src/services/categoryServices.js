import { get } from "../utils/request";

export const GetCategoryList = async () => {
      const result = await get("category");
      return result;
}