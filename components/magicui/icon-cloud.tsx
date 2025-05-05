/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";

interface Icon {
  x: number;
  y: number;
  z: number;
  scale: number;
  opacity: number;
  id: number;
}

interface IconCloudProps {
  icons?: React.ReactNode[];
  images?: string[];
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function IconCloud({ icons, images }: IconCloudProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [iconPositions, setIconPositions] = useState<Icon[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [targetRotation, setTargetRotation] = useState<{
    x: number;
    y: number;
    startX: number;
    startY: number;
    distance: number;
    startTime: number;
    duration: number;
  } | null>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const rotationRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const iconCanvasesRef = useRef<HTMLCanvasElement[]>([]);
  const imagesLoadedRef = useRef<boolean[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Client-side only rendering
  useEffect(() => {
    setIsMounted(true);

    // Initial setup on mount
    if (containerRef.current && canvasRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      canvasRef.current.width = width;
      canvasRef.current.height = height;
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Create icon canvases once when icons/images change
  useEffect(() => {
    if (!icons && !images || !isMounted) return;

    const items = icons || images || [];
    imagesLoadedRef.current = new Array(items.length).fill(false);

    // Set a reasonable size based on device
    const iconSize = window.innerWidth < 768 ? 40 : 60;
    const halfIconSize = iconSize / 2;

    const newIconCanvases = items.map((item, index) => {
      const offscreen = document.createElement("canvas");
      offscreen.width = iconSize;
      offscreen.height = iconSize;
      const offCtx = offscreen.getContext("2d");

      if (offCtx) {
        if (images) {
          // Handle image URLs directly
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.src = items[index] as string;
          img.onload = () => {
            offCtx.clearRect(0, 0, offscreen.width, offscreen.height);

            // Create circular clipping path
            offCtx.beginPath();
            offCtx.arc(halfIconSize, halfIconSize, halfIconSize, 0, Math.PI * 2);
            offCtx.closePath();
            offCtx.clip();

            // Draw the image
            offCtx.drawImage(img, 0, 0, iconSize, iconSize);

            imagesLoadedRef.current[index] = true;
          };

          // Error handling for image load failures
          img.onerror = () => {
            console.warn(`Failed to load image: ${items[index]}`);
            imagesLoadedRef.current[index] = true; // Mark as loaded to avoid infinite waiting
          };

        } else {
          // Handle SVG icons
          offCtx.scale(0.6, 0.6);
          try {
            const svgString = renderToString(item as React.ReactElement);
            const img = new Image();
            img.src = "data:image/svg+xml;base64," + btoa(svgString);
            img.onload = () => {
              offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
              offCtx.drawImage(img, 0, 0);
              imagesLoadedRef.current[index] = true;
            };
          } catch (error) {
            console.error("Error rendering SVG", error);
            imagesLoadedRef.current[index] = true;
          }
        }
      }
      return offscreen;
    });

    iconCanvasesRef.current = newIconCanvases;
  }, [icons, images, isMounted]);

  // Generate initial icon positions on a sphere
  useEffect(() => {
    if (!isMounted) return;

    const items = icons || images || [];
    const newIcons: Icon[] = [];
    const numIcons = items.length || 20;

    // Adjust sphere size based on screen size
    const multiplier = window.innerWidth < 768 ? 100 : 150;

    // Fibonacci sphere parameters
    const offset = 2 / numIcons;
    const increment = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < numIcons; i++) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * increment;

      const x = Math.cos(phi) * r;
      const z = Math.sin(phi) * r;

      newIcons.push({
        x: x * multiplier,
        y: y * multiplier,
        z: z * multiplier,
        scale: 1,
        opacity: 1,
        id: i,
      });
    }
    setIconPositions(newIcons);
  }, [icons, images, isMounted]);

  // Resize canvas when container size changes
  useEffect(() => {
    if (!isMounted) return;

    const resizeObserver = new ResizeObserver(() => {
      if (containerRef.current && canvasRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        canvasRef.current.width = width;
        canvasRef.current.height = height;
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Initial size setup
    if (containerRef.current && canvasRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      canvasRef.current.width = width;
      canvasRef.current.height = height;
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [isMounted]);

  // Handle mouse events
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect || !canvasRef.current) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    // Capture pointer to improve touch handling
    canvasRef.current.setPointerCapture(e.pointerId);

    // Check if an icon was clicked
    const iconSize = window.innerWidth < 768 ? 40 : 60;
    const halfIconSize = iconSize / 2;

    iconPositions.forEach((icon) => {
      const cosX = Math.cos(rotationRef.current.x);
      const sinX = Math.sin(rotationRef.current.x);
      const cosY = Math.cos(rotationRef.current.y);
      const sinY = Math.sin(rotationRef.current.y);

      const rotatedX = icon.x * cosY - icon.z * sinY;
      const rotatedZ = icon.x * sinY + icon.z * cosY;
      const rotatedY = icon.y * cosX + rotatedZ * sinX;

      const screenX = canvasRef.current!.width / 2 + rotatedX;
      const screenY = canvasRef.current!.height / 2 + rotatedY;

      const scale = (rotatedZ + 200) / 300;
      const radius = halfIconSize * scale;
      const dx = x - screenX;
      const dy = y - screenY;

      if (dx * dx + dy * dy < radius * radius) {
        const targetX = -Math.atan2(
          icon.y,
          Math.sqrt(icon.x * icon.x + icon.z * icon.z),
        );
        const targetY = Math.atan2(icon.x, icon.z);

        const currentX = rotationRef.current.x;
        const currentY = rotationRef.current.y;
        const distance = Math.sqrt(
          Math.pow(targetX - currentX, 2) + Math.pow(targetY - currentY, 2),
        );

        const duration = Math.min(2000, Math.max(800, distance * 1000));

        setTargetRotation({
          x: targetX,
          y: targetY,
          startX: currentX,
          startY: currentY,
          distance,
          startTime: performance.now(),
          duration,
        });
        return;
      }
    });

    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    }

    if (isDragging) {
      const deltaX = e.clientX - lastMousePos.x;
      const deltaY = e.clientY - lastMousePos.y;

      rotationRef.current = {
        x: rotationRef.current.x + deltaY * 0.002,
        y: rotationRef.current.y + deltaX * 0.002,
      };

      setLastMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (canvasRef.current) {
      canvasRef.current.releasePointerCapture(e.pointerId);
    }
    setIsDragging(false);
  };

  // Initial automatic rotation
  useEffect(() => {
    if (!isMounted) return;

    let interval: ReturnType<typeof setInterval>;

    // Start a gentle automatic rotation if not dragging and no target rotation
    if (!isDragging && !targetRotation) {
      interval = setInterval(() => {
        rotationRef.current = {
          x: rotationRef.current.x + 0.002,
          y: rotationRef.current.y + 0.004,
        };
      }, 16);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isDragging, targetRotation, isMounted]);

  // Animation and rendering
  useEffect(() => {
    if (!isMounted) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const iconSize = window.innerWidth < 768 ? 40 : 60;
    const halfIconSize = iconSize / 2;

    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      if (targetRotation) {
        const elapsed = performance.now() - targetRotation.startTime;
        const progress = Math.min(1, elapsed / targetRotation.duration);
        const easedProgress = easeOutCubic(progress);

        rotationRef.current = {
          x:
            targetRotation.startX +
            (targetRotation.x - targetRotation.startX) * easedProgress,
          y:
            targetRotation.startY +
            (targetRotation.y - targetRotation.startY) * easedProgress,
        };

        if (progress >= 1) {
          setTargetRotation(null);
        }
      }

      iconPositions.forEach((icon, index) => {
        const cosX = Math.cos(rotationRef.current.x);
        const sinX = Math.sin(rotationRef.current.x);
        const cosY = Math.cos(rotationRef.current.y);
        const sinY = Math.sin(rotationRef.current.y);

        const rotatedX = icon.x * cosY - icon.z * sinY;
        const rotatedZ = icon.x * sinY + icon.z * cosY;
        const rotatedY = icon.y * cosX + rotatedZ * sinX;

        const scale = (rotatedZ + 200) / 300;
        const opacity = Math.max(0.2, Math.min(1, (rotatedZ + 150) / 200));

        ctx.save();
        ctx.translate(
          centerX + rotatedX,
          centerY + rotatedY,
        );
        ctx.scale(scale, scale);
        ctx.globalAlpha = opacity;

        if (icons || images) {
          // Only try to render icons/images if they exist
          if (
            iconCanvasesRef.current[index] &&
            imagesLoadedRef.current[index]
          ) {
            ctx.drawImage(iconCanvasesRef.current[index], -halfIconSize, -halfIconSize, iconSize, iconSize);
          }
        } else {
          // Show numbered circles if no icons/images are provided
          ctx.beginPath();
          ctx.arc(0, 0, halfIconSize, 0, Math.PI * 2);
          ctx.fillStyle = "#4444ff";
          ctx.fill();
          ctx.fillStyle = "white";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.font = "16px Arial";
          ctx.fillText(`${icon.id + 1}`, 0, 0);
        }

        ctx.restore();
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [icons, images, iconPositions, isDragging, mousePos, targetRotation, isMounted]);

  // Fallback for SSR
  if (!isMounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black/10 rounded-lg">
        <div className="text-sm text-gray-500">Loading Icon Cloud...</div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full flex items-center justify-center"
      style={{ touchAction: "none" }} // Prevent browser handling of all panning and zooming gestures
    >
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="rounded-lg cursor-grab active:cursor-grabbing touch-none"
        aria-label="Interactive 3D Icon Cloud"
        role="img"
      />
    </div>
  );
}
