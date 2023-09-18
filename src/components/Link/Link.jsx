import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <div>
      <a href={route.path}>
        <li>{route.name}</li>
      </a>
    </div>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};
export default Link;
