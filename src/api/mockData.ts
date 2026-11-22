/**
 * VentureBlueprint Client-Side Mock Data Engine
 * Provides resilient, interactive offline/static demo capabilities
 * when deployed without a live PostgreSQL/FastAPI ASGI cluster.
 */

export interface MockUser {
  id: string;
  email: string;
  full_name: string;
  role: string;
  phone_number?: string;
}

const DEFAULT_DEMO_FOUNDER: MockUser = {
  id: "usr_founder_001",
  email: "founder@ventureblueprint.in",
  full_name: "Aarav Sharma",
  role: "Entrepreneur",
  phone_number: "+91 98765 43210",
};

const DEFAULT_DEMO_ADMIN: MockUser = {
  id: "usr_admin_001",
  email: "admin@ventureblueprint.in",
  full_name: "System Administrator",
  role: "Administrator",
  phone_number: "+91 99887 76655",
};

const INITIAL_PROJECTS = [
  {
    id: "proj_demo_healthpulse",
    name: "HealthPulse AI Solutions",
    domain: "Healthcare",
    preferred_structure: "Private Limited Company",
    accent_color: "#10b981",
    status: "In Progress",
    completion_percentage: 85,
    created_at: new Date(Date.now() - 7 * 86400000).toISOString(),
    updated_at: new Date().toISOString(),
    description: "AI-driven predictive diagnostic platform for early cardiac risk stratification.",
  },
  {
    id: "proj_demo_payflow",
    name: "PayFlow Bharat Logistics",
    domain: "Finance and Accounting",
    preferred_structure: "Limited Liability Partnership",
    accent_color: "#3b82f6",
    status: "Assessment",
    completion_percentage: 45,
    created_at: new Date(Date.now() - 14 * 86400000).toISOString(),
    updated_at: new Date().toISOString(),
    description: "Micro-merchant UPI payment settlements and working capital invoice discounting.",
  },
];

const INITIAL_TASKS = [
  {
    id: "tsk_01",
    project_id: "proj_demo_healthpulse",
    title: "Obtain Class 3 Digital Signature Certificate (DSC)",
    category: "Pre-Incorporation",
    status: "Completed",
    priority: "High",
    due_date: "2026-11-28",
    description: "Acquire MCA-compliant Class 3 DSC for both designated directors.",
  },
  {
    id: "tsk_02",
    project_id: "proj_demo_healthpulse",
    title: "Director Identification Number (DIN) Verification",
    category: "Pre-Incorporation",
    status: "Completed",
    priority: "High",
    due_date: "2026-11-30",
    description: "Validate existing DIN or prepare SPICe+ Part B director identification sections.",
  },
  {
    id: "tsk_03",
    project_id: "proj_demo_healthpulse",
    title: "RUN Name Reservation Approval (MCA)",
    category: "Incorporation",
    status: "Completed",
    priority: "High",
    due_date: "2026-12-05",
    description: "Ensure name conforms to Companies Act 2013 Rule 8 and obtain ROC approval notice.",
  },
  {
    id: "tsk_04",
    project_id: "proj_demo_healthpulse",
    title: "Draft MoA (e-MoA INC-33) & AoA (e-AoA INC-34)",
    category: "Incorporation",
    status: "In Progress",
    priority: "Critical",
    due_date: "2026-12-10",
    description: "Generate compliant main object clauses tailored to Digital Health Software and AI analytics.",
  },
  {
    id: "tsk_05",
    project_id: "proj_demo_healthpulse",
    title: "File SPICe+ Part B Composite Application",
    category: "Incorporation",
    status: "Pending",
    priority: "Critical",
    due_date: "2026-12-15",
    description: "Submit integrated incorporation bundle for PAN, TAN, EPFO, ESIC, and Profession Tax.",
  },
  {
    id: "tsk_06",
    project_id: "proj_demo_healthpulse",
    title: "Corporate Bank Account & Capital Influx",
    category: "Post-Incorporation",
    status: "Pending",
    priority: "Medium",
    due_date: "2026-12-20",
    description: "Open zero-balance current account with designated partner bank and deposit share capital.",
  },
];

