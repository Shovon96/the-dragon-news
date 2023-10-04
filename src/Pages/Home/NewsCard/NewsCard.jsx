import { BiBookmark, BiShareAlt } from 'react-icons/bi';
import PropTypes from 'prop-types';

const NewsCard = ({ news }) => {
    const { author, title,image_url, details } = news;
    return (
        <div className=''>
            <div className='flex justify-between items-center bg-slate-100  p-4'>
                <div className="flex items-center gap-4">
                    <div>
                        <img className="h-8 w-8 rounded-full" src={author.img} alt="" />
                    </div>
                    <div>
                        <p>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className="flex gap-6 text-2xl">
                    <BiBookmark></BiBookmark>
                    <BiShareAlt></BiShareAlt>
                </div>
            </div>
            <div className='p-4'>
                <h2 className='text-xl font-bold my-4'>{title}</h2>
                <img src={image_url} alt="" />
                <p className='text-gray-400 my-5'>{details.split(' ').slice(0, 60).join(' ') + (details.split(' ').length > 60 ? '...' : '')}</p>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object.isRequired
}

export default NewsCard;