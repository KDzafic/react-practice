function CoreConcepts({ title, description, img }) {
    return (
      <li>
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }
  
  export default CoreConcepts;
  