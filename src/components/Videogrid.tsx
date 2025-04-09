import { Video } from "@/Videos";
import { Card } from "./Card";

export const Videogrid = () => {
    return <>
        <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {Video.map(video => <div key={video.title} className="p-4"><Card video={video} /></div>)}
            </div>
        </div>
    </>
} 