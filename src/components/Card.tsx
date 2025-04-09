import { Videoprop } from "@/Videos";

export const Card = ({ video }: { video: Videoprop }) => {
    return <>
        <div>
            <div className="w-full ">
                <img src={video.thumbnail} className="rounded-xl" />
            </div>
            <div className="flex ">
                <div className="m-2 ">
                    <img src={video.channel_logo} className=" w-10 pt-2 rounded-full " /></div>
                <p className="p-2 m-2 font-semibold text-lg">{video.title}</p>
            </div>
            <div className="items-center">
                <span className="pl-17 text-gray-200 hover:text-white">{video.channel_name}</span>
            </div>

            <div className="flex pl-14 ">
                <div>
                    <span className="p-2">{video.views}</span></div>
                •
                <div>
                    <span className="p-2"> {video.timing}</span></div>
            </div>


        </div>
    </>

}