import {sidebarStateType} from "@/components/containers/sidebar";
import {changeSidebarStateType} from "@/components/containers/sidebar";
import MyMealCard from "@/components/widgets/mealCard";
import MyChallengeCard from "@/components/widgets/challengeCard";
import BasicTable from "@/components/widgets/table";
import MyGanttChart, {GanttChart} from "@/components/widgets/ganttChart";
import MyChallengePopup, {
    challengePopupPageType,
    challengePopupStateData,
    challengePopupStateType,
    ChangeChallengePopup, ChangeChallengePopupPage
} from "@/components/widgets/Community/challengePopup";
import MyMealPopup, {
    ChangeMealPopup,
    ChangeMealPopupPage, MealPopupPageType,
    mealPopupStateData
} from "@/components/widgets/Community/mealPopup";
import {BarchartIcon, FigurerunIcon, SidebarleftIcon} from "@/components/Icons";

type ChangePopupStates = ChangeMealPopup & ChangeChallengePopup

type ChangePopupPages = ChangeMealPopupPage & ChangeChallengePopupPage

type PopupStateProps = {
    ChangeState: ChangePopupStates
    ChangePage: ChangePopupPages
}

export type PopupPageNumbers = MealPopupPageType & challengePopupPageType

type PopupPageProps = {
    PageNumber: PopupPageNumbers
}