const INITIAL_DOCUMENTS = [
  {
    id: "doc_master_pdf",
    project_id: "proj_demo_healthpulse",
    title: "VentureBlueprint Company Startup Blueprint",
    name: "VentureBlueprint Company Startup Blueprint (PDF)",
    document_type: "formation_blueprint",
    version: 1,
    file_format: "pdf",
    status: "Generated",
    file_size_bytes: 384210,
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    size: "375 KB",
  },
  {
    id: "doc_master_docx",
    project_id: "proj_demo_healthpulse",
    title: "VentureBlueprint Company Startup Blueprint",
    name: "VentureBlueprint Company Startup Blueprint (DOCX)",
    document_type: "formation_blueprint",
    version: 1,
    file_format: "docx",
    status: "Generated",
    file_size_bytes: 185420,
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    size: "181 KB",
  },
  {
    id: "doc_01",
    project_id: "proj_demo_healthpulse",
    title: "Memorandum of Association (MoA Draft)",
    name: "Memorandum of Association (MoA Draft)",
    document_type: "MoA",
    version: 1,
    file_format: "pdf",
    status: "Generated",
    file_size_bytes: 254820,
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    size: "248 KB",
  },
  {
    id: "doc_02",
    project_id: "proj_demo_healthpulse",
    title: "Articles of Association (AoA Draft)",
    name: "Articles of Association (AoA Draft)",
    document_type: "AoA",
    version: 1,
    file_format: "pdf",
    status: "Generated",
    file_size_bytes: 320110,
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    size: "312 KB",
  },
  {
    id: "doc_03",
    project_id: "proj_demo_healthpulse",
    title: "Founders Equity & IP Assignment Agreement",
    name: "Founders Equity & IP Assignment Agreement",
    document_type: "Agreement",
    version: 1,
    file_format: "docx",
    status: "Generated",
    file_size_bytes: 190200,
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    size: "185 KB",
  },
];

const INITIAL_ROLES = [
  {
    title: "Managing Director (MD)",
    category: "Statutory Position",
    staffing_type: "Mandatory Key Managerial Personnel (KMP)",
    type: "Executive Board Member",
    description: "Entrusted with substantial powers of business management under Section 2(54) of the Companies Act 2013.",
    legal_basis: "Companies Act 2013 · Section 196 & 203",
    responsibilities: [
      "Executive governance and statutory compliance filing oversight with ROC.",
      "Primary authorized signatory for corporate bank accounts, GSTN, and MCA SPICe+ submissions.",
      "Convening quarterly Board of Directors meetings and maintaining statutory minutes."
    ]
  },
  {
    title: "Resident Director",
    category: "Statutory Position",
    staffing_type: "Mandatory Statutory Quorum",
    type: "Board Director",
    description: "Every company must have at least one director who stays in India for at least 182 days during the financial year.",
    legal_basis: "Companies Act 2013 · Section 149(3)",
    responsibilities: [
      "Satisfies Indian residency threshold for MCA incorporation approval.",
      "Acts as primary domestic contact for tax notices (Income Tax, DGGI, GST).",
      "Signatory on annual financial statements and Board's Report (Form AOC-4)."
    ]
  },
  {
    title: "Statutory Auditor",
    category: "External Professional Service",
    staffing_type: "Mandatory Independent Professional",
    type: "Independent Chartered Accountant (FCA)",
    description: "Must be appointed by the Board within 30 days of incorporation to conduct independent statutory financial audits.",
    legal_basis: "Companies Act 2013 · Section 139(6)",
    responsibilities: [
      "Independent verification of balance sheets and profit & loss statements.",
      "Issuance of Statutory Audit Report (CARO) and filing Form ADT-1 with MCA.",
      "Certification of Commencement of Business declaration (Form 20A)."
    ]
  },
  {
    title: "Chief Technology Officer (CTO)",
    category: "Executive Management",
    staffing_type: "Recommended Operational Leadership",
    type: "Executive Officer",
    description: "Directs technical architecture, patent documentation, software engineering, and data protection compliance.",
    legal_basis: "Corporate Governance Best Practices & DPDP Act 2023",
    responsibilities: [
      "Engineering architecture, cloud security, and proprietary IP assignment to the entity.",
      "Implementation of technical safeguards under Digital Personal Data Protection (DPDP) Act 2023.",
      "Technical due-diligence readiness for venture funding rounds."
    ]
  }
];

