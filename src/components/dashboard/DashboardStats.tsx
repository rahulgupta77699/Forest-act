import { MetricCard } from "./MetricCard";
import { ProgressChart } from "./ProgressChart";
import { 
  FileText, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  Trees,
  MapPin,
  Users,
  TrendingUp
} from "lucide-react";

export function DashboardStats() {
  const metrics = [
    {
      title: "Total Claims Filed",
      value: "12,847",
      description: "Across all states",
      icon: FileText,
      change: { value: "8.2%", type: "increase" as const }
    },
    {
      title: "Claims Approved",
      value: "8,924",
      description: "Titles distributed",
      icon: CheckCircle,
      change: { value: "12.5%", type: "increase" as const },
      variant: "success" as const
    },
    {
      title: "Pending Review",
      value: "2,156",
      description: "Awaiting verification",
      icon: Clock,
      change: { value: "3.2%", type: "decrease" as const },
      variant: "warning" as const
    },
    {
      title: "Rejected Claims",
      value: "1,767",
      description: "Require resubmission",
      icon: AlertTriangle,
      change: { value: "1.8%", type: "increase" as const },
      variant: "error" as const
    },
    {
      title: "Forest Cover",
      value: "847,392",
      description: "Hectares under FRA",
      icon: Trees,
      change: { value: "2.1%", type: "increase" as const }
    },
    {
      title: "Registered Villages",
      value: "4,567",
      description: "Active participants",
      icon: MapPin,
      change: { value: "15.3%", type: "increase" as const }
    },
    {
      title: "Beneficiaries",
      value: "89,432",
      description: "Direct beneficiaries",
      icon: Users,
      change: { value: "11.7%", type: "increase" as const }
    },
    {
      title: "Processing Rate",
      value: "94.2%",
      description: "Monthly average",
      icon: TrendingUp,
      change: { value: "5.8%", type: "increase" as const },
      variant: "success" as const
    }
  ];

  const progressData = [
    {
      label: "Odisha Implementation",
      value: 3247,
      total: 4500,
      status: "on-track" as const
    },
    {
      label: "Madhya Pradesh",
      value: 2156,
      total: 3200,
      status: "delayed" as const
    },
    {
      label: "Jharkhand",
      value: 1892,
      total: 2800,
      status: "on-track" as const
    },
    {
      label: "Chhattisgarh",
      value: 1456,
      total: 2100,
      status: "at-risk" as const
    }
  ];

  return (
    <div className="space-y-6">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            description={metric.description}
            icon={metric.icon}
            change={metric.change}
            variant={metric.variant}
          />
        ))}
      </div>

      {/* Progress Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        <ProgressChart
          title="State-wise FRA Implementation Progress"
          description="Current status of Forest Rights Act implementation across target states"
          items={progressData}
        />
      </div>
    </div>
  );
}