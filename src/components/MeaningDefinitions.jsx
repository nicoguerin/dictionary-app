export default function MeaningDefinitions({ definitions }) {
    return (
        <ul className="pl-10">
            {definitions.map((definition, index) => {
                return (
                    <li
                        key={index}
                        className="list-disc"
                    >
                        <span>{definition.definition}</span>
                    </li>
                );
            })}
        </ul>
    );
}