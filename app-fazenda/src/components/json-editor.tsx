import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import JsonDataTable from "./json-data-table"
import AddJsonDialog from "./add-json-dialog"


export default function JsonEditor(){
    return <Card>
    <CardHeader>
      <CardTitle>Salve dado animal</CardTitle>
      <CardDescription>Vizualize e salve seus dados Json</CardDescription>
    </CardHeader>
    <CardContent>
      <JsonDataTable />
    </CardContent>
    <CardFooter>
      <AddJsonDialog />
    </CardFooter>
  </Card>  

}