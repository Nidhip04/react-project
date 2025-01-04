import { useState } from "react";
import UserDetails from "./UserDetail";
import React from "react";

const Useraccordian = (props) => {
  const { UserDetail, data } = props;
  const [showDetails, setShowDetails] = useState();

  return UserDetail.map((item, index) => {
    return (
      <UserDetails
        accordionTitle={item.accordionTitle}
        name={item.name}
        title={item.title}
        showDetails={showDetails === index}
        handleClick={() => setShowDetails(index)}
        data={data}
      />
    );
  });
};
export default Useraccordian;
