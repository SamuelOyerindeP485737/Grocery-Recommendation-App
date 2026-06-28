import {sidebarStateType} from "@/components/containers/sidebar";
import {changeSidebarStateType} from "@/components/containers/sidebar";
import MyMealCard from "@/components/widgets/mealCard";

type CommunityProps = sidebarStateType & changeSidebarStateType
export default function CommunityPage({sidebarState,changeSidebarState} : CommunityProps) {
    
    function toggleSidebarState() {
        changeSidebarState(!sidebarState)
    }
    
    return(
        <div className="flex-1 h-screen bg-(--background)">
            <div className="flex p-3 h-16 gap-3 w-full items-center">
                <button onClick={toggleSidebarState} className={sidebarState ? "hidden" : " border-1 border-[var(--border-color)] bg-[var(--button-inactive-bg)] rounded-full p-2.5 aspect-square hover:bg-[var(--sidebar-hover)] active:bg-[var(--sidebar-active)]"}>
                    <img alt="sidebarToggle" src="/sidebar.left.svg" width="18" height="18"></img>
                </button>
                <h2 className="text-[18px] font-semibold truncate">
                    Community page
                </h2>
            </div>
            <div className="px-3 w-full h-full flex flex-col">
                <div className="flex w-full justify-between">
                    <div className="flex flex-row gap-2 opacity-80 items-center">
                        <img src="/chart.bar.xaxis.ascending.svg" alt="popularIcon" width="16" height="16"></img>
                        <p className="font-semibold">Popular</p> 
                    </div>
                    <div>
                        <button className="text-sm opacity-70 hover:underline">See all</button>
                    </div>
                </div>
                <div className="my-3 flex-row">
                    <MyMealCard />
                </div>
            </div>
            
        </div>
    )
}