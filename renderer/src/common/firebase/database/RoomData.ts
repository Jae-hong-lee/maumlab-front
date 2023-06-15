import { addDoc, collection, limit, query, where } from "firebase/firestore";
import { db } from "../firebase";

export default function CreateRoom() {
  // 1:1 채팅방 생성

  // 수정할 사항: 현재 유저 닉네임으로 1:1 채팅을 생성해서 필드가 만들어지는중
  // -> 안좋은 구조이기 때문에 uid 를 가져와 바꾸는 형식
  // 어떻게 uid를 가져올까? 배열 state 두개를 사용 selected 배열 state와 UserList state 배열을 활용해야겠다
  // presenter 부분 (69 Line) 부분부터 수정하기
  // indexOf 함수를 통해서 찾고 있는데 위에 말한방법으로 바꾸기.
  const createPersonalChatRoom = async (uid: any, pairUid: any) => {
    console.log(uid, pairUid);
    const personalChatRoomRef = collection(db, "PersonalChatRooms");

    const roomDocRef = await addDoc(personalChatRoomRef, {
      users: [uid, pairUid],
      message: [],
      type: "1:1",
    });

    return roomDocRef.id;
  };

  // 1:1 채팅방이 존재하는가??

  // firebase in 함수란?
  // 인용: in 연산자를 사용하여 같은 필드에서 여러 동등(==) 절을 논리적 OR과 결합합니다.
  // in 쿼리는 지정된 필드가 비교 값과 일치하는 문서를 반환

  // users 필드에서 [uid, pairUid], [pairUid, uid] 으로 설정된 문서를 반환
  // limit 함수를 통해 1개를 정렬해서 출력.

  // 수정할 사항: 비효율적 -> 애초에 create 될때 구별하기
  const findPersonalChatRoom = (uid: string, pairUid: string) => {
    const personalChatRoomRef = collection(db, "PersonalChatRooms");
    const q = query(
      personalChatRoomRef,
      where("users", "in", [
        [uid, pairUid],
        [pairUid, uid],
      ]),
      limit(1)
    );
  };
  return { createPersonalChatRoom };
}
