import Header from "../components/header/Header";
import Welcome from "../components/welcome/Welcome";
import EnterpriseCards from "../components/enterpriseCards/EnterpriseCards";
import "./SignInPage.css";
import EnterpriseFeature from "../components/enterpriseFeatures/EnterpriseFeature";

export default function SignInPage() {
  return (
    <>
      <Header logoUrl="/brain.svg" />
      <Welcome />
      <section className="cards">
        <p className="cards-title">Enterprise feature</p>
        <div className="card-grid">
          <EnterpriseCards
            logoUrl="/brain-blue.svg"
            title="AI-Powered"
            description="Advanced AI generates contextual questions based on your specifications"
          />
          <EnterpriseCards
            logoUrl="/users.svg"
            title="Multi-Language"
            description="Create quizzes in multiple languages for global teams"
          />
          <EnterpriseCards
            logoUrl="/trophy.svg"
            title="Performance Analytics"
            description="Detailed insights and performance tracking for all assessments"
          />
          <EnterpriseCards
            logoUrl="/trending-up.svg"
            title="Scalable Platform"
            description="Enterprise-grade infrastructure supporting unlimited users"
          />
        </div>
      </section>
      <section className="features">
        <EnterpriseFeature amount="10M+" feature="Quizes Created" />
        <EnterpriseFeature amount="500K+" feature="Active Users" />
        <EnterpriseFeature amount="99.9%" feature="Uptime SLA" />
      </section>
    </>
  );
}
