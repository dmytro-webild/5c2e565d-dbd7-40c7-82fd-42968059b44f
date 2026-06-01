"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Facebook, Instagram, Mail } from "lucide-react";

export default function LandingPage() {
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
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About Us",          id: "#about"},
        {
          name: "Our Sweets",          id: "#products"},
        {
          name: "Quality",          id: "#features"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "FAQs",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      button={{
        text: "Order Now",        href: "#products"}}
      brandName="Prabhawati Sweet House"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "plain"}}
      title="Timeless Sweetness, Crafted Tradition"
      description="Handcrafted sweets celebrating heritage flavors. Premium ingredients, authentic recipes, delivered fresh to your celebration."
      buttons={[
        {
          text: "Explore Our Collection",          href: "#products"},
        {
          text: "Learn More",          href: "#about"},
      ]}
      buttonAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/tasty-salty-caramel-fudge-candies-with-sea-salt_114579-9217.jpg"
      imageAlt="Assortment of traditional Indian sweets"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Our Heritage of Sweet Craftsmanship"
      description={[
        "For generations, Prabhawati Sweet House has been dedicated to perfecting the art of traditional Indian confectionery. Every sweet is a testament to timeless recipes passed down through our family, crafted with love and meticulous attention to detail.",        "We believe in preserving the authentic taste and rich cultural essence of Indian sweets. Our commitment to quality ensures that each bite evokes nostalgia and celebrates the joy of sharing. Discover the story behind our cherished creations."]}
      buttons={[
        {
          text: "Our Story",          href: "#"},
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "Artificial Preservatives",          "Low-Quality Ingredients",          "Mass Production",          "Stale Products"],
      }}
      positiveCard={{
        items: [
          "100% Pure Ingredients",          "Handcrafted Daily",          "Authentic Recipes",          "Freshness Guaranteed"],
      }}
      title="The Prabhawati Promise: Uncompromising Quality"
      description="We handpick the finest ingredients, from rich Ghee to premium nuts, ensuring every sweet meets our exacting standards. Experience the difference of authentic flavor and unparalleled freshness."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Motichoor Ladoo",          price: "₹450/kg",          imageSrc: "http://img.b2bpic.net/free-photo/metal-cup-filled-with-brown-candied-popcorn-marble-table_114579-56462.jpg",          imageAlt: "Motichoor Ladoo"},
        {
          id: "p2",          name: "Kaju Katli",          price: "₹800/kg",          imageSrc: "http://img.b2bpic.net/free-photo/cake-brownie-mini-pop-cake-wooden-plate-marble-table_114579-83949.jpg",          imageAlt: "Kaju Katli"},
        {
          id: "p3",          name: "Gulab Jamun",          price: "₹350/kg",          imageSrc: "http://img.b2bpic.net/free-photo/sugar-marmalade-with-hot-herbal-cup-tea_114579-46825.jpg",          imageAlt: "Gulab Jamun"},
        {
          id: "p4",          name: "Rasgulla",          price: "₹320/kg",          imageSrc: "http://img.b2bpic.net/free-photo/swirled-caramel-cream-texture_23-2151988792.jpg",          imageAlt: "Rasgulla"},
        {
          id: "p5",          name: "Mathura Pedha",          price: "₹500/kg",          imageSrc: "http://img.b2bpic.net/free-photo/sweet-turkish-delight-plate_23-2148079990.jpg",          imageAlt: "Mathura Pedha"},
        {
          id: "p6",          name: "Jalebi",          price: "₹280/kg",          imageSrc: "http://img.b2bpic.net/free-photo/delicious-round-cookies-with-waffles-rope-white-background-high-quality-photo_114579-38223.jpg",          imageAlt: "Jalebi"},
      ]}
      title="Our Exquisite Sweet Collection"
      description="From classic Ladoos to exotic Barfis, explore a world of flavors designed to delight. Each sweet is a masterpiece, ready to make your celebrations extra special."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Prabhawati Sweet House consistently delivers exceptional quality and taste. Their Motichoor Ladoo reminds me of my grandmother's cooking. Truly a taste of tradition and pure indulgence for every festive occasion!"
      rating={5}
      author="Anjali Sharma, Event Planner"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/young-professional-female-executive-wearing-red-jacket-while-sitting-outside-workplace_662251-2084.jpg",          alt: "Anjali Sharma"},
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-handsome-indian-businessman-with-documents_1262-17245.jpg",          alt: "Rajesh Kumar"},
        {
          src: "http://img.b2bpic.net/free-photo/walking-white-paper-hipster-cool-adult_1303-3237.jpg",          alt: "Priya Singh"},
        {
          src: "http://img.b2bpic.net/free-photo/thoughtful-senior-man-looking-camera_23-2148036683.jpg",          alt: "Suresh Mehta"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-businesswoman-with-mobile-phone_1262-1062.jpg",          alt: "Aisha Khan"},
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Delightful Diners",        "Celebration Planners",        "Local Food Critics",        "Festive Families",        "Gourmet Gifting",        "Community Events",        "Wedding Caterers"]}
      title="Loved by Thousands of Families"
      description="Our commitment to quality, tradition, and customer satisfaction has made us a cherished part of countless celebrations and homes across the region."
      speed={50}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",          title: "What ingredients do you use?",          content: "We use only premium, natural ingredients including pure ghee, fresh milk, and high-quality nuts. We avoid artificial flavors and preservatives."},
        {
          id: "faq2",          title: "Do you offer custom orders?",          content: "Yes, we gladly accept custom orders for special events like weddings and corporate gatherings. Please contact us in advance to discuss your requirements."},
        {
          id: "faq3",          title: "What are your delivery options?",          content: "We offer local delivery within a specified radius and also provide pickup options from our store. Delivery charges may apply based on your location."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-girl-mom-market_23-2149160667.jpg"
      imageAlt="Person asking question at sweet house counter"
      mediaAnimation="slide-up"
      title="Frequently Asked Questions"
      description="Find answers to common questions about our products, ingredients, ordering, and delivery process."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Get in Touch"
      title="Connect with Prabhawati Sweet House"
      description="Have a special request, bulk order, or just want to say hello? We'd love to hear from you!"
      inputPlaceholder="Your Email Address"
      buttonText="Send Message"
      termsText="By sending a message, you agree to our Privacy Policy."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Prabhawati Sweet House"
      copyrightText="© 2024 Prabhawati Sweet House. All rights reserved."
      socialLinks={[
        {
          icon: Facebook,
          href: "#",          ariaLabel: "Facebook"},
        {
          icon: Instagram,
          href: "#",          ariaLabel: "Instagram"},
        {
          icon: Mail,
          href: "#",          ariaLabel: "Email"},
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}