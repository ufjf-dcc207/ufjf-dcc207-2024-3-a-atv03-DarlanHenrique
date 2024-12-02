import "./Animal.css";

interface AnimalProps {
    icon: string;
    name: string;
    weight: number;
    extinct: boolean;
}

export default function Animal ({icon, name, weight, extinct} : AnimalProps) {
    return <div className="animal">
        <div className="animalItem">{icon}</div>
        <div className="animalItem">{name}</div>
        <div className="animalItem">{weight.toLocaleString()} kg</div>
        <div className="animalItem">{extinct}</div>
    </div>
}