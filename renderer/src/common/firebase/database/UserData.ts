import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export default function UserData() {
  // 가입된 전체 유저 fetch 기능
  const fetchAllUser = async (currentUserUid: StringConstructor) => {
    const q = query(
      collection(db, "Users"),
      where("uid", "!=", currentUserUid)
    );
    const res = await getDocs(q);
    const userList = res.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return userList;
  };

  return { fetchAllUser };
}
