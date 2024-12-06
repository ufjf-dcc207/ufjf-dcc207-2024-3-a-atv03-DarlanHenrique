import "./Exhibition.css"

interface ExhibitionProps {
    start: Date;
    end: Date;
    location: string;
}

export default function Exhibition({start, end, location} : ExhibitionProps) {
    return <div className="exhibition">
        <div className="location">Local: {location}</div>
        <div className="start">Início: {start.toLocaleString()}</div>
        <div className="end">Fim: {end.toLocaleString()}</div>
    </div>
}