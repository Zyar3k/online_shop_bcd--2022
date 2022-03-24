import { ThreeDots } from "react-loader-spinner";

import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <ThreeDots color="#a8dadc" height={120} width={120} />
    </div>
  );
};

export default Loader;
