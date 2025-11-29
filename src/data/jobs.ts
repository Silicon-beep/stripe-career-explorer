export type JobType = "Full-time" | "Intern" | "Contract" | "Part-time";

export interface Job {
  id: string;
  title: string;
  team: string;
  location: string;
  jobType: JobType;
  url: string;
}

export const jobs: Job[] = [
  { id: "1", title: "Account Executive - Enterprise", team: "Sales", location: "Mexico City", jobType: "Full-time", url: "#" },
  { id: "2", title: "Account Executive, AI Sales", team: "Sales", location: "South San Francisco HQ", jobType: "Full-time", url: "#" },
  { id: "3", title: "Account Executive, AI Startups", team: "Sales", location: "South San Francisco HQ", jobType: "Full-time", url: "#" },
  { id: "4", title: "Account Executive, Enterprise", team: "Sales", location: "Sydney", jobType: "Full-time", url: "#" },
  { id: "5", title: "Account Executive, Enterprise", team: "Sales", location: "Singapore", jobType: "Full-time", url: "#" },
  { id: "6", title: "Account Executive, Mid-Market", team: "Sales", location: "London", jobType: "Full-time", url: "#" },
  { id: "7", title: "Account Executive, SMB", team: "Sales", location: "Dublin HQ", jobType: "Full-time", url: "#" },
  { id: "8", title: "Operations Manager (FinCrime - AML/EDD)", team: "Risk & Financial Crimes", location: "Bengaluru", jobType: "Full-time", url: "#" },
  { id: "9", title: "Operations Manager, GTM Accelerate", team: "Operations", location: "Dublin HQ", jobType: "Full-time", url: "#" },
  { id: "10", title: "Operations Recruiter", team: "Recruiting", location: "Mexico City", jobType: "Full-time", url: "#" },
  { id: "11", title: "Operations Specialist, Product Support", team: "Operations", location: "Mexico City", jobType: "Full-time", url: "#" },
  { id: "12", title: "Partner Development Manager", team: "GTM Partnerships", location: "Dublin HQ", jobType: "Full-time", url: "#" },
  { id: "13", title: "Partner Development Manager", team: "GTM Partnerships", location: "Tokyo", jobType: "Full-time", url: "#" },
  { id: "14", title: "Partner Development Manager (Alliances & Channels)", team: "GTM Partnerships", location: "Italy", jobType: "Full-time", url: "#" },
  { id: "15", title: "Partner Development Manager (Banks)", team: "Global Partnerships", location: "London", jobType: "Full-time", url: "#" },
  { id: "16", title: "Partner Development Manager- Communities", team: "GTM Partnerships", location: "New York", jobType: "Full-time", url: "#" },
  { id: "17", title: "Partner Development Manager- Communities", team: "GTM Partnerships", location: "Chicago", jobType: "Full-time", url: "#" },
  { id: "18", title: "Partner Development Manager- Communities", team: "GTM Partnerships", location: "Remote in United States", jobType: "Full-time", url: "#" },
  { id: "19", title: "Partner Development Manager- Communities", team: "GTM Partnerships", location: "Seattle", jobType: "Full-time", url: "#" },
  { id: "20", title: "Partner Development Manager, Alliances & Channels", team: "GTM Partnerships", location: "Amsterdam", jobType: "Full-time", url: "#" },
  { id: "21", title: "Partner Development Manager, AMER Bank Partnerships", team: "Global Partnerships", location: "Remote in United States", jobType: "Full-time", url: "#" },
  { id: "22", title: "Partner Development Manager, Crypto Partnerships", team: "Global Partnerships", location: "New York", jobType: "Full-time", url: "#" },
  { id: "23", title: "Partner Development Manager, Strategic and AI Partnerships", team: "Global Partnerships", location: "South San Francisco HQ", jobType: "Full-time", url: "#" },
  { id: "24", title: "Payments Analyst", team: "Operations", location: "Bengaluru", jobType: "Full-time", url: "#" },
  { id: "25", title: "Payments Performance Specialist", team: "Customer Success", location: "Chicago", jobType: "Full-time", url: "#" },
  { id: "26", title: "Payments Performance Specialist", team: "Customer Success", location: "Remote in United States", jobType: "Full-time", url: "#" },
  { id: "27", title: "Payments Performance Specialist", team: "Customer Success", location: "Atlanta", jobType: "Full-time", url: "#" },
  { id: "28", title: "Payments Performance Strategist", team: "Customer Success", location: "Dublin HQ", jobType: "Full-time", url: "#" },
  { id: "29", title: "Payments Performance Strategist", team: "Customer Success", location: "London", jobType: "Full-time", url: "#" },
  { id: "30", title: "Payments Performance Strategist", team: "Customer Success", location: "Singapore", jobType: "Full-time", url: "#" },
  { id: "31", title: "Payments Performance Strategist", team: "Customer Success", location: "Paris", jobType: "Full-time", url: "#" },
  { id: "32", title: "People Consultant", team: "People Functions", location: "Toronto", jobType: "Full-time", url: "#" },
  { id: "33", title: "People Operations Specialist", team: "People Functions", location: "Atlanta", jobType: "Full-time", url: "#" },
  { id: "34", title: "People Operations Specialist", team: "People Functions", location: "Chicago", jobType: "Full-time", url: "#" },
  { id: "35", title: "People Operations Specialist, Accommodations", team: "People Functions", location: "Remote in United States", jobType: "Full-time", url: "#" },
  { id: "36", title: "People Scientist", team: "People Functions", location: "Atlanta", jobType: "Full-time", url: "#" },
  { id: "37", title: "PhD Data Scientist, Intern", team: "University", location: "Toronto", jobType: "Intern", url: "#" },
  { id: "38", title: "PhD Machine Learning Engineer, Intern", team: "University", location: "New York", jobType: "Intern", url: "#" },
  { id: "39", title: "PhD Machine Learning Engineer, Intern", team: "University", location: "Seattle", jobType: "Intern", url: "#" },
  { id: "40", title: "PhD Machine Learning Engineer, New Grad", team: "University", location: "South San Francisco HQ", jobType: "Full-time", url: "#" },
  { id: "41", title: "Producer, Short-form Video & Social", team: "Communications", location: "New York", jobType: "Full-time", url: "#" },
  { id: "42", title: "Product Analytics, Crypto and Issuance", team: "Money Movement and Storage", location: "New York", jobType: "Full-time", url: "#" },
  { id: "43", title: "Product Communications", team: "Communications", location: "South San Francisco HQ", jobType: "Full-time", url: "#" },
  { id: "44", title: "Software Engineer, Backend", team: "Engineering", location: "Seattle", jobType: "Full-time", url: "#" },
  { id: "45", title: "Software Engineer, Backend", team: "Engineering", location: "New York", jobType: "Full-time", url: "#" },
  { id: "46", title: "Software Engineer, Frontend", team: "Engineering", location: "Dublin HQ", jobType: "Full-time", url: "#" },
  { id: "47", title: "Software Engineer, Full Stack", team: "Engineering", location: "London", jobType: "Full-time", url: "#" },
  { id: "48", title: "Software Engineer, Infrastructure", team: "Engineering", location: "South San Francisco HQ", jobType: "Full-time", url: "#" },
  { id: "49", title: "Software Engineer, Mobile", team: "Engineering", location: "Tokyo", jobType: "Full-time", url: "#" },
  { id: "50", title: "Senior Software Engineer, Platform", team: "Engineering", location: "Remote in United States", jobType: "Full-time", url: "#" },
  { id: "51", title: "Staff Software Engineer", team: "Engineering", location: "Seattle", jobType: "Full-time", url: "#" },
  { id: "52", title: "Data Scientist", team: "Data Science", location: "New York", jobType: "Full-time", url: "#" },
  { id: "53", title: "Data Scientist", team: "Data Science", location: "South San Francisco HQ", jobType: "Full-time", url: "#" },
  { id: "54", title: "Senior Data Scientist", team: "Data Science", location: "Dublin HQ", jobType: "Full-time", url: "#" },
  { id: "55", title: "Machine Learning Engineer", team: "Machine Learning", location: "Seattle", jobType: "Full-time", url: "#" },
  { id: "56", title: "Machine Learning Engineer", team: "Machine Learning", location: "New York", jobType: "Full-time", url: "#" },
  { id: "57", title: "Senior Machine Learning Engineer", team: "Machine Learning", location: "South San Francisco HQ", jobType: "Full-time", url: "#" },
  { id: "58", title: "Product Manager", team: "Product", location: "London", jobType: "Full-time", url: "#" },
  { id: "59", title: "Product Manager", team: "Product", location: "New York", jobType: "Full-time", url: "#" },
  { id: "60", title: "Senior Product Manager", team: "Product", location: "South San Francisco HQ", jobType: "Full-time", url: "#" },
  { id: "61", title: "Product Designer", team: "Design", location: "Dublin HQ", jobType: "Full-time", url: "#" },
  { id: "62", title: "Senior Product Designer", team: "Design", location: "New York", jobType: "Full-time", url: "#" },
  { id: "63", title: "UX Researcher", team: "Design", location: "South San Francisco HQ", jobType: "Full-time", url: "#" },
  { id: "64", title: "Technical Program Manager", team: "Engineering", location: "Seattle", jobType: "Full-time", url: "#" },
  { id: "65", title: "Technical Program Manager", team: "Engineering", location: "Remote in United States", jobType: "Full-time", url: "#" },
  { id: "66", title: "Security Engineer", team: "Security", location: "South San Francisco HQ", jobType: "Full-time", url: "#" },
  { id: "67", title: "Security Engineer", team: "Security", location: "Dublin HQ", jobType: "Full-time", url: "#" },
  { id: "68", title: "Site Reliability Engineer", team: "Infrastructure", location: "Seattle", jobType: "Full-time", url: "#" },
  { id: "69", title: "Site Reliability Engineer", team: "Infrastructure", location: "New York", jobType: "Full-time", url: "#" },
  { id: "70", title: "DevOps Engineer", team: "Infrastructure", location: "London", jobType: "Full-time", url: "#" },
  { id: "71", title: "Financial Analyst", team: "Finance", location: "South San Francisco HQ", jobType: "Full-time", url: "#" },
  { id: "72", title: "Senior Financial Analyst", team: "Finance", location: "Dublin HQ", jobType: "Full-time", url: "#" },
  { id: "73", title: "Legal Counsel", team: "Legal", location: "New York", jobType: "Full-time", url: "#" },
  { id: "74", title: "Senior Legal Counsel", team: "Legal", location: "London", jobType: "Full-time", url: "#" },
  { id: "75", title: "Marketing Manager", team: "Marketing", location: "South San Francisco HQ", jobType: "Full-time", url: "#" },
  { id: "76", title: "Content Marketing Manager", team: "Marketing", location: "Dublin HQ", jobType: "Full-time", url: "#" },
  { id: "77", title: "Growth Marketing Manager", team: "Marketing", location: "New York", jobType: "Full-time", url: "#" },
  { id: "78", title: "Customer Success Manager", team: "Customer Success", location: "Singapore", jobType: "Full-time", url: "#" },
  { id: "79", title: "Customer Success Manager", team: "Customer Success", location: "Tokyo", jobType: "Full-time", url: "#" },
  { id: "80", title: "Technical Support Engineer", team: "Support", location: "Dublin HQ", jobType: "Full-time", url: "#" },
  { id: "81", title: "Technical Support Engineer", team: "Support", location: "Mexico City", jobType: "Full-time", url: "#" },
  { id: "82", title: "Solutions Architect", team: "Sales", location: "Sydney", jobType: "Full-time", url: "#" },
  { id: "83", title: "Solutions Architect", team: "Sales", location: "Singapore", jobType: "Full-time", url: "#" },
  { id: "84", title: "Business Development Representative", team: "Sales", location: "Dublin HQ", jobType: "Full-time", url: "#" },
  { id: "85", title: "Business Development Representative", team: "Sales", location: "Chicago", jobType: "Full-time", url: "#" },
  { id: "86", title: "Software Engineering Intern", team: "University", location: "South San Francisco HQ", jobType: "Intern", url: "#" },
  { id: "87", title: "Software Engineering Intern", team: "University", location: "New York", jobType: "Intern", url: "#" },
  { id: "88", title: "Software Engineering Intern", team: "University", location: "Seattle", jobType: "Intern", url: "#" },
  { id: "89", title: "Product Design Intern", team: "University", location: "South San Francisco HQ", jobType: "Intern", url: "#" },
  { id: "90", title: "Data Science Intern", team: "University", location: "New York", jobType: "Intern", url: "#" },
  { id: "91", title: "Marketing Intern", team: "University", location: "Dublin HQ", jobType: "Intern", url: "#" },
  { id: "92", title: "Finance Intern", team: "University", location: "South San Francisco HQ", jobType: "Intern", url: "#" },
];

export const getUniqueTeams = (): string[] => {
  return [...new Set(jobs.map(job => job.team))].sort();
};

export const getUniqueLocations = (): string[] => {
  return [...new Set(jobs.map(job => job.location))].sort();
};

export const getUniqueJobTypes = (): JobType[] => {
  return [...new Set(jobs.map(job => job.jobType))].sort() as JobType[];
};

// Location to country code mapping for flags
export const locationToCountry: Record<string, string> = {
  "Mexico City": "MX",
  "South San Francisco HQ": "US",
  "Sydney": "AU",
  "Singapore": "SG",
  "London": "GB",
  "Dublin HQ": "IE",
  "Bengaluru": "IN",
  "Tokyo": "JP",
  "Italy": "IT",
  "New York": "US",
  "Chicago": "US",
  "Remote in United States": "US",
  "Seattle": "US",
  "Amsterdam": "NL",
  "Atlanta": "US",
  "Paris": "FR",
  "Toronto": "CA",
  "San Francisco Bridge HQ": "US",
};
