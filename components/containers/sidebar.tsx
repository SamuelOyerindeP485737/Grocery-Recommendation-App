import {page} from "@/app/page";
import classNames from "classnames";
import {ValidCategory} from "@/app/page";

type MySidebarProps = {
  pageData: page[];
}

export type sidebarStateType = {
    sidebarState: boolean;
}

export type changeSidebarStateType = {
    changeSidebarState: (sidebarState: boolean) => void;
}

type changeCategoryType = {
    changeCategory: (category: ValidCategory) => void;
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

type currentCategoryType = {
    currentCategory: ValidCategory
}

type MySidebarParameters = MySidebarProps & sidebarStateType & changeCategoryType & changeSidebarStateType & changedPageNumberType & currentCategoryType & currentPageType & newPageType;


export function MySidebar({pageData, sidebarState, changeCategory, changeSidebarState, changedPageNumber, currentCategory, currentPage, createNewPage}: MySidebarParameters) {
    
    function toggleSidebar() {
        changeSidebarState(!sidebarState);
    }
    
    function setPage(currentPage: number, category: ValidCategory) {
        if (currentCategory !== "Dashboard") {
            changeCategory(category);
        } 
        changedPageNumber(currentPage);
    }
    
  return (
    <div className={sidebarState ? " transition-all duration-300 w-70 border-r-1 border-(--border-color) bg-[var(--sidebar-background)] h-screen" : "transition-all duration-300 h-screen w-0 overflow-hidden"}>
        <div className="grid h-screen grid-rows-[auto_auto_auto_1fr] min-h-0 w-full">
                
            
            <div className="flex h-fit justify-between items-center flex-row pt-3 w-full px-3">
                
               <div>
                   <p className="font-semibold text-xl">GMS</p>
               </div>
                
                <button onClick={toggleSidebar} className=" border-1 border-(--border-color) bg-white p-2.5 rounded-full justify-center align-center aspect-square flex hover:bg-gray-100 active:bg-[var(--sidebar-active)]">
                    <img alt="sidebarToggle" src="/sidebar.left.svg" width="18" height="18"></img>
                </button>
            </div>
            <div className="flex flex-col py-4 px-3">
                
                    <button onClick={() => changeCategory("Community")} className={classNames({"border-1 border-(--sidebar-border-items) bg-(--sidebar-active)":currentCategory==="Community"},{"hover:bg-(--sidebar-hover)":currentCategory!=="Community"},"text-sm font-semibold opacity-70 truncate flex gap-2 align-left items-center rounded-[1.125rem] pl-3 py-2.5 mb-1")}>
                        <img alt="CommunityIcon" src="/person.2.fill.svg" width="22" height="22"></img><p>Community</p>
                    </button>
                    <button onClick={() => changeCategory("Changelog")} className={classNames({"border-1 border-(--sidebar-border-items) bg-(--sidebar-active)":currentCategory==="Changelog"},{"hover:bg-(--sidebar-hover)":currentCategory!=="Changelog"},"text-sm font-semibold opacity-70 truncate flex gap-2 align-left items-center rounded-[1.125rem] pl-3 py-2.5 mb-1")}>
                        <img alt="changelogIcon" src="/document.badge.clock.svg" width="22" height="22"></img><p>Changelog</p>
                    </button>
                
            </div>
            <div className="flex flex-col h-full border-t-1 mx-3 min-h-0 border-(--sidebar-category-border) pt-3">
                <div className="flex justify-between">
                    <h3 className="text-sm font-semibold">Pages</h3>
                    <button onClick={createNewPage}>
                        <img alt="newPage" src="/plus.svg" width="18" height="18"></img>
                    </button>
                </div>
            </div>
                
            <div className="pt-3 flex flex-col overflow-y-auto px-3">
                {pageData.map(page => (
                            
                    <button key={page.id} onClick={() => setPage(+page.id - 1,"Dashboard")} className={classNames({"bg-(--sidebar-active) border-1 border-(--sidebar-border-items)": currentPage == +page.id - 1 && currentCategory === "Dashboard","hover:bg-[var(--sidebar-hover)]":currentPage != +page.id - 1},"text-sm shrink-0 truncate flex align-left rounded-[1.125rem] pl-3 py-2.5 mb-1")}>
                        {page.title}
                    </button>
                        
                ))}
            </div>
                
        </div>
    
    </div>
    
    
  );
}