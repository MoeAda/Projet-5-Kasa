function Rating({stars}) {
    const defaultStars = 5;
    return (
      <>
        <div>
            {[...Array(defaultStars)].map((_, index) => {
                return (
                    <i key={index} className={`fa-xs fa-star ${index < stars ? "fa-solid" : "fa-regular"}`}
                    aria-hidden="true"
                    ></i>
                );
            })}
        </div>
      </>
    );
  }
  
  export default Rating;