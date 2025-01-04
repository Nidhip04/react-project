import { useState, useEffect } from "react";
import { USER_API_URL } from "../Utils/Constants";
const useUserList = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    console.log("UseEffect called...");

    fetch(USER_API_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUserData(data.users);
      });
  }, []);

  const filterDataFun = () => {
    const filteredData = userData.filter((user) => {
      return user.age > 30;
    });

    setUserData(filteredData);
  };
  return { userData, filterDataFun };
};

export default useUserList;
