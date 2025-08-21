import "./EnterpriseCards.css"

export default function EnterpriseCards({ logoUrl, title, description }) {
  return (
    <div className="ent-card">
      <img src={logoUrl} alt={title} width="50px" height="50px"/>
      <p className="ent-card-title">{title}</p>
      <p className="ent-card-description">{description}</p>
    </div>
  );
}
