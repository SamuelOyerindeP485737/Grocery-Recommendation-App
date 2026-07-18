import classNames from "classnames";

export type challengePopupStateType = {
    openState: boolean,
    fullscreen: boolean
}

export type challengePopupStateData = {
    challengePopupStates: challengePopupStateType
}

type changeChallengePopupState = { //Make generic
    ChangeOpenState: () => void;
    ChangeFullScreen: () => void;
}

export type ChangeChallengePopup = {
    ChangeChallengeState: changeChallengePopupState
}

type MealPopupProps = challengePopupStateData & ChangeChallengePopup
export default function MyChallengePopup({challengePopupStates, ChangeChallengeState} : MealPopupProps) {
    return(
        <div onClick={ChangeChallengeState.ChangeOpenState} className={classNames({"pointer-events-none opacity-0":!challengePopupStates.openState},"pointer-events-auto transition-all inset-0 duration-150 min-h-60 absolute bg-black/30 z-3")}>
            <div onClick={(e) => {e.stopPropagation()}} className={classNames({"rounded-0 inset-0 shadow-none":challengePopupStates.fullscreen,"rounded-[1.375rem] inset-x-[10%] inset-y-15 shadow-[0_0_15px_rgba(0,0,0,0.15)]":!challengePopupStates.fullscreen},{"scale-100":challengePopupStates.openState,"scale-80":!challengePopupStates.openState},"absolute z-4 min-h-40 min-w-100 transition-all ease-out duration-150 overflow-clip bg-(--background)")}>
                
            </div>
        </div>
    )
}