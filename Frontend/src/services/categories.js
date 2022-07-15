import API from "./apiconfig";

export async function getAllCategories() {
  console.log("get categories");
  try {
    const response = await API.get("/news/getCategories");
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}
