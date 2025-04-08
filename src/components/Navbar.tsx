import { Searchbar } from "./Searchbar"

export const Navbar = () => {
    return <>
        <div  className="flex justify-between ">
            <div className="flex pl-2  ">
                <div className="w-8 pt-6 rounded-full">
                    <img className="p-1 rounded-full hover:bg-gray-800" src="/hamburgericon-removebg-preview.png" />
                </div>
                <div className="w-30  ">
                    <img src="/ytlogotextwhite.png" />
                </div>
            </div>
            <div>
                <Searchbar/>
            </div>
            <div>
                Singup
            </div>
        </div>
    </>
}