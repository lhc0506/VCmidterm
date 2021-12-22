# 바닐라 코딩 Mid Term - 왜 대답이 없어?

**React + React Router + Redux**를 복합적으로 이용해 Single Page Application 스타일의 채팅 페이지를 만들어 보는 과제 입니다.

## 페이지 구조

  - `/friendslist`: 메인, 친구 목록 페이지
  - `/chatlist`: 채팅 목록 페이지
  - `/`: `/friendslist`로 이동
  - 채팅 목록페이지에서 클릭, 혹은 친구 목록에서 대화하기 버튼 클릭 시 해당 인원과의 모달 채팅창 생성

## 파일 구조
```
📦 src
 ┣ 📂 app
 ┃ ┣ 📜 App.js -> Router
 ┃ ┗ 📜 configureStore.js -> Redux store
 ┃ ┗ 📜 constants.js
 ┣ 📂 components
 ┃ ┣ 📂 ChatsListPage
 ┃ ┃ ┣ 📜 Chat.js
 ┃ ┃ ┗ 📜 index.js
 ┃ ┣ 📂 ChattingPage
 ┃ ┃ ┗ 📜 index.js
 ┃ ┣ 📂 FriendsListPage
 ┃ ┃ ┣ 📜 Friend.js
 ┃ ┃ ┣ 📜 SearchFriend.js
 ┃ ┃ ┗ 📜 index.js
 ┃ ┣ 📂 Header
 ┃ ┃ ┗ 📜 index.js
 ┃ ┗ 📂 Modal
 ┃ ┃ ┗ 📜 index.js
 ┣ 📂 features
 ┃ ┗ 📜 friendsSlice.js -> Redux Reducer(by Slice)
 ┣ 📂 test
 ┃ ┣ 📜 ChatsListPage.test.js
 ┃ ┣ 📜 ChattingPage.test.js
 ┃ ┣ 📜 FriendsListPage.test.js
 ┃ ┣ 📜 Header.test.js
 ┃ ┣ 📜 Reducer.test.js
 ┃ ┗ 📜 mockIntialData.js
 ┗ 📜 index.js
```

## Installation

```sh
npm install
```

### 실행 방법

```sh
npm start
// localhost:3000
```

### npm test
```
npm test
```

 - Header Link Test
 - Reducer Action Test
 - Chats List Page Basic Test
 - Friends List Page Basic test
 - Chatting Page Basic Test

### 배포
[Netlify를 이용한 배포 Site](https://hochanvacomidterm.netlify.app)

#### 참고사항
 - 현재 Cherry님 과의 대화는 없습니다. 메세지 전송 시 채팅 창에 생성 됩니다.
 - 모달창의 경우 외부 클릭 시 모달이 닫힙니다.
 - 친구의 id의 경우 채팅앱의 회원가입 아이디라 생각하여, 따로 로직을 만들지 않았습니다. (구분을 위해 1111, 2222 등으로 기존 데이터 설정)
 - 기존 데이터 채팅의 id는 "상대방id-내가보냈는지(Boolean)-보낸날짜시간" 으로 구성되어 있습니다.
 - 새로 저장되는 채팅의 id는 [nanoid](https://github.com/ai/nanoid) Library를 사용하였습니다.
# VCmidterm
