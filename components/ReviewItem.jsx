const ReviewItem = ({text}) => {
    return (
        <div className="review-card review-card">
            <div className="review-card__inner">
                <p className="review-card__text">
                   {text} <span className="review-card__author"> - Anon</span>
                </p>
            </div>
        </div>
    );
};

export default ReviewItem;