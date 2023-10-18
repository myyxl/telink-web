export const TelemetryTable = () => {
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
                        <td>Height</td>
                        <td>10.00m</td>
                    </tr>
                    <tr>
                        <td>Velocity</td>
                        <td>4m/s</td>
                    </tr>
                    <tr>
                        <td>Acceleration</td>
                        <td>1m/s²</td>
                    </tr>
                    <tr>
                        <td>Temperature</td>
                        <td>19.7°C</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}