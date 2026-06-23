import classNames from "classnames";


type sidebarStateType = {
    sidebarState: boolean;
}

type chatbarStateType = {
    chatbarState: boolean;
}

type changedChatbarStateType = {
    ChangeChatbarState: (chatbarState: boolean) => void;
}

type changedSidebarStateType = {
    ChangedSidebarState: (sidebarState: boolean) => void;
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

type ChatbarProps = sidebarStateType & chatbarStateType & changedSidebarStateType & changedChatbarStateType & PageNumberType & ChatbarContentType ;


export function MyChatbar({sidebarState, chatbarState, ChangedSidebarState, ChangeChatbarState, PageNumber, chatbarPrompt, chatbarResponse, setChatbarPrompt, SendPrompt} : ChatbarProps) {
    
    function toggleChatbarState() {
        ChangeChatbarState(!chatbarState);
    }
    
    function toggleSidebarState() {
        ChangedSidebarState(!sidebarState);
    }
    
    function sendPrompt() {
        chatbarPrompt != "" ? SendPrompt() : console.log("Prompt cannot be empty")
    }
    
    const SidebarClasslist=classNames({"w-75":chatbarState,"p-3":chatbarState,"translate-x-full":!chatbarState,"w-0":!chatbarState},"flex","flex-col","justify-between","h-screen","border-l-1","border-[var(--border-color)]","transition-all","duration-300","overflow-hidden","bg-[var(--background)]");
    
    return(
        <div className={SidebarClasslist}>
            <div className=" flex">
                
                <button onClick={toggleChatbarState} className="bg-[var(--button-inactive-bg)] p-1.5 border-1 border-[var(--border-color)] aspect-square rounded-full hover:bg-[var(--sidebar-hover)] active:bg-[var(--sidebar-active)]">
                    <img alt="chatToggle" src="/message.svg" width="22" height="18"/>
                </button>
                
            </div>
            <div className="overflow-y-auto py-6 h-full">
                {chatbarResponse}
            </div>
            <div className="border-1 border-[var(--border-color)] rounded-2xl shadow-xl shadow-[#faf0f0] ">
                <textarea minLength={4} onChange={(e) => setChatbarPrompt(e.target.value)} name="gptChatBox" id="gptChatBox" className="resize-none w-full outline-0 max-h-23 p-2.5 placeholder:whitespace-nowrap" placeholder="At the grocery store i usually buy.."/>
                <div className="px-2 w-full flex justify-end pb-2">
                    <button onClick={sendPrompt} className="border-1 border-[var(--chatbox-button)] bg-[var(--chatbox-button)] px-2.5 rounded-full aspect-square">
                        <img alt="send button" src="/arrow.up.svg" width="15" height="15"/>
                    </button>
                </div>
                
                
            </div>
        </div>
    )
}