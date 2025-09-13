import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  LayoutDashboard, 
  Map, 
  FileText, 
  Users, 
  BarChart3, 
  Settings,
  Trees,
  MapPin,
  Calendar,
  Archive
} from "lucide-react";

interface SidebarProps {
  className?: string;
  isCollapsed?: boolean;
}

const navigationItems = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    href: "/",
    color: "text-admin-primary"
  },
  {
    title: "Interactive Map",
    icon: Map,
    href: "/map",
    color: "text-forest-primary"
  },
  {
    title: "Claims Management",
    icon: FileText,
    href: "/claims",
    color: "text-admin-accent"
  },
  {
    title: "Village Directory",
    icon: MapPin,
    href: "/villages",
    color: "text-forest-secondary"
  },
  {
    title: "Forest Assets",
    icon: Trees,
    href: "/assets",
    color: "text-forest-accent"
  },
];

const analyticsItems = [
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/analytics",
  },
  {
    title: "Reports",
    icon: Archive,
    href: "/reports",
  },
  {
    title: "Compliance",
    icon: Calendar,
    href: "/compliance",
  },
];

const systemItems = [
  {
    title: "User Management",
    icon: Users,
    href: "/users",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export function Sidebar({ className, isCollapsed = false }: SidebarProps) {
  return (
    <div className={cn(
      "flex h-full flex-col bg-surface border-r border-border",
      isCollapsed ? "w-16" : "w-64",
      className
    )}>
      <ScrollArea className="flex-1 px-3 py-4">
        <div className="space-y-6">
          {/* Main Navigation */}
          <div className="space-y-1">
            {!isCollapsed && (
              <h2 className="mb-2 px-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Main
              </h2>
            )}
            {navigationItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className={cn(
                  "w-full justify-start transition-all duration-200",
                  isCollapsed ? "px-2" : "px-3",
                  "hover:bg-secondary hover:shadow-sm"
                )}
              >
                <item.icon className={cn("h-4 w-4", item.color, isCollapsed ? "mx-auto" : "mr-3")} />
                {!isCollapsed && (
                  <span className="font-medium">{item.title}</span>
                )}
              </Button>
            ))}
          </div>

          <Separator />

          {/* Analytics Section */}
          <div className="space-y-1">
            {!isCollapsed && (
              <h2 className="mb-2 px-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Analytics
              </h2>
            )}
            {analyticsItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className={cn(
                  "w-full justify-start transition-all duration-200",
                  isCollapsed ? "px-2" : "px-3",
                  "hover:bg-secondary hover:shadow-sm"
                )}
              >
                <item.icon className={cn("h-4 w-4 text-muted-foreground", isCollapsed ? "mx-auto" : "mr-3")} />
                {!isCollapsed && (
                  <span className="text-muted-foreground">{item.title}</span>
                )}
              </Button>
            ))}
          </div>

          <Separator />

          {/* System Section */}
          <div className="space-y-1">
            {!isCollapsed && (
              <h2 className="mb-2 px-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                System
              </h2>
            )}
            {systemItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className={cn(
                  "w-full justify-start transition-all duration-200",
                  isCollapsed ? "px-2" : "px-3",
                  "hover:bg-secondary hover:shadow-sm"
                )}
              >
                <item.icon className={cn("h-4 w-4 text-muted-foreground", isCollapsed ? "mx-auto" : "mr-3")} />
                {!isCollapsed && (
                  <span className="text-muted-foreground">{item.title}</span>
                )}
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="border-t border-border p-4">
        <div className={cn(
          "flex items-center gap-3",
          isCollapsed && "justify-center"
        )}>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-forest-primary/10">
            <Trees className="h-4 w-4 text-forest-primary" />
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-foreground">Forest Dept.</p>
              <p className="text-xs text-muted-foreground truncate">v2.4.1</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}