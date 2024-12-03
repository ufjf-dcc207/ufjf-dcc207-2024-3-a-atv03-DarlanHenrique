import "./Animal.css";

interface AnimalProps {
    icon: string;
    name: string;
    weight: number;
    extinct?: boolean;
}

export default function Animal ({icon, name, weight, extinct} : AnimalProps) {
    return <div className="animal">
        <div className="icon">{icon}</div>
        <div className="name">{name}</div>
        <div className="weight">{weight > 0.0 ? weight.toLocaleString()+" kg" : "Desconhecido"}</div>
        {extinct && <div className="extinct">Extinto</div>}
    </div>
}