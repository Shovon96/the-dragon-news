import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightSideNav = () => {
    return (
        <div>
            {/* login with */}
            <div className='p-3 space-y-3'>
                <h1 className="text-2xl font-bold">Login With</h1>
                <button className="btn btn-outline w-full">
                    <FaGoogle className='mr-2 text-red-400 text-xl'></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub className='mr-2 text-xl'></FaGithub>
                    GitHub
                </button>
            </div>

            {/* Find us on */}
            <div className='p-3 mt-4'>
                <h1 className='text-2xl font-bold mb-2'>Find us on</h1>
                <a href="" className='flex items-center border rounded-t-lg p-4'>
                    <FaFacebook></FaFacebook>
                    <span className='ml-3 text-lg font-semibold'>Facebook</span>
                </a>
                <a href="" className='flex items-center border-x p-4 '>
                    <FaTwitter></FaTwitter>
                    <span className='ml-3 text-lg font-semibold'>Twitter</span>
                </a>
                <a href="" className='flex items-center border rounded-b-lg p-4'>
                    <FaInstagram></FaInstagram>
                    <span className='ml-3 text-lg font-semibold'>Instagram</span>
                </a>
            </div>

            {/* Q Zone */}
            <div className='p-3 mt-4'>
                <h1 className='text-2xl font-bold mb-2'>Q Zone</h1>
                <img src="https://i.ibb.co/CP0wtZX/qZone1.png" alt="" />
                <img src="https://i.ibb.co/0BKM0zY/qZone2.png" alt="" />
                <img src="https://i.ibb.co/TT2yFRS/qZone3.png" alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;