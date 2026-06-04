"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterCard from '@/components/sections/footer/FooterCard';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import { Facebook, Instagram, Mail } from "lucide-react";

export default function AutomationPage() {
  const updatedNavItems = [
    { name: "Home", id: "/" },
    { name: "About Us", id: "/#about" },
    { name: "Our Sweets", id: "/#products" },
    { name: "Quality", id: "/#features" },
    { name: "Testimonials", id: "/#testimonials" },
    { name: "FAQs", id: "/#faq" },
    { name: "Contact", id: "/#contact" },
    { name: "AI Blog", id: "/blog" },
    { name: "Automation", id: "/automation" }
  ];

  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSmallSizeMediumTitles"
        background="noise"
        cardStyle="soft-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered
            navItems={updatedNavItems}
            button={{ text: "Order Now", href: "/#products" }}
            brandName="Prabhawati Sweet House"
          />
        </div>

        <div id="automation-content" data-section="automation-content">
          <FeatureCardTwentyFour
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            title="Empowering Your Workflow with Automation"
            description="Discover how our advanced automation solutions can streamline your operations, boost efficiency, and drive innovation across your business."
            features={[
              {
                id: "auto1",                title: "Process Optimization",                author: "Seamless Integration",                description: "Automate repetitive tasks, reduce manual errors, and free up your team for more strategic initiatives.",                tags: ["RPA", "Efficiency", "Workflow"],
                imageSrc: "https://img.b2bpic.net/free-photo/software-engineer-working-server-room_52683-108785.jpg",                imageAlt: "Robotic arm optimizing processes"
              },
              {
                id: "auto2",                title: "Intelligent Data Handling",                author: "Accurate & Fast",                description: "Automate data collection, processing, and analysis to gain actionable insights with unprecedented speed.",                tags: ["Data AI", "Analytics", "Insights"],
                imageSrc: "https://img.b2bpic.net/free-photo/futuristic-cityscape-with-robot-and-digital-elements_23-2151044463.jpg",                imageAlt: "Data analysis visualization"
              },
              {
                id: "auto3",                title: "Scalable Solutions",                author: "Grow with Confidence",                description: "Our automation platforms are designed to scale with your business, adapting to evolving needs without interruption.",                tags: ["Scalability", "Growth", "Future-proof"],
                imageSrc: "https://img.b2bpic.net/free-photo/young-man-working-with-holographic-data_23-2149363071.jpg",                imageAlt: "Scalable tech infrastructure"
              }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterCard
            logoText="Prabhawati Sweet House"
            copyrightText="© 2024 Prabhawati Sweet House. All rights reserved."
            socialLinks={[
              { icon: Facebook, href: "#", ariaLabel: "Facebook" },
              { icon: Instagram, href: "#", ariaLabel: "Instagram" },
              { icon: Mail, href: "#", ariaLabel: "Email" }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}