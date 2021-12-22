import reducer, { inputMessage, fetchInitialData } from "../features/friendsSlice";
import mockInitialData from "./mockIntialData";

const initialState = {
  entities: {
    friends: {
      byId: {},
      alId: [],
    },
    chats: {
      byId: {},
      alId: [],
    },
  },
};

describe("Reducer Test", () => {
  test("Should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test("Should store Initial Nomarlized Data to State if it exists , ", () => {
    expect(reducer(initialState, fetchInitialData(mockInitialData))).toEqual(mockInitialData);
  });

  test("Should store message in State", () => {
    const message = {
      opponent: {
        id: "5555",

      },
      value: "진짜 억까~",
      now: "2021-12-19 14:00:00",
    };
    expect(reducer(mockInitialData, inputMessage(message))).toEqual(
      {
        entities: {
          friends: {
            byId: {
              "5555": {
                id: "5555",
                image: "./img/byul.png",
                name: "Byul",
                chats: ["5555-false-2021-12-19 13:00:00", "5555-true-2021-12-19 14:00:00"],
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
              },
              "5555-true-2021-12-19 14:00:00": {
                id: "5555-true-2021-12-19 14:00:00",
                isSending: true,
                date: "2021-12-19 14:00:00",
                content: "진짜 억까~",
              }
            },
            alId: ["5555-false-2021-12-19 13:00:00", "5555-true-2021-12-19 14:00:00"],
          }
        },
      }
    );
  });
});
