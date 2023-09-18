import PropTypes from "prop-types";
import { AiOutlineCheckCircle } from "react-icons/ai";
const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center gap-3">
        <AiOutlineCheckCircle className="text-lime-300"></AiOutlineCheckCircle>{" "}
        {feature}
      </p>
    </div>
  );
};
Feature.propTypes = {
  feature: PropTypes.object,
};
export default Feature;
