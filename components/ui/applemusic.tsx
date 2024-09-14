import axios, { AxiosResponse } from "axios";
import Player from "./player";
import { cookies } from "next/headers";

export interface Root {
    next: string
    data: Daum[]
  }
  
  export interface Daum {
    id: string
    type: string
    href: string
    attributes: Attributes
  }
  
  export interface Attributes {
    albumName: string
    genreNames: string[]
    trackNumber: number
    releaseDate: string
    durationInMillis: number
    isrc: string
    artwork: Artwork
    composerName?: string
    url: string
    playParams: PlayParams
    discNumber: number
    isAppleDigitalMaster: boolean
    hasLyrics: boolean
    name: string
    previews: Preview[]
    artistName: string
    contentRating?: string
  }
  
  export interface Artwork {
    width: number
    height: number
    url: string
    bgColor: string
    textColor1: string
    textColor2: string
    textColor3: string
    textColor4: string
  }
  
  export interface PlayParams {
    id: string
    kind: string
  }
  
  export interface Preview {
    url: string
  }  

  let lastApiResponse: AxiosResponse<Root, any> | null = null;

export default async function AppleMusicCard() {
    // disable cookies for this server action
    const _cookies = cookies()

    let res = await axios.get<Root>("https://api.music.apple.com/v1/me/recent/played/tracks", {
      headers: {
          Authorization: `Bearer ${process.env.APPLE_DEV_TOKEN}`,
          "Music-User-Token": process.env.APPLE_MUSIC_TOKEN,
      },
    })

    let paused = await fetch("https://" + process.env.URL + '/admin/api', { cache: 'no-store' }).then((res) => res.text()).then((res) => res == 'true')
    
    if ((!lastApiResponse && !paused) || paused) {
      lastApiResponse = res;
    }

    console.log(lastApiResponse?.data.data[0].attributes.name)
    console.log(res.data.data[0].attributes.name)
    return (
      console.log(paused),
      <Player res={(paused) ? res.data : lastApiResponse!.data} />
    )
}
