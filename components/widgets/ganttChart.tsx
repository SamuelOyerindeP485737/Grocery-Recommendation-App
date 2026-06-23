import { Gantt, Willow } from "@svar-ui/react-gantt";
import "@svar-ui/react-gantt/all.css";

type item_data = {
    item_name: string,
    day: number,
    month: number,
    year: number,
    duration: number
}

export type GanttChart = {
    parent_name: string,
    item_data: item_data[]
}

type GanttChartData = {
    ganttData: GanttChart[]
}

type itemType = {
    id: number,
    text: string,
    type?: string,
    start?: Date
    duration?: number
    open?: boolean
    parent?: number
}

type MyGanttProps = GanttChartData
export default function MyGanttChart({ganttData} : MyGanttProps) {

    let dynamicTasks : itemType[] = []
    let parentIndex = 1
    let Index = 1
    
    ganttData.forEach(value => {
        parentIndex = Index
        dynamicTasks.push({id: parentIndex, text: value.parent_name, type: "summary", open: true})
        Index++
        value.item_data.forEach(child => {
            dynamicTasks.push({id: Index, text: child.item_name, start: new Date(child.year, child.month, child.day), duration: 1,  parent: parentIndex })
            Index++
        })
        Index++
    })
    
    
  const tasks = [
    { id: 1, text: "Project planning",  type: "summary", open: true },
    { id: 2, text: "Marketing analysis", start: new Date(2026, 6, 21), duration: 1,  parent: 1 },
    { id: 3, text: "Discussions", start: new Date(2026, 6, 21), duration: 1,  parent: 1 }, 
    { id: 4, text: "Ham and cheese sandwich", type: "summary", open: true},
    { id: 3, text: "Ham", start: new Date(2026, 6, 22), duration: 1,  parent: 4 },
  ];

  const links = [
    { id: 1, source: 2, target: 3, type: "e2s" }
  ];
  
  const columns = [
      {id: "text",header: "Grocery name", width:"220"}
  ];

  return (
      <div style={{width:"250px"}} className="flex-1 h-full min-w-0">
          <Willow>
              <Gantt tasks={dynamicTasks} links={links} columns={[{id: "text",header: "Meal", width:220},{id: "start",header: "Start date",width:100},{id: "duration", header: "duration (days)",width:160}]}/>
          </Willow>
      </div>
    
  );
}