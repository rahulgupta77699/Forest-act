import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  change?: {
    value: string;
    type: "increase" | "decrease" | "neutral";
  };
  className?: string;
  variant?: "default" | "success" | "warning" | "error";
}

export function MetricCard({
  title,
  value,
  description,
  icon: Icon,
  change,
  className,
  variant = "default"
}: MetricCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "border-success/20 bg-gradient-to-br from-success/5 to-success/10";
      case "warning":
        return "border-warning/20 bg-gradient-to-br from-warning/5 to-warning/10";
      case "error":
        return "border-error/20 bg-gradient-to-br from-error/5 to-error/10";
      default:
        return "metric-card";
    }
  };

  const getIconColor = () => {
    switch (variant) {
      case "success":
        return "text-success";
      case "warning":
        return "text-warning";
      case "error":
        return "text-error";
      default:
        return "text-forest-primary";
    }
  };

  const getChangeColor = () => {
    if (!change) return "";
    switch (change.type) {
      case "increase":
        return "text-success bg-success/10 border-success/20";
      case "decrease":
        return "text-error bg-error/10 border-error/20";
      default:
        return "text-muted-foreground bg-muted border-border";
    }
  };

  return (
    <Card className={cn(getVariantStyles(), "transition-all duration-300 hover:shadow-lg", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className={cn("h-4 w-4", getIconColor())} />
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          <div className="text-2xl font-bold text-foreground">
            {typeof value === "number" ? value.toLocaleString() : value}
          </div>
          
          <div className="flex items-center justify-between">
            {description && (
              <p className="text-xs text-muted-foreground">
                {description}
              </p>
            )}
            
            {change && (
              <Badge 
                variant="outline" 
                className={cn("text-xs font-medium", getChangeColor())}
              >
                {change.type === "increase" ? "+" : change.type === "decrease" ? "-" : ""}
                {change.value}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}