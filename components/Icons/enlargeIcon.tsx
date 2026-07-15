import {svgCustomizeProps} from "@/components/types/SVGIcons/svg";


export default function EnlargeIcon({width, height} : svgCustomizeProps) {
    return(
        <svg width={`${width}`} height={`${height}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 9.5L21 3M21 3H15M21 3V9M3 21L9.5 14.5M3 21V15M3 21H9" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}