import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell, LineChart, Line, CartesianGrid, PieChart, Pie, ScatterChart, Scatter, ZAxis } from "recharts";
import { villageRisks, symptomTrend, diseaseDist, waterVsCases } from "@/lib/mockData";

const tooltipStyle = {
  background: "hsl(var(--card))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "12px",
  boxShadow: "var(--shadow-card)",
  fontSize: "12px",
};

const riskColor = (r: string) => r === "high" ? "hsl(var(--risk-high))" : r === "med" ? "hsl(var(--risk-med))" : "hsl(var(--risk-low))";

export const VillageRiskChart = () => (
  <ResponsiveContainer width="100%" height={280}>
    <BarChart data={villageRisks} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
      <XAxis dataKey="village" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
      <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
      <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "hsl(var(--accent) / 0.3)" }} />
      <Bar dataKey="cases" radius={[10, 10, 0, 0]}>
        {villageRisks.map((v, i) => <Cell key={i} fill={riskColor(v.risk)} />)}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

export const TrendChart = () => (
  <ResponsiveContainer width="100%" height={280}>
    <LineChart data={symptomTrend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
      <defs>
        <linearGradient id="rep" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--primary-glow))" />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
      <XAxis dataKey="day" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
      <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
      <Tooltip contentStyle={tooltipStyle} />
      <Line type="monotone" dataKey="reports" stroke="url(#rep)" strokeWidth={3} dot={{ r: 4, fill: "hsl(var(--primary))" }} activeDot={{ r: 6 }} />
      <Line type="monotone" dataKey="verified" stroke="hsl(var(--success))" strokeWidth={2.5} strokeDasharray="5 5" dot={{ r: 3, fill: "hsl(var(--success))" }} />
    </LineChart>
  </ResponsiveContainer>
);

export const DiseaseDonut = () => (
  <ResponsiveContainer width="100%" height={280}>
    <PieChart>
      <Tooltip contentStyle={tooltipStyle} />
      <Pie data={diseaseDist} dataKey="value" nameKey="name" innerRadius={60} outerRadius={95} paddingAngle={4} cornerRadius={8}>
        {diseaseDist.map((d, i) => <Cell key={i} fill={d.color} stroke="hsl(var(--card))" strokeWidth={3} />)}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);

export const WaterScatter = () => (
  <ResponsiveContainer width="100%" height={280}>
    <ScatterChart margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
      <XAxis dataKey="turbidity" name="Turbidity (NTU)" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
      <YAxis dataKey="cases" name="Cases" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
      <ZAxis range={[80, 300]} />
      <Tooltip contentStyle={tooltipStyle} cursor={{ strokeDasharray: "3 3" }} />
      <Scatter data={waterVsCases} fill="hsl(var(--primary))" />
    </ScatterChart>
  </ResponsiveContainer>
);
