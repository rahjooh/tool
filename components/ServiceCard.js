const ServiceCard = ({ service }) => {
    return (
        <article className="card service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
                {service.items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </article>
    );
};

export default ServiceCard;