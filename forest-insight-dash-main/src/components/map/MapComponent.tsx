import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Layers, 
  Search, 
  ZoomIn, 
  ZoomOut, 
  Home,
  Trees,
  MapPin,
  FileText
} from "lucide-react";

interface MapComponentProps {
  className?: string;
}

export function MapComponent({ className }: MapComponentProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState<string>('forest-cover');

  // For demo purposes - replace with actual Mapbox token
  const MAPBOX_TOKEN = 'pk.your_mapbox_token_here';

  useEffect(() => {
    if (!mapContainer.current) return;

    // For demo purposes, we'll create a simple map without requiring a token
    // In production, you'd set: mapboxgl.accessToken = MAPBOX_TOKEN;
    
    // Create a simple div-based map placeholder for demo
    const mapElement = mapContainer.current;
    mapElement.style.background = 'linear-gradient(45deg, #10B981, #059669)';
    mapElement.style.position = 'relative';
    mapElement.style.overflow = 'hidden';
    
    // Add demo content
    const demoContent = document.createElement('div');
    demoContent.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: white;
      font-family: Inter, sans-serif;
    `;
    demoContent.innerHTML = `
      <div style="font-size: 18px; font-weight: 600; margin-bottom: 8px;">
        Interactive Forest Map
      </div>
      <div style="font-size: 14px; opacity: 0.9;">
        Add your Mapbox token to enable full functionality
      </div>
    `;
    mapElement.appendChild(demoContent);
    
    setIsLoaded(true);

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  const layers = [
    { id: 'forest-cover', label: 'Forest Cover', icon: Trees, color: 'text-forest-primary' },
    { id: 'villages', label: 'Villages', icon: MapPin, color: 'text-admin-primary' },
    { id: 'claims', label: 'FRA Claims', icon: FileText, color: 'text-admin-accent' },
  ];

  const handleZoomIn = () => {
    if (map.current) {
      map.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (map.current) {
      map.current.zoomOut();
    }
  };

  const handleResetView = () => {
    if (map.current) {
      map.current.flyTo({
        center: [78.9629, 20.5937], // India center
        zoom: 5
      });
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Map Container */}
      <div 
        ref={mapContainer} 
        className="w-full h-full rounded-lg border border-border shadow-lg"
        style={{ minHeight: '400px' }}
      />
      
      {/* Map Controls */}
      <div className="absolute top-4 right-4 space-y-2">
        <div className="flex flex-col bg-surface rounded-lg shadow-lg border border-border overflow-hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleZoomIn}
            className="rounded-none border-b border-border"
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleZoomOut}
            className="rounded-none border-b border-border"
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleResetView}
            className="rounded-none"
          >
            <Home className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Layer Controls */}
      <Card className="absolute top-4 left-4 p-4 bg-surface/95 backdrop-blur-sm">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-foreground" />
            <span className="text-sm font-medium">Map Layers</span>
          </div>
          
          <div className="space-y-2">
            {layers.map((layer) => (
              <div
                key={layer.id}
                className={`flex items-center gap-2 p-2 rounded-md cursor-pointer transition-colors ${
                  selectedLayer === layer.id 
                    ? 'bg-primary/10 border border-primary/20' 
                    : 'hover:bg-muted'
                }`}
                onClick={() => setSelectedLayer(layer.id)}
              >
                <layer.icon className={`h-4 w-4 ${layer.color}`} />
                <span className="text-sm">{layer.label}</span>
                {selectedLayer === layer.id && (
                  <Badge variant="outline" className="ml-auto">Active</Badge>
                )}
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Search Box */}
      <Card className="absolute bottom-4 left-4 right-4 p-3 bg-surface/95 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for villages, forest blocks, or claim IDs..."
            className="flex-1 border-0 bg-transparent focus-visible:ring-0"
          />
          <Button size="sm" className="btn-forest">
            Search
          </Button>
        </div>
      </Card>

      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm flex items-center justify-center rounded-lg">
          <div className="text-center space-y-2">
            <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin mx-auto" />
            <p className="text-sm text-muted-foreground">Loading map...</p>
          </div>
        </div>
      )}
    </div>
  );
}