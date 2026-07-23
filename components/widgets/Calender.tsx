import {memo, RefObject, useEffect, useRef, useState} from "react";
import getBoundingClientRect from "@popperjs/core/lib/dom-utils/getBoundingClientRect";
import {getRootParams} from "next/dist/server/app-render/create-component-tree";

type Day = {
    Date: string,
    Time: string[]
}

type ObservedDay = { //HTMLData
    DivElement: HTMLDivElement,
    Date: Date 
}



type CalenderProps = {
    pageRef: RefObject<HTMLDivElement | null>
}

function Calender({pageRef} : CalenderProps) {

    const now = new Date();
    let mealDays = []
    for (let i = 0; i < 24; i++) {
        const days = new Date();
        days.setDate(now.getDate() + i)
        mealDays.push(days);
    }
    
    const [currentMonth, setCurrentMonth] = useState<Date>(now)
    
    const parentRef = useRef<HTMLDivElement>(null);
    const Refs = useRef(new Map<string, ObservedDay>());
    const lastIncreasedRef = useRef<boolean>(false);
    
    
    
    function createThresholds()  { //Mad scientist era
        let thresholdList = []
        let Steps = 120
        
        for (let i = 0; i <= Steps; i++) {
            const thresholdValue = i / Steps
            thresholdList.push(thresholdValue)
        }
        
        return thresholdList
    }
    
    function calculatePageRefWidth()  {
        let width = 0;

        if (pageRef.current) {
            width = pageRef.current.clientWidth
        }
        
        return width
    }
    
    function calculateThreshold() {
        let pageRefWidth = calculatePageRefWidth();
        let pageCalenderOffset = window.innerWidth - pageRefWidth;
        
        return ((pageRefWidth / 2) + pageCalenderOffset)
    }
    
    //console.log("say something")
    const callbackFunc = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach((entry) => {
            const rect = entry.boundingClientRect
            const root = entry.rootBounds

            let threshold = calculateThreshold();
            
            /*if (parentRef.current) {
                console.log("bounding client size: " + getBoundingClientRect(parentRef.current).width)
                console.log("root width: " + root?.width)
                console.log("rect width: " + rect?.width)
                console.log("threshold: " + threshold)
            }*/
            
            if (!entry.isIntersecting) return;
            
            if (!root) return;
                let newMonth : Date
                if (rect.left > threshold) {
                        
                    if (!lastIncreasedRef.current) return;
                            
                    setCurrentMonth((prev) => {
                        newMonth = new Date(prev)
                        newMonth.setMonth(newMonth.getMonth() - 1)
                        return newMonth
                    })
                    lastIncreasedRef.current = false;
                    console.log("Element has decreased the month");
                        
                }
                else if (rect.left < threshold) {
                        
                    if (lastIncreasedRef.current) return;
                    setCurrentMonth((prev) => {
                        newMonth = new Date(prev)
                        newMonth.setMonth(newMonth.getMonth() + 1)
                        return newMonth
                    })
                    lastIncreasedRef.current = true;
                    console.log("Element has increased the month");
                        
                }
            
        });
    }

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: "0px 0px 0px 0px",
            scrollMargin: `0px 0px 0px -150px`,
            threshold: [0, 0.8],
        };
        
        const observer = new IntersectionObserver(callbackFunc, options)

        Refs.current.forEach((HTMLData) => {
            if (HTMLData.DivElement) {
                observer.observe(HTMLData.DivElement);
            }
            
        })
        
        return(() => {
            observer.disconnect();
        })
    }, [currentMonth]);
    
    //console.log(mealDays)
    
    return(
        <div>
            <div className="flex flex-row gap-1 items-center">
                <p className="font-semibold text-xl">{currentMonth?.toLocaleString("en-GB",{month: "long"})}</p>
                <p className="text-xl">{currentMonth?.getFullYear()}</p>
            </div>
            <div ref={parentRef} className="flex flex-row w-full snap-mandatory snap-x overflow-x-auto scrollbar-hide">
                <div className="flex flex-row w-full">

                    {mealDays.map((day, index) => (
                        <div ref={(element) => {
                            if (element) {
                                if (day.getDate() === 1) {
                                    Refs.current.set(day.toISOString(), {DivElement: element, Date: day})
                                }
                            }
                        }} key={day.toISOString()} className="shrink-0 snap-start flex flex-col flex-1/6 ">
                            <div className="flex flex-col gap-2.5 justify-center items-center">
                                <p className="flex flex-row shrink-0">{day.toLocaleString("en-GB", {
                                    weekday: "short",
                                    day: "numeric"
                                })}</p>
                                <div className="border-l border-(--border-color) border-r w-full h-30">

                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    )
}

export default memo(Calender)