import {page} from "@/app/page";
import classNames from "classnames";

type MySidebarProps = {
  pageData: page[];
}

type sidebarStateType = {
    sidebarState: boolean;
}

type changedSidebarStateType = {
    changedSidebarState: (sidebarState: boolean) => void;
}

type changedPageNumberType = {
    changedPageNumber: (pageNumber: number) => void;
}

type currentPageType = {
    currentPage: number;
}

type newPageType = {
    createNewPage: () => void;
}

type MySidebarParameters = MySidebarProps & sidebarStateType & changedSidebarStateType & changedPageNumberType & currentPageType & newPageType;


export function MySidebar({pageData, sidebarState, changedSidebarState, changedPageNumber, currentPage, createNewPage}: MySidebarParameters) {
    
    function toggleSidebar() {
        changedSidebarState(!sidebarState);
    }
    
    //or u could make a classNames([]) function to toggle classes based on variables (multiple even)
    
  return (
    <div className={sidebarState ? "transition-all duration-300 px-3 w-70 flex flex-col border-r-1 border-(--border-color) bg-[var(--sidebar-background)] h-screen" : "transition-all duration-300 h-screen w-0 overflow-hidden"}>
        
        <div className="flex justify-between items-center flex-row pt-3 w-full ">
            
           <div>
               <p className="font-semibold text-xl">GMS</p>
           </div>
            
            <button onClick={toggleSidebar} className=" border-1 border-(--border-color) bg-white p-2 rounded-full justify-center align-center aspect-square flex hover:bg-gray-100 active:bg-[var(--sidebar-active)]">
                <img alt="sidebarToggle" src="/sidebar.left.svg" width="18" height="18"></img>
            </button>
        </div>
        <div className="flex flex-col py-4">
            
                <button className="text-sm font-semibold opacity-70 truncate flex gap-2 align-left items-center rounded-[1.125rem] pl-3 py-2.5 mb-1 active:bg-(--sidebar-active) active:border-1 active:border-(--sidebar-items-border) hover:bg-(--sidebar-hover)">
                    <img alt="CommunityIcon" src="/person.2.fill.svg" width="22" height="22"></img><p>Community</p>
                </button>
                <button className="text-sm font-semibold opacity-70 truncate flex gap-2 align-left items-center rounded-[1.125rem] pl-3 py-2.5 mb-1 active:bg-(--sidebar-active) active:border-1 active:border-(--sidebar-items-border) hover:bg-(--sidebar-hover)">
                    <img alt="changelogIcon" src="/document.badge.clock.svg" width="22" height="22"></img><p>Changelog</p>
                </button>
            
        </div>
        <div className="flex flex-col border-t-1 border-(--sidebar-category-border) pt-3">
            <div className="flex justify-between">
                <h3 className="text-sm font-semibold">Pages</h3>
                <button onClick={createNewPage}>
                    <img alt="newPage" src="/plus.svg" width="18" height="18"></img>
                </button>
            </div>
            
            <div className="pt-3 flex flex-col">
                {pageData.map(page => (
                        
                        <button key={page.id} onClick={() => changedPageNumber(+page.id - 1)} className={classNames({"bg-(--sidebar-active) border-1 border-(--sidebar-items-border)": currentPage == +page.id - 1,"hover:bg-[var(--sidebar-hover)]":currentPage != +page.id - 1},"text-sm truncate flex align-left rounded-[1.125rem] pl-3 py-2.5 mb-1")}>
                            {page.title}
                        </button>
                    
                ))}
            </div>
            
        </div>
        
    </div>
  );
}