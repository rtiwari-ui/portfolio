<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RAJESH TIWARI - Sr. DevOps Engineer</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Inter Font -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            overflow-x: hidden; /* Prevent horizontal scroll */
        }
        /* Custom styles for canvas to ensure it covers the background */
        #background-canvas {
            position: fixed; /* Use fixed to ensure it covers the viewport */
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: -1; /* Place behind content */
        }
    </style>
    <!-- React and ReactDOM CDNs -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <!-- Babel for JSX transformation in the browser -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body class="bg-gray-900">
    <div id="root"></div>

    <script type="text/babel">
        const { useEffect, useRef, useState, useCallback } = React;
        const { createRoot } = ReactDOM;

        // Main App component
        const App = () => {
            const canvasRef = useRef(null);
            const [isMobile, setIsMobile] = useState(false);
            const [showScrollButton, setShowScrollButton] = useState(false);

            // Data for the resume
            const resumeData = {
                personal: {
                    name: "RAJESH TIWARI",
                    title: "Sr. DevOps Engineer",
                    address: "Indore, India 452006",
                    phone: "(+91) 8517011341",
                    email: "rajtiwari10091995@gmail.com",
                    linkedin: "https://www.linkedin.com/in/rajesh-tiwari-43984681",
                    dob: "09/10/1995",
                    maritalStatus: "Married",
                    nationality: "Indian",
                    profilePic: "https://placehold.co/150x150/553c9a/ffffff?text=Profile", // Placeholder for profile picture
                },
                summary: "Seasoned and results-driven Sr. DevOps & Cloud Infrastructure Engineer with 10+ years of hands-on experience in architecting, automating, and optimizing mission-critical deployments across AWS, Google Cloud Platform (GCP), and Oracle Cloud Infrastructure (OCI). Proven expertise in building scalable, secure, and cost-efficient cloud-native Infrastructure. Strong background in SRE principles, platform engineering, and DevSecOps, with a focus on reliability, observability and continuous improvement. Adept at leading cross-functional teams, driving cloud modernization, and enabling high-performance delivery through automation, governance, and infrastructure best practices.",
                skills: [
                    "Cloud Platforms (AWS, GCP, OCI)",
                    "Infrastructure as Code (Terraform, Ansible)",
                    "CI/CD Pipelines (Jenkins, GitHub Actions, Cloud Build, ArgoCD)",
                    "Containerization & Orchestration (Docker, Kubernetes EKS/GKE)",
                    "Monitoring & Observability (Datadog, Instana, Prometheus, Grafana, CloudWatch, Cloud Logging, ELK)",
                    "Configuration Management (Ansible, Helm, Packer)",
                    "Automated Deployment Techniques & Technologies (GitHub Actions, GitOps, Harness)",
                    "Version Control (Git, GitHub, GitLab, BitBucket)",
                    "Reporting & Documentation (Confluence, JIRA)",
                ],
                workHistory: [
                    {
                        title: "Sr. DevOps Engineer",
                        company: "FiftyFive Technologies",
                        location: "Indore, India",
                        dates: "May 2025 - Current",
                        description: [
                            "Optimized AWS cloud resource usage by analyzing cost metrics and recommending right-sized configurations to improve cost-efficiency.",
                            "Maintained robust monitoring systems for applications and infrastructure using tools like CloudWatch, Prometheus, and Grafana.",
                            "Increased system reliability and minimized downtime by proactively conducting root cause analysis (RCA) and troubleshooting incidents.",
                            "Reduced deployment times by implementing CI/CD pipelines across multiple projects using Jenkins, GitHub Actions, and Ansible.",
                            "Streamlined infrastructure management through automation using Terraform, Kubernetes, and Ansible, supporting consistent and scalable deployments.",
                            "Contributed to architecture design decisions, ensuring scalable, modular, and future-ready infrastructure for application growth.",
                            "Mentored junior engineers, sharing best practices and elevating team performance through coaching and hands-on support.",
                            "Standardized development environments using Docker, enabling consistent and platform-agnostic deployments across teams.",
                            "Promoted knowledge sharing by documenting processes, best practices, and lessons learned to build a shared internal DevOps knowledge base.",
                            "Conducted regular infrastructure performance assessments, identifying bottlenecks and optimizing compute, storage, and network configurations.",
                            "Championed a DevOps culture, fostering seamless collaboration between development, QA, and operations teams to accelerate delivery and improve quality.",
                        ],
                    },
                    {
                        title: "DevOps Engineer / SRE",
                        company: "Volansys Technologies",
                        location: "Ahmedabad (Remote)",
                        dates: "Jun 2022 - Apr 2025",
                        description: [
                            "Seasoned DevOps Engineer and Cloud Solutions Architect with deep expertise in designing, building, and automating secure, scalable, and cost-optimized infrastructure on Amazon Web Services (AWS).",
                            "Architected cloud-native, highly available systems using EC2, EKS, Lambda, CloudFront, VPC, IAM, ALB/NLB, S3, and RDS, aligned with the AWS Well-Architected Framework and compliance standards.",
                            "Developed Infrastructure as Code (IaC) with Terraform and AWS CloudFormation, ensuring consistent, version-controlled provisioning across environments.",
                            "Built and optimized CI/CD pipelines using Jenkins, GitHub Actions, and Ansible, improving deployment speed and enforcing quality gates for microservices.",
                            "Implemented centralized monitoring and logging using CloudWatch, Prometheus, Grafana, and Splunk, enhancing observability and reducing MTTR.",
                            "Embedded DevSecOps practices by integrating tools like Snyk and Trivy, and enforcing secure access with IAM policies, Secrets Manager, and encryption techniques.",
                            "Led cloud cost optimization efforts through resource usage analysis, auto-scaling strategies, and Reserved Instance planning.",
                            "Created detailed architecture diagrams, runbooks, and technical documentation using Confluence and Eraser.io to promote transparency and collaboration.",
                            "Advocate for automation-first, self-service platforms, and platform engineering principles to scale DevOps capabilities across teams.",
                        ],
                    },
                    {
                        title: "IT & Cloud Support Specialist",
                        company: "TaskUs",
                        location: "Indore (Remote)",
                        dates: "Sep 2020 - Jun 2022",
                        description: [
                            "Automated cloud infrastructure provisioning using Terraform, ensuring consistency, version control, and repeatable deployments across development, staging, and production environments.",
                            "Conducted Root Cause Analysis (RCA) for service downtime, implemented proactive monitoring and auto-healing strategies to improve system reliability and uptime.",
                            "Enhanced cloud security posture through automated vulnerability assessments using Amazon Inspector, integrated into CI/CD workflows for early detection and remediation.",
                            "Built and maintained immutable infrastructure, including server builds, application deployments, OS upgrades, and automated patch management using tools like Ansible and Packer.",
                            "Addressed critical issues such as unexpected shutdowns, disk failures, and system errors, using CloudWatch logs, metrics, and alerting integrations with Slack/email.",
                            "Set up and managed CI/CD pipelines using Jenkins, automating build, test, and deployment stages across microservice applications in containerized environments.",
                            "Documented runbooks, deployment guides, and SOPs using Confluence, contributing to an internal knowledge base for DevOps practices and troubleshooting.",
                            "Applied strong knowledge of DevSecOps, integrating security scanning (e.g., Snyk, Trivy) into CI/CD workflows to ensure compliance and vulnerability mitigation.",
                            "Collaborated with development, QA, and SRE teams to promote Agile DevOps culture, improve developer productivity, and support release engineering processes.",
                        ],
                    },
                    {
                        title: "Senior Analyst",
                        company: "Continuum Global Services",
                        location: "Indore",
                        dates: "Jul 2018 - Aug 2020",
                        description: [
                            "Analyzed system performance and contributed to optimization efforts on AI-powered Linux platforms, improving stability and responsiveness.",
                            "Assisted in CI/CD pipeline implementation using Jenkins, and supported infrastructure automation through Terraform scripts.",
                            "Supported version control activities using Git and GitLab, including branching, tagging, and release coordination aligned with Agile workflows.",
                            "Contributed to Docker-based deployment workflows, ensuring image build consistency and alignment with release standards.",
                            "Provided support for Kubernetes environments, focusing on automated deployments, scalability, and availability analysis.",
                            "Collaborated with cross-functional teams to maintain documentation, track progress, and report on DevOps process improvements and outcomes.",
                        ],
                    },
                    {
                        title: "Back Office Executive",
                        company: "Teleperformance",
                        location: "Indore",
                        dates: "Aug 2015 - Jul 2018",
                        description: [
                            "Managed quality assurance programme, including on-site evaluation, internal audits and customer surveys.",
                            "Incident, change and problem management skills.",
                            "Root cause analysis.",
                            "Documentation of best practices.",
                            "Creation and update of technical documentation.",
                        ],
                    },
                ],
                education: [
                    {
                        degree: "Bachelor of Computer Applications",
                        institution: "Shri Vaishnav Institute of Management",
                        location: "Indore, M.P.",
                    },
                    {
                        degree: "Higher Secondary",
                        institution: "Ideal Academy",
                        location: "Indore, M.P.",
                    },
                    {
                        degree: "High School",
                        institution: "Ideal Academy",
                        location: "Indore, M.P.",
                    },
                ],
                certifications: [
                    {
                        name: "CKA: Certified Kubernetes Administrator",
                        date: "Aug 2023",
                        image: "https://placehold.co/120x120/4a0e7e/ffffff?text=CKA" // Placeholder for CKA image
                    },
                    {
                        name: "AWS Certified Solutions Architect - Professional",
                        date: "Sep 2023",
                        image: "https://placehold.co/120x120/FF9900/ffffff?text=AWS+SA" // Placeholder for AWS SA image
                    },
                    {
                        name: "HashiCorp Certified: Terraform Associate (003)",
                        date: "Jun 2025",
                        image: "https://placehold.co/120x120/624e89/ffffff?text=Terraform" // Placeholder for Terraform image
                    },
                ],
                interests: [
                    "Indore Sports - Table Tennis, Chess",
                    "Outdoor Sports - Cricket, Volleyball",
                    "Space Exploration & theories",
                ],
            };

            // Canvas animation logic
            const initCanvasAnimation = useCallback(() => {
                const canvas = canvasRef.current;
                if (!canvas) return;

                const ctx = canvas.getContext('2d');
                let animationFrameId;

                const resizeCanvas = () => {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                };

                window.addEventListener('resize', resizeCanvas);
                resizeCanvas(); // Initial resize

                const particles = [];
                const numParticles = isMobile ? 50 : 100; // Fewer particles on mobile

                // Particle class for the animation
                class Particle {
                    constructor(x, y) {
                        this.x = x;
                        this.y = y;
                        this.size = Math.random() * 2 + 0.5; // Smaller particles
                        this.speedX = Math.random() * 0.5 - 0.25; // Slower movement
                        this.speedY = Math.random() * 0.5 - 0.25;
                        this.color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1})`; // Faint white
                    }

                    update() {
                        this.x += this.speedX;
                        this.y += this.speedY;

                        // Wrap particles around the screen
                        if (this.x < 0) this.x = canvas.width;
                        if (this.x > canvas.width) this.x = 0;
                        if (this.y < 0) this.y = canvas.height;
                        if (this.y > canvas.height) this.y = 0;
                    }

                    draw() {
                        ctx.fillStyle = this.color;
                        ctx.beginPath();
                        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }

                // Initialize particles
                for (let i = 0; i < numParticles; i++) {
                    particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
                }

                // Animation loop
                const animate = () => {
                    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
                    ctx.fillStyle = 'rgba(0,0,0,0.1)'; // Faint trail effect for dark background
                    ctx.fillRect(0, 0, canvas.width, canvas.height);

                    particles.forEach(particle => {
                        particle.update();
                        particle.draw();
                    });

                    // Draw subtle lines between nearby particles
                    for (let a = 0; a < particles.length; a++) {
                        for (let b = a; b < particles.length; b++) {
                            const dx = particles[a].x - particles[b].x;
                            const dy = particles[a].y - particles[b].y;
                            const distance = Math.sqrt(dx * dx + dy * dy);

                            if (distance < 100) { // Connect particles within 100px
                                ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - (distance / 1000)})`; // Fainter lines
                                ctx.lineWidth = 0.5;
                                ctx.beginPath();
                                ctx.moveTo(particles[a].x, particles[a].y);
                                ctx.lineTo(particles[b].x, particles[b].y);
                                ctx.stroke();
                            }
                        }
                    }

                    animationFrameId = requestAnimationFrame(animate);
                };

                animate();

                // Cleanup function
                return () => {
                    window.removeEventListener('resize', resizeCanvas);
                    cancelAnimationFrame(animationFrameId);
                };
            }, [isMobile]);

            // Handle scroll to show/hide button
            const handleScroll = useCallback(() => {
                if (window.scrollY > 300) { // Show button after scrolling 300px
                    setShowScrollButton(true);
                } else {
                    setShowScrollButton(false);
                }
            }, []);

            // Scroll to top function
            const scrollToTop = () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth' // Smooth scroll animation
                });
            };

            useEffect(() => {
                // Check for mobile on mount
                const handleResize = () => {
                    setIsMobile(window.innerWidth < 768);
                };
                window.addEventListener('resize', handleResize);
                handleResize(); // Initial check

                initCanvasAnimation(); // Re-initialize canvas animation

                // Add scroll event listener
                window.addEventListener('scroll', handleScroll);

                return () => {
                    window.removeEventListener('resize', handleResize);
                    window.removeEventListener('scroll', handleScroll); // Clean up scroll listener
                };
            }, [initCanvasAnimation, handleScroll]); // Added initCanvasAnimation back to dependencies

            return (
                <div className="min-h-screen font-inter text-gray-100 relative overflow-hidden bg-gray-900">
                    {/* Canvas for background animation */}
                    <canvas id="background-canvas" ref={canvasRef}></canvas>

                    {/* Main content container with gradient overlay */}
                    <div className="relative z-10 p-4 sm:p-8 md:p-12 lg:p-16 bg-gradient-to-br from-transparent via-purple-900/20 to-blue-900/20 min-h-screen">
                        {/* Header Section */}
                        <header className="text-center mb-12 p-6 rounded-xl shadow-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm transform transition-all duration-500 hover:scale-105">
                            {/* Profile Picture Placeholder */}
                            <img
                                src={resumeData.personal.profilePic}
                                alt="Profile"
                                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-teal-400 shadow-lg object-cover"
                            />
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-2 animate-pulse">
                                {resumeData.personal.name}
                            </h1>
                            <p className="text-xl sm:text-2xl text-gray-200 mb-4 font-light">
                                {resumeData.personal.title}
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
                                <a href={`tel:${resumeData.personal.phone}`} className="flex items-center text-gray-300 hover:text-teal-400 transition-colors duration-300 rounded-full px-3 py-1 bg-white bg-opacity-5 hover:bg-opacity-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    {resumeData.personal.phone}
                                </a>
                                <a href={`mailto:${resumeData.personal.email}`} className="flex items-center text-gray-300 hover:text-teal-400 transition-colors duration-300 rounded-full px-3 py-1 bg-white bg-opacity-5 hover:bg-opacity-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7m-18 0l-2 2v-7a2 2 0 00-2-2h-1a2 2 0 00-2 2v7l-2-2" /></svg>
                                    {resumeData.personal.email}
                                </a>
                                <a href={resumeData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-teal-400 transition-colors duration-300 rounded-full px-3 py-1 bg-white bg-opacity-5 hover:bg-opacity-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    LinkedIn
                                </a>
                            </div>
                        </header>

                        {/* About/Summary Section */}
                        <section className="mb-12 p-6 rounded-xl shadow-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm transform transition-all duration-500 hover:scale-105">
                            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6 border-b-2 border-purple-500 pb-2">
                                About Me
                            </h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                {resumeData.summary}
                            </p>
                        </section>

                        {/* Skills Section */}
                        <section className="mb-12 p-6 rounded-xl shadow-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm transform transition-all duration-500 hover:scale-105">
                            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-6 border-b-2 border-blue-500 pb-2">
                                Skills
                            </h2>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {resumeData.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-white bg-opacity-15 text-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-25 transition-all duration-300 transform hover:scale-105 shadow-md"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Work History Section */}
                        <section className="mb-12 p-6 rounded-xl shadow-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm transform transition-all duration-500 hover:scale-105">
                            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 mb-6 border-b-2 border-green-500 pb-2">
                                Work History
                            </h2>
                            <div className="space-y-8">
                                {resumeData.workHistory.map((job, index) => (
                                    <div key={index} className="bg-white bg-opacity-5 p-6 rounded-lg shadow-inner border border-gray-700 hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-1">
                                        <h3 className="text-xl sm:text-2xl font-semibold text-teal-300 mb-1">
                                            {job.title} at {job.company}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-2">
                                            {job.location} | {job.dates}
                                        </p>
                                        <ul className="list-disc list-inside space-y-1 text-gray-300 text-base">
                                            {job.description.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Education Section */}
                        <section className="mb-12 p-6 rounded-xl shadow-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm transform transition-all duration-500 hover:scale-105">
                            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-6 border-b-2 border-yellow-500 pb-2">
                                Education
                            </h2>
                            <div className="space-y-4">
                                {resumeData.education.map((edu, index) => (
                                    <div key={index} className="bg-white bg-opacity-5 p-4 rounded-lg shadow-inner border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-1">
                                        <h3 className="text-xl font-semibold text-orange-300">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-gray-400">
                                            {edu.institution}, {edu.location}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Certifications Section */}
                        <section className="mb-12 p-6 rounded-xl shadow-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm transform transition-all duration-500 hover:scale-105">
                            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500 mb-6 border-b-2 border-red-500 pb-2">
                                Certifications
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {resumeData.certifications.map((cert, index) => (
                                    <div key={index} className="bg-white bg-opacity-5 p-4 rounded-lg shadow-inner border border-gray-700 hover:border-pink-500 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
                                        <img
                                            src={cert.image}
                                            alt={cert.name}
                                            className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg mb-3 object-contain border border-gray-600 p-1"
                                            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/120x120/555/fff?text=${cert.name.split(' ')[0]}`; }} // Fallback
                                        />
                                        <h3 className="text-lg font-semibold text-pink-300 mt-2">
                                            {cert.name}
                                        </h3>
                                        <p className="text-gray-400 text-sm">{cert.date}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Interests Section */}
                        <section className="mb-12 p-6 rounded-xl shadow-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm transform transition-all duration-500 hover:scale-105">
                            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-6 border-b-2 border-indigo-500 pb-2">
                                Interests
                            </h2>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {resumeData.interests.map((interest, index) => (
                                    <span
                                        key={index}
                                        className="bg-white bg-opacity-15 text-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-25 transition-all duration-300 transform hover:scale-105 shadow-md"
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Footer */}
                        <footer className="text-center text-gray-500 text-sm mt-12 p-4 rounded-xl shadow-lg bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm">
                            <p>&copy; {new Date().getFullYear()} {resumeData.personal.name}. All rights reserved.</p>
                        </footer>
                    </div>

                    {/* Return to Top Button */}
                    {showScrollButton && (
                        <button
                            onClick={scrollToTop}
                            className="fixed bottom-8 right-8 bg-teal-500 hover:bg-teal-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75 z-50"
                            aria-label="Scroll to top"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </button>
                    )}
                </div>
            );
        };

        // Render the App component into the root div
        const container = document.getElementById('root');
        const root = createRoot(container);
        root.render(<App />);
    </script>
</body>
</html>
