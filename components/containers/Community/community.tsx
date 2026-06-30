import {sidebarStateType} from "@/components/containers/sidebar";
import {changeSidebarStateType} from "@/components/containers/sidebar";
import MyMealCard from "@/components/widgets/mealCard";

type CommunityProps = sidebarStateType & changeSidebarStateType
export default function CommunityPage({sidebarState,changeSidebarState} : CommunityProps) {
    
    function toggleSidebarState() {
        changeSidebarState(!sidebarState)
    }
    
    const testMealCardData = [{
        title: "Veggie remix",
        image: "https://www.eatingwell.com/thmb/GRsO0F0K1NLgON-cyvBFNW0EA9Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simple-1200-Calorie-Meal-Plan-30-Day-Week-3-horizontal-low-9f926c1f40104c459f04f3dae720236a.jpg",
        save_amount: 2600000,
        ingredients: ["cabbage","cucumber"],
        stores: ["Aldi","Tesco","Sainsbury"]
    },{
        title: "Healthy classic",
        image: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/spicy_salmon_bite_rice_16300_16x9.jpg",
        save_amount: 460,
        ingredients: ["rice","cabbage","carrots"],
        stores: ["Tesco","Morrisons"]
    }]
    
    return(
        <div className="h-screen flex-1 bg-(--background) min-w-0">
            <div className="flex p-3 h-16 gap-3 w-full items-center">
                <button onClick={toggleSidebarState} className={sidebarState ? "hidden" : " border-1 border-[var(--border-color)] bg-[var(--button-inactive-bg)] rounded-full p-2.5 aspect-square hover:bg-[var(--sidebar-hover)] active:bg-[var(--sidebar-active)]"}>
                    <img alt="sidebarToggle" src="/sidebar.left.svg" width="18" height="18"></img>
                </button>
                <h2 className="text-[18px] font-semibold truncate">
                    Community page
                </h2>
            </div>
            <div className=" w-full h-fit flex flex-col">
                <div className="px-3 flex w-full justify-between">
                    <div className="flex flex-row gap-2 opacity-80 items-center">
                        <img src="/chart.bar.xaxis.ascending.svg" alt="popularIcon" width="16" height="16"></img>
                        <p className="font-semibold">Popular</p> 
                    </div>
                    <div>
                        <button className="text-sm opacity-70 hover:underline">See all</button>
                    </div>
                </div>
                <div className="px-4 py-3 gap-4 h-fit flex w-full flex-row overflow-y-auto">

                    {testMealCardData.map((value, index) => {
                       return <MyMealCard key={index} MealCardData={value}/>
                    })}
                    
                    
                </div>
            </div>
            
        </div>
    )
}