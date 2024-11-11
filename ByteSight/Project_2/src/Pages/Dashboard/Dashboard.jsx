import { Graphs } from "./Components/Graphs"
import { OverView } from "./Components/OverView"

export const Dashboard = () => {
  return (
    <div className="">
      <OverView />
      <Graphs />
      <div className="mt-10"></div>
    </div>
  )
}
