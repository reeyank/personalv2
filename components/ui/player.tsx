"use client"

import { Root } from "./applemusic"
import Image from 'next/image'

export default function Player({ res }: { res: Root }) {
    const imageUrl = res.data[0].attributes.artwork.url.replace("{w}", "" + res.data[0].attributes.artwork.width +"").replace("{h}", "" + res.data[0].attributes.artwork.height +"")

    return (
        <div className="flex flex-col mt-3 items-center justify-center">
            <div>
                My Last Listened to Song on Apple Music: <div className="font-bold w-[90%]">{res.data[0].attributes.name} by {res.data[0].attributes.artistName}</div>
            </div>
            <div className="m-8 flex flex-col justify-center items-center p-2 rounded-xl" style={{
                width: "fit-content",
                backgroundColor: "#" + res.data[0].attributes.artwork.bgColor
            }}>
                <Image src={imageUrl} width={300} height={300} style={{
                    borderRadius: "10%",
                    padding: "10px",
                }} alt={res.data[0].attributes.name}/>
                <audio src={res.data[0].attributes.previews[0].url} preload="auto" controls style={
                    { 
                        width: "100%",
                        maxWidth: "300px",
                    }}></audio>
            </div>
        </div>
        
    )
};