import { Searchbar } from "./Searchbar"

export const Navbar = () => {
    return <>
        <div className="flex justify-between ">
            <div className="flex pl-2  ">
                <div className="w-8 pt-6 rounded-full">
                    <img className="p-1 rounded-full hover:bg-gray-800" src="/hamburgericon-removebg-preview.png" />
                </div>
                <div className="w-30  ">
                    <img src="/ytlogotextwhite.png" />
                </div>
            </div>
            <div className="flex">
                <Searchbar/>
                <div className="flex m-4 p-2 justify-center bg-gray-800 hover:bg-red-700 rounded-full">
                    <button className="p-1 rounded-full  ">
                        <img src="/micicon.png" className="" />
                    </button>
                </div>
            </div>
            <div>
                Singup
            </div>
        </div>
    </>
}