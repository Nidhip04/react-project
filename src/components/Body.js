import { useEffect, useState } from "react";

import Usercard, { WithAdminRole } from "../components/Usercard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useUserList from "../Hooks/useUserList";
import useOnline from "../Hooks/useOnline";
import UseContext from "../Utils/UseContext";

const Body = () => {
  //state variable
  //console.log(userlist);
  const { userData, filterDataFun } = useUserList();
  const onlineStatus = useOnline();

  const UserCarAdmin = WithAdminRole(Usercard);

  const [userName, setUserName] = useState();

  //authantication

  useEffect(() => {
    //auth api call
    const data = { name: "Nidhi Patel" };
    setUserName(data.name);
  }, []);

  if (onlineStatus === false) {
    return (
      <div>
        <h1>seems your internet connection is not working!</h1>
      </div>
    );
  }

  //console.log(userData);

  // useState=([])=>emty hoy

  // const fetchUserData = async () => {
  //   console.log("fetchUserData called");
  //   const res = await fetch("https://dummyjson.com/users");
  //   const data = await res.json();
  //   setUserData(data.user);
  // };

  //[]=> useeffect will be called only once
  //no dependency array=> useEffect will be called on every render
  //[value1,value 2,...]=>useEffect will be called when any of the change/update

  console.log("Body component Rendered");
  //if(userData.length===0){
  //return<Shimmer/>}

  return userData.length === 0 ? (
    <Shimmer />
  ) : (
    <UseContext.Provider value={{ loggedinuser: userName }}>
      <div className="p-4">
        <div className="filter">
          <button
            className="bg-gray-300  hover:bg-gray-400 px-4 py-2 rounded-lg"
            onClick={filterDataFun}
          >
            Age greater than 30
          </button>
          <input className="border-black border-l rounded-md ml-2 px-2" />
        </div>

        <div className="mt-4 flex flex-wrap justify-between gap-4">
          {userData.map((user, index) => {
            return (
              <Link to={`/user/${user.id}`}>
                {user.role === "admin" ? (
                  <UserCarAdmin userData={user} />
                ) : (
                  <Usercard
                    userData={user}
                    // userimage={user.image}
                    // firstName={user.firstName}
                    // lastName={user.lastName}
                    // email={user.email}
                    // age={user.age}
                    // phone={user.phone}
                    // gender={user.gender}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </UseContext.Provider>
  );
};

export default Body;