const INITIAL_RULES = [
  {
    id: "rule_01",
    rule_code: "MCA-SEC-149",
    source_code: "MCA",
    category: "incorporation",
    rule_title: "Minimum Director Headcount Requirement",
    status: "Passed",
    legal_provision: "Companies Act 2013 · Section 149(1)",
    official_source_url: "https://www.mca.gov.in",
    finding_summary: "Private Limited entities require a minimum of two natural person directors. Your roster satisfies this statutory requirement.",
    action_required: "Ensure valid DIN and active Class 3 DSC credentials prior to SPICe+ Part B submission."
  },
  {
    id: "rule_02",
    rule_code: "MCA-SEC-149-3",
    source_code: "MCA",
    category: "incorporation",
    rule_title: "Statutory Resident Director Mandate",
    status: "Passed",
    legal_provision: "Companies Act 2013 · Section 149(3)",
    official_source_url: "https://www.mca.gov.in",
    finding_summary: "At least one designated director has confirmed continuous physical stay in India for ≥ 182 days in the preceding financial year.",
    action_required: "Submit Indian address verification proof (Aadhaar/Passport and Utility Bill ≤ 2 months old)."
  },
  {
    id: "rule_03",
    rule_code: "MCA-RULE-8",
    source_code: "MCA",
    category: "incorporation",
    rule_title: "Company Name Availability & Undesirability Filter",
    status: "Passed",
    legal_provision: "Companies (Incorporation) Rules 2014 · Rule 8",
    official_source_url: "https://www.mca.gov.in/content/mca/global/en/home.html",
    finding_summary: "Proposed title contains distinctive branding keywords and lacks prohibited state emblems or government patronymics.",
    action_required: "File RUN (Reserve Unique Name) or execute simultaneous name reservation in SPICe+ Part A."
  },
  {
    id: "rule_04",
    rule_code: "GST-SEC-22",
    source_code: "GSTN",
    category: "taxation",
    rule_title: "GST Registration Threshold Assessment",
    status: "Passed",
    legal_provision: "Central Goods and Services Tax Act 2017 · Section 22 & 24",
    official_source_url: "https://www.gst.gov.in",
    finding_summary: "Entity anticipates inter-state electronic commerce and service deliveries, triggering early voluntary/mandatory GSTIN enrolment.",
    action_required: "Opt for simultaneous GSTIN generation during composite SPICe+ e-incorporation."
  },
  {
    id: "rule_05",
    rule_code: "DPDP-SEC-6",
    source_code: "MeitY",
    category: "data privacy",
    rule_title: "Digital Personal Data Consent & Notice Framework",
    status: "Warning",
    legal_provision: "Digital Personal Data Protection Act 2023 · Section 6",
    official_source_url: "https://www.meity.gov.in",
    finding_summary: "User data collection for consumer-facing analytics requires bilingual, transparent itemised consent notices.",
    action_required: "Adopt VentureBlueprint DPDP consent templates in customer-facing terms before public launch."
  },
  {
    id: "rule_06",
    rule_code: "MSME-SEC-7",
    source_code: "MSME",
    category: "sectoral licence",
    rule_title: "Udyam Micro-Enterprise Classification Eligibility",
    status: "Passed",
    legal_provision: "Micro, Small and Medium Enterprises Development Act 2006",
    official_source_url: "https://udyamregistration.gov.in",
    finding_summary: "Initial plant & machinery investment under ₹1 Crore and turnover under ₹5 Crores qualifies entity for Micro Enterprise tier.",
    action_required: "Execute paperless Udyam registration via PAN & GSTIN integration post incorporation."
  }
];

// Helper to access LocalStorage safely
function getStored<T>(key: string, defaultValue: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function setStored<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn("LocalStorage write skipped:", e);
  }
}

export function handleMockFallback(endpoint: string, options: RequestInit = {}): any {
  const method = (options.method || "GET").toUpperCase();
  const body = options.body ? JSON.parse(options.body as string) : {};

  // 1. Auth Handlers
  if (endpoint.startsWith("/auth/login")) {
    const isSpecialAdmin = body.email === "admin@ventureblueprint.in";
    const user: MockUser = isSpecialAdmin
      ? DEFAULT_DEMO_ADMIN
      : {
          ...DEFAULT_DEMO_FOUNDER,
          email: body.email || DEFAULT_DEMO_FOUNDER.email,
        };
    const token = `demo_token_${user.role.toLowerCase()}_${Date.now()}`;
    setStored("vb_mock_user", user);
    setStored("vb_token", token);
    return {
      access_token: token,
      refresh_token: `demo_refresh_${Date.now()}`,
      user,
    };
  }

  if (endpoint.startsWith("/auth/register")) {
    const user: MockUser = {
      id: `usr_${Date.now()}`,
      email: body.email || "founder@ventureblueprint.in",
      full_name: body.full_name || "New Founder",
      role: "Entrepreneur",
      phone_number: body.phone_number,
    };
    const token = `demo_token_entrepreneur_${Date.now()}`;
    setStored("vb_mock_user", user);
    setStored("vb_token", token);

    // Seed a customized project for the new founder if they don't have one
    const projects = getStored<any[]>("vb_projects", INITIAL_PROJECTS);
    const existing = projects.find((p) => p.name.includes(user.full_name));
    if (!existing) {
      const personalProj = {
        id: `proj_${Date.now()}`,
        name: `${user.full_name}'s Venture`,
        domain: "Information Technology",
        preferred_structure: "Private Limited Company",
        accent_color: "#10b981",
        status: "Draft",
        completion_percentage: 25,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        description: `Company formation dossier initialized for ${user.full_name}.`,
      };
      projects.unshift(personalProj);
      setStored("vb_projects", projects);
    }

    return {
      access_token: token,
      refresh_token: `demo_refresh_${Date.now()}`,
      user,
    };
  }

  if (endpoint.startsWith("/auth/me")) {
    const user = getStored<MockUser>("vb_mock_user", DEFAULT_DEMO_FOUNDER);
    return user;
  }

  // 2. Projects Handlers
  if (endpoint.startsWith("/projects")) {
    let projects = getStored<any[]>("vb_projects", INITIAL_PROJECTS);

    if (method === "GET") {
      const matchId = endpoint.match(/^\/projects\/([a-zA-Z0-9_-]+)(\?.*)?$/);
      if (matchId && !endpoint.startsWith("/projects?")) {
        const found = projects.find((p) => p.id === matchId[1]) || projects[0];
        return found;
      }

      // Handle search and status filtering
      if (endpoint.includes("?")) {
        const queryPart = endpoint.split("?")[1];
        const params = new URLSearchParams(queryPart);
        const statusFilter = params.get("status");
        const searchFilter = params.get("search")?.toLowerCase().trim();

        let filtered = [...projects];
        if (statusFilter && statusFilter.toLowerCase() !== "all") {
          filtered = filtered.filter(
            (p) => p.status?.toLowerCase() === statusFilter.toLowerCase()
          );
        }
        if (searchFilter) {
          filtered = filtered.filter(
            (p) =>
              p.name?.toLowerCase().includes(searchFilter) ||
              p.domain?.toLowerCase().includes(searchFilter)
          );
        }
        return filtered;
      }

      return projects;
    }

    if (method === "POST" && endpoint.endsWith("/duplicate")) {
      const matchId = endpoint.match(/^\/projects\/([a-zA-Z0-9_-]+)\/duplicate$/);
      const target = projects.find((p) => p.id === (matchId ? matchId[1] : ""));
      const copy = {
        ...(target || projects[0]),
        id: `proj_${Date.now()}`,
        name: `${target?.name || "Project"} (Copy)`,
        created_at: new Date().toISOString(),
      };
      projects.unshift(copy);
      setStored("vb_projects", projects);
      return copy;
    }

    if (method === "POST") {
      const newProj = {
        id: `proj_${Date.now()}`,
        name: body.name || "My New Venture",
        domain: body.domain || "Information Technology",
        preferred_structure: body.preferred_structure || "Private Limited Company",
        accent_color: body.accent_color || "#10b981",
        status: "Draft",
        completion_percentage: 20,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        description: `Initiated venture blueprint for ${body.name || "New Venture"}.`,
      };
      projects.unshift(newProj);
      setStored("vb_projects", projects);
      return newProj;
    }

    if (method === "PUT") {
      const matchId = endpoint.match(/^\/projects\/([a-zA-Z0-9_-]+)$/);
      if (matchId) {
        projects = projects.map((p) =>
          p.id === matchId[1] ? { ...p, ...body, updated_at: new Date().toISOString() } : p
        );
        setStored("vb_projects", projects);
        return projects.find((p) => p.id === matchId[1]);
      }
    }

    if (method === "DELETE") {
      const matchId = endpoint.match(/^\/projects\/([a-zA-Z0-9_-]+)$/);
      if (matchId) {
        projects = projects.filter((p) => p.id !== matchId[1]);
        setStored("vb_projects", projects);
        return { success: true };
      }
    }
  }

  // 3. Validation & Pre-screening Handlers
  if (endpoint.startsWith("/validation/name-prescreen")) {
    const rawName = (body.name || "").trim();
    const structure = body.legal_structure || "Private Limited Company";
    const prohibitedWords = ["Bank", "Insurance", "National", "Reserve", "Federal", "Government", "Bharat", "President", "Court"];
    const foundProhibited = prohibitedWords.filter((w) =>
      new RegExp(`\\b${w}\\b`, "i").test(rawName)
    );

    const warnings: string[] = [];
    const errors: string[] = [];
    const recommendations: string[] = [];
    let score = 95;

    if (rawName.length < 3) {
      errors.push("Proposed company name must be at least 3 characters long.");
      score = Math.max(0, score - 50);
    }

    if (foundProhibited.length > 0) {
      warnings.push(`Contains regulated terminology (${foundProhibited.join(", ")}). Prior clearance or NOC from relevant authority required.`);
      score = Math.max(0, score - 25);
    }

    const lower = rawName.toLowerCase();
    const structureSuffixes: Record<string, string> = {
      "Private Limited Company": "Private Limited",
      "Public Limited Company": "Limited",
      "Limited Liability Partnership (LLP)": "LLP",
      "One Person Company (OPC)": "(OPC) Private Limited",
    };
    const expectedSuffix = structureSuffixes[structure] || "Private Limited";
    const hasSuffix = lower.endsWith(expectedSuffix.toLowerCase()) || lower.endsWith("pvt ltd") || lower.endsWith("ltd");

    if (!hasSuffix && structure !== "Sole Proprietorship" && structure !== "Partnership Firm") {
      warnings.push(`For a ${structure}, the legal name will formally conclude with '${expectedSuffix}'. VentureBlueprint will automatically format this for SPICe+ filing.`);
      recommendations.push(`Suggested formal legal name: '${rawName} ${expectedSuffix}'`);
    }

    const checks = [
      {
        criterion: "Distinctive Branding Component",
        passed: rawName.length >= 3,
        details: rawName.length >= 3 ? "Has distinctive branding keywords." : "Name is too short.",
      },
      {
        criterion: "Regulatory & Sovereign Clearance",
        passed: foundProhibited.length === 0,
        details:
          foundProhibited.length === 0
            ? "No restricted financial or government-tier terminology detected."
            : `Contains restricted word(s): ${foundProhibited.join(", ")}. Requires sector regulator NOC.`,
      },
      {
        criterion: "Statutory Suffix Alignment",
        passed: true,
        details: `Name conforms to ${structure} naming conventions under MCA Rule 8.`,
      },
    ];

    const isValid = errors.length === 0;

    return {
      status: isValid ? "success" : "error",
      is_valid: isValid,
      score,
      name_assessed: rawName,
      legal_structure: structure,
      checks,
      warnings,
      errors,
      recommendations,
      suggestions: [
        `${rawName} Technologies ${expectedSuffix}`,
        `${rawName} Digital Solutions ${expectedSuffix}`,
        `${rawName} Global Innovations ${expectedSuffix}`,
      ],
      mca_portal_url: "https://www.mca.gov.in/content/mca/global/en/home.html",
      disclaimer: "Automated preliminary assessment based on MCA Rule 8 guidelines. Final reservation must be completed on SPICe+ Part A.",
    };
  }

  if (endpoint.startsWith("/validation/structure-recommendation")) {
    return {
      recommended_structure: "Private Limited Company",
      fit_score: 94,
      reasons: [
        "Offers distinct legal personality and full limited liability protection to equity holders.",
        "Universal preference for venture capital, angel investment, and institutional lending.",
        "Allows standard employee stock ownership plans (ESOPs) to attract top engineering talent.",
      ],
      compliance_burden: "Moderate to High (Requires annual audits, ROC filings, and board minutes)",
      alternatives: [
        { structure: "Limited Liability Partnership (LLP)", fit_score: 78, reason: "Lower annual ROC burden, but harder to raise equity venture funding." },
        { structure: "One Person Company (OPC)", fit_score: 55, reason: "Ideal only for solo founders with zero external investors." }
      ]
    };
  }

  if (endpoint.startsWith("/validation/project/")) {
    const projectId = endpoint.split("/")[3] || "proj_current";
    return {
      project_id: projectId,
      validation_status: "Passed",
      score: 94,
      total_checks: 18,
      critical_issues: [],
      advisories: [
        "Ensure trademark registry clearance under Class 9 and Class 42 before public marketing.",
        "Maintain minimum 2 designated directors with verified Indian address proof for SPICe+ filing."
      ],
      structure_recommendation: {
        recommended_structure: "Private Limited Company",
        fit_score: 94,
        rationale: "Ideal structure for technology companies planning to issue equity, grant ESOPs, and raise angel or institutional venture financing."
      },
      validation_results: [
        {
          id: "vr_1",
          category: "name_validation",
          rule_id: "RULE-NAM-000",
          field_name: "name",
          status: "Passed",
          severity: "info",
          explanation: "Proposed entity name passed automated MCA Rule 8 pre-screening.",
          corrective_action: "Proceed to formal name reservation on SPICe+ Part A.",
          legal_reference: "Section 4(2), Companies Act, 2013"
        },
        {
          id: "vr_2",
          category: "structure_compatibility",
          rule_id: "RULE-STR-001",
          field_name: "directors",
          status: "Passed",
          severity: "info",
          explanation: "Director requirements satisfied for proposed Private Limited Company.",
          corrective_action: "Ensure valid DIN and Digital Signature Certificates (DSC) are obtained.",
          legal_reference: "Section 149(1), Companies Act, 2013"
        },
        {
          id: "vr_3",
          category: "ownership_consistency",
          rule_id: "RULE-OWN-001",
          field_name: "shareholding",
          status: "Passed",
          severity: "info",
          explanation: "Founder shareholding distribution verified at 100% allocation.",
          corrective_action: "Execute Shareholder Agreement (SHA) prior to subscription capital infusion.",
          legal_reference: "Section 56, Companies Act, 2013"
        },
        {
          id: "vr_4",
          category: "location_verification",
          rule_id: "RULE-LOC-001",
          field_name: "registered_office",
          status: "Warning",
          severity: "medium",
          explanation: "Registered office documentation pending utility bill verification under 60 days.",
          corrective_action: "Attach recent electricity or broadband bill along with premises owner NOC.",
          legal_reference: "Section 12, Companies Act, 2013"
        }
      ]
    };
  }

  // 4. Questionnaires Handlers
  if (endpoint.startsWith("/questionnaires/schema")) {
    return {
      sections: [
        {
          id: "sec_company_info",
          title: "1. Business Identity & Mission",
          fields: [
            { id: "business_name", label: "Proposed Company Name", type: "text", required: true },
            { id: "business_activity", label: "Primary Activity / Business Model", type: "textarea", required: true },
            { id: "registered_state", label: "Registered Office State", type: "select", options: ["Karnataka", "Maharashtra", "Telangana", "Delhi", "Tamil Nadu", "Gujarat"] },
          ],
        },
        {
          id: "sec_founders",
          title: "2. Founders & Shareholding",
          fields: [
            { id: "num_founders", label: "Number of Founders / Directors", type: "number", required: true, default: 2 },
            { id: "primary_director_din", label: "Does any director hold a DIN already?", type: "boolean", default: false },
            { id: "authorized_capital", label: "Authorized Share Capital (INR)", type: "number", default: 100000 },
          ],
        },
        {
          id: "sec_compliance",
          title: "3. Regulatory Registrations",
          fields: [
            { id: "gst_required", label: "Apply for GSTIN concurrently?", type: "boolean", default: true },
            { id: "msme_udyam", label: "Apply for MSME Udyam Certificate?", type: "boolean", default: true },
            { id: "startup_india", label: "Eligible for Startup India DPIIT recognition?", type: "boolean", default: true },
          ],
        },
      ],
    };
  }

  if (endpoint.startsWith("/questionnaires/projects/")) {
    const matchId = endpoint.match(/^\/questionnaires\/projects\/([a-zA-Z0-9_-]+)$/);
    const projId = matchId ? matchId[1] : "default";
    const key = `vb_answers_${projId}`;

    if (method === "POST") {
      setStored(key, body.answers || body);
      return { success: true, saved_at: new Date().toISOString() };
    }

    // Lookup project details
    const projects = getStored<any[]>("vb_projects", INITIAL_PROJECTS);
    const activeProject = projects.find((p) => p.id === projId) || projects[0];

    const saved = getStored<any>(key, {});
    return {
      name: activeProject.name,
      domain: activeProject.domain,
      preferred_structure: activeProject.preferred_structure || "Private Limited Company",
      company_name: activeProject.name,
      business_domain: activeProject.domain,
      ...saved,
    };
  }

  // 5. Regulations & Sources Handlers
  if (endpoint.startsWith("/regulations/sources")) {
    return [
      { id: "src_mca", code: "MCA", name: "Ministry of Corporate Affairs", jurisdiction: "India" },
      { id: "src_rbi", code: "RBI", name: "Reserve Bank of India", jurisdiction: "India" },
      { id: "src_gstn", code: "GSTN", name: "Goods and Services Tax Network", jurisdiction: "India" },
      { id: "src_dpiit", code: "DPIIT", name: "Department for Promotion of Industry and Internal Trade", jurisdiction: "India" },
    ];
  }

  if (endpoint.startsWith("/regulations/rules")) {
    return INITIAL_RULES;
  }

  if (endpoint.startsWith("/regulations/domains")) {
    return [
      { id: "dom_fintech", name: "Finance and Accounting", slug: "finance-accounting", description: "Payments, lending, wealthtech and neo-banking infrastructure" },
      { id: "dom_healthtech", name: "Healthcare", slug: "healthcare", description: "Digital therapeutics, EHR, medical devices and diagnostics" },
      { id: "dom_saas", name: "Information Technology", slug: "it", description: "B2B cloud productivity, SaaS and automation software" },
      { id: "dom_agritech", name: "Agriculture", slug: "agriculture", description: "Farm management, supply chain and smart crop analytics" },
      { id: "dom_ecommerce", name: "E-commerce", slug: "ecommerce", description: "Online retail, omnichannel brands and marketplace logistics" },
    ];
  }

  // 6. Compliance Handlers
  if (
    endpoint.startsWith("/compliance/projects/") &&
    (endpoint.endsWith("/assess") || endpoint.endsWith("/assessment"))
  ) {
    return {
      status: "Compliant",
      overall_score: 92,
      risk_tier: "Low",
      summary: "All mandatory pre-incorporation statutory prerequisites successfully satisfied under Companies Act 2013 and Rule 8.",
      rule_results: INITIAL_RULES,
    };
  }

  if (endpoint.startsWith("/compliance/projects/") && endpoint.endsWith("/tasks")) {
    const tasks = getStored<any[]>("vb_tasks", INITIAL_TASKS);
    return tasks;
  }

  if (endpoint.startsWith("/compliance/tasks/")) {
    const matchId = endpoint.match(/^\/compliance\/tasks\/([a-zA-Z0-9_-]+)$/);
    let tasks = getStored<any[]>("vb_tasks", INITIAL_TASKS);
    if (matchId && method === "PUT") {
      tasks = tasks.map((t) => (t.id === matchId[1] ? { ...t, ...body } : t));
      setStored("vb_tasks", tasks);
      return tasks.find((t) => t.id === matchId[1]);
    }
  }

  if (endpoint.startsWith("/compliance/projects/") && endpoint.endsWith("/roles")) {
    return INITIAL_ROLES;
  }

  // 7. Documents Handlers
  if (endpoint.startsWith("/documents/projects/") && endpoint.endsWith("/generate")) {
    const matchId = endpoint.match(/^\/documents\/projects\/([a-zA-Z0-9_-]+)\/generate$/);
    const docs = getStored<any[]>("vb_documents", INITIAL_DOCUMENTS);
    const docType = body.document_type || "formation_blueprint";
    const fileFmt = body.file_format || "pdf";
    const docTitle =
      docType === "formation_blueprint"
        ? "VentureBlueprint Company Startup Blueprint"
        : `${docType.toUpperCase()} Dossier`;

    const newDoc = {
      id: `doc_${Date.now()}`,
      project_id: matchId ? matchId[1] : "proj_demo",
      title: docTitle,
      name: `${docTitle} (${fileFmt.toUpperCase()})`,
      document_type: docType,
      version: 1,
      status: "Generated",
      file_format: fileFmt,
      file_size_bytes: fileFmt === "pdf" ? 384210 : 185420,
      created_at: new Date().toISOString(),
      size: fileFmt === "pdf" ? "375 KB" : "181 KB",
    };
    docs.unshift(newDoc);
    setStored("vb_documents", docs);
    return newDoc;
  }

  if (endpoint.startsWith("/documents/projects/")) {
    return getStored<any[]>("vb_documents", INITIAL_DOCUMENTS);
  }

  // 8. Admin Portal Handlers
  if (endpoint.startsWith("/admin/stats")) {
    const projects = getStored<any[]>("vb_projects", INITIAL_PROJECTS);
    const docs = getStored<any[]>("vb_documents", INITIAL_DOCUMENTS);
    return {
      total_users: 52,
      total_projects: projects.length,
      total_documents: docs.length,
      active_regulatory_rules: INITIAL_RULES.length,
      storage_directory: "/app/storage/sandboxed",
      active_compliances: 89,
      system_uptime: "99.98%",
    };
  }

  if (endpoint.startsWith("/admin/users")) {
    const storedUser = getStored<MockUser>("vb_mock_user", DEFAULT_DEMO_FOUNDER);
    return [
      storedUser,
      DEFAULT_DEMO_ADMIN,
      { id: "usr_03", email: "priya@nairtech.in", full_name: "Priya Nair", role: "Entrepreneur", phone_number: "+91 91234 56789" },
      { id: "usr_04", email: "rohit@finverse.io", full_name: "Rohit Verma", role: "Entrepreneur", phone_number: "+91 94567 89012" },
    ];
  }

  if (endpoint.startsWith("/admin/audit-logs")) {
    return [
      { id: "aud_01", event: "Project Validation Run", user: "founder@ventureblueprint.in", timestamp: new Date(Date.now() - 3600000).toISOString() },
      { id: "aud_02", event: "Document Generated: Company Formation Blueprint", user: "founder@ventureblueprint.in", timestamp: new Date(Date.now() - 7200000).toISOString() },
      { id: "aud_03", event: "Rule Updated: SPICe+ Part B", user: "admin@ventureblueprint.in", timestamp: new Date(Date.now() - 86400000).toISOString() },
    ];
  }

  if (endpoint.startsWith("/admin/rules/") && endpoint.endsWith("/transition")) {
    return { success: true, message: "Rule state updated successfully" };
  }

  if (endpoint.startsWith("/admin/health")) {
    return {
      status: "healthy",
      mode: "client_resilient_demo",
      timestamp: new Date().toISOString(),
      components: {
        frontend: "optimal",
        regulatory_engine: "loaded",
        rules_database: "synchronized",
      },
    };
  }

  return { message: "Mock operation acknowledged", timestamp: new Date().toISOString() };
}
