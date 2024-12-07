// Interfaces for different sections
interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
  };
}

interface Testimonial {
  id: number;
  clientName: string;
  company: string;
  quote: string;
  avatar: string;
}

// Data for different sections
const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom web solutions tailored to your business needs.",
    icon: "web-icon",
  },
  {
    id: 2,
    title: "Digital Marketing",
    description: "Strategic marketing campaigns to boost your online presence.",
    icon: "marketing-icon",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Crafting intuitive and engaging user experiences.",
    icon: "design-icon",
  },
  {
    id: 4,
    title: "Brand Strategy",
    description: "Building strong, memorable brand identities.",
    icon: "brand-icon",
  },
];

const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Comprehensive online shopping solution",
    imageUrl: "/api/placeholder/400/300",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Mobile App Design",
    description: "Sleek and functional mobile application",
    imageUrl: "/api/placeholder/400/300",
    category: "UI/UX Design",
  },
  {
    id: 3,
    title: "Social Media Campaign",
    description: "Viral marketing strategy for tech startup",
    imageUrl: "/api/placeholder/400/300",
    category: "Digital Marketing",
  },
];

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Creative Director",
    imageUrl: "/api/placeholder/300/300",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Developer",
    imageUrl: "/api/placeholder/300/300",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "UX Designer",
    imageUrl: "/api/placeholder/300/300",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    clientName: "John Smith",
    company: "Tech Innovations Inc.",
    quote:
      "Nexus Digital transformed our digital strategy and helped us achieve remarkable growth.",
    avatar: "/api/placeholder/100/100",
  },
  {
    id: 2,
    clientName: "Emily Davis",
    company: "Global Solutions Ltd.",
    quote:
      "Their innovative approach and expertise exceeded all our expectations.",
    avatar: "/api/placeholder/100/100",
  },
  {
    id: 3,
    clientName: "Robert Kim",
    company: "Startup Accelerator",
    quote: "A game-changing partner that brought our vision to life.",
    avatar: "/api/placeholder/100/100",
  },
];

// Dynamic Rendering Functions
function renderServices(): void {
  const servicesContainer = document.getElementById("services-container");

  if (servicesContainer) {
    services.forEach((service) => {
      const serviceCard = document.createElement("div");
      serviceCard.className = "service-card";
      serviceCard.innerHTML = `
                <div class="service-icon">${service.icon}</div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            `;
      servicesContainer.appendChild(serviceCard);
    });
  }
}

function renderPortfolio(): void {
  const portfolioContainer = document.getElementById("portfolio-container");

  if (portfolioContainer) {
    portfolioProjects.forEach((project) => {
      const portfolioItem = document.createElement("div");
      portfolioItem.className = "portfolio-item";
      portfolioItem.innerHTML = `
                <img src="${project.imageUrl}" alt="${project.title}">
                <div class="portfolio-item-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <span class="category">${project.category}</span>
                </div>
            `;
      portfolioContainer.appendChild(portfolioItem);
    });
  }
}

function renderTeam(): void {
  const teamContainer = document.getElementById("team-container");

  if (teamContainer) {
    teamMembers.forEach((member) => {
      const teamMemberCard = document.createElement("div");
      teamMemberCard.className = "team-member";
      teamMemberCard.innerHTML = `
                <img src="${member.imageUrl}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.role}</p>
                <div class="social-links">
                    ${
                      member.socialLinks.linkedin
                        ? `<a href="${member.socialLinks.linkedin}">LinkedIn</a>`
                        : ""
                    }
                    ${
                      member.socialLinks.twitter
                        ? `<a href="${member.socialLinks.twitter}">Twitter</a>`
                        : ""
                    }
                </div>
            `;
      teamContainer.appendChild(teamMemberCard);
    });
  }
}

function renderTestimonials(): void {
  const testimonialContainer = document.getElementById("testimonial-container");

  if (testimonialContainer) {
    testimonials.forEach((testimonial) => {
      const testimonialCard = document.createElement("div");
      testimonialCard.className = "testimonial-card";
      testimonialCard.innerHTML = `
                <div class="testimonial-content">
                    <p>"${testimonial.quote}"</p>
                    <div class="testimonial-author">
                        <img src="${testimonial.avatar}" alt="${testimonial.clientName}">
                        <div class="author-info">
                            <h4>${testimonial.clientName}</h4>
                            <p>${testimonial.company}</p>
                        </div>
                    </div>
                </div>
            `;
      testimonialContainer.appendChild(testimonialCard);
    });
  }
}

// Contact Form Handling
function handleContactForm(): void {
  const contactForm = document.getElementById(
    "contact-form"
  ) as HTMLFormElement;

  contactForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const message = formData.get("message") as string;

    // Simulated form submission (replace with actual backend logic)
    console.log("Form Submitted:", { name, email, company, message });

    // Reset form
    contactForm.reset();

    // Optional: Show success message
    alert("Message sent successfully!");
  });
}

// Newsletter Subscription
function handleNewsletterSubscription(): void {
  const newsletterForm = document.getElementById(
    "newsletter-form"
  ) as HTMLFormElement;

  newsletterForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    const formData = new FormData(newsletterForm);
    const email = formData.get("email") as string;

    // Simulated newsletter subscription
    console.log("Newsletter Subscription:", { email });

    // Reset form
    newsletterForm.reset();

    // Optional: Show success message
    alert("Thank you for subscribing!");
  });
}

// Initialize Functions on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderPortfolio();
  renderTeam();
  renderTestimonials();
  handleContactForm();
  handleNewsletterSubscription();
});
