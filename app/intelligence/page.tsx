import { DatabasePage } from "@/components/database-page";
import { companies } from "@/lib/mock-data";
export default function Page(){return <DatabasePage eyebrow="Global signal library" title="Technology Intelligence" description="Track the companies, technologies and narratives defining the next era." action="Add company" tabs={["All companies","AI","Robotics","Autonomous driving"]} active="All companies" columns={["Company","Industry","Technology","News","Insight","Source","Date"]} rows={companies}/>}
