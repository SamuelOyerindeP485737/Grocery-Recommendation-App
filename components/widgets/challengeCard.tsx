export type ChallengeCardType = {
    title: string,
    image: string,
    duration: string,
    challenge: string,
    description: string
}

type ChallengeCardProps = {
    ChallengeCardData: ChallengeCardType
}
export default function MyChallengeCard({ChallengeCardData}: ChallengeCardProps) {
    //Modify icons globally for dark theme support
    return(
        <div style={{backgroundImage: `url('${ChallengeCardData.image}')`}} className={`relative bg-cover shadow-[0_0_15px_rgba(0,0,0,0.20)] w-120 flex flex-row rounded-[1.4375rem] shrink-0 hover:scale-102 transition-all duration-100 text-white p-2.5 h-70`}>
                <div className="absolute inset-0 bg-black/40 rounded-[1.4375rem]"></div>
                <div className="z-2 w-[70%] flex flex-col justify-end gap-3 mb-3">
                    <h2 className="text-3xl font-semibold">{ChallengeCardData.title}</h2>
                    <div className="flex flex-row gap-2">
                        <img alt="durationIcon" src="/calendar.svg" width="16" height="16" className="invert"></img>
                        <p className="text-sm">Duration: {ChallengeCardData.duration}</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <img alt="durationIcon" src="/flame.svg" width="16" height="16" className="invert"></img>
                        <p className="text-sm">Challenge: {ChallengeCardData.challenge}</p>
                    </div>
                    <div>
                        <p className="font-semibold text-sm pr-6">{ChallengeCardData.description}</p>
                    </div>
                </div>
                <div className="z-2 w-[30%] flex flex-col justify-end">
                    <button className="flex flex-row gap-2 bg-(--background) py-2.5 justify-center rounded-[0.75rem] text-black hover:scale-103 active:scale-101 transition-all duration-100">
                        <p>View details</p>
                        <img alt="detailsIcon" src="/Free%20Link%20Icon.svg" width="16" height="16"></img>
                    </button>
                </div>
            
            
        </div>
    )
}