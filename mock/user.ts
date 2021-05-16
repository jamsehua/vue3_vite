export default [
  {
    url: '/api/getUser',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: [
          {
            name: 'zhangsan',
            id: 0,
            age: 19
          },
          {
            name: 'lisi',
            id: 1,
            age: 23
          },
        ],
      };
    },
  },
];