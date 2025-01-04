import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>oops!something wents wrong!</h1>
      <h3>
        {error.status}-{error.statesText}
      </h3>
      {/* <h3>{error.error.message}</h3> */}
      <p>
        go to <Link to="/">Home</Link>
      </p>
    </div>
  );
};
export default Error;
