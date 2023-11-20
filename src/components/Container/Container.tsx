import { ReactNode } from "react"

interface IContainer {
    children: ReactNode
}

export default function Container({children}: IContainer) {
    return (
        <div className="flex justify-center items-center bg-white h-screen w-screen">
            {children}
        </div>
    )
}