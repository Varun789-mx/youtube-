export const Searchbar = () => {
    return <>
        <div className="grid grid-cols-4 w-150 p-4 bg-yellow-500 justify-between">
            <div className="h-9 rounded-l-3xl p-3 grid-cols-1">
                <img src="https://img.icons8.com/?size=60&id=59878&format=png" />

            </div>
            <div className="grid-cols-2">
                <input type="text" className=" bg-blue-500 w-124 h-10" />
            </div>
            <div className=" rounded-r-full bg-gray-500">
                <img src="https://img.icons8.com/?size=60&id=59878&format=png" className="" />
            </div>
        </div>
    </>
}