import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500 text-white flex flex-col rounded-lg p-5 mt-5 text-center">
      <h2 className="mb-5">
        <span className="text-7xl font-bold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h3 className="text-3xl">{name}</h3>
      <div className=" mt-3 ml-5 flex-grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>
      <button className="w-full bg-green-500 mt-5 py-4 rounded-3xl font-bold hover:bg-green-200 hover:border-2 hover:border-red-300 hover:text-red-500">
        Buy Now
      </button>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
