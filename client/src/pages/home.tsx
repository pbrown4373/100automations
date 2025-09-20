import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import PDFViewer from "@/components/PDFViewer";
import autoCapturePDF from "@assets/Auto-capture-every-formDM-into-a-CRM-with-source-UTM-tagging-Premium-Training-Guide_1758044066857.pdf";
import esignaturePDF from "@assets/E-signature-to-CRM-sync-with-stage-change-tasks-for-onboarding-Premium-Training-Guide_1758107931777.pdf";
import aiTicketPDF from "@assets/Ticket-triage-classify-set-priority-and-suggest-responses-with-AI-Premium-Training-Guide_1758107931777.pdf";
import inventoryPDF from "@assets/Auto-generate-POs-when-inventory-dips-below-reorder-points-Premium-Training-Guide_1758107931777.pdf";
import invoicePDF from "@assets/Auto-invoice-on-milestonesubscription-events-with-branded-PDFs-Premium-Training-Guide_1758107931777.pdf";
import onboardingPDF from "@assets/Day-1-onboarding-accounts-groups-hardware-tickets-and-intros-Premium-Training-Guide_1758107931777.pdf";
import { 
  ChartLine, 
  Handshake, 
  Users, 
  ServerCog, 
  Calculator, 
  Bus, 
  Shield, 
  Code, 
  BarChart3,
  CheckCircle,
  Star,
  Download,
  Rocket,
  Lock,
  Bolt,
  Database,
  MessageSquare,
  CreditCard,
  Clipboard,
  FileText,
  X
} from "lucide-react";

const automationCategories = [
  {
    icon: ChartLine,
    title: "Lead Generation & Marketing",
    description: "10 automations to capture, enrich, and nurture leads automatically",
    count: "1-10"
  },
  {
    icon: Handshake,
    title: "Sales & Revenue Operations", 
    description: "10 automations for proposals, quotes, renewals, and pipeline management",
    count: "11-20"
  },
  {
    icon: Users,
    title: "Customer Success & Support",
    description: "10 automations for onboarding, support tickets, and retention",
    count: "21-30"
  },
  {
    icon: ServerCog,
    title: "Operations & Fulfillment",
    description: "10 automations for inventory, shipping, and project management", 
    count: "31-40"
  },
  {
    icon: Calculator,
    title: "Finance & Accounting",
    description: "10 automations for invoicing, reconciliation, and expense management",
    count: "41-50"
  },
  {
    icon: Bus,
    title: "HR & People Operations",
    description: "10 automations for hiring, onboarding, and performance management",
    count: "51-60"
  },
  {
    icon: Shield,
    title: "IT & Security", 
    description: "10 automations for access control, monitoring, and compliance",
    count: "61-70"
  },
  {
    icon: Code,
    title: "Product & Engineering",
    description: "10 automations for CI/CD, monitoring, and feature rollouts",
    count: "71-80"
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "10 automations for ETL, reporting, and business intelligence", 
    count: "81-90"
  },
  {
    icon: Clipboard,
    title: "Admin, Legal & General",
    description: "10 automations for contracts, compliance, and executive reporting",
    count: "91-100"
  }
];

