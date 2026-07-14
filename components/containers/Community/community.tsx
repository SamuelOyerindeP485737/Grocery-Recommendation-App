import {sidebarStateType} from "@/components/containers/sidebar";
import {changeSidebarStateType} from "@/components/containers/sidebar";
import MyMealCard from "@/components/widgets/mealCard";
import MyChallengeCard from "@/components/widgets/challengeCard";

export type MealPopupStateType = {
    mealPopupState: boolean
}

export type changeMealPopupStateType = {
    changeMealPopupState: () => void;
}

export type ChallengePopupStateType = {
    challengePopupState: boolean
}

export type changeChallengePopupStateTye = {
    changeChallengePopupState: () => void;
}

type CommunityProps = sidebarStateType & changeSidebarStateType & MealPopupStateType & ChallengePopupStateType;
export default function CommunityPage({sidebarState,changeSidebarState,mealPopupState,challengePopupState} : CommunityProps) {
    
    
    const testMealCardData = [{ //Placeholders for future backend
        title: "Veggie remix",
        image: "https://www.eatingwell.com/thmb/GRsO0F0K1NLgON-cyvBFNW0EA9Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simple-1200-Calorie-Meal-Plan-30-Day-Week-3-horizontal-low-9f926c1f40104c459f04f3dae720236a.jpg",
        save_amount: 2600000,
        ingredients: ["cabbage","cucumber"],
        stores: ["Aldi","Tesco","Sainsbury"]
    },{
        title: "Healthy classic",
        image: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/spicy_salmon_bite_rice_16300_16x9.jpg",
        save_amount: 46000,
        ingredients: ["rice","cabbage","carrots"],
        stores: ["Tesco","Morrisons"]
    },{
        title: "Calorie ritual",
        image: "https://ghc.health/cdn/shop/articles/overhead-view-unhealthy-healthy-food-background_23-2147885785.jpg?v=1623053605",
        save_amount: 11000,
        ingredients: ["Bread","Broccoli","bananas"],
        stores: ["Tesco","Sainsbury"]
    },{
        title: "Potato fantasy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc2uKvMxcF0pepYj80qjAEThmfGoyNQHI56T8TfRaPZdyJR7b3F3yjbjOH&s=10",
        save_amount: 16000,
        ingredients: ["potato","broccoli","eggs"],
        stores: ["Tesco","Sainsbury"]
    },{
        title: "Protein massacre",
        image: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/chipotle_chicken_burrito_82273_16x9.jpg",
        save_amount: 186000,
        ingredients: ["rice","cucumber","peas"],
        stores: ["Tesco","Morrisons"]
    }]
    
    const testChallengeCardData = [{ //Placeholders for future backend
        title: "Indian feast",
        image: "https://cdn.prod.website-files.com/64931d2aee18510b47f4bb1f/64ecfa2dfcac3d681e0e6f36_jn1wjf4b9ykm3f0vv7k8dprrwfxt6php.png",
        duration: "14 days",
        challenge: "Indian cuisine",
        description: "Try spicy indian cuisine for 2 weeks"
    },{
        title: "Japanese cuisine",
        image: "https://byfood.b-cdn.net/api/public/assets/9595/content",
        duration: "21 days",
        challenge: "Japanese cuisine",
        description: "Eat only japanese meals for 3 weeks"
    },{
        title: "Veggie graveyard",
        image: "https://images.tgtg.ninja/standard_images/GROCERIES/D6Tu_L3chLE.jpg",
        duration: "7 days",
        challenge: "Vegetarian week",
        description: "A set of highly vegetarian meals for the whole week."
    }]
    
    return(
        <div className="relative h-screen flex-1 bg-(--background) min-w-0">
            <div className=" absolute z-3 inset-0 bg-black/30">
                <div className="absolute rounded-[1.125rem] z-4 inset-15 bg-(--background) shadow-[0_0_15px_rgba(0,0,0,0.15)] transition-all duration-250">
                    <div className="flex flex-col">
                        
                        <div className="w-full h-70 rounded-t-[1.125rem] bg-[url('https://www.circlehealthgroup.co.uk/-/media/circle/articles/blogs/health-matters/hero/dietary-fibre-function-recommended-intake-sources.jpg?as=1&h=418&iar=1&w=800&rev=2af7590ad31f48929dc9c1050bdd7bb2')] bg-center bg-cover">
                            <div className="flex flex-row w-full p-1.5 justify-between">
                                <button className="rounded-full flex aspect-square p-2.5 border border-[var(--border-color)] bg-(--background) hover:bg-[var(--sidebar-hover)] active:bg-[var(--sidebar-active)]">
                                    <img alt="backButton" src="/chevron.backward.svg" width="16" height="16"></img>
                                </button>
                                <button className="rounded-full p-2 border flex aspect-square border-[var(--border-color)] bg-(--background) hover:bg-[var(--sidebar-hover)] active:bg-[var(--sidebar-active)]">
                                    <img alt="backButton" src="/Enlarge%20Vector%20Icon.svg" width="20" height="20"></img>
                                </button>
                            </div>
                        </div>
                        
                        <div className="p-5">
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-row items-center justify-between">
                                    <h1 className="text-4xl font-semibold">Calorie ritual</h1>
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
                                        <img alt="lengthIcon" src="/calendar.svg" width="16" height="16"></img>
                                        <p>30 days</p>
                                    </div>
                                </div>
                                <div>
                                    <p>A curated set of high calorie meals to get you going</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <div className="flex p-3 h-16 gap-3 w-full items-center">
                <button onClick={changeSidebarState} className={sidebarState ? "hidden" : " border-1 border-[var(--border-color)] bg-[var(--button-inactive-bg)] rounded-full p-2.5 aspect-square hover:bg-[var(--sidebar-hover)] active:bg-[var(--sidebar-active)]"}>
                    <img alt="sidebarToggle" src="/sidebar.left.svg" width="18" height="18"></img>
                </button>
                <h2 className="text-[18px] font-semibold truncate">
                    Community page
                </h2>
            </div>
            <div className=" w-full h-fit flex flex-col gap-6">
                <div>
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
                <div>
                    <div className="px-3 flex w-full justify-between">
                        <div className="flex flex-row gap-2 opacity-80 items-center">
                            <img src="/figure.run.svg" alt="popularIcon" width="16" height="16"></img>
                            <p className="font-semibold">Challenges</p>
                        </div>
                        <div>
                            <button className="text-sm opacity-70 hover:underline">See all</button>
                        </div>
                    </div>
                    <div className="px-4 py-3 gap-4 h-fit flex w-full flex-row overflow-y-auto">
                        {testChallengeCardData.map((value, index) => {
                            return <MyChallengeCard key={index} ChallengeCardData={value}/>
                        })}
                        

                    </div>
                </div>
                
            </div>
            
        </div>
    )
}