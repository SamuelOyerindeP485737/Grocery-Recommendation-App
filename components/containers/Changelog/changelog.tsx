import {sidebarStateType} from "@/components/containers/sidebar";
import {changeSidebarStateType} from "@/components/containers/sidebar";

type ChangelogProps = sidebarStateType & changeSidebarStateType

export default function ChangelogPage({sidebarState, changeSidebarState} : ChangelogProps) {
    
    function toggleSidebarState() {
        changeSidebarState(!sidebarState)
    }
    
    return (
        <div className="flex-col flex-1 h-screen bg-(--background) overflow-y-auto">
            <div className="flex p-3 h-16 gap-3 items-center w-full">
                <button onClick={toggleSidebarState} className={sidebarState ? "hidden" : " border-1 border-[var(--border-color)] bg-[var(--button-inactive-bg)] rounded-full p-2.5 aspect-square hover:bg-[var(--sidebar-hover)] active:bg-[var(--sidebar-active)]"}>
                    <img alt="sidebarToggle" src="/sidebar.left.svg" width="18" height="18"></img>
                </button>
                <h2 className="text-[18px] font-semibold truncate">
                    Changelog
                </h2>
            </div>
            <div className="px-3 w-full justify-center flex flex-col gap-6">
                <div className="flex flex-col items-center">
                    <div>
                        <h2 className="font-semibold text-3xl py-5">Welcome to Version 0.0.2 Beta!</h2>
                    </div>
                    <div className="flex flex-col gap-3.5">
                        <p className="px-[15%] text-center">This version features a new community page, with dynamically displayed meal plan cards and challenge cards.</p>
                        <p className="px-[15%] text-center">This version also contains various bug fixes and Ui improvements</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    
                    <div>
                        <h2 className="font-semibold text-3xl py-5">Version 0.0.1 Beta</h2>
                    </div>
                    <div>
                        <p className="px-[15%] text-center">This is the first beta of the Grocery management system, a summer project by Samuel Oyerinde.
                            Current features include a dashboard displaying grocery information,
                            a Community page (coming soon) for community made grocery plans,
                            and a changelog page for a proper update history.</p>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
}