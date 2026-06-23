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
    <div className={sidebarState ? "transition-all duration-300 w-70 flex flex-col border-r-1 border-[var(--border-color)] bg-[var(--sidebar-background)] h-screen" : "transition-all duration-300 h-screen w-0 overflow-hidden"}>
        
        <div className="flex flex-row pt-3 px-3 w-full ">
            <div className="border-1 border-[var(--border-color)] bg-white rounded-full w-full mr-1 p-1 hover:bg-gray-100 active:bg-[var(--sidebar-active)]">
                <button onClick={createNewPage} className="flex justify-center w-full px-full ">
                    New page
                </button>
            </div>
           
            
            <button onClick={toggleSidebar} className=" border-1 border-[var(--border-color)] bg-white rounded-full justify-center align-center aspect-square flex hover:bg-gray-100 active:bg-[var(--sidebar-active)]">
                <img alt="sidebarToggle" src="/sidebar.left.svg" width="18" height="18"></img>
            </button>
        </div>
        
        <div className="flex flex-col pt-3">
            <h3 className="text-sm font-semibold pl-3">History</h3>
            <div className="pt-2 flex flex-col px-3">
                {pageData.map(page => (
                        
                        <button key={page.id} onClick={() => changedPageNumber(+page.id - 1)} className={classNames({"bg-[var(--sidebar-active)]": currentPage == +page.id - 1,"hover:bg-[var(--sidebar-hover)]":currentPage != +page.id - 1},"text-sm truncate flex align-left rounded-full pl-3 py-2 mb-1")}>
                            {page.title}
                        </button>
                    
                ))}
            </div>
            
        </div>
        
    </div>
  );
}