import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="European Civic Resilience Programme (ECRP)"
      description="Civic resilience through structured deliberation and experiential learning"
    >
      {/* Hero Section */}
      <header
        style={{
          padding: '4rem 1rem',
          backgroundColor: '#1f3556',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          European Civic Resilience Programme (ECRP)
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
          Civic resilience through structured deliberation and experiential learning
        </p>

        <Link
          className="button button--primary button--lg"
          to="/docs/governance/overview"
        >
          View Governance Framework
        </Link>
      </header>

      {/* Main Content */}
      <main style={{ padding: '3rem 1rem' }}>
        <section style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2>What is ECRP?</h2>
          <p>
            The European Civic Resilience Programme (ECRP) is an educational initiative designed
            to strengthen civic resilience in democratic societies.
          </p>
          <p>
            Through structured deliberation, immersive tabletop simulations, and guided reflection,
            ECRP supports participants in developing critical reasoning, institutional understanding,
            and responsible civic engagement.
          </p>

          <h2>What ECRP Is Not</h2>
          <p>
            ECRP is not a political advocacy programme. It does not promote political parties,
            policy positions, or ideological outcomes.
          </p>
          <p>
            The Programme is strictly non-partisan and non-directive. Educational outcomes are
            assessed on participation, procedural engagement, and reflective analysis rather than
            viewpoints or performance results.
          </p>

          <h2>Governance-First Design</h2>
          <p>
            ECRP operates under a comprehensive and publicly accessible governance framework.
            All activities are conducted in accordance with clearly defined rules, accreditation
            standards, certification policies, and safeguards.
          </p>
          <p>
            Transparency, procedural integrity, participant safety, and educational neutrality
            are foundational principles of the Programme.
          </p>

          <div style={{ marginTop: '2.5rem' }}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/governance/overview"
            >
              Read the Full Governance Framework
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
