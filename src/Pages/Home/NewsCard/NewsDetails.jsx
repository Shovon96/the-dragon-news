import { useParams } from "react-router-dom";
import Header from "../../Shared/Header";
import Navbar from "../../Shared/Navbar";
import RightSideNav from "../../Shared/RightSideNav";
import { useEffect, useState } from "react";

const NewsDetails = () => {

    const { id } = useParams()
    // const [loading, setLoading] = useState(null)
    const [itemData, setItemData] = useState([])

    useEffect(() => {
        fetch(`news.json/news/${id}`)
        .then(res => res.json())
        .then(data => setItemData(data))
    }, [id]);

    console.log(itemData);
    return (
        <div>
            {/* header news */}
            <div>
                <Header></Header>
                <Navbar></Navbar>
            </div>

            <div className="grid md:grid-cols-4 gap-3 my-8">
                {/* news details */}
                <div className="col-span-3 border">
                    <p>{id}</p>
                    <p></p>
                </div>

                {/* Right side navigation news */}
                <div className="col-span-1 border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;