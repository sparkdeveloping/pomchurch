import type { MetadataRoute } from "next";
export default function manifest():MetadataRoute.Manifest{return {name:"The Pentecostals of Manhattan",short_name:"POM",description:"Life gets better here.",start_url:"/",display:"standalone",background_color:"#f5f0e8",theme_color:"#101010",icons:[{src:"/favicon.svg",sizes:"any",type:"image/svg+xml"}]}}
