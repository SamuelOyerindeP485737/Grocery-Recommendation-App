import {CalenderIcon, FlameIcon, LinkIcon} from "@/components/Icons";
import {ChangeChallengePopup, ChangeChallengePopupPage} from "@/components/widgets/Community/challengePopup";

export type ChallengeType = {
    title: string,
    image: string,
    duration: string,
    challenge: string,
    description: string
}

type ChallengeCardProps = {
    ChallengeCardData: ChallengeType
    ID: number
} & ChangeChallengePopup & ChangeChallengePopupPage
export default function MyChallengeCard({ChallengeCardData,ID,ChangeChallengeState,ChangeChallengePageNumber}: ChallengeCardProps) {
    //Fix gradient on icons
    function openCard(id: number) {
        ChangeChallengePageNumber(ID);
        ChangeChallengeState.ChangeOpenState();
    }
    return(
        <div onClick={() => {openCard(ID)}} style={{backgroundImage: `url('${ChallengeCardData.image}')`}} className={`relative bg-cover shadow-[0_0_15px_rgba(0,0,0,0.20)] w-120 flex flex-row rounded-[1.4375rem] shrink-0 hover:scale-102 transition-all duration-100 text-white p-2.5 h-70`}>
                <div className="absolute inset-0 bg-black/40 rounded-[1.4375rem]"></div>
                <div className="z-2 w-[70%] flex flex-col justify-end gap-3 mb-3">
                    <h2 className="text-3xl font-semibold">{ChallengeCardData.title}</h2>
                    <div className="flex flex-row gap-2 items-center">
                        <CalenderIcon width={16} height={16} />
                        <p className="text-sm">Duration: {ChallengeCardData.duration}</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <FlameIcon width={16} height={16} />
                        <p className="text-sm">Challenge: {ChallengeCardData.challenge}</p>
                    </div>
                    <div>
                        <p className="font-semibold text-sm pr-6">{ChallengeCardData.description}</p>
                    </div>
                </div>
                <div className="z-2 w-[30%] flex flex-col justify-end">
                    <button className="flex flex-row items-center gap-2 bg-(--background) py-2.5 justify-center rounded-[0.75rem] text-black hover:scale-103 active:scale-101 transition-all duration-100">
                        <p>View details</p>
                        <LinkIcon width={16} height={16} />
                    </button>
                </div>
            
            
        </div>
    )
}