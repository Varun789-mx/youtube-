export const Searchbar = () => {
    return <>
        <div className="flex w-170   justify-between m-5 h-10">
            <div className="group flex h-10 rounded-l-3xl p-0.5 w-145  bg-gray-800 focus-within:border-1 border-blue-500  ">
                <img
                    className="hidden group-focus-within:block w-8 h-8 pt-1 object-contain "
                    src="/searchicon.png"
                />
                <input type="text" className="w-120 border-none p-2 focus:outline-none " placeholder="Search" />
            </div>
            <div className="border-gray-500 w-25 h-10 overflow-ellipsis  rounded-r-3xl bg-gray-800 p-2 flex items-center justify-center">
                <img src="/searchicon.png" className="w-7 " /></div>
        </div>
    </>
}