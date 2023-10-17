export const StatusBox = (props: {
    serviceName: string,
    online: boolean,
}) => {
    return (
        <div className="bg-white w-1/4 rounded-2xl flex flex-col items-center justify-center gap-5 p-20">
            <div className="text-3xl">{props.serviceName}</div>
            {props.online && (
                <div className="text-3xl font-bold text-green-600">Online</div>
            )}
            {!props.online && (
                <div className="text-3xl font-bold text-red-600">Offline</div>
            )}
        </div>
    )
}