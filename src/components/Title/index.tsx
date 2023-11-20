import { ReactNode } from "react"

interface ITitle {
    text: string  
}
export default function Title(text: string) {
    <h1>
        {text}
    </h1>
}