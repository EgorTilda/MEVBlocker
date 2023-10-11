const ReviewItem = ({text, mode}) => {

    let reviewClasses = 'review-card' + " " + mode;

    return (
        <div className={reviewClasses}>
            <div className="review-card__inner">
                <p className="review-card__text">
                   {text} <span className="review-card__author"> - Anon</span>
                </p>
            </div>
        </div>
    );
};

export default ReviewItem;