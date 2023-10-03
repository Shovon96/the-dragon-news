import { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";
import moment from "moment/moment";


const LeftSideNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(resposnse => resposnse.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-2 p-2">All Category</h1>
            <div>
                <h2 className="text-2xl bg-slate-200 font-bold px-8 py-3 rounded-lg">National News</h2>
                <div className="px-8 text-lg">
                    {
                        categories.map(category =>
                            <div className="py-3 text-gray-500 hover:text-black hover:underline" key={category.id}>
                                <Link className="">{category.name}</Link>
                            </div>)
                    }
                </div>
            </div>

            {/* image and cards */}
            <div>
                <div className="p-2">
                    <img src="https://i.ibb.co/s3j3Ksd/1.png" alt="" />
                    <h4 className="text-lg font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h4>
                    <div className="flex my-3 text-sm font-semibold items-center">
                        <p>Sprots</p>
                        <FaCalendar className="ml-16 mr-4"></FaCalendar>
                        <h4>{moment().format("MMM D, YYYY")}</h4>
                    </div>
                </div>
                <div className="p-2">
                    <img src="https://i.ibb.co/BtVdv7Z/2.png" alt="" />
                    <h4 className="text-lg font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h4>
                    <div className="flex my-3 text-sm font-semibold items-center">
                        <p>Sprots</p>
                        <FaCalendar className="ml-16 mr-4"></FaCalendar>
                        <h4>{moment().format("MMM D, YYYY")}</h4>
                    </div>
                </div>
                <div className="p-2">
                    <img src="https://i.ibb.co/8rg6yCt/3.png" alt="" />
                    <h4 className="text-lg font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h4>
                    <div className="flex my-3 text-sm font-semibold items-center">
                        <p>Sprots</p>
                        <FaCalendar className="ml-16 mr-4"></FaCalendar>
                        <h4>{moment().format("MMM D, YYYY")}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;