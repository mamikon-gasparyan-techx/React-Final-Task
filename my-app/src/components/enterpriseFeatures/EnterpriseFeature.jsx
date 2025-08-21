import "./EnterpriseFeature.css";

export default function EnterpriseFeature({ amount, feature }) {
  return (
    <div className="ent-feature">
      <p className="amount">{amount}</p>
      <p className="feature-txt">{feature}</p>
    </div>
  );
}
