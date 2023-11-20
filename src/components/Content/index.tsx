import { ReactNode } from "react"

interface IContent {
    children: ReactNode
}
export default function Content({children}: IContent) {
    return (
        <div className="bg-black w-full h-full flex items-center justify-center flex-col">
            {children}
        </div>
    )
}