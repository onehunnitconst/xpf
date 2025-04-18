export const paths = {
  users: {
    get: '/users/my',
    getItems: '/users/my/items',
  },
  profiles: {
    get: (id: number) => `/profiles/${id}`,
    getItems: (id: number) => `/profiles/${id}/items`,
  },
  auth: {
    login: '/authentication/login',
  },
};
