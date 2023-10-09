import { useState } from "react";

const FAQCard = ({questionText, answerText}) => {
    const [isOpened, setOpen] = useState(true);
    const openAnswer = () => {
        setOpen(!isOpened);
    }
    let faqClasses = "faq-card" + " " + (isOpened ? "" : "faq-card--active")
    return (
        <div className={faqClasses}>
            <div onClick={openAnswer} className="faq-card__question">
                <h3 className="faq-card__name">{questionText}</h3>
                <button className="faq-card__control"><img src="/icons/plus.svg"
                        alt="Open"/>
                </button>
            </div>
            <div className="faq-card__answer">
                <p>
                    {answerText}
                </p>
            </div>
        </div>
    );
};

export default FAQCard;