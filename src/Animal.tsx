import "./Animal.css";

interface AnimalProps {
    icon: string;
    name: string;
    weight: number;
    extinct: boolean;
}

export default function({icon, name, weight, extinct} : AnimalProps) {
    return <div className="animal">
        <div className="animalItem">{icon}</div>
        <div className="animalItem"><b>{name}</b></div>
        <div className="animalItem">{weight} kg</div>
        <div className="animalItem">{extinct}</div>
    </div>
}