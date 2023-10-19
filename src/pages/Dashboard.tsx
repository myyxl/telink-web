import {StatusBox} from "../components/StatusBox";
import {useEffect} from "react";
import {getStatus} from "../api/ServicesSerivce";
import {TelemetryTable} from "../components/TelemetryTable";
import {useStatusStore} from "../store/StatusStore";
import {useTelemetryStore} from "../store/TelemetryStore";

export const Dashboard = () => {
    const statusStore: any = useStatusStore()
    const telemetryStore: any = useTelemetryStore();

    useEffect(() => {
        const id = setInterval(() => {
            getStatus().then((response) => {
                if(response) {
                    statusStore.setStatus(response.data.core, response.data.controller)
                    if(!response.data.controller) telemetryStore.clearTelemetry();
                } else {
                    statusStore.setAllOffline()
                    telemetryStore.clearTelemetry();
                }

            }).catch(() => {
                statusStore.setAllOffline()
                telemetryStore.clearTelemetry();
            })
        }, 4000)
        return () => clearInterval(id);
    }, [statusStore, telemetryStore]);

    return (
        <div className="w-full h-screen flex">
            <div className="bg-slate-100 w-full h-auto rounded-2xl m-10">
                <div className="text-center text-5xl m-7">telink</div>
                <div className="flex justify-evenly">
                    <StatusBox serviceName={"Frontend"} online={true}/>
                    <StatusBox serviceName={"Backend"} online={statusStore.core}/>
                    <StatusBox serviceName={"Controller"} online={statusStore.controller}/>
                </div>
                <TelemetryTable />
            </div>
        </div>
    )
}