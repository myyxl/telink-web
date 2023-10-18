import {StatusBox} from "../components/StatusBox";
import {ServiceStatus} from "../model/ServiceStatus";
import {useLoaderData} from "react-router-dom";
import {useEffect, useState} from "react";
import {getStatus} from "../api/ServicesSerivce";
import {TelemetryTable} from "../components/TelemetryTable";

export const Dashboard = () => {
    const { status } = useLoaderData() as { status: ServiceStatus }
    const [stateStatus, setStateStatus] = useState<ServiceStatus>(status)

    useEffect(() => {
        const id = setInterval(() => {
            getStatus().then((response) => {
                if(response) {
                    setStateStatus(response.data)
                } else {
                    setStateStatus({
                        core: false,
                        controller: false,
                    })
                }

            }).catch(() => setStateStatus({
                core: false,
                controller: false,
            }))
        }, 4000)
        return () => clearInterval(id);
    }, [stateStatus, setStateStatus]);

    return (
        <div className="w-full h-screen flex">
            <div className="bg-slate-100 w-full h-auto rounded-2xl m-10">
                <div className="text-center text-5xl m-7">telink</div>
                <div className="flex justify-evenly">
                    <StatusBox serviceName={"Frontend"} online={true}/>
                    <StatusBox serviceName={"Backend"} online={stateStatus.core}/>
                    <StatusBox serviceName={"Controller"} online={stateStatus.controller}/>
                </div>
                <TelemetryTable />
            </div>
        </div>
    )
}