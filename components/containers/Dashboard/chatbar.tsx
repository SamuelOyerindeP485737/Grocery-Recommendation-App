import classNames from "classnames";
import {sidebarStateType} from "@/components/containers/sidebar";
import {changeSidebarStateType} from "@/components/containers/sidebar";
import {ArrowupIcon, MessageIcon} from "@/components/Icons";


export type chatbarStateType = {
    chatbarState: boolean;
}

export type changeChatbarStateType = {
    changeChatbarState: () => void;
}

type PageNumberType = {
    PageNumber: number;
}

type ChatbarContentType = {
    chatbarResponse: string;
    chatbarPrompt: string;
    setChatbarPrompt: (prompt: string) => void;
    SendPrompt: () => void;
}

type ChatbarProps = sidebarStateType & chatbarStateType & changeSidebarStateType & changeChatbarStateType & PageNumberType & ChatbarContentType ;


export function MyChatbar({sidebarState, chatbarState, changeSidebarState, changeChatbarState, PageNumber, chatbarPrompt, chatbarResponse, setChatbarPrompt, SendPrompt} : ChatbarProps) {
    
    
    function sendPrompt() {
        chatbarPrompt != "" ? SendPrompt() : console.log("Prompt cannot be empty")
    }
    
    const SidebarClasslist=classNames({"w-75":chatbarState,"p-3":chatbarState,"translate-x-full":!chatbarState,"w-0":!chatbarState},"flex","flex-col","justify-between","h-screen","border-l-1","border-[var(--border-color)]","transition-all","duration-300","overflow-hidden","bg-[var(--background)]");
    //Clear input value upon page change and send later
    return(
        <div className={SidebarClasslist}>
            <div className=" flex">
                
                <button onClick={changeChatbarState} className="bg-[var(--button-inactive-bg)] p-2 border-1 border-[var(--border-color)] aspect-square rounded-full hover:bg-[var(--sidebar-hover)] active:bg-[var(--sidebar-active)]">
                    <MessageIcon width={22} height={22} />
                </button>
                
            </div>
            <div className="overflow-y-auto py-6 h-full">
                {chatbarResponse}
            </div>
            <div className="border-1 border-[var(--border-color)] rounded-2xl shadow-xl shadow-[#faf0f0] ">
                <textarea minLength={4} onChange={(e) => setChatbarPrompt(e.target.value)} name="gptChatBox" id="gptChatBox" className="resize-none w-full outline-0 max-h-23 p-2.5 placeholder:whitespace-nowrap" placeholder="At the grocery store i usually buy.."/>
                <div className="px-2 w-full flex justify-end pb-2">
                    <button onClick={sendPrompt} className="border-1 border-[var(--chatbox-button)] bg-[var(--chatbox-button)] px-2 rounded-full aspect-square text-white">
                        <ArrowupIcon width={20} height={20} />
                    </button>
                </div>
                
                
            </div>
        </div>
    )
}