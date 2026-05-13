export type Risk = "low" | "med" | "high";

export interface VillageRisk {
  village: string;
  cases: number;
  risk: Risk;
  population: number;
  district: string;
}

export const villageRisks: VillageRisk[] = [
  { village: "Majuli", cases: 42, risk: "high", population: 2100, district: "Jorhat" },
  { village: "Sivasagar", cases: 28, risk: "high", population: 3400, district: "Sivasagar" },
  { village: "Dhemaji", cases: 16, risk: "med", population: 1800, district: "Dhemaji" },
  { village: "Tezpur", cases: 9, risk: "med", population: 4200, district: "Sonitpur" },
  { village: "Barpeta", cases: 5, risk: "low", population: 2900, district: "Barpeta" },
  { village: "Nalbari", cases: 3, risk: "low", population: 2400, district: "Nalbari" },
  { village: "Goalpara", cases: 11, risk: "med", population: 3100, district: "Goalpara" },
  { village: "Karimganj", cases: 22, risk: "high", population: 2700, district: "Karimganj" },
];

export const symptomTrend = [
  { day: "Mon", reports: 12, verified: 8 },
  { day: "Tue", reports: 18, verified: 14 },
  { day: "Wed", reports: 25, verified: 19 },
  { day: "Thu", reports: 31, verified: 24 },
  { day: "Fri", reports: 44, verified: 36 },
  { day: "Sat", reports: 58, verified: 47 },
  { day: "Sun", reports: 71, verified: 62 },
];

export const diseaseDist = [
  { name: "Cholera", value: 38, color: "hsl(var(--risk-high))" },
  { name: "Typhoid", value: 27, color: "hsl(var(--risk-med))" },
  { name: "Dysentery", value: 21, color: "hsl(var(--primary))" },
  { name: "Other", value: 14, color: "hsl(var(--muted-foreground))" },
];

export const waterVsCases = [
  { turbidity: 4, cases: 2, village: "Nalbari" },
  { turbidity: 6, cases: 5, village: "Barpeta" },
  { turbidity: 9, cases: 9, village: "Tezpur" },
  { turbidity: 12, cases: 11, village: "Goalpara" },
  { turbidity: 14, cases: 16, village: "Dhemaji" },
  { turbidity: 19, cases: 22, village: "Karimganj" },
  { turbidity: 22, cases: 28, village: "Sivasagar" },
  { turbidity: 26, cases: 42, village: "Majuli" },
];

export interface Report {
  id: string;
  villager: string;
  village: string;
  symptoms: string[];
  source: string;
  household: number;
  status: "pending" | "verified" | "diagnosed";
  diagnosis?: string;
  reportedAt: string;
}

export const reports: Report[] = [
  { id: "RPT-2041", villager: "Aarti D.", village: "Majuli", symptoms: ["Diarrhea", "Vomiting", "Fever"], source: "River well", household: 5, status: "pending", reportedAt: "2h ago" },
  { id: "RPT-2040", villager: "Bhupen K.", village: "Sivasagar", symptoms: ["Stomach pain", "Diarrhea"], source: "Hand pump", household: 3, status: "verified", reportedAt: "4h ago" },
  { id: "RPT-2039", villager: "Mira S.", village: "Karimganj", symptoms: ["Fever", "Headache", "Fatigue"], source: "Pond", household: 6, status: "diagnosed", diagnosis: "Typhoid", reportedAt: "6h ago" },
  { id: "RPT-2038", villager: "Rakesh B.", village: "Dhemaji", symptoms: ["Diarrhea", "Dehydration"], source: "Open well", household: 4, status: "pending", reportedAt: "8h ago" },
  { id: "RPT-2037", villager: "Sunita P.", village: "Goalpara", symptoms: ["Vomiting", "Cramps"], source: "Tap water", household: 2, status: "verified", reportedAt: "12h ago" },
];

export interface RegisteredUser {
  name: string;
  email: string;
  role: "villager" | "asha" | "official";
  village: string;
}

export const registeredUsers: RegisteredUser[] = [
  { name: "Aarti Das", email: "aarti.d@village.in", role: "villager", village: "Majuli" },
  { name: "Bhupen Kalita", email: "bhupen.k@village.in", role: "villager", village: "Sivasagar" },
  { name: "Mira Saikia", email: "mira.s@village.in", role: "villager", village: "Karimganj" },
  { name: "Rakesh Bora", email: "rakesh.b@village.in", role: "villager", village: "Dhemaji" },
  { name: "Sunita Patir", email: "sunita.p@village.in", role: "villager", village: "Goalpara" },
  { name: "Dipa Hazarika", email: "dipa.h@village.in", role: "villager", village: "Tezpur" },
  { name: "Nikhil Roy", email: "nikhil.r@village.in", role: "villager", village: "Barpeta" },
  { name: "Pallavi Devi", email: "pallavi.d@village.in", role: "villager", village: "Nalbari" },
  { name: "Dr. Anjali Borah", email: "anjali.asha@health.gov.in", role: "asha", village: "Majuli" },
  { name: "Dr. Rohit Nath", email: "rohit.asha@health.gov.in", role: "asha", village: "Sivasagar" },
  { name: "Dr. Kavita Sen", email: "kavita.asha@health.gov.in", role: "asha", village: "Karimganj" },
  { name: "Officer S. Gogoi", email: "s.gogoi@assam.gov.in", role: "official", village: "Guwahati" },
];

