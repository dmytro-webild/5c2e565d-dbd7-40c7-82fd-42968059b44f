"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterCard from '@/components/sections/footer/FooterCard';
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import { Facebook, Instagram, Mail } from "lucide-react";

export default function BlogPage() {
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

        <div id="blog-content" data-section="blog-content">
          <BlogCardTwo
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            title="AI Blog: Insights & Innovations"
            description="Explore the latest trends, breakthroughs, and applications of Artificial Intelligence in various industries."
            blogs={[
              {
                id: "blog1",                category: "Artificial Intelligence",                title: "The Rise of Generative AI: From Art to Code",                excerpt: "Generative AI models are revolutionizing creative industries, enabling new forms of content generation and problem-solving.",                imageSrc: "https://img.b2bpic.net/free-photo/view-futuristic-robot-head_23-2150774400.jpg",                imageAlt: "AI generated abstract art",                authorName: "Dr. Alex Chen",                authorAvatar: "https://img.b2bpic.net/free-photo/headshot-handsome-indian-man-smiling-camera_1262-17252.jpg",                date: "Oct 26, 2023"
              },
              {
                id: "blog2",                category: "Machine Learning",                title: "Ethical AI: Navigating Bias and Fairness",                excerpt: "As AI becomes more pervasive, ensuring ethical considerations like bias detection and fairness in algorithms is crucial.",                imageSrc: "https://img.b2bpic.net/free-photo/ai-artificial-intelligence-neural-network-brain-digital_53876-130095.jpg",                imageAlt: "Abstract neural network",                authorName: "Sophia Lee",                authorAvatar: "https://img.b2bpic.net/free-photo/business-woman-portrait-office_1303-12854.jpg",                date: "Nov 1, 2023"
              },
              {
                id: "blog3",                category: "AI Applications",                title: "AI in Healthcare: Transforming Diagnostics and Treatment",                excerpt: "Artificial Intelligence is making significant strides in healthcare, from enhancing diagnostic accuracy to personalizing treatment plans.",                imageSrc: "https://img.b2bpic.net/free-photo/young-scientist-wearing-vr-headset-works-with-futuristic-holographic-interface-genetic-research_482257-22687.jpg",                imageAlt: "AI in healthcare diagnostics",                authorName: "Michael Brown",                authorAvatar: "https://img.b2bpic.net/free-photo/handsome-indian-guy-stylish-shirt_1262-17258.jpg",                date: "Nov 15, 2023"
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