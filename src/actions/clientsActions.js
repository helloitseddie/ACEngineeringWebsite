import axios from "axios";

export const getClients = async () => {
  const query = `
    query {
  clientGroupsCollection(order: order_ASC) {
    items {
      category
      clientsCollection(limit:25) {
        items {
          client
          logo {
            url
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
    return response.data.data.clientGroupsCollection.items;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
