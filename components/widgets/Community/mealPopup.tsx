import BasicTable from "@/components/widgets/table";
import MyGanttChart from "@/components/widgets/ganttChart";
import classNames from "classnames";
import {MealType} from "@/components/widgets/mealCard";
import BackIcon from "@/components/Icons/backIcon";
import EnlargeIcon from "@/components/Icons/enlargeIcon";

export type mealPopupStateType = {
    openState: boolean,
    fullscreen: boolean
}

type ChangeMealPopupState = {
    ChangeOpenState: () => void;
    ChangeFullScreen: () => void;
}

export type ChangeMealPopup = {
    ChangeState: ChangeMealPopupState
}

export type mealPopupStateData = {
    mealPopupStates: mealPopupStateType
}

type MealTypeData = {
    MealData: MealType
}

type mealPopupProps = mealPopupStateData & MealTypeData & ChangeMealPopup
export default function MyMealPopup({mealPopupStates, MealData, ChangeState} : mealPopupProps) {
    return(
        <div className={classNames({"hidden":!mealPopupStates.openState},"absolute z-3 min-h-60 inset-0 bg-black/30")}>
            <div className={classNames({"rounded-0 inset-0 shadow-none":mealPopupStates.fullscreen},{"rounded-[1.125rem] inset-x-[10%] inset-y-15 shadow-[0_0_15px_rgba(0,0,0,0.15)]":!mealPopupStates.fullscreen},"absolute min-w-100 min-h-40 z-4 overflow-clip bg-(--background)  transition-all ease-out duration-250")}>
                <div className="h-full overflow-y-auto flex flex-col">

                    <div className="w-full shrink-0 h-70  bg-[url('https://www.circlehealthgroup.co.uk/-/media/circle/articles/blogs/health-matters/hero/dietary-fibre-function-recommended-intake-sources.jpg?as=1&h=418&iar=1&w=800&rev=2af7590ad31f48929dc9c1050bdd7bb2')] bg-center bg-cover">
                        <div className="flex flex-row w-full p-3 justify-between">
                            <button onClick={ChangeState.ChangeOpenState} className="rounded-full flex aspect-square p-2.5 border border-[var(--border-color)] bg-(--background) hover:bg-[var(--sidebar-hover)] active:bg-[var(--sidebar-active)]">
                                <BackIcon />
                            </button>
                            <button onClick={ChangeState.ChangeFullScreen} className="rounded-full p-2 border flex aspect-square border-[var(--border-color)] bg-(--background) hover:bg-[var(--sidebar-hover)] active:bg-[var(--sidebar-active)]">
                                <EnlargeIcon width={20} height={20}/>
                            </button>
                        </div>
                    </div>

                    <div className="p-5">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row items-center justify-between">
                                <h1 className="text-4xl font-semibold truncate">Calorie ritual</h1>
                                <div className="flex gap-1 flex-row">
                                    <button>
                                        <img alt="saveButton" src="/Bookmark%20SVG%20Icon.svg" width="23" height="23"></img>
                                    </button>
                                    <p>11,486</p>
                                </div>
                            </div>
                            <div className="flex flex-row gap-4 opacity-60">
                                <div className="flex flex-row gap-2">
                                    <img alt="calorieIcon" src="/flame.svg" width="16" height="16"></img>
                                    <p>3200 kcal</p>
                                </div>
                                <img alt="dividerIcon" src="/Vertical%20Divider%20Icon.svg" width="5" height="16" className="object-cover"></img>
                                <div className="flex flex-row gap-2">
                                    <img alt="lengthIcon" src="/clock.svg" width="16" height="16"></img>
                                    <p>30 days</p>
                                </div>
                            </div>
                            <div>
                                <p>A curated set of high calorie meals to get you going</p>
                            </div>
                        </div>
                        <div className="mt-12 flex flex-col gap-2">
                            <div className="flex flex-row gap-2 opacity-90">
                                <h2 className="text-xl font-medium">Ingredients</h2>
                                <img alt="IngredientsIcon" src="/carrot.fill.svg" width="20" height="20"></img>
                            </div>
                            <div>
                                <BasicTable tableData={MealData.ingredient_table}/>
                            </div>
                        </div>
                        <div className="mt-12 flex flex-col gap-2">
                            <div className="flex flex-row opacity-90 gap-2">
                                <h2 className="text-xl font-medium">Schedule</h2>
                                <img alt="scheduleIcon" src="/calendar.svg" width="20" height="20"></img>
                            </div>
                            <div className="flex">
                                <MyGanttChart ganttData={MealData.meal_schedule}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}