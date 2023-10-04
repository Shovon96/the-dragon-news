import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header";
import LeftSideNav from "../Shared/LeftSideNav";
import Navbar from "../Shared/Navbar";
import RightSideNav from "../Shared/RightSideNav";
import NewsCard from "./NewsCard/NewsCard";

const Home = () => {

    const newsData = useLoaderData()
    console.log(newsData);

    return (
        <div>


            <Header></Header>


            <div className="flex my-2 items-center bg-slate-100 p-3 rounded-md">
                <button className="btn btn-secondary capitalize text-white font-bold">Braking News</button>
                <marquee className="text-lg font-medium">Dolor sit amet consectetur adipisicing elit. Fugiat, labore alias dolores accusantium error repellat nesciunt et eligendi repudiandae, inventore ipsa aliquid dolorum esse numquam minus molestiae iure odit dolor...***</marquee>
            </div>


            <Navbar></Navbar>


            <div className="grid md:grid-cols-4 justify-center gap-5">
                {/* Left side News */}
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>

                {/* Dragon News Home */}
                <div className="md:col-span-2 border">
                    <h1 className="text-3xl font-semibold">Dragon News Home</h1>
                    {
                        newsData.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
                    }
                </div>

                {/* Right side navigation news */}
                <div>
                    <RightSideNav></RightSideNav>
                </div>


            </div>
        </div>
    );
};

export default Home;