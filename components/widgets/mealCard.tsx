export default function MyMealCard() {
    return(
        <div className="bg-(--background) h-70 w-70 flex flex-col gap-3 shadow-[0_0_18px_rgba(0,0,0,0.15)] p-1.25 pb-6 rounded-[1.125rem]">
            <div className="h-[60%]">
                <img src="https://www.eatingwell.com/thmb/GRsO0F0K1NLgON-cyvBFNW0EA9Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simple-1200-Calorie-Meal-Plan-30-Day-Week-3-horizontal-low-9f926c1f40104c459f04f3dae720236a.jpg" alt="calorieMeal" className="w-full h-full object-cover rounded-t-[0.875rem] rounded-b-[0.375rem]"></img>
            </div>
            <div className="h-[40%] flex gap-3 px-1.5 flex-col">
                <div className="flex flex-row justify-between">
                    <p className="font-semibold">Veggie remix</p>
                    <div className="flex flex-row items-center">
                        <img src="/Bookmark%20SVG%20Icon.svg" alt="saveIcon" width="20" height="20"></img>
                        <p className="text-sm">2k</p>
                    </div>
                </div>
                <div className="flex flex-row gap-2 opacity-80">
                    <img src="/carrot.fill.svg" alt="ingredientsIcon" width="18" height="18"></img>
                    <p className="truncate pr-6">Ingredients: cabbage, cucumber</p>
                </div>
                <div className="flex flex-row gap-2 opacity-80">
                    <img src="/storefront.fill.svg" alt="ingredientsIcon" width="18" height="18"></img>
                    <p className="truncate pr-6">Stores: Aldi, Tesco</p>
                </div>
            </div>
        </div>
    )
}