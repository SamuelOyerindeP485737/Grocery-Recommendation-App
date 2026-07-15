import {svgCustomizeProps} from "@/components/types/SVGIcons/svg";


export default function VerticalDividerIcon({width, height} : svgCustomizeProps) {
    return(
        <svg width={`${width}`} height={`${height}`} viewBox="0 0 1 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.5 2V13"
                stroke="#000000"
                strokeWidth="1"
                strokeLinecap="round"
            />
        </svg>
    )
}