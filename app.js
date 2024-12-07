// Data for different sections
var services = [
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
var portfolioProjects = [
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
var teamMembers = [
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
var testimonials = [
    {
        id: 1,
        clientName: "John Smith",
        company: "Tech Innovations Inc.",
        quote: "Nexus Digital transformed our digital strategy and helped us achieve remarkable growth.",
        avatar: "/api/placeholder/100/100",
    },
    {
        id: 2,
        clientName: "Emily Davis",
        company: "Global Solutions Ltd.",
        quote: "Their innovative approach and expertise exceeded all our expectations.",
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
function renderServices() {
    var servicesContainer = document.getElementById("services-container");
    if (servicesContainer) {
        services.forEach(function (service) {
            var serviceCard = document.createElement("div");
            serviceCard.className = "service-card";
            serviceCard.innerHTML = "\n                <div class=\"service-icon\">".concat(service.icon, "</div>\n                <h3>").concat(service.title, "</h3>\n                <p>").concat(service.description, "</p>\n            ");
            servicesContainer.appendChild(serviceCard);
        });
    }
}
function renderPortfolio() {
    var portfolioContainer = document.getElementById("portfolio-container");
    if (portfolioContainer) {
        portfolioProjects.forEach(function (project) {
            var portfolioItem = document.createElement("div");
            portfolioItem.className = "portfolio-item";
            portfolioItem.innerHTML = "\n                <img src=\"".concat(project.imageUrl, "\" alt=\"").concat(project.title, "\">\n                <div class=\"portfolio-item-content\">\n                    <h3>").concat(project.title, "</h3>\n                    <p>").concat(project.description, "</p>\n                    <span class=\"category\">").concat(project.category, "</span>\n                </div>\n            ");
            portfolioContainer.appendChild(portfolioItem);
        });
    }
}
function renderTeam() {
    var teamContainer = document.getElementById("team-container");
    if (teamContainer) {
        teamMembers.forEach(function (member) {
            var teamMemberCard = document.createElement("div");
            teamMemberCard.className = "team-member";
            teamMemberCard.innerHTML = "\n                <img src=\"".concat(member.imageUrl, "\" alt=\"").concat(member.name, "\">\n                <h3>").concat(member.name, "</h3>\n                <p>").concat(member.role, "</p>\n                <div class=\"social-links\">\n                    ").concat(member.socialLinks.linkedin
                ? "<a href=\"".concat(member.socialLinks.linkedin, "\">LinkedIn</a>")
                : "", "\n                    ").concat(member.socialLinks.twitter
                ? "<a href=\"".concat(member.socialLinks.twitter, "\">Twitter</a>")
                : "", "\n                </div>\n            ");
            teamContainer.appendChild(teamMemberCard);
        });
    }
}
function renderTestimonials() {
    var testimonialContainer = document.getElementById("testimonial-container");
    if (testimonialContainer) {
        testimonials.forEach(function (testimonial) {
            var testimonialCard = document.createElement("div");
            testimonialCard.className = "testimonial-card";
            testimonialCard.innerHTML = "\n                <div class=\"testimonial-content\">\n                    <p>\"".concat(testimonial.quote, "\"</p>\n                    <div class=\"testimonial-author\">\n                        <img src=\"").concat(testimonial.avatar, "\" alt=\"").concat(testimonial.clientName, "\">\n                        <div class=\"author-info\">\n                            <h4>").concat(testimonial.clientName, "</h4>\n                            <p>").concat(testimonial.company, "</p>\n                        </div>\n                    </div>\n                </div>\n            ");
            testimonialContainer.appendChild(testimonialCard);
        });
    }
}
// Contact Form Handling
function handleContactForm() {
    var contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var formData = new FormData(contactForm);
        var name = formData.get("name");
        var email = formData.get("email");
        var company = formData.get("company");
        var message = formData.get("message");
        // Simulated form submission (replace with actual backend logic)
        console.log("Form Submitted:", { name: name, email: email, company: company, message: message });
        // Reset form
        contactForm.reset();
        // Optional: Show success message
        alert("Message sent successfully!");
    });
}
// Newsletter Subscription
function handleNewsletterSubscription() {
    var newsletterForm = document.getElementById("newsletter-form");
    newsletterForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var formData = new FormData(newsletterForm);
        var email = formData.get("email");
        // Simulated newsletter subscription
        console.log("Newsletter Subscription:", { email: email });
        // Reset form
        newsletterForm.reset();
        // Optional: Show success message
        alert("Thank you for subscribing!");
    });
}
// Initialize Functions on DOM Load
document.addEventListener("DOMContentLoaded", function () {
    renderServices();
    renderPortfolio();
    renderTeam();
    renderTestimonials();
    handleContactForm();
    handleNewsletterSubscription();
});
