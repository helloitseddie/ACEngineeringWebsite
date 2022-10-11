import axios from "axios";

export const getProducts = async () => {
  const query = `
  query {
    productGroupCollection{
      items {
        group
        productsCollection(limit:25) {
          items {
            brand
            product
            link
            logo {
              url
              height
              width
            }
          }
        }
      }
    }
  }`;

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_CONTENTFUL_URL}`,
      { query: query }
    );
    return response.data.data.productGroupCollection.items;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
