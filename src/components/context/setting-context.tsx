import { createContext, useContext } from "react";

export interface SettingsStructure {
    eyes: number,
    mouth: number,
    color: number,
    setEyes: (eyes: number) => void,
    setMouth: (mouth: number) => void,
    setColor: (color: number) => void,
}


export const SettingContext = createContext<SettingsStructure>(null!);

export const useSettings = () => useContext(SettingContext)