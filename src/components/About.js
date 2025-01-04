import { useContext } from "react";
import UseContext from "../Utils/UseContext";

const About = () => {
  const { loggedinuser } = useContext(UseContext);
  return (
    <div>
      <h1>About</h1>
      <p>welcome {loggedinuser}to about page</p>
    </div>
  );
};

export default About;