const sampleAutomations = [
  {
    title: "Auto-capture every form/DM into CRM",
    description: "Automatically capture leads from any source with UTM tagging and source attribution. Never lose a potential customer again.",
    category: "Lead Generation & Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    pdfImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    detailedDescription: "This comprehensive automation guide shows you exactly how to set up lead capture from multiple sources including contact forms, social media DMs, chat widgets, and more. Includes step-by-step instructions for n8n, Zapier, and Make integrations with popular CRMs like HubSpot, Salesforce, and Pipedrive."
  },
  {
    title: "E-signature to CRM sync with stage changes",
    description: "Automatically update deal stages and trigger onboarding tasks when contracts are signed. Seamless handoff from sales to delivery.",
    category: "Sales & Revenue Operations", 
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    pdfImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    detailedDescription: "Complete automation blueprint for connecting DocuSign, Adobe Sign, or HelloSign with your CRM. Automatically update deal stages, create onboarding tasks, notify team members, and kick off fulfillment processes the moment a contract is signed."
  },
  {
    title: "AI-powered ticket triage and classification",
    description: "Automatically classify support tickets, set priorities, and suggest responses using AI. Reduce response time by 75%.",
    category: "Customer Success & Support",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    pdfImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    detailedDescription: "Leverage AI to automatically classify support tickets by urgency, category, and complexity. Includes setup instructions for integration with Zendesk, Freshdesk, Intercom, and custom support systems. Features automated response suggestions and intelligent routing."
  },
  {
    title: "Auto-generate POs at reorder points", 
    description: "Never run out of inventory again. Automatically create purchase orders when stock levels hit predetermined thresholds.",
    category: "Operations & Fulfillment",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    pdfImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    detailedDescription: "Comprehensive inventory automation system that monitors stock levels and automatically generates purchase orders when thresholds are reached. Includes vendor notification workflows, approval processes, and integration with popular inventory management systems."
  },
  {
    title: "Auto-invoice on milestone events",
    description: "Generate and send branded invoices automatically when milestones are reached or subscriptions renew. Perfect cash flow management.",
    category: "Finance & Accounting",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    pdfImage: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    detailedDescription: "Automated invoicing system that triggers on project milestones, subscription renewals, or custom events. Features branded PDF generation, automatic delivery, payment tracking, and integration with QuickBooks, Xero, and Stripe."
  },
  {
    title: "Day-1 onboarding automation",
    description: "Automatically provision accounts, assign hardware, set up access permissions, and schedule introductions for new hires.",
    category: "HR & People Operations",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    pdfImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    detailedDescription: "Complete new hire onboarding automation that handles account provisioning, hardware assignment, access permissions, document signing, and introduction scheduling. Integrates with HR systems, Active Directory, and collaboration tools."
  }
];

const benefits = [
  {
    title: "Eliminate repetitive tasks",
    description: "Free up your team to focus on high-value work"
  },
  {
    title: "Improve customer experience", 
    description: "Faster response times and consistent service quality"
  },
  {
    title: "Scale without hiring",
    description: "Handle more volume with the same team size"
  },
  {
    title: "Reduce operational costs",
    description: "Minimize errors and optimize resource allocation"
  },
  {
    title: "Gain competitive advantage",
    description: "Move faster than competitors stuck in manual processes"
  }
];

// Function to get PDF URL based on automation title
const getPDFUrl = (title: string): string => {
  switch (title) {
    case "Auto-capture every form/DM into CRM":
      return autoCapturePDF;
    case "E-signature to CRM sync with stage changes":
      return esignaturePDF;
    case "AI-powered ticket triage and classification":
      return aiTicketPDF;
    case "Auto-generate POs at reorder points":
      return inventoryPDF;
    case "Auto-invoice on milestone events":
      return invoicePDF;
    case "Day-1 onboarding automation":
      return onboardingPDF;
    default:
      return autoCapturePDF;
  }
};


const industries = [
  {
    name: "SaaS Companies",
    description: "Perfect for subscription management, customer onboarding, and churn prevention",
    icon: "💻"
  },
  {
    name: "E-commerce Stores", 
    description: "Essential for inventory management, order processing, and customer service",
    icon: "🛒"
  },
  {
    name: "Professional Services",
    description: "Ideal for client onboarding, project management, and billing automation",
    icon: "💼"
  },
  {
    name: "Real Estate Agencies",
    description: "Great for lead nurturing, document processing, and client communication",
    icon: "🏠"
  },
  {
    name: "Healthcare Practices",
    description: "Valuable for appointment scheduling, patient communication, and compliance",
    icon: "🏥"
  },
  {
    name: "Manufacturing Companies",
    description: "Critical for supply chain management, quality control, and production planning",
    icon: "🏭"
  },
  {
    name: "Financial Services",
    description: "Essential for compliance reporting, client onboarding, and risk management",
    icon: "🏦"
  },
  {
    name: "Marketing Agencies",
    description: "Perfect for campaign management, client reporting, and lead generation",
    icon: "📈"
  }
];

