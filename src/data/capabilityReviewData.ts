export type CapabilityReviewItem = {
  description: string;
  id: string;
  name: string;
  required?: boolean;
};

export const capabilityReviewData: CapabilityReviewItem[] = [
  {
    id: "infrastructure-cloud",
    name: "Infrastructure & Cloud",
    description: "Compute, network, hosting, end-user compute",
    required: true,
  },
  {
    id: "applications-software",
    name: "Applications & Software",
    description: "SaaS, enterprise platforms, bespoke",
    required: true,
  },
  {
    id: "data-ai",
    name: "Data & AI",
    description: "Data platforms, analytics, AI services",
  },
  {
    id: "security-risk",
    name: "Security & Risk",
    description: "Identity, threat, compliance",
    required: true,
  },
  {
    id: "service-support",
    name: "Service & Support",
    description: "Service desk, managed services",
  },
  {
    id: "emerging-technology",
    name: "Emerging Technology",
    description: "Innovation pilots, R&D spend",
  },
];
