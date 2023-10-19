import { create } from 'zustand'
import {Telemetry} from "../model/Telemetry";

export const useTelemetryStore = create((set) => ({
    altitude: 0,
    velocity: 0,
    acceleration: 0,
    temperature: 0,
    setTelemetry: (telemetry: Telemetry) => set({...telemetry}),
    clearTelemetry: () => set({
        altitude: 0,
        velocity: 0,
        acceleration: 0,
        temperature: 0,
    })
}))