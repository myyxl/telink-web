import {useEffect, useState} from "react";
import {Telemetry} from "../model/Telemetry";
import {baseUrl} from "../api/http";
import {useStatusStore} from "../store/StatusStore";

export const TelemetryTable = () => {

    const [telemetry, setTelemetry] = useState<Telemetry>({
       velocity: 0,
       temperature: 0,
       acceleration: 0,
       altitude: 0
    });

    //const telemetryStore: any = useTelemetryStore();
    const enableController = useStatusStore((state: any) => state.enableController)

    useEffect(() => {
        const eventSource = new EventSource(`${baseUrl}/telemetry`);
        eventSource.onmessage = (item: MessageEvent<string>) => {
            setTelemetry(JSON.parse(item.data) as Telemetry)
            enableController()
        }
        return () => eventSource.close();
    }, [telemetry, enableController, setTelemetry]);

    return (
        <div className="flex justify-center mt-16">
            <table className="table-auto bg-white rounded-2xl w-1/2">
                <thead>
                    <tr>
                        <th>Field</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr>
                        <td>Altitude</td>
                        <td>{telemetry.altitude} m</td>
                    </tr>
                    <tr>
                        <td>Velocity</td>
                        <td>{telemetry.velocity} m/s</td>
                    </tr>
                    <tr>
                        <td>Acceleration</td>
                        <td>{telemetry.acceleration} m/s²</td>
                    </tr>
                    <tr>
                        <td>Temperature</td>
                        <td>{telemetry.temperature} °C</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}