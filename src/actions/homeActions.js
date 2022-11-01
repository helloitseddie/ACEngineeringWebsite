import axios from "axios";

export const getImages = async () => {
  const query = `query {
  imageRevolver(id:"${process.env.REACT_APP_HOME_IMAGES_URL}") {
    imagesCollection {
      items {
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

    return response.data.data.imageRevolver.imagesCollection.items;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
