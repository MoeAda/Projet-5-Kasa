import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse ${isOpen ? "open" : ""}`}>
            <div className="collapse-container" onClick={handleToggle}>
                <h3 className="collapse-container__title">
                    {title}                        
                </h3>
                <div className="collapse-container__arrow">
                            <FontAwesomeIcon 
                            icon={isOpen ? faChevronDown : faChevronUp}
                            />
                        </div>
            </div>
            <div className={`collapse__content ${isOpen ? "open" : ""}`}>
                <div className={`collapse__content__text ${isOpen ? "collapse-container__content open" : ""}`}>
                    {Array.isArray(content) ? (
                        <ul>
                            {content.map((item, i) => (
                                <li key={`${item}-${i}`}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                    <p>{content}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Collapse;
