import { ReactNode } from "react"

interface IChildren {
    children: ReactNode
}
export default function Section({children}: IChildren) {
    return (
        <section className="h-3/5 flex justify-center items-center w-full">
            {children}
        </section>
    )
}