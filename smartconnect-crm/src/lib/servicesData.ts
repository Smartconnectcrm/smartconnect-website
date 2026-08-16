// src/lib/servicesData.ts
export interface ServiceItem {
  id: string
  title: string
  category: string
  description: string
  features: string[]
}

export const defaultServices: ServiceItem[] = [
  // Pillar 1: Enterprise IT & Cloud
  {
    id: '1',
    title: 'Multi-Cloud & Sovereign Architecture',
    category: 'Cloud Infrastructure',
    description:
      'Design and deployment of highly available hybrid multi-cloud environments across AWS, Azure, and European sovereign clouds.',
    features: ['Sovereign Cloud Ready', 'Automated Failover', 'Infrastructure as Code (Terraform)'],
  },
  {
    id: '2',
    title: 'Container Orchestration & DevOps',
    category: 'Cloud Infrastructure',
    description:
      'Enterprise Kubernetes cluster management, CI/CD pipeline automation, and zero-downtime deployment workflows.',
    features: ['Kubernetes / OpenShift', 'GitOps Workflows', '24/7 Telemetry & Logging'],
  },
  {
    id: '3',
    title: 'Disaster Recovery & Business Continuity',
    category: 'Cloud Infrastructure',
    description:
      'Robust data replication, automated failover protocols, and low-RTO/RPO backup architecture for critical workloads.',
    features: ['Near-Zero Data Loss', 'ISO 22301 Aligned', 'Automated Recovery Testing'],
  },

  // Pillar 2: Cybersecurity & Compliance
  {
    id: '4',
    title: 'ISO 27001 & NIS2 Compliance Frameworks',
    category: 'Cybersecurity',
    description:
      'Implementation of Information Security Management Systems (ISMS) tailored to meet EU NIS2 directives and ISO standards.',
    features: ['ISMS Implementation', 'Audit Readiness', 'Risk Assessment Automation'],
  },
  {
    id: '5',
    title: 'DSGVO / GDPR Compliance & Data Protection',
    category: 'Cybersecurity',
    description:
      'Technical and organizational measures (TOMs) for end-to-end data privacy, anonymization, and compliant cloud hosting.',
    features: ['GDPR Compliant Architecture', 'Data Leak Prevention', 'EU Data Boundary Guarantee'],
  },
  {
    id: '6',
    title: 'Zero Trust & Identity Access Management (IAM)',
    category: 'Cybersecurity',
    description:
      'Centralized access control systems using Multi-Factor Authentication (MFA), Single Sign-On (SSO), and micro-segmentation.',
    features: [
      'OAuth2 / SAML Integration',
      'Role-Based Access Control',
      'Privileged Access Management',
    ],
  },

  // Pillar 3: Software & CRM Systems
  {
    id: '7',
    title: 'Custom Enterprise CRM Development',
    category: 'Software Engineering',
    description:
      'Tailor-made CRM systems engineered for complex sales cycles, customer support automation, and multi-tenant management.',
    features: ['Custom Workflow Engines', 'Multi-Tenant Architecture', 'Real-Time Telemetry'],
  },
  {
    id: '8',
    title: 'Enterprise API & Integration Middleware',
    category: 'Software Engineering',
    description:
      'Scalable REST/GraphQL middleware connecting legacy ERP platforms, custom applications, and third-party SaaS tools.',
    features: ['Event-Driven Architecture', 'High-Throughput Gateways', 'Legacy ERP Adapters'],
  },
  {
    id: '9',
    title: 'Legacy Application Modernization',
    category: 'Software Engineering',
    description:
      'Refactoring monolithic legacy applications into containerized, cloud-native microservices with zero operational impact.',
    features: ['Monolith-to-Microservices', 'Zero-Downtime Migration', 'Code Refactoring'],
  },

  // Pillar 4: Public Sector & Procurement
  {
    id: '10',
    title: 'EVB-IT Compliant Project Execution',
    category: 'Public Sector',
    description:
      'Specialized IT service delivery structured to comply directly with German EVB-IT contract frameworks (System/Pflege/Erstellung).',
    features: ['EVB-IT Standard Contracts', 'Public Sector SLAs', 'Compliance Documentation'],
  },
  {
    id: '11',
    title: 'Public Sector Digitalization & OZG Services',
    category: 'Public Sector',
    description:
      'Digital service transformation for public administration entities aligned with the Online Access Act (OZG) and BITV accessibility.',
    features: [
      'BITV 2.0 Accessibility',
      'OZG Standard Interfaces',
      'Secure Public Portal Delivery',
    ],
  },
  {
    id: '12',
    title: 'EU Tender & RFP Technical Advisory',
    category: 'Public Sector',
    description:
      'Technical bid support, architecture planning, and compliance verification for enterprise and EU public procurement tenders.',
    features: ['RFP Compliance Matrix', 'Technical Specification Preparation', 'Vendor Audits'],
  },
]
