import dynamic from "next/dynamic";

const Map = dynamic(() => import("./MapComponentReact"), {    ssr: false });

export default Map;