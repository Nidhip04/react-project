import { useContext, UseContext } from "react";
import UseContext from "../Utils/UseContext";

const Usercard = (props) => {
  const { image, firstName, lastName, email, age, phone, gender } =
    props.userData;

  const { loggedinuser } = useContext(UseContext);

  return (
    <div className="bg-blue-100  w-[200px] flex flex-col p-4 rounded-lg item center">
      <img src={image} className="rounded full border-black border-2 w-40" />
      <p className="text-xl font-bold my-2">
        {firstName} {lastName}
      </p>

      <p>{email}</p>
      <p>{age}</p>
      <p>{phone}</p>
      <p>{gender}</p>
      <p>user name ={loggedinuser}</p>
    </div>
  );
};

export const WithAdminRole = (Componenet) => {
  return (props) => {
    return (
      <div className="reletive">
        <lable className="absolute bg-fuchsia-400 px-4 rounded-lg">
          {props.userData.role}
        </lable>
        <Componenet userData={props.userData} />
      </div>
    );
  };
};

export default Usercard;
