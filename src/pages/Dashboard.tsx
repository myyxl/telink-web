import {StatusBox} from "../components/StatusBox";
import {useEffect, useState} from "react";
import {getStatus} from "../api/ServicesSerivce";
import {TelemetryTable} from "../components/TelemetryTable";
import {ServiceStatus} from "../model/ServiceStatus";

export const Dashboard = () => {
    const [status, setStatus] = useState<ServiceStatus>({core: false, controller: false});

    useEffect(() => {
        const id = setInterval(() => {
            getStatus().then((response) => {
                if(response) {
                    setStatus(response.data)
                } else {
                    setStatus({core: false, controller: false})
                }
            }).catch(() => {
                setStatus({core: false, controller: false})
            })
        }, 4000)
        return () => clearInterval(id);
    }, [status, setStatus]);

    return (
        <div className="w-full h-screen flex">
            <div className="bg-slate-100 w-full h-auto rounded-2xl m-10">
                <div className="text-center text-5xl m-7">telink</div>
                <div className="flex justify-evenly">
                    <StatusBox serviceName={"Frontend"} online={true}/>
                    <StatusBox serviceName={"Backend"} online={status.core}/>
                    <StatusBox serviceName={"Controller"} online={status.controller}/>
                </div>
                <TelemetryTable />
            </div>
        </div>
    )
}