import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface ProgressItem {
  label: string;
  value: number;
  total: number;
  color?: string;
  status?: "on-track" | "delayed" | "at-risk";
}

interface ProgressChartProps {
  title: string;
  description?: string;
  items: ProgressItem[];
}

export function ProgressChart({ title, description, items }: ProgressChartProps) {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case "on-track":
        return "text-success bg-success/10 border-success/20";
      case "delayed":
        return "text-warning bg-warning/10 border-warning/20";
      case "at-risk":
        return "text-error bg-error/10 border-error/20";
      default:
        return "text-muted-foreground bg-muted border-border";
    }
  };

  const getProgressColor = (status?: string) => {
    switch (status) {
      case "on-track":
        return "bg-success";
      case "delayed":
        return "bg-warning";
      case "at-risk":
        return "bg-error";
      default:
        return "bg-primary";
    }
  };

  return (
    <Card className="card-elevated">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        {description && (
          <CardDescription>{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="space-y-6">
        {items.map((item, index) => {
          const percentage = (item.value / item.total) * 100;
          
          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                  {item.status && (
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getStatusColor(item.status)}`}
                    >
                      {item.status.replace("-", " ")}
                    </Badge>
                  )}
                </div>
                <span className="text-sm text-muted-foreground">
                  {item.value.toLocaleString()} / {item.total.toLocaleString()}
                </span>
              </div>
              
              <div className="space-y-1">
                <Progress 
                  value={percentage} 
                  className="h-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{percentage.toFixed(1)}% complete</span>
                  <span>{(item.total - item.value).toLocaleString()} remaining</span>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}