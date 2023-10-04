import { Link, useLocation, useParams } from "react-router-dom";
import Header from "../../Shared/Header";
import Navbar from "../../Shared/Navbar";
import RightSideNav from "../../Shared/RightSideNav";
import { useEffect, useState } from "react";
import TrendingCard from "../../TrendingCard/TrendingCard";

const NewsDetails = () => {

    const { id } = useParams()
    const [itemData, setItemData] = useState([])
    const [news, setNews] = useState([])
    const [trending, setTrending] = useState([])
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setItemData(data))
    }, []);

    useEffect(() => {
        const findItem = itemData?.find(item => (item._id == id))
        setNews(findItem)
    }, [id, itemData])

    useEffect(() => {
        const filterTrending = itemData?.filter(item => item?.others_info?.is_trending === true)
        setTrending(filterTrending);
    }, [itemData])


    return (
        <div>
            {/* header news */}
            <div>
                <Header></Header>
                <Navbar></Navbar>
            </div>

            <div className="grid md:grid-cols-4 gap-3 my-8 ml-10">
                {/* news details */}
                <div className="col-span-3 p-4 border rounded-lg">
                    <div>
                        <img className="mx-auto w-full" src={news?.image_url} alt="" />
                        <h2 className="text-2xl font-bold my-3">{news?.title}</h2>
                        <p>{news?.details}</p>
                        <Link to='/'>
                            <button className="btn btn-error text-white capitalize my-3">All News in this category</button>
                        </Link>
                    </div>

                    {/* trending card */}
                    <div className="grid grid-cols-3 gap-4 mt-24">
                        {
                            trending.map(trendItem => 
                            <TrendingCard key={trendItem?._id}
                            trendItem={trendItem}
                            >
                            </TrendingCard>)
                        }
                    </div>
                </div>

                {/* Right side navigation news */}
                <div className="col-span-1 border rounded-lg">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;