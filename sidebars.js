// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "category",
      label: "Los geht's",
      link: { type: "generated-index" },
      collapsed: false,
      items: [
        "getting-started",
        "startpage",
        "general",
        "common-features",
        "feedback",
        "benachrichtigungen",
      ],
    },
    {
      type: "category",
      label: "Account",
      link: { type: "generated-index" },
      collapsed: true,
      items: [
        "account/account-register",
        "account/account-login",
        "account/profile",
        "account/account-externalLogin",
      ],
    },
    {
      type: "category",
      label: "Apps",
      collapsed: true,
      items: [
        "apps/admin",
        "apps/absence-planner",
        "apps/audit-management",

        {
          type: "category",
          label: "Blog, Dokumentenmanagement & Wiki",
          link: { type: "doc", id: "apps/article-shared" },
          items: [
            "apps/articles/blog",
            "apps/articles/document-management",
            "apps/articles/wiki",
            "apps/articles/article-placeholder",
            "apps/articles/article-faqs",
          ],
        },
        "apps/crm",
        "apps/dashboard",
        "apps/forms",
        "apps/idea-management",
        "apps/maintenance-management",
        "apps/employees",
        "apps/projects-and-tasks",
        "apps/claim-management",
        "apps/opportunity-management",
        "apps/products",
        "apps/talent-manager",
        "apps/training-management",
        "apps/goal-management",
      ],
    },
    {
      type: "category",
      label: "Best Practices",
      collapsed: true,
      items: ["usecases/multi-site"],
    },
    {
      type: "category",
      label: "FAQs",
      collapsed: true,
      items: [
        "faqs/audit-trail",
        "faqs/smartViews",
        "faqs/supported-browsers",
        "faqs/faq-2",
        "faqs/faq-3",
        "faqs/faq-4",
        "faqs/faq-5",
        "faqs/faq-9",
        "faqs/faq-10",
        "faqs/faq-11",
        "faqs/faq-14",
        "faqs/faq-16",
        "faqs/faq-17",
        "faqs/faq-18",
        "faqs/faq-19",
        "faqs/faq-20",
        "faqs/faq-21",
        "faqs/faq-22",
        "faqs/faq-29",
        "faqs/faq-30",
        "faqs/faq-31",
        "faqs/faq-32",
        "faqs/faq-35",
        "faqs/faq-37",
        "faqs/faq-39",
        "faqs/faq-42",
        "faqs/faq-45",
        "faqs/faq-46",
        "faqs/faq-50",
        "faqs/faq-51",
        "faqs/faq-52",
        "faqs/faq-55",
        "faqs/faq-56",
        "faqs/faq-62",
        "faqs/faq-64",
        "faqs/faq-65",
        "faqs/faq-66",
        "faqs/faq-68",
        "faqs/faq-71",
        "faqs/faq-74",
        "faqs/faq-75",
        "faqs/faq-80",
        "faqs/faq-81",
        "faqs/faq-84",
        "faqs/faq-94",
        "faqs/faq-95",
        "faqs/faq-96",
        "faqs/faq-112",
        "faqs/faq-115",
        "faqs/faq-116",
        "faqs/import-qualifications",
        "faqs/faq-125",
        "faqs/create-page-templates",
      ],
    },
    {
      type: "category",
      label: "Technical Documentation",
      collapsed: true,
      items: [{ type: "autogenerated", dirName: "technical" }],
    },
  ],
};

module.exports = sidebars;
