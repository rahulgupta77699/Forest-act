import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { MapComponent } from "@/components/map/MapComponent";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  Bell,
  FileText,
  ExternalLink,
  Activity
} from "lucide-react";

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const recentActivities = [
    {
      id: 1,
      title: "New claim submitted",
      description: "Village Kotra, District Bastar",
      time: "2 hours ago",
      type: "claim"
    },
    {
      id: 2,
      title: "Title verification completed",
      description: "Batch #FR-2024-156",
      time: "4 hours ago",
      type: "verification"
    },
    {
      id: 3,
      title: "Forest survey updated",
      description: "Sector 7A, Odisha",
      time: "6 hours ago",
      type: "survey"
    }
  ];

  const upcomingTasks = [
    {
      id: 1,
      title: "District Committee Meeting",
      date: "Tomorrow, 10:00 AM",
      location: "Raipur"
    },
    {
      id: 2,
      title: "Field Verification Schedule",
      date: "Dec 20, 2024",
      location: "Bastar Division"
    },
    {
      id: 3,
      title: "Monthly Report Due",
      date: "Dec 31, 2024",
      location: "All Districts"
    }
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar 
        isCollapsed={sidebarCollapsed}
        className="hidden lg:flex"
      />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header onMenuToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        
        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Welcome Section */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">
              Forest Rights Dashboard
            </h1>
            <p className="text-muted-foreground">
              Monitor and manage Forest Rights Act implementation across all regions
            </p>
          </div>

          {/* Main Stats */}
          <DashboardStats />

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Map Section */}
            <div className="lg:col-span-2">
              <Card className="card-elevated h-[500px]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-forest-primary" />
                    Interactive Forest Map
                  </CardTitle>
                  <CardDescription>
                    Real-time visualization of FRA areas and implementation status
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <MapComponent className="h-[400px]" />
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Recent Activities */}
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-admin-primary" />
                    Recent Activities
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg bg-surface-secondary hover:bg-muted/50 transition-colors">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">
                          {activity.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.description}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View All Activities
                  </Button>
                </CardContent>
              </Card>

              {/* Upcoming Tasks */}
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-admin-accent" />
                    Upcoming Tasks
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingTasks.map((task) => (
                    <div key={task.id} className="p-3 rounded-lg bg-surface-secondary border border-border/50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">
                            {task.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {task.date}
                          </p>
                          <Badge variant="outline" className="mt-2 text-xs">
                            {task.location}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button className="w-full btn-admin" size="sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    View Calendar
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;