import "./Exhibition.css"
import { ReactNode } from "react"

interface ExhibitionProps {
    start: Date;
    end: Date;
    location: string;
    children?: ReactNode;
}

export default function Exhibition({start, end, location, children:animals} : ExhibitionProps) {
    return <>  
        <div className="exhibition">
            <div className="location">Local: {location}</div>
            <div className="start">Início: {start.toLocaleString()}</div>
            <div className="end">Fim: {end.toLocaleString()}</div>
            <div className="animals">{animals}</div>
        </div>
        <hr />
    </>
}