import { createContext } from "react";

const PathContext = createContext({
    user: {},
    setUser: () => { }
})
export { PathContext }