const testimonials = [
  {
    text: "These automations saved us 25 hours per week. Our customer response time went from hours to minutes.",
    author: "Sarah Johnson",
    role: "CEO, TechFlow Solutions",
    rating: 5
  },
  {
    text: "We implemented 15 automations in the first month. ROI was immediate and our team finally has time for strategic work.",
    author: "Mike Chen", 
    role: "Operations Director, GrowthCo",
    rating: 5
  },
  {
    text: "Crystal clear instructions made implementation easy. We're now processing 3x more orders with the same team size.",
    author: "Lisa Rodriguez",
    role: "Founder, EcommerceMax", 
    rating: 5
  }
];

interface Automation {
  title: string;
  description: string;
  category: string;
  image: string;
  pdfImage: string;
  detailedDescription: string;
}

interface AutomationCategory {
  icon: any;
  title: string;
  description: string;
  count: string;
  pdfs: string[];
}

const categoryPDFs: Record<string, string[]> = {
  "Lead Generation & Marketing": [
    "Auto-capture leads from all sources into CRM",
    "Social media DM to lead workflow automation",
    "Website form submissions to nurturing sequence",
    "UTM tracking and attribution automation",
    "Lead scoring and qualification workflows",
    "Email marketing automation sequences",
    "Landing page A/B test automation",
    "Webinar registration to CRM sync",
    "Content downloads to lead nurturing",
    "Referral program automation system"
  ],
  "Sales & Revenue Operations": [
    "Proposal generation and delivery automation",
    "Quote-to-contract automation workflow",
    "Deal stage progression notifications",
    "Subscription renewal automation",
    "Upsell opportunity identification",
    "Sales pipeline reporting automation",
    "Commission calculation automation",
    "Contract signature to fulfillment handoff",
    "Revenue recognition automation",
    "Lost deal follow-up sequences"
  ],
  "Customer Success & Support": [
    "New customer onboarding automation",
    "Support ticket triage and routing",
    "Customer health score monitoring",
    "Churn risk identification alerts",
    "Feature usage tracking notifications",
    "Customer feedback collection automation",
    "Renewal reminder campaigns",
    "Support escalation workflows",
    "Customer satisfaction surveys",
    "Success milestone celebration automation"
  ],
  "Operations & Fulfillment": [
    "Inventory reorder point automation",
    "Purchase order generation workflow",
    "Shipping label and tracking automation",
    "Order status update notifications",
    "Vendor payment automation",
    "Quality control checkpoint alerts",
    "Return processing automation",
    "Warehouse management workflows",
    "Supplier performance monitoring",
    "Delivery confirmation automation"
  ],
  "Finance & Accounting": [
    "Automated invoice generation and delivery",
    "Payment reminder sequences",
    "Expense report approval workflows",
    "Bank reconciliation automation",
    "Financial reporting automation",
    "Budget variance alerts",
    "Tax compliance documentation",
    "Cash flow forecasting automation",
    "Vendor payment processing",
    "Revenue reporting dashboards"
  ],
  "HR & People Operations": [
    "New hire onboarding workflows",
    "Employee document management",
    "Performance review scheduling",
    "Time-off request processing",
    "Benefits enrollment automation",
    "Employee survey distribution",
    "Exit interview automation",
    "Compliance training tracking",
    "Payroll processing workflows",
    "Employee milestone celebrations"
  ],
  "IT & Security": [
    "User access provisioning automation",
    "Security incident response workflows",
    "Software license management",
    "System monitoring and alerts",
    "Backup verification automation",
    "Compliance audit automation",
    "Password policy enforcement",
    "Network security scanning",
    "Data retention automation",
    "IT ticket assignment workflows"
  ],
  "Product & Engineering": [
    "CI/CD pipeline automation",
    "Code review assignment workflows",
    "Bug tracking and assignment",
    "Feature flag management",
    "Performance monitoring alerts",
    "Deployment approval workflows",
    "Documentation generation automation",
    "Test automation scheduling",
    "Release note compilation",
    "Customer feedback to development"
  ],
  "Data & Analytics": [
    "ETL pipeline automation",
    "Data quality monitoring",
    "Report generation and distribution",
    "Dashboard refresh automation",
    "Data backup and archiving",
    "KPI threshold alerting",
    "Customer analytics automation",
    "Sales forecasting models",
    "Marketing attribution reporting",
    "Business intelligence workflows"
  ],
  "Admin, Legal & General": [
    "Contract management automation",
    "Legal document approval workflows",
    "Compliance monitoring systems",
    "Board reporting automation",
    "Vendor agreement renewals",
    "Insurance claims processing",
    "Executive dashboard updates",
    "Meeting scheduling automation",
    "Document version control",
    "Regulatory filing automation"
  ]
};

export default function Home() {
  const [selectedAutomation, setSelectedAutomation] = useState<Automation | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<AutomationCategory | null>(null);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  const handlePurchase = () => {
    window.open('https://automate.innershaadvisors.com/checkout-page', '_blank');
  };

  const openModal = (automation: Automation) => {
    setSelectedAutomation(automation);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAutomation(null);
  };

  const openCategoryModal = (category: any) => {
    const categoryWithPdfs = {
      ...category,
      pdfs: categoryPDFs[category.title] || []
    };
    setSelectedCategory(categoryWithPdfs);
    setIsCategoryModalOpen(true);
  };

  const closeCategoryModal = () => {
    setIsCategoryModalOpen(false);
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-bg py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Stop Drowning in Manual Tasks: 100 Smart Ways to Automate Your Business
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-4xl mx-auto">
            <strong>What if you could eliminate 20+ hours of repetitive work every week?</strong>
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-4xl mx-auto">
            Get 100 step-by-step automation blueprints that transform tasks taking hours into processes that take minutes. 
            From lead capture to customer onboarding, from inventory management to executive reporting - automate everything using tools you already have.
          </p>
          
          <Card className="max-w-md mx-auto mb-8">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-muted-foreground text-lg mb-2">Complete Bundle:</div>
                <div className="text-4xl font-bold mb-2">
                  <span className="line-through text-muted-foreground">$497</span>
                  <span className="text-primary ml-2">$97</span>
                </div>
                <div className="text-sm text-muted-foreground">Limited Time: Save $400</div>
              </div>
            </CardContent>
          </Card>
          
          <Button 
            size="lg" 
            className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold px-8 text-xl pulse-button shadow-lg mb-4"
            onClick={handlePurchase}
            data-testid="button-purchase-hero"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Get Instant Access Now
          </Button>
          <p className="text-primary-foreground/80 text-sm">30-day money-back guarantee</p>
        </div>
      </section>

      {/* What's Included Overview */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What's Included?</h2>
            <p className="text-xl text-muted-foreground">Your complete automation toolkit across 10 business categories</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="card-hover bg-secondary cursor-pointer" onClick={() => openCategoryModal(category)}>
                  <CardContent className="p-6 text-center">
                    <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">{category.title}</h3>
                    <p className="text-muted-foreground mb-2">{category.description}</p>
                    <div className="text-sm text-primary font-medium mb-4">Automations {category.count}</div>
                    <Button variant="outline" size="sm" className="mt-2">
                      View All 10 PDFs
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sample Automations Showcase */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sample Business Automations</h2>
            <p className="text-xl text-muted-foreground">Here are just a few examples from the complete collection</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleAutomations.map((automation, index) => (
              <Card key={index} className="card-hover cursor-pointer" onClick={() => openModal(automation)}>
                <CardContent className="p-6">
                  <img 
                    src={automation.image}
                    alt={`${automation.title} automation`}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{automation.title}</h3>
                  <p className="text-muted-foreground mb-4">{automation.description}</p>
                  <div className="text-sm text-primary font-medium">{automation.category}</div>
                  <div className="mt-4 text-center">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 text-xl shadow-lg"
              onClick={handlePurchase}
              data-testid="button-purchase-samples"
            >
              <Download className="mr-2 h-5 w-5" />
              Get All 100 Automations Now
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Transform Your Business Operations</h2>
            <p className="text-xl text-muted-foreground">See the impact of business automation on your bottom line</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-hours">20+ Hours</div>
              <div className="text-muted-foreground">Saved per week through automation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-errors">75%</div>
              <div className="text-muted-foreground">Reduction in manual errors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-response">3x</div>
              <div className="text-muted-foreground">Faster customer response times</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-savings">$50K+</div>
              <div className="text-muted-foreground">Average annual cost savings</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">You'll Learn How To:</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">{benefit.title}</div>
                      <div className="text-muted-foreground">{benefit.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Successful business team celebrating automation success"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* If you need more automations, focus on these... */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">If you need more leads, focus on these automations...</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
                alt="Lead generation automation"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-foreground mb-2">The Lead Generation Machine</h3>
              <p className="text-muted-foreground">Perfect for Sales Teams & Marketing Directors</p>
            </Card>
            
            <Card className="p-6">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
                alt="Sales automation"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-foreground mb-2">The Sales Automation Powerhouse</h3>
              <p className="text-muted-foreground">Essential for Revenue Operations & Account Managers</p>
            </Card>
          </div>
          
          <Button 
            size="lg" 
            className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold px-8 text-xl pulse-button shadow-lg mb-8"
            onClick={handlePurchase}
            data-testid="button-purchase-leads"
          >
            UNLOCK THESE AUTOMATIONS!
          </Button>
        </div>
      </section>

      {/* If you need more sales section */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">If you need more sales, focus on these automations...</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
                alt="Proposal automation"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-foreground mb-2">Smart Proposal Generation</h3>
              <p className="text-muted-foreground">Essential for Account Executives & Business Development</p>
            </Card>
            
            <Card className="p-6">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
                alt="Pipeline automation"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-foreground mb-2">Pipeline Management Automation</h3>
              <p className="text-muted-foreground">Perfect for Sales Managers & Revenue Operations</p>
            </Card>
          </div>
          
          <Button 
            size="lg" 
            className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold px-8 text-xl pulse-button shadow-lg mb-8"
            onClick={handlePurchase}
            data-testid="button-purchase-sales"
          >
            UNLOCK THESE AUTOMATIONS!
          </Button>
        </div>
      </section>

      {/* If you need better analytics section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">If you need better analytics, focus on these automations...</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
                alt="Data analytics automation"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-foreground mb-2">Automated Reporting Dashboard</h3>
              <p className="text-muted-foreground">Perfect for Data Analysts & Business Intelligence Teams</p>
            </Card>
            
            <Card className="p-6">
              <img 
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
                alt="KPI tracking automation"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-foreground mb-2">KPI Tracking & Alerts System</h3>
              <p className="text-muted-foreground">Essential for Executives & Operations Managers</p>
            </Card>
          </div>
          
          <Button 
            size="lg" 
            className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold px-8 text-xl pulse-button shadow-lg mb-8"
            onClick={handlePurchase}
            data-testid="button-purchase-analytics"
          >
            UNLOCK THESE AUTOMATIONS!
          </Button>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-foreground mb-8">Works With Your Existing Stack</h3>
            <p className="text-lg text-muted-foreground mb-8">Compatible with n8n, Zapier, Make, GoHighLevel, HubSpot, Airtable, Notion, Slack, Teams, Stripe, QuickBooks, Xero, and more!</p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Perfect For These Industries & Business Types</h2>
            <p className="text-xl text-muted-foreground">These automations work across every industry - here are some of the most popular use cases</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {industries.map((industry, index) => (
              <Card key={index} className="p-6 text-center bg-secondary card-hover">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center bg-primary/10 border border-primary/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Don't See Your Industry?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              These 100 automations are designed to work for ANY business that wants to eliminate manual tasks, 
              improve efficiency, and scale operations. The principles apply universally across all industries.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 text-xl"
              onClick={handlePurchase}
              data-testid="button-purchase-industries"
            >
              Get Your Industry-Specific Automations Now
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Join 5,000+ Businesses Already Automating</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-secondary">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div className="font-semibold text-foreground" data-testid={`text-testimonial-author-${index}`}>{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">Get instant access to all 100 automation blueprints and start saving time today</p>
          
          <Card className="max-w-md mx-auto mb-8 bg-primary-foreground/10 border-primary-foreground/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-primary-foreground/80 text-lg mb-2">Complete Bundle:</div>
                <div className="text-4xl font-bold mb-2">
                  <span className="line-through opacity-60">$497</span>
                  <span className="ml-2">$97</span>
                </div>
                <div className="text-sm opacity-80">Save $400 - Limited Time</div>
              </div>
            </CardContent>
          </Card>
          
          <Button 
            size="lg" 
            className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold px-8 text-xl pulse-button shadow-lg mb-4"
            onClick={handlePurchase}
            data-testid="button-purchase-final"
          >
            <Lock className="mr-2 h-5 w-5" />
            Secure Your Copy Now
          </Button>
          
          <div className="space-y-2 text-sm opacity-80">
            <div><CheckCircle className="inline w-4 h-4 mr-2" />Instant digital download</div>
            <div><CheckCircle className="inline w-4 h-4 mr-2" />30-day money-back guarantee</div>
            <div><CheckCircle className="inline w-4 h-4 mr-2" />Lifetime access & updates</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-foreground text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">100 Smart Business Automations</h3>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Transform your business operations with practical, implementable automations that save time, reduce errors, and increase profitability.
            </p>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="#" className="hover:text-primary-foreground transition-colors" data-testid="link-privacy">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors" data-testid="link-terms">Terms of Use</a>
              <a href="#" className="hover:text-primary-foreground transition-colors" data-testid="link-refund">Refund Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors" data-testid="link-contact">Contact</a>
            </div>
            <p>&copy; 2024 Business Automation Solutions. All Rights Reserved.</p>
            <p className="mt-2">This site is not affiliated with any automation platform mentioned.</p>
          </div>
        </div>
      </footer>

      {/* Modal for Sample Automation Details */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedAutomation && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-foreground mb-2">
                  {selectedAutomation.title}
                </DialogTitle>
                <DialogDescription className="text-sm text-primary font-medium mb-4">
                  {selectedAutomation.category}
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* PDF Preview */}
                <div className="space-y-4">
                  <PDFViewer 
                    pdfUrl={getPDFUrl(selectedAutomation.title)}
                    title="Premium Training Guide"
                  />
                </div>
                
                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">What You'll Learn:</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedAutomation.detailedDescription}
                    </p>
                  </div>
                  
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <h4 className="font-semibold text-primary mb-2">Quick Summary:</h4>
                    <p className="text-foreground text-sm">
                      {selectedAutomation.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-foreground">Step-by-step implementation guide</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-foreground">Compatible with multiple platforms</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-foreground">Real-world examples and templates</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-foreground">Troubleshooting and best practices</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      onClick={handlePurchase}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3"
                      data-testid={`button-purchase-modal-${selectedAutomation.title.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                      <Rocket className="mr-2 h-5 w-5" />
                      Get This Automation - $97
                    </Button>
                  </div>
                </div>
              </div>
              
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Modal for Category PDF Lists */}
      <Dialog open={isCategoryModalOpen} onOpenChange={setIsCategoryModalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedCategory && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-foreground mb-2">
                  {selectedCategory.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground mb-4">
                  {selectedCategory.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                  <h3 className="text-lg font-semibold text-primary mb-2">10 Complete PDF Guides Included</h3>
                  <p className="text-sm text-foreground">Automations {selectedCategory.count}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">What You'll Get:</h4>
                  <div className="grid gap-3">
                    {selectedCategory.pdfs.map((pdf, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-card border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-center w-8 h-8 bg-primary/10 text-primary rounded-full text-sm font-bold flex-shrink-0 mt-1">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <FileText className="w-4 h-4 text-muted-foreground" />
                            <span className="text-foreground font-medium">{pdf}</span>
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            PDF Implementation Guide
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-semibold text-foreground">What's Included in Each PDF:</span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>Step-by-step setup instructions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>Platform compatibility guide (Zapier, Make, n8n)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>Real-world examples and use cases</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>Troubleshooting and optimization tips</span>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t">
                  <Button 
                    onClick={handlePurchase}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 text-lg"
                    data-testid={`button-purchase-category-${selectedCategory.title.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    <Rocket className="mr-2 h-5 w-5" />
                    Get All 100 Automations - $97
                  </Button>
                  <p className="text-center text-sm text-muted-foreground mt-2">
                    30-day money-back guarantee
                  </p>
                </div>
              </div>
              
              <button
                onClick={closeCategoryModal}
                className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
