const mockDataForTest = {
  entities: {
    friends: {
      byId: {
        "5555": {
          id: "5555",
          image: "./img/byul.png",
          name: "Byul",
          chats: ["5555-false-2021-12-19 13:00:00"],
        },
      },
      alId: ["5555"],
    },
    chats: {
      byId: {
        "5555-false-2021-12-19 13:00:00": {
          id: "5555-false-2021-12-19 13:00:00",
          isSending: false,
          date: "2021-12-19 13:00:00",
          content: "또 그런다 또!"
        }
      },
      alId: ["5555-false-2021-12-19 13:00:00"],
    }
  },
};
export default mockDataForTest;
