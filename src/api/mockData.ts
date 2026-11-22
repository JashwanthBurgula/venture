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
    domain: "HealthTech",
    preferred_structure: "Private Limited",
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
    domain: "Fintech",
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
    id: "doc_01",
    project_id: "proj_demo_healthpulse",
    name: "Memorandum of Association (MoA Draft)",
    document_type: "MoA",
    status: "Generated",
    file_format: "pdf",
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    size: "248 KB",
  },
  {
    id: "doc_02",
    project_id: "proj_demo_healthpulse",
    name: "Articles of Association (AoA Draft)",
    document_type: "AoA",
    status: "Generated",
    file_format: "pdf",
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    size: "312 KB",
  },
  {
    id: "doc_03",
    project_id: "proj_demo_healthpulse",
    name: "Founders Equity & IP Assignment Agreement",
    document_type: "Agreement",
    status: "Generated",
    file_format: "docx",
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    size: "185 KB",
  },
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
    const user: MockUser = isSpecialAdmin ? DEFAULT_DEMO_ADMIN : {
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
      email: body.email,
      full_name: body.full_name || "New Founder",
      role: "Entrepreneur",
      phone_number: body.phone_number,
    };
    const token = `demo_token_entrepreneur_${Date.now()}`;
    setStored("vb_mock_user", user);
    setStored("vb_token", token);
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
      const matchId = endpoint.match(/^\/projects\/([a-zA-Z0-9_-]+)$/);
      if (matchId) {
        const found = projects.find((p) => p.id === matchId[1]) || projects[0];
        return found;
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
        domain: body.domain || "SaaS",
        preferred_structure: body.preferred_structure || "Private Limited",
        accent_color: body.accent_color || "#10b981",
        status: "Draft",
        completion_percentage: 15,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
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
    const structure = body.legal_structure || "Private Limited";
    const prohibitedWords = ["Bank", "Insurance", "National", "Reserve", "Federal", "Government"];
    const foundProhibited = prohibitedWords.filter((w) =>
      new RegExp(`\\b${w}\\b`, "i").test(rawName)
    );

    const checks = [
      {
        criterion: "Unique Distinctive Component",
        passed: rawName.length > 3,
        details: rawName.length > 3 ? "Has distinctive branding keywords." : "Name is too short.",
      },
      {
        criterion: "Regulatory Keyword Clearance",
        passed: foundProhibited.length === 0,
        details:
          foundProhibited.length === 0
            ? "No restricted financial or government-tier terminology detected."
            : `Contains restricted word(s): ${foundProhibited.join(", ")}. Requires sector regulator NOC.`,
      },
      {
        criterion: "Statutory Suffix Alignment",
        passed: true,
        details: `Name conforms to ${structure} naming conventions.`,
      },
    ];

    const passedAll = checks.every((c) => c.passed);
    return {
      status: passedAll ? "success" : "warning",
      is_valid: passedAll,
      score: passedAll ? 95 : 60,
      checks,
      suggestions: [
        `${rawName} Technologies ${structure === "Private Limited" ? "Pvt Ltd" : "LLP"}`,
        `${rawName} Digital Solutions ${structure === "Private Limited" ? "Pvt Ltd" : "LLP"}`,
        `${rawName} Global Innovations ${structure === "Private Limited" ? "Pvt Ltd" : "LLP"}`,
      ],
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
    return {
      validation_status: "Passed",
      score: 92,
      critical_issues: [],
      advisories: [
        "Ensure trademark registry clearance under Class 9 and Class 42 before public marketing.",
        "Maintain minimum 2 designated directors with verified Indian address proof for SPICe+ filing."
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
    const key = `vb_answers_${matchId ? matchId[1] : "default"}`;
    if (method === "POST") {
      setStored(key, body.answers || body);
      return { success: true, saved_at: new Date().toISOString() };
    }
    return getStored<any>(key, {
      business_name: "HealthPulse AI Solutions",
      business_activity: "AI software diagnostic services for clinical healthcare providers",
      registered_state: "Telangana",
      num_founders: 2,
      authorized_capital: 100000,
      gst_required: true,
      msme_udyam: true,
      startup_india: true,
    });
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
    return [
      { id: "rule_01", source_code: "MCA", title: "Minimum Director Requirement", requirement: "At least two directors required for a Private Limited company.", status: "Active" },
      { id: "rule_02", source_code: "MCA", title: "Resident Director Mandate", requirement: "At least one director must have stayed in India for ≥ 182 days in previous financial year.", status: "Active" },
      { id: "rule_03", source_code: "GSTN", title: "Compulsory GST Registration", requirement: "Mandatory if aggregate turnover exceeds ₹20 Lakhs (services) or ₹40 Lakhs (goods).", status: "Active" },
      { id: "rule_04", source_code: "DPIIT", title: "Startup Tax Exemption (80-IAC)", requirement: "Incorporated on or after April 1, 2016, with turnover under ₹100 Crores.", status: "Active" },
    ];
  }

  if (endpoint.startsWith("/regulations/domains")) {
    return [
      { id: "dom_fintech", name: "Fintech", slug: "fintech", description: "Payments, lending, wealthtech and neo-banking infrastructure" },
      { id: "dom_healthtech", name: "HealthTech", slug: "healthtech", description: "Digital therapeutics, EHR, medical devices and diagnostics" },
      { id: "dom_saas", name: "Enterprise SaaS", slug: "saas", description: "B2B cloud productivity and automation software" },
      { id: "dom_agritech", name: "Agritech", slug: "agritech", description: "Farm management, supply chain and smart crop analytics" },
      { id: "dom_ecommerce", name: "E-Commerce & D2C", slug: "ecommerce", description: "Online retail, omnichannel brands and marketplace logistics" },
    ];
  }

  // 6. Compliance Handlers
  if (endpoint.startsWith("/compliance/projects/") && endpoint.endsWith("/assessment")) {
    return {
      status: "Compliant",
      overall_score: 88,
      risk_tier: "Low",
      summary: "8 of 10 key statutory prerequisites satisfied for SPICe+ filing.",
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
    return [
      { title: "Managing Director", assigned: "Aarav Sharma", status: "Nominated" },
      { title: "Director & CTO", assigned: "Priya Nair", status: "Nominated" },
      { title: "Authorized Signatory", assigned: "Aarav Sharma", status: "Designated" },
    ];
  }

  // 7. Documents Handlers
  if (endpoint.startsWith("/documents/projects/") && endpoint.endsWith("/generate")) {
    const matchId = endpoint.match(/^\/documents\/projects\/([a-zA-Z0-9_-]+)\/generate$/);
    const docs = getStored<any[]>("vb_documents", INITIAL_DOCUMENTS);
    const newDoc = {
      id: `doc_${Date.now()}`,
      project_id: matchId ? matchId[1] : "proj_demo",
      name: `${body.document_type || "Regulatory Document"} (${body.file_format?.toUpperCase() || "PDF"})`,
      document_type: body.document_type || "Statutory",
      status: "Generated",
      file_format: body.file_format || "pdf",
      created_at: new Date().toISOString(),
      size: "210 KB",
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
    return {
      total_users: 48,
      total_projects: 34,
      total_documents: 112,
      active_compliances: 89,
      system_uptime: "99.98%",
    };
  }

  if (endpoint.startsWith("/admin/users")) {
    return [
      DEFAULT_DEMO_FOUNDER,
      DEFAULT_DEMO_ADMIN,
      { id: "usr_03", email: "priya@nairtech.in", full_name: "Priya Nair", role: "Entrepreneur", phone_number: "+91 91234 56789" },
      { id: "usr_04", email: "rohit@finverse.io", full_name: "Rohit Verma", role: "Entrepreneur", phone_number: "+91 94567 89012" },
    ];
  }

  if (endpoint.startsWith("/admin/audit-logs")) {
    return [
      { id: "aud_01", event: "Project Validation Run", user: "aarav@ventureblueprint.in", timestamp: new Date(Date.now() - 3600000).toISOString() },
      { id: "aud_02", event: "Document Generated: MoA Draft", user: "aarav@ventureblueprint.in", timestamp: new Date(Date.now() - 7200000).toISOString() },
      { id: "aud_03", event: "Rule Updated: SPICe+ Part B", user: "admin@ventureblueprint.in", timestamp: new Date(Date.now() - 86400000).toISOString() },
    ];
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
