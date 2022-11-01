import axios from "axios";

export const getBrands = async () => {
  const query = `
    query {
  brandsCollection(order:position_ASC) {
    items {
      brand
      url
      position
      description
      logo {
        url
        height
        width
      }
    }
  }
}`;

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_CONTENTFUL_URL}`,
      { query: query }
    );
    return response.data.data.brandsCollection.items;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
