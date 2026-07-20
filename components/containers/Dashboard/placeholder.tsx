import {sidebarStateType} from "@/components/containers/sidebar";
import {changeSidebarStateType} from "@/components/containers/sidebar";
import {chatbarStateType} from "@/components/containers/Dashboard/chatbar";
import {changeChatbarStateType} from "@/components/containers/Dashboard/chatbar";
import {FruitpairIcon, MessageIcon} from "@/components/Icons";

type MyDbPlaceholderProps = sidebarStateType & chatbarStateType & changeSidebarStateType & changeChatbarStateType;

export default function DashboardPlaceholder({sidebarState, chatbarState, changeSidebarState, changeChatbarState} : MyDbPlaceholderProps) {
    
    
    return (
        <div className="relative flex flex-1 flex-col w-full h-screen bg-(--background)">
            <div className="z-50 p-3 h-16 flex gap-auto justify-between">
                <div className="flex gap-3 items-center">
                    <button onClick={changeSidebarState} className={sidebarState ? "hidden" : " border-1 border-[var(--border-color)] bg-[var(--button-inactive-bg)] rounded-full p-2.5 aspect-square hover:bg-[var(--sidebar-hover)] active:bg-[var(--sidebar-active)]"}>
                        <img alt="sidebarToggle" src="/sidebar.left.svg" width="18" height="18"></img>
                    </button>
                    <h2 className="text-[18px] font-semibold truncate">
                        Dashboard
                    </h2>
                </div>
                <div className="flex gap-3">
                    <button onClick={changeChatbarState} className={chatbarState ? "hidden" : "bg-[var(--button-inactive-bg)] flex justify-center align-left border-1 border-[var(--border-color)] rounded-full p-2 aspect-square hover:bg-[var(--sidebar-hover)]"}>
                        <MessageIcon width={22} height={22} />
                    </button>
                </div>

            </div>
            <div className="absolute h-full w-full flex items-center justify-center">
                <FruitpairIcon width={50} height={50} />
            </div>
        </div>
    )
}