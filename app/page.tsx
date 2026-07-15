"use client";
import { MySidebar } from "@/components/containers/sidebar";
import { MyChatbar } from "@/components/containers/Dashboard/chatbar";
import {Content, MyContent} from "@/components/containers/Dashboard/content";
import {useState} from "react";
import DragSizing from 'react-drag-sizing'
import {barChart} from "@/components/widgets/barChart";
import {table} from "@/components/widgets/table";
import CommunityPage from "@/components/containers/Community/community";
import ChangelogPage from "@/components/containers/Changelog/changelog";
import DashboardPlaceholder from "@/components/containers/Dashboard/placeholder";
import {mealPopupStateType} from "@/components/widgets/Community/mealPopup";
import {challengePopupStateType} from "@/components/widgets/Community/challengePopup";



const pagesData = [
    {
        id: "1",
        title: "New page",
        prompt: "",
        response: "",
        Content: {
            BarChart: [{
                grocery_name: "Bread",
                time: 5
            },{
                grocery_name: "Meat",
                time: 90
            },{
                grocery_name: "Chicken",
                time: 50
            },{
                grocery_name: "Water",
                time: 850
            }],
            table: [{
                grocery_name: "Ice",
                amount: "2 packs",
                cost: 3.99
            }],
            GanttChart: [{
                parent_name: "Banana smoothie",
                item_data: [{
                    item_name: "Banana",
                    day: 21,
                    month: 6,
                    year: 2026,
                    duration: 1
                }]
            }]
        }
        
    },
    {
        id: "2",
        title: "New page",
        prompt: "",
        response: "",
        Content: {
            BarChart: [{
                grocery_name: "Milk",
                time: 14
            }],
            table: [{
                grocery_name: "Milk",
                amount: "1 carton",
                cost: 3.99
            }],
            GanttChart: [{
                parent_name: "Banana smoothie",
                item_data: [{
                    item_name: "Banana",
                    day: 21,
                    month: 6,
                    year: 2026,
                    duration: 1
                }]
            }]
        }
        
    }, 
    {
        id: "3",
        title: "New page",
        prompt: "",
        response: "",
        Content: {
            BarChart: [{
                grocery_name: "Water",
                time: 36
            }],
            table: [{
                grocery_name: "Water",
                amount: "1 bottle",
                cost: 3.99
            }],
            GanttChart: [{
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
        }
        
    }
]

export type page = {
    id: string,
    title: string,
    prompt: string,
    response: string,
    Content: Content
}

const containerTogglesData = {
    sidebarState: true,
    chatbarState: true
}

const popupToggleData = {
    challengePopup: {
        openState: false,
        fullscreen: false,
    },
    mealPopup: {
        openState: true,
        fullscreen: false
    }
}

type containerToggles = {
    sidebarState: boolean,
    chatbarState: boolean,
}

type popupToggles = {
    challengePopup: challengePopupStateType,
    mealPopup: mealPopupStateType
}

export type ValidCategory = "Dashboard" | "Community" | "Changelog";

export type validContainer = keyof containerToggles;

export type validPopup = keyof popupToggles[keyof popupToggles];

export default function Home() {
    let [PagesData, setPagesData] = useState<typeof pagesData>(pagesData);
    let [containerToggles, setContainerToggle] = useState<containerToggles>(containerTogglesData);
    let [popupToggles, setPopupToggle] = useState<popupToggles>(popupToggleData)
    const [pageNumber, setPageNumber] = useState<number>(pagesData.length-1);
    const [popupPageNumber, setPopupPageNumber] = useState<number>(1);
    
    function ToggleContainer(key: validContainer) {
        setContainerToggle((prev) => ({
            ...prev,[key]: !prev[key]
        }));
        console.log(containerToggles.sidebarState)
    }
    
    
    function togglePopup(popupName: keyof popupToggles, popupType: validPopup) {
        setPopupToggle((prev) => ({
            ...prev,[popupName]: {
                ...prev[popupName],[popupType]: !prev[popupName][popupType]
            }
        }))
    }
    
    const MealTogglePopupFunctions = {
        ChangeOpenState: () => {togglePopup("mealPopup","openState")},
        ChangeFullScreen: () => {togglePopup("mealPopup","fullscreen")}
    }
    
    const categoryData = {
        Dashboard: (
            <>
                {
                    PagesData[pageNumber].response === "" ? (
                        <>
                            <DashboardPlaceholder sidebarState={containerToggles.sidebarState} 
                                                  chatbarState={containerToggles.chatbarState} 
                                                  changeSidebarState={() => ToggleContainer("sidebarState")} 
                                                  changeChatbarState={() => ToggleContainer("chatbarState")}/>
                        </>
                    ) : (
                        <>
                            <MyContent contentData={PagesData[pageNumber].Content}
                                       chatbarState={containerToggles.chatbarState}
                                       sidebarState={containerToggles.sidebarState}
                                       changeSidebarState={() => ToggleContainer("sidebarState")}
                                       changeChatbarState={() => ToggleContainer("chatbarState")}
                                       PageNumber={pageNumber}/>
                        </>
                    )
                }
                <MyChatbar sidebarState={containerToggles.sidebarState}
                           chatbarState={containerToggles.chatbarState}
                           changeSidebarState={() => ToggleContainer("sidebarState")}
                           changeChatbarState={() => ToggleContainer("chatbarState")}
                           PageNumber={pageNumber}
                           chatbarPrompt={PagesData[pageNumber].prompt}
                           chatbarResponse={PagesData[pageNumber].response}
                           setChatbarPrompt={(prompt) => setPagesData((prev) => prev.map((page,index) => index === pageNumber ? {...page, prompt: prompt} : page))} SendPrompt={() => sendPromptJson()}/>
            </>
        ),
        Community: (<CommunityPage sidebarState={containerToggles.sidebarState} changeSidebarState={() => ToggleContainer("sidebarState")} mealPopupStates={popupToggles.mealPopup} challengePopupStates={popupToggles.challengePopup} ChangeState={MealTogglePopupFunctions} MealPopupPageNumber={popupPageNumber} ChangePageNumber={(value) => {setPopupPageNumber(value)}}/>),
        Changelog: (<ChangelogPage sidebarState={containerToggles.sidebarState} changeSidebarState={() => ToggleContainer("sidebarState")}/>)

    }
    
    const [currentCategory, setCurrentCategory] = useState<ValidCategory>("Dashboard")
    
    function newPage() {
        let pageID = PagesData.length + 1;
        const newPageData = {
            id: pageID.toString(),
            title: "New page",
            prompt: "",
            response: "",
            Content: {
                BarChart: [{
                    grocery_name: "Item",
                    time: 2
                }],
                table: [{
                    grocery_name: "item",
                    amount: "bruh",
                    cost: 1
                }],
                GanttChart: [{
                    parent_name: "Banana smoothie",
                    item_data: [{
                        item_name: "Banana",
                        day: 21,
                        month: 6,
                        year: 2026,
                        duration: 1
                    }]
                }]
            }
            
        }

        setPagesData([...PagesData, newPageData])
        
        setPageNumber(pageID - 1)
    }
    
    function updatePrompt(userPrompt: string) {
        setPagesData(() => PagesData.map((page,index) => index === pageNumber ? {...page, prompt: userPrompt} : page))
    }
    
    function sendPromptJson() {
        const responseJson = {
            title: "Simulated response",
            response: "This is what the ai would respond with",
            BarChart: [{
                grocery_name: "Bread",
                time: 14
            }]
        }
        setPagesData(prev => prev.map((page,index) => index === pageNumber ? {...page,...responseJson} : page))
    }
    
  return (
    <div>
      <main className="flex p-0 w-screen h-full">
        <MySidebar pageData={PagesData} 
                   sidebarState={containerToggles.sidebarState} 
                   changeCategory={(value) => setCurrentCategory(value)}
                   changeSidebarState={() => ToggleContainer("sidebarState")} 
                   changedPageNumber={(value) => setPageNumber(value)}
                   currentCategory={currentCategory}
                   currentPage={pageNumber} 
                   createNewPage={() => newPage()}
        />
          {categoryData[currentCategory]}
      </main>
    </div>
  );
}