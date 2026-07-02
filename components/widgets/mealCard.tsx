export type MealCardType = {
    title: string,
    image: string,
    save_amount: number,
    ingredients: string[],
    stores: string[]
}

type MealCardProps = {
    MealCardData: MealCardType
}

export default function MyMealCard({MealCardData} : MealCardProps) {
    
    function DisplayIngredients() {
        let IngredientList = ""
        
        MealCardData.ingredients.forEach((value,index) => {
            
            if (index > 0) {
                IngredientList += ", " + value
            }
            else {
                IngredientList += value
            }
        })
        return IngredientList
    }
    
    function DisplayStores() {
        let StoreList = ""
        
        MealCardData.stores.forEach((value, index) => {
            if (index > 0) {
                StoreList += ", " + value
            }
            else {
                StoreList += value
            }
        })
        return StoreList
    }
    
    function DisplaySaves() {
        let savesUnits = ["","k","m","b"]
        let savesValue = MealCardData.save_amount
        let savesAmount
        
        let index = Math.floor(Math.log(savesValue)/Math.log(1000))
        savesValue = Math.round(savesValue/1000**Math.floor(Math.log(savesValue)/Math.log(1000)) * 100)/100
        
        savesAmount = savesValue.toString() + savesUnits[index]
        return savesAmount
    }
    
    return(
        <div className="bg-(--background) hover:scale-103 active:scale-101 transition-all duration-100 h-70 w-70 flex flex-col gap-3 shadow-[0_0_18px_rgba(0,0,0,0.15)] p-1.25 pb-6 rounded-[1.375rem]">
            <div className="h-[60%]">
                <img src={MealCardData.image} alt="calorieMeal" className="h-full w-full  object-cover rounded-t-[1.0625rem] rounded-b-[0.375rem]"></img>
            </div>
            <div className="h-[30%] flex gap-3 px-1.5 flex-col">
                <div className="flex flex-row justify-between">
                    <p className="font-semibold">{MealCardData.title}</p>
                    <div className="flex flex-row items-center">
                        <img src="/Bookmark%20SVG%20Icon.svg" alt="saveIcon" width="20" height="20"></img>
                        <p className="text-sm">{DisplaySaves()}</p>
                    </div>
                </div>
                <div className="flex flex-row gap-2 opacity-80">
                    <img src="/carrot.fill.svg" alt="ingredientsIcon" width="18" height="18"></img>
                    <p className="truncate pr-6">Ingredients: {DisplayIngredients()}</p>
                </div>
                <div className="flex flex-row gap-2 opacity-80">
                    <img src="/storefront.fill.svg" alt="ingredientsIcon" width="18" height="18"></img>
                    <p className="truncate pr-6">Stores: {DisplayStores()}</p>
                </div>
            </div>
        </div>
    )
}