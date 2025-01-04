import { useContext } from "react";
import UseContext from "../Utils/UseContext";

const UserDetails = ({
  accordionTitle,
  name,
  title,
  showDetails,
  handleClick,
  data,
}) => {
  const { loggedinuser } = useContext(UseContext);
  return (
    <UseContext.Provider value={{ loggedinuser: "NIVAAn" }}>
      <div
        className="bg-blue-200 flex flex-col items-center justify-between w-1/2 p-4 rounded-lg shadow-xl cursor-pointer gap-2"
        onClick={handleClick}
      >
        <div className="">
          <span className="text-xl font-serif size-5">{accordionTitle}</span>
          <span>{showDetails ? "⬆️" : "⬇️"}</span>
        </div>
        {showDetails === true && (
          <div className="mt-4">
            <p>{name}</p>
            <p>{title}</p>
            {data}
            {loggedinuser}
          </div>
        )}
      </div>
    </UseContext.Provider>
  );
};
export default UserDetails;
