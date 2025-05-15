import { useState } from "react";

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse ${isOpen ? "open" : ""}`}>
            <div className="collapse-container">
                <h3 className="collapse-container__title" onClick={handleToggle}>
                    {title}
                        <div className="collapse-container__arrow">
                            <i className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`} />
                        </div>
                </h3>
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
