export const paths = {
  profiles: {
    get: (id: number) => `/profiles/${id}`,
    getItems: (id: number) => `/profiles/${id}/items`,
  },
};