type CommunityProps = sidebarStateType & changeSidebarStateType & mealPopupStateData & challengePopupStateData & PopupStateProps & PopupPageProps;
export default function CommunityPage({sidebarState,changeSidebarState,mealPopupStates,challengePopupStates, ChangeState, ChangePage, PageNumber} : CommunityProps) {
    
    
    const testMealCardData = [{ //Placeholders for future backend
        title: "Veggie remix",
        image: "https://www.eatingwell.com/thmb/GRsO0F0K1NLgON-cyvBFNW0EA9Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simple-1200-Calorie-Meal-Plan-30-Day-Week-3-horizontal-low-9f926c1f40104c459f04f3dae720236a.jpg",
        save_amount: 2631240,
        duration: "30 days",
        calorie_amount: 2200,
        description: "A curated set of high calorie meals to get you going",
        stores: ["Aldi","Tesco","Sainsbury"],
        ingredient_table:[{
            grocery_name: "Cabbage",
            amount: "1 loaf",
            cost: 1.25
        },{
            grocery_name: "Cucumber",
            amount: "400g",
            cost: 1.29
        }],
        meal_schedule: [{
            parent_name: "Banana smoothie",
            item_data: [{
                item_name: "Banana",
                day: 21,
                month: 6,
                year: 2026,
                duration: 1
            },{
                item_name: "Oranges",
                day: 21,
                month: 6,
                year: 2026,
                duration: 1
            }]
        },{
            parent_name: "Rice and stew",
            item_data: [{
                item_name: "Rice",
                day: 22,
                month: 6,
                year: 2026,
                duration: 1
            },{
                item_name: "Stew",
                day: 22,
                month: 6,
                year: 2026,
                duration: 1
            }]
        }]
    },{
        title: "Healthy classic",
        image: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/spicy_salmon_bite_rice_16300_16x9.jpg",
        save_amount: 46213,
        duration: "30 days",
        calorie_amount: 2200,
        description: "A curated set of high calorie meals to get you going",
        stores: ["Tesco","Morrisons"],
        ingredient_table:[{
            grocery_name: "Rice",
            amount: "1 bag",
            cost: 3.99
        },{
            grocery_name: "Cabbage",
            amount: "1 bag",
            cost: 3.99
        },{
            grocery_name: "Carrots",
            amount: "5 pcs",
            cost: 3.99
        }],
        meal_schedule: [{
            parent_name: "Banana smoothie",
            item_data: [{
                item_name: "Banana",
                day: 21,
                month: 6,
                year: 2026,
                duration: 1
            }]
        }]
    },{
        title: "Calorie ritual",
        image: "https://ghc.health/cdn/shop/articles/overhead-view-unhealthy-healthy-food-background_23-2147885785.jpg?v=1623053605",
        save_amount: 11000,
        duration: "2 weeks",
        calorie_amount: 5300,
        description: "A curated set of high calorie meals to get you going.",
        stores: ["Tesco","Sainsbury"],
        ingredient_table:[{
            grocery_name: "Bread",
            amount: "1 bottle",
            cost: 3.99
        },{
            grocery_name: "Broccoli",
            amount: "1 bottle",
            cost: 3.99
        },{
            grocery_name: "Bananas",
            amount: "1 bottle",
            cost: 3.99
        }],
        meal_schedule: [{
            parent_name: "Banana smoothie",
            item_data: [{
                item_name: "Banana",
                day: 21,
                month: 6,
                year: 2026,
                duration: 1
            }]
        }]
    },{
        title: "Potato fantasy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc2uKvMxcF0pepYj80qjAEThmfGoyNQHI56T8TfRaPZdyJR7b3F3yjbjOH&s=10",
        save_amount: 16000,
        duration: "30 days",
        calorie_amount: 2200,
        description: `"Anything that can have a potato, will have a potato", a quote perfectly describing this 1 month long meal plan filled with nutritious potato centric meals.`,
        stores: ["Tesco","Sainsbury"],
        ingredient_table:[{
            grocery_name: "Potato",
            amount: "1 bottle",
            cost: 3.99
        },{
            grocery_name: "Broccoli",
            amount: "1 bottle",
            cost: 3.99
        },{
            grocery_name: "Eggs",
            amount: "1 bottle",
            cost: 3.99
        }],
        meal_schedule: [{
            parent_name: "Banana smoothie",
            item_data: [{
                item_name: "Banana",
                day: 21,
                month: 6,
                year: 2026,
                duration: 1
            }]
        }]
    },{
        title: "Protein massacre",
        image: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/chipotle_chicken_burrito_82273_16x9.jpg",
        save_amount: 186512,
        duration: "30 days",
        calorie_amount: 2200,
        description: "A curated set of high calorie meals to get you going",
        stores: ["Tesco","Morrisons"],
        ingredient_table:[{
            grocery_name: "Rice",
            amount: "1 bottle",
            cost: 3.99
        },{
            grocery_name: "Cucumber",
            amount: "1 bottle",
            cost: 3.99
        },{
            grocery_name: "Peas",
            amount: "1 bottle",
            cost: 3.99
        }],
        meal_schedule: [{
            parent_name: "Banana smoothie",
            item_data: [{
                item_name: "Banana",
                day: 21,
                month: 6,
                year: 2026,
                duration: 1
            },{
                item_name: "Oranges",
                day: 21,
                month: 6,
                year: 2026,
                duration: 1
            }]
        },{
            parent_name: "Rice and stew",
            item_data: [{
                item_name: "Rice",
                day: 22,
                month: 6,
                year: 2026,
                duration: 1
            },{
                item_name: "Stew",
                day: 22,
                month: 6,
                year: 2026,
                duration: 1
            }]
        }]
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
            <MyMealPopup mealPopupStates={mealPopupStates} MealData={testMealCardData[PageNumber.MealPopupPageNumber]} ChangeMealState={ChangeState.ChangeMealState}/>
            <MyChallengePopup challengePopupStates={challengePopupStates} challengeData={testChallengeCardData[PageNumber.ChallengePopupPageNumber]} ChangeChallengeState={ChangeState.ChangeChallengeState} />
            <div className="flex p-3 h-16 gap-3 w-full items-center">
                <button onClick={changeSidebarState} className={sidebarState ? "hidden" : " border-1 border-[var(--border-color)] bg-[var(--button-inactive-bg)] rounded-full p-2.5 aspect-square hover:bg-[var(--sidebar-hover)] active:bg-[var(--sidebar-active)]"}>
                    <SidebarleftIcon width={18} height={18} />
                </button>
                <h2 className="text-[18px] font-semibold truncate">
                    Community page
                </h2>
            </div>
            <div className=" w-full h-fit flex flex-col gap-6">
                <div>
                    <div className="px-3 flex w-full justify-between">
                        <div className="flex flex-row gap-2 opacity-80 items-center">
                            <BarchartIcon width={18} height={18} />
                            <p className="font-semibold">Popular</p>
                        </div>
                        <div>
                            <button className="text-sm opacity-70 hover:underline">See all</button>
                        </div>
                    </div>
                    <div className="px-4 py-3 gap-4 h-fit flex w-full flex-row overflow-y-auto">

                        {testMealCardData.map((value, index) => {
                            return <MyMealCard ChangeMealState={ChangeState.ChangeMealState} key={index} ID={index} MealCardData={value} ChangeMealPageNumber={ChangePage.ChangeMealPageNumber}/>
                        })}

                    </div>
                </div>
                <div>
                    <div className="px-3 flex w-full justify-between">
                        <div className="flex flex-row gap-2 opacity-80 items-center">
                            <FigurerunIcon width={22} height={22} />
                            <p className="font-semibold">Challenges</p>
                        </div>
                        <div>
                            <button className="text-sm opacity-70 hover:underline">See all</button>
                        </div>
                    </div>
                    <div className="px-4 py-3 gap-4 h-fit flex w-full flex-row overflow-y-auto">
                        {testChallengeCardData.map((value, index) => {
                            return <MyChallengeCard ChangeChallengeState={ChangeState.ChangeChallengeState} key={index} ID={index} ChallengeCardData={value} ChangeChallengePageNumber={ChangePage.ChangeChallengePageNumber}/>
                        })}
                        

                    </div>
                </div>
                
            </div>
            
        </div>
    )
}