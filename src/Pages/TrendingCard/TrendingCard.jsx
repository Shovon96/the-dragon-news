import { FaCalendar } from "react-icons/fa";
import PropTypes from 'prop-types'

const TrendingCard = ({ trendItem }) => {
    const { title, author, thumbnail_url } = trendItem;
    return (
        <div className="shadow-md py-4 px-2 rounded-lg">
            <img className="h-48 w-full" src={thumbnail_url} alt="" />
            <p className="text-lg font-semibold">{title}</p>
            <div className="flex justify-between px-4">
                <FaCalendar></FaCalendar>
                <p>{author?.published_date}</p>
            </div>
        </div>
    );
};

TrendingCard.propTypes = {
    trendItem: PropTypes.object
}

export default TrendingCard;