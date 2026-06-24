import BarchartWidget, {barChart} from "@/components/widgets/barChart";
import MyGanttChart, {GanttChart} from "@/components/widgets/ganttChart";
import BasicTable, {table} from "@/components/widgets/table";
import {useState} from "react";
import classNames from "classnames";
import {DragSizing} from 'react-drag-sizing'
import {page} from "@/app/page";

type ChatbarStateType = {
    chatbarState: boolean;
}

type SidebarStateType = {
    sidebarState: boolean;
}

type ChangedChatbarStateType = {
    ChangedChatbarState: (ChatbarState: boolean) => void;
}

type ChangedSidebarStateType = {
    ChangedSidebarState: (SidebarState: boolean) => void;
}

export type Content = {
    BarChart: barChart[],
    table: table[],
    GanttChart: GanttChart[]
}

type ContentData = {
    contentData: Content;
}

type PageNumberType = {
    PageNumber: number;
}

type MyContentProps = ChatbarStateType & SidebarStateType & ChangedSidebarStateType & ChangedChatbarStateType & ContentData & PageNumberType;


export function MyContent({chatbarState, sidebarState, ChangedSidebarState, ChangedChatbarState, contentData, PageNumber} : MyContentProps) {
    
    

    const [currentPage, setCurrentPage] = useState<string>("Expiry dates");
    function toggleSidebarState() {
        ChangedSidebarState(!sidebarState);
    }
    
    function toggleChatbarState() {
        ChangedChatbarState(!chatbarState);
    }
    
    const costBtnClassList = classNames({"bg-[var(--inverted-active-bg)] text-white":currentPage == "Cost","hover:bg-[var(--button-hover)] bg-[var(--button-inactive-bg)]":currentPage !== "Cost"},"px-4","py-2.5","rounded-[1.125rem]")
    const ExpBtnClassList = classNames({"bg-[var(--inverted-active-bg)] text-white":currentPage == "Expiry dates","hover:bg-[var(--button-hover)] bg-[var(--button-inactive-bg)]":currentPage !== "Expiry dates"},"px-4","py-2.5","rounded-[1.125rem]")
    return (
        <div className="h-screen flex-1 bg-[var(--background)]">
            <div className="h-[50%]">
                
                <div className="p-3 h-fit flex gap-auto justify-between">
                    <div className="flex flex-row gap-3 items-center">
                        <button onClick={toggleSidebarState} className={sidebarState ? "hidden" : " border-1 border-[var(--border-color)] bg-[var(--button-inactive-bg)] rounded-full p-2.5 aspect-square hover:bg-[var(--sidebar-hover)] active:bg-[var(--sidebar-active)]"}>
                            <img alt="sidebarToggle" src="/sidebar.left.svg" width="18" height="18"></img>
                        </button>
                        <h2 className="text-[18px] font-semibold truncate">
                            {currentPage == "Expiry dates" && "Grocery items by expiry date"}
                            {currentPage == "Cost" && "Cost of grocery items"}
                        </h2>
                        
                    </div>
                    <div className="flex gap-3">
                        <button onClick={() => setCurrentPage("Cost")} className={costBtnClassList}>
                            <p className="text-sm truncate">Cost</p>
                        </button>
                        <button onClick={() => setCurrentPage("Expiry dates")} className={ExpBtnClassList}>
                            <p className="text-sm truncate">Expiry dates</p>
                        </button>
                        
                        <button onClick={toggleChatbarState} className={chatbarState ? "hidden" : "bg-[var(--button-inactive-bg)] flex justify-center align-left border-1 border-[var(--border-color)] rounded-full p-1.5 aspect-square hover:bg-[var(--sidebar-hover)]"}>
                            <img alt="chatToggle" src="/message.svg" width="22" height="18"></img>
                        </button>
                    </div>
                    
                </div>
                <div className="flex w-full overflow-hidden h-[100%]">
                    {currentPage == "Cost" && <BasicTable tableData={contentData.table}/>}
                    {currentPage == "Expiry dates" && <BarchartWidget BarChart={contentData.BarChart} pageNumber={PageNumber}/>}
                </div>
                
            </div>
            <DragSizing border="top"  className=" border-t-1 border-[var(--border-color)] h-[50%] bg-[var(--wx-background)]">
                <div className="flex">
                    <MyGanttChart ganttData={contentData.GanttChart}/>
                </div>
            </DragSizing>
        </div>
    )
}