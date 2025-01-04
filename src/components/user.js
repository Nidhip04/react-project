import useUserData from "../Hooks/useUserData";
import Shimmer from "./Shimmer";
import Useraccordian from "./Useraccordian";
import UserDetails from "./UserDetail";
import { useState } from "react";

const User = () => {
  const [showDetails, setShowDetails] = useState();

  const userData = useUserData();
  const data = "dummy data";

  if (!userData) return <Shimmer />;
  const { firstName, maidenName, lastName, age, email, image } = userData;
  console.log("userData", userData);

  const UserDetail = [
    {
      accordionTitle: "company",
      name: userData.company.name,
      title: userData.company.title,
    },
    {
      accordionTitle: "Bank Card Details",
      name: userData.bank.cardNumber,
      title: userData.bank.cardExpire,
    },
    {
      accordionTitle: "crypto",
      name: userData.crypto.coin,
      title: userData.crypto.network,
    },
  ];

  return (
    <div className="user">
      <h1>
        {userData.firstName}
        {userData.maidenName}
        {userData.lastName}
      </h1>
      <h2>
        <img src={userData.image} alt={userData.firstName} />
      </h2>
      <h2>{userData.age}</h2>
      <h2>{userData.email}</h2>
      <h2>{userData.phone}</h2>

      <Useraccordian UserDetail={UserDetail} data={data} />
      {/* {UserDetail.map((item, index) => {
        return (
          <UserDetails
            accordionTitle={item.accordionTitle}
            name={item.name}
            title={item.title}
            showDetails={showDetails === index}
            handleClick={() => setShowDetails(index)}
          />
        );
      })} */}
      {/* <UserDetails
        accordionTitle="company"
        name={userData.company.name}
        title={userData.company.title}
        showDetails={showDetails}
      />
      <UserDetails
        accordionTitle="Bank Card Details"
        name={userData.bank.cardNumber}
        title={userData.bank.cardExpire}
      />
      <UserDetails
        accordionTitle="crypto"
        name={userData.crypto.coin}
        title={userData.crypto.network}
      /> */}
    </div>
  );
};

export default User;
