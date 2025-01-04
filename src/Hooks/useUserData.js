import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { USER_API_URL } from "../Utils/Constants";

const useUserData = () => {
  const [userData, setUserData] = useState();
  const params = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const jsonData = await fetch(`${USER_API_URL}/${params.userId}`);
    const data = await jsonData.json();
    setUserData(data);
  };
  return userData;
};
export default useUserData;
