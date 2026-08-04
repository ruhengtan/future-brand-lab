import { DatabasePage } from "@/components/database-page";
import { campaigns } from "@/lib/mock-data";
export default function Page(){return <DatabasePage eyebrow="Creative intelligence" title="Campaign Analysis" description="Deconstruct the strategy, creative systems and lessons behind category-defining work." action="Add campaign" tabs={["All campaigns","Technology","Automotive","Culture"]} active="All campaigns" columns={["Brand","Campaign","Strategy","Creative Idea","Execution","Learning"]} rows={campaigns.map(x=>({...x,creative_idea:x.idea}))}/>}
