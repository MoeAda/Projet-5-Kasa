import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Rating({ stars }) {
  const defaultStars = 5;

  return (
    <>
      <div className="rating">
        {[...Array(defaultStars)].map((_, index) => {
          return (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              size="lg"
              style={{ color: index < stars ? "#FF6060" : "#E3E3E3" }}
            />
          );
        })}
      </div>
    </>
  );
}

export default Rating;
