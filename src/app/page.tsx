"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Award, BarChart2, Globe, Layout, Search, Shield, TrendingUp, UserCheck, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="mediumLarge"
        background="aurora"
        cardStyle="gradient-bordered"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
      ]}
      brandName="WebEESolution"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "sparkles-gradient",
      }}
      title="Scaling Your Digital Presence"
      description="WebEESolution empowers brands with high-performance web design and data-driven social media growth strategies. Let's build your future."
      kpis={[
        {
          value: "150%",
          label: "Growth Rate",
        },
        {
          value: "500+",
          label: "Projects Delivered",
        },
        {
          value: "24/7",
          label: "Dedicated Support",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Get Started",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/dynamic-data-visualization-3d_23-2151904329.jpg"
      imageAlt="Dashboard visualization showing growth"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/smiley-woman-office-holding-tablet_23-2148356266.jpg",
          alt: "Smiley woman at office holding tablet",
        },
        {
          src: "http://img.b2bpic.net/free-photo/successful-senior-businesswoman-eyeglasses_1262-5856.jpg",
          alt: "Successful senior businesswoman in eyeglasses",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-successful-grey-haired-female-ceo-smiling-content-experienced-beautiful-businesswoman-posing-office-room-business-company-appearance-expression-concept_74855-11905.jpg",
          alt: "Portrait of successful grey-haired female CEO",
        },
        {
          src: "http://img.b2bpic.net/free-photo/confident-middle-aged-businesswoman-posing-near-office-building_1262-21023.jpg",
          alt: "Confident middle aged businesswoman",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-smiley-man-posing_23-2150171293.jpg",
          alt: "Front view smiley man posing",
        },
      ]}
      avatarText="Trusted by 500+ global brands"
      marqueeItems={[
        {
          type: "text-icon",
          text: "Web Design",
          icon: Layout,
        },
        {
          type: "text-icon",
          text: "SEO Optimization",
          icon: Search,
        },
        {
          type: "text-icon",
          text: "Marketing Strategy",
          icon: TrendingUp,
        },
        {
          type: "text-icon",
          text: "UX Research",
          icon: UserCheck,
        },
        {
          type: "text-icon",
          text: "Data Analytics",
          icon: BarChart2,
        },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          icon: TrendingUp,
          title: "Lead Generation",
          value: "2.4x",
        },
        {
          id: "m2",
          icon: Users,
          title: "Engagement Growth",
          value: "310%",
        },
        {
          id: "m3",
          icon: Zap,
          title: "Conversion Rate",
          value: "12.5%",
        },
      ]}
      title="Impact by the Numbers"
      description="Our proven strategies deliver consistent, measurable results for every client."
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Your Growth Partner"
      metrics={[
        {
          icon: Shield,
          label: "Reliability",
          value: "99.9%",
        },
        {
          icon: Award,
          label: "Satisfaction",
          value: "100%",
        },
        {
          icon: Globe,
          label: "Global reach",
          value: "50+ countries",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "Generic templates",
          "Static design",
          "Slow support",
          "Outdated tech",
          "Poor UX",
        ],
      }}
      positiveCard={{
        items: [
          "Custom high-conversion UX",
          "Data-driven social media growth",
          "Instant performance optimization",
          "Advanced SEO focus",
          "Dedicated 24/7 support",
        ],
      }}
      title="Digital Solutions that Perform"
      description="We bridge the gap between creative design and technical performance."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "p1",
          badge: "Standard",
          price: "$1,999",
          subtitle: "Perfect for small growth",
          features: [
            "Web design audit",
            "Social media setup",
            "Weekly reports",
          ],
          buttons: [
            {
              text: "Select Plan",
              href: "#contact",
            },
          ],
        },
        {
          id: "p2",
          badge: "Pro",
          price: "$4,999",
          subtitle: "Best for scaling companies",
          features: [
            "Full redesign",
            "Growth marketing suite",
            "Daily performance reporting",
          ],
          buttons: [
            {
              text: "Select Plan",
              href: "#contact",
            },
          ],
        },
      ]}
      title="Simple Pricing"
      description="Tailored packages designed for modern business needs."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah J.",
          role: "CMO",
          testimonial: "Transformed our digital presence. Incredible growth.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-cheerful-manager-sunny-day_1139-417.jpg",
        },
        {
          id: "t2",
          name: "Mark D.",
          role: "CEO",
          testimonial: "Responsive, creative, and highly effective.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-caucasian-man_641386-12.jpg",
        },
        {
          id: "t3",
          name: "Elena V.",
          role: "Founder",
          testimonial: "Our traffic doubled in just three months.",
          imageSrc: "http://img.b2bpic.net/free-photo/thoughtful-blond-business-woman-sitting-couch_23-2148095700.jpg",
        },
        {
          id: "t4",
          name: "David L.",
          role: "Manager",
          testimonial: "The best design partner we have ever used.",
          imageSrc: "http://img.b2bpic.net/free-photo/black-businessman-happy-expression_1194-2580.jpg",
        },
        {
          id: "t5",
          name: "Kevin B.",
          role: "Director",
          testimonial: "Top tier support and execution.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-grey-haired-businessman-standing_74855-10324.jpg",
        },
      ]}
      title="Success Stories"
      description="Hear from clients we've helped reach their growth potential."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "How long does a typical redesign take?",
          content: "Our projects are completed within 4-6 weeks.",
        },
        {
          id: "f2",
          title: "Can you handle social media management?",
          content: "Yes, we specialize in full-service organic growth.",
        },
        {
          id: "f3",
          title: "Do you work globally?",
          content: "We work with clients in over 50 countries.",
        },
      ]}
      sideTitle="Questions?"
      sideDescription="We're here to help you scale."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Contact"
      title="Ready to Grow?"
      description="Start your journey with WebEESolution today. Send us a message."
      buttons={[
        {
          text: "Contact Us",
          href: "mailto:hello@webeesolution.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="WebEESolution"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#features",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
