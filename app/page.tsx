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



const pagesData = [
    {
        id: "1",
        title: "Page 1",
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
        title: "Page 2",
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
        title: "page 3",
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

export type ValidCategory = "Dashboard" | "Community" | "Changelog"

export default function Home() {
    let [PagesData, setPagesData] = useState<typeof pagesData>(pagesData);
    const [sidebarState, setSideState] = useState<boolean>(true);
    const [chatbarState, setChatState] = useState<boolean>(true);
    const [pageNumber, setPageNumber] = useState<number>(0);
    
    const categoryData = {
        Dashboard: (
            <>
                <MyContent contentData={PagesData[pageNumber].Content} chatbarState={chatbarState} sidebarState={sidebarState} changeSidebarState={(value) => setSideState(value)} changeChatbarState={(value) => setChatState(value)} PageNumber={pageNumber}/>
                <MyChatbar sidebarState={sidebarState} chatbarState={chatbarState} changeSidebarState={(value) => setSideState(value)} changeChatbarState={(value) => setChatState(value)} PageNumber={pageNumber} chatbarPrompt={PagesData[pageNumber].prompt} chatbarResponse={PagesData[pageNumber].response} setChatbarPrompt={(prompt) => setPagesData((prev) => prev.map((page,index) => index === pageNumber ? {...page, prompt: prompt} : page))} SendPrompt={() => sendPromptJson()}/>
            </>
        ),
        Community: (<CommunityPage sidebarState={sidebarState} changeSidebarState={(value) => setSideState(value)}/>),
        Changelog: (<ChangelogPage sidebarState={sidebarState} changeSidebarState={(value) => setSideState(value)}/>)

    }

    type Category = typeof categoryData
    const [currentCategory, setCurrentCategory] = useState<ValidCategory>("Dashboard")
    
    function newPage() {
        let pageID = PagesData.length + 1
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
    console.count("MySidebar render")
    console.count("MyContent render")
    console.count("MyChatbar render")
    
    
  return (
    <div>
      <main className="flex p-0 w-screen">
        <MySidebar pageData={PagesData} 
                   sidebarState={sidebarState} 
                   changeCategory={(value) => setCurrentCategory(value)}
                   changeSidebarState={(value) => setSideState(value)} 
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