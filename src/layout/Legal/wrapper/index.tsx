"use client";

import React from "react";
import clsx from "clsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Aside = {
  title?: string;
  links: Array<{
    title: string;
    href: string;
    level?: number; // Heading level (1-6 for h1-h6)
  }>;
};

type Props = {
  aside: Aside;
  mainContent: React.ReactNode;
};

export type LegalWrapperProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const LegalWrapper = (props: LegalWrapperProps) => {
  // Use destructuring with default values for simpler defaults instead of large objects
  const { 
    aside = {
      title: "Table of contents",
      links: []
    }, 
    mainContent,
    className, 
    ...rest 
  } = props;

  // Get current hash from URL for active link highlighting
  const [currentHash, setCurrentHash] = React.useState("");
  
  React.useEffect(() => {
    // Set initial hash on mount
    setCurrentHash(window.location.hash || aside.links[0]?.href || "");
    
    // Update hash when it changes
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || aside.links[0]?.href || "");
    };
    
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [aside.links]);

  return (
    <section 
      id="content" 
      className={clsx("px-4 py-16 md:py-24 lg:py-28", className)}
      {...rest}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-[20rem_1fr] lg:gap-x-16 2xl:gap-x-24">
          <div>
            <div className="lg:sticky lg:top-32 lg:transform-gpu lg:contain-layout">
              <Accordion type="single" defaultValue="aside-menu" className="lg:block" collapsible>
                <AccordionItem value="aside-menu" className="border-none">
                  <AccordionTrigger className="flex cursor-pointer items-center justify-between gap-3 border border-border px-4 py-3 lg:border-none lg:p-0">
                    <h3 className="text-lg font-bold leading-[1.4] md:text-2xl">{aside.title}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pb-0">
                    <div className="mt-3 md:mt-4">
                      {aside.links.map((link, index) => {
                        // Calculate indentation based on heading level
                        // Default to level 2 (h2) if not specified
                        const level = link.level || 2;
                        
                        // No indentation for h1, 16px per level after that
                        // h2 = 0px, h3 = 16px, h4 = 32px, etc.
                        const indentation = level <= 1 ? 0 : (level - 2) * 16;
                        
                        // Text size classes based on heading level
                        const textSizeClass = level <= 2 
                          ? "text-base" 
                          : level === 3 
                            ? "text-sm" 
                            : "text-xs";
                        
                        return (
                          <a
                            href={link.href}
                            key={index}
                            className={clsx("block px-4 py-3", textSizeClass, {
                              "bg-muted font-semibold": link.href === currentHash,
                            })}
                            style={{
                              marginLeft: `${indentation}px`,
                            }}
                            onClick={(e) => {
                              e.preventDefault(); // Prevent default anchor behavior
                              setCurrentHash(link.href);
                              
                              // Find the target element
                              const targetId = link.href.replace('#', '');
                              const targetElement = document.getElementById(targetId);
                              
                              if (targetElement) {
                                // Get the position of the target element relative to the document
                                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                                
                                // Scroll to the target position with the 90px offset
                                window.scrollTo({
                                  top: targetPosition - 90, // 90px offset
                                  behavior: 'smooth'
                                });
                                
                                // Update URL hash without scrolling
                                window.history.pushState(null, '', link.href);
                              }
                            }}
                          >
                            {link.title}
                          </a>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="max-w-3xl">
            <div className="prose prose-slate dark:prose-invert md:prose-lg lg:prose-xl">
              {mainContent}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};