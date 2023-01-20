import { createContext, PropsWithChildren } from "react";

export interface AppContextInterface {
    windowSize?: number;
}
export const AppContext = createContext<AppContextInterface>({ windowSize: 0 });

// PropsWithChildren более изящная запись контектста с чилдрен
export const AppContextProvider = ({ windowSize, children }: PropsWithChildren<AppContextInterface>): JSX.Element => {

    return <AppContext.Provider value={{ windowSize }}>
    {children}
    </AppContext.Provider>;
};