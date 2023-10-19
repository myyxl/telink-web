import {useTelemetryStore} from "../store/TelemetryStore";
import {useEffect} from "react";
import {Telemetry} from "../model/Telemetry";
import {baseUrl} from "../api/http";
import {useStatusStore} from "../store/StatusStore";

export const TelemetryTable = () => {

    const telemetryStore: any = useTelemetryStore();
    const enableController = useStatusStore((state: any) => state.enableController)

    useEffect(() => {
        const eventSource = new EventSource(`${baseUrl}/telemetry`);
        eventSource.onmessage = (item: MessageEvent<string>) => {
            telemetryStore.setTelemetry(JSON.parse(item.data) as Telemetry)
            enableController()
        }
        return () => eventSource.close();
    }, [telemetryStore, enableController]);

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
                        <td>{telemetryStore.altitude} m</td>
                    </tr>
                    <tr>
                        <td>Velocity</td>
                        <td>{telemetryStore.velocity} m/s</td>
                    </tr>
                    <tr>
                        <td>Acceleration</td>
                        <td>{telemetryStore.acceleration} m/s²</td>
                    </tr>
                    <tr>
                        <td>Temperature</td>
                        <td>{telemetryStore.temperature} °C</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}