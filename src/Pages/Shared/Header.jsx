import moment from "moment/moment";

const Header = () => {
    return (
        <div className="flex justify-center">
            <div className="text-center">
                <img src="https://i.ibb.co/SXTx56C/logo.png" alt="" />
                <h4 className="text-lg font-semibold my-2">Journalist Without Fear or Favor</h4>
                <h4 className="text-lg font-semibold">{moment().format("dddd, MMMM D, YYYY")}</h4>
            </div>
        </div>
    );
};

export default Header;