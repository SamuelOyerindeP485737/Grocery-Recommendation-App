import BasicTable from "@/components/widgets/table";
import MyGanttChart from "@/components/widgets/ganttChart";
import classNames from "classnames";
import {MealType} from "@/components/widgets/mealCard";

import {EnlargeIcon, BackIcon, BookmarkIcon, MinimizeIcon, ClockIcon, FlameIcon, VerticalDividerIcon, CarrotIcon, CalenderIcon} from "@/components/Icons";
import {useEffect, useRef, useState} from "react";


export type mealPopupStateType = {
    openState: boolean,
    fullscreen: boolean
}

type ChangeMealPopupState = {
    ChangeOpenState: () => void;
    ChangeFullScreen: () => void;
}

export type ChangeMealPopupPage = {
    ChangePageNumber: (PageNumber: number) => void;
}

export type MealPopupPageType = {
    MealPopupPageNumber: number
}

export type ChangeMealPopup = {
    ChangeMealState: ChangeMealPopupState
}

export type mealPopupStateData = {
    mealPopupStates: mealPopupStateType
}

type MealTypeData = {
    MealData: MealType
}

type mealPopupProps = mealPopupStateData & MealTypeData & ChangeMealPopup
export default function MyMealPopup({mealPopupStates, MealData, ChangeMealState} : mealPopupProps) {
    const [scrollY,setScrollY] = useState<number>(0);
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const popup = popupRef.current
        if (!popup) return
        function handleScroll() { //remember to learn about popupref
            if (!popup) return
            setScrollY(popup.scrollTop);
            //console.log(popup.scrollTop);
        }
        popup.addEventListener("scroll",handleScroll);
        
        return () => { //and also this
            popup.removeEventListener("scroll",handleScroll);
        }
    }, [popupRef.current]);
    

    
    
    return(
        <div onClick={ChangeMealState.ChangeOpenState} className={classNames({"opacity-0 pointer-events-none":!mealPopupStates.openState},"pointer-events-auto transition-all duration-150 absolute z-3 min-h-60 inset-0 bg-black/30")}>
            <div onClick={(e) => e.stopPropagation()} className={classNames({"rounded-0 inset-0 shadow-none":mealPopupStates.fullscreen,"rounded-[1.375rem] inset-x-[10%] inset-y-15 shadow-[0_0_15px_rgba(0,0,0,0.15)]":!mealPopupStates.fullscreen},{"scale-100":mealPopupStates.openState,"scale-80":!mealPopupStates.openState},"absolute min-w-100 min-h-40 z-4 overflow-clip bg-(--background) transition-all ease-out duration-150")}>
                <div className="h-full relative">
                    <div ref={popupRef} className=" h-full overflow-y-auto flex flex-col">
    
                        
                        <div className="absolute z-6 top-0 flex flex-row w-full p-3 justify-between">
                            <button onClick={ChangeMealState.ChangeOpenState} className=" rounded-full flex aspect-square p-2.5 border border-[var(--border-color)] bg-(--background) hover:bg-[var(--sidebar-hover)] shadow-[0_0_15px_rgba(0,0,0,0.15)] active:bg-[var(--sidebar-active)]">
                                <BackIcon width={16} height={16} />
                            </button>
                            <button onClick={ChangeMealState.ChangeFullScreen} className="rounded-full p-2 border flex aspect-square border-[var(--border-color)] bg-(--background) hover:bg-[var(--sidebar-hover)] shadow-[0_0_15px_rgba(0,0,0,0.15)] active:bg-[var(--sidebar-active)]">
                                {mealPopupStates.fullscreen ? <MinimizeIcon width={20} height={20} /> : <EnlargeIcon width={20} height={20}/>}
                            </button>
                        </div>
                        
                        <div style={{
                            backgroundImage: `url('${MealData.image}')`,
                            transform: `translateY(${Math.max(-1000,(-scrollY)/2)}px)`
                        }} className={`sticky top-0 w-full shrink-0 h-70 bg-center bg-cover`} />
                        
    
                        <div className="p-5 z-5 bg-(--background)">
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-row items-center justify-between">
                                    <h1 className="text-4xl font-semibold truncate">{MealData.title}</h1>
                                    <div className="flex gap-1 flex-row">
                                        <button>
                                            <BookmarkIcon width={23} height={23} />
                                        </button>
                                        <p>{MealData.save_amount.toLocaleString()}</p>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-4 opacity-60">
                                    <div className="flex items-center flex-row gap-2">
                                        <FlameIcon width={20} height={20} />
                                        <p>{MealData.calorie_amount.toLocaleString()} kcal</p>
                                    </div>
                                    <VerticalDividerIcon width={3} height={24}/>
                                    <div className="flex flex-row items-center gap-2">
                                        <ClockIcon width={16} height={16} />
                                        <p>{MealData.duration}</p>
                                    </div>
                                </div>
                                <div>
                                    <p>{MealData.description}</p>
                                </div>
                            </div>
                            <div className="mt-12 flex flex-col gap-2">
                                <div className="flex items-center flex-row gap-2 opacity-90">
                                    <h2 className="text-xl font-medium">Ingredients</h2>
                                    <CarrotIcon width={20} height={20} />
                                </div>
                                <div>
                                    <BasicTable tableData={MealData.ingredient_table}/>
                                </div>
                            </div>
                            <div className="mt-12 flex flex-col gap-2">
                                <div className="flex flex-row items-center opacity-90 gap-2">
                                    <h2 className="text-xl font-medium">Schedule</h2>
                                    <CalenderIcon width={20} height={20} />
                                </div>
                                <div className="flex">
                                    <MyGanttChart ganttData={MealData.meal_schedule}/>
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    )
}