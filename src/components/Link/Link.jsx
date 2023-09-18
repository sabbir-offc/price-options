import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <div className="">
      <a href={route.path} className="hover:text-red-500">
        <li>{route.name}</li>
      </a>
    </div>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};
export default Link;
