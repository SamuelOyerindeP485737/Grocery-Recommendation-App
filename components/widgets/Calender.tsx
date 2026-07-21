type Day = {
    Date: string,
    Time: string[]
}

export default function Calender() {
    
    const now = new Date();
    let mealDays = []
    for (let i = 0; i < 24; i++) {
        const days = new Date();
        days.setDate(now.getDate() + i)
        mealDays.push(days);
    }
    
    console.log(mealDays)
    
    return(
        <div className="flex flex-row w-full overflow-x-auto">
            <div className="flex flex-row w-full">

                {mealDays.map((day) => (
                    <div className="flex flex-col w-30 border-l border-(--border-color) border-r">
                        <div className="flex flex-row justify-center w-30 items-center">
                            <p className="flex flex-row shrink-0">{day.toLocaleString("en-GB", {
                                weekday: "short",
                                day: "numeric"
                            })}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
        
    )
}