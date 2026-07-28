// Google Sheets Published CSV Link Configuration
// The user can replace this URL with their own published Google Sheet CSV link
const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSlxtLQT4hmXGWKtQvCdWjEheiLM4p5gpK9q0TGMWUtB72lmJjr2fYMotjvnrXWmUE4Zk9UOGZ29ew1/pub?output=csv';

// Fallback Local Seed Data (Used if GOOGLE_SHEET_CSV_URL is empty or fails to fetch)
const fallbackCourses = [
    // --- ADTU (Online) ---
    {
        id: "adtu-bca",
        title: "Online Bachelor of Computer Applications (BCA)",
        university: "ADTU (Online)",
        mode: "OL/ODL",
        level: "UG",
        category: "Computer Science",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 120000,
        discountPercent: 0,
        rating: 4.4,
        reviewsCount: 180,
        type: "Recorded Lectures + Live Q&A",
        eligibility: "10+2 or equivalent from recognized board",
        careerSupport: true,
        syllabus: ["Programming in C", "Data Structures", "Database Management", "Software Engineering"],
        imageColor: "linear-gradient(135deg, #1b3a4b, #212529)",
        city: "Guwahati",
        state: "Assam",
        brochureUrl: "https://adtu.in/download-brochure/"
    },
    {
        id: "adtu-mba",
        title: "Online MBA in Human Resource Management",
        university: "ADTU (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Management",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 180000,
        discountPercent: 10,
        rating: 4.5,
        reviewsCount: 220,
        type: "100% Online with LMS",
        eligibility: "Bachelor's degree with 50% marks",
        careerSupport: true,
        syllabus: ["Organizational Behavior", "Talent Acquisition", "Labour Laws", "Performance Management"],
        imageColor: "linear-gradient(135deg, #1b3a4b, #3d5a80)",
        city: "Guwahati",
        state: "Assam",
        brochureUrl: "https://adtu.in/download-brochure/"
    },

    // --- Alliance (Online) ---
    {
        id: "alliance-bba",
        title: "Online Bachelor of Business Administration (BBA)",
        university: "Alliance (Online)",
        mode: "OL/ODL",
        level: "UG",
        category: "Management",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 195000,
        discountPercent: 0,
        rating: 4.6,
        reviewsCount: 310,
        type: "Live Cohort Classes",
        eligibility: "10+2 from a recognized board",
        careerSupport: true,
        syllabus: ["Marketing Principles", "Microeconomics", "Business Math", "Consumer Behaviour"],
        imageColor: "linear-gradient(135deg, #1d3557, #457b9d)",
        city: "Bangalore",
        state: "Karnataka",
        brochureUrl: "https://www.alliance.edu.in/brochure/"
    },
    {
        id: "alliance-mba",
        title: "Online MBA (General Management)",
        university: "Alliance (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Management",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 280000,
        discountPercent: 15,
        rating: 4.7,
        reviewsCount: 450,
        type: "Blended Live Sessions",
        eligibility: "Graduate degree with 50% aggregate",
        careerSupport: true,
        syllabus: ["Corporate Strategy", "Managerial Economics", "Financial Management", "International Business"],
        imageColor: "linear-gradient(135deg, #1d3557, #e63946)",
        city: "Bangalore",
        state: "Karnataka",
        brochureUrl: "https://www.alliance.edu.in/brochure/"
    },

    // --- Amrita (Online) ---
    {
        id: "amrita-bca",
        title: "Online BCA in Data Science",
        university: "Amrita (Online)",
        mode: "OL/ODL",
        level: "UG",
        category: "Computer Science",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 165000,
        discountPercent: 0,
        rating: 4.7,
        reviewsCount: 650,
        type: "Online Live & Interactive",
        eligibility: "12th standard with Math/CS background",
        careerSupport: true,
        syllabus: ["Python for Data Science", "Data Visualization", "SQL Database Fundamentals", "Intro to AI"],
        imageColor: "linear-gradient(135deg, #4a148c, #7b1fa2)",
        city: "Coimbatore",
        state: "Tamil Nadu",
        brochureUrl: "https://onlineamrita.com/brochure/"
    },
    {
        id: "amrita-mba",
        title: "Online MBA (Core Specializations)",
        university: "Amrita (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Management",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 220000,
        discountPercent: 12,
        rating: 4.8,
        reviewsCount: 1210,
        type: "Dual Specialization / Live Interaction",
        eligibility: "UG degree with min 50% marks",
        careerSupport: true,
        syllabus: ["Financial Analytics", "Supply Chain", "HR Strategy", "Marketing Analytics"],
        imageColor: "linear-gradient(135deg, #4a148c, #ab47bc)",
        city: "Coimbatore",
        state: "Tamil Nadu",
        brochureUrl: "https://onlineamrita.com/brochure/"
    },

    // --- Andhra (Online) ---
    {
        id: "andhra-ba",
        title: "Online Bachelor of Arts (BA - Economics & History)",
        university: "Andhra (Online)",
        mode: "OL/ODL",
        level: "UG",
        category: "Arts / Humanities",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 75000,
        discountPercent: 0,
        rating: 4.3,
        reviewsCount: 420,
        type: "Recorded & Semester Exams",
        eligibility: "12th Standard or equivalent",
        careerSupport: false,
        syllabus: ["Indian History", "Microeconomics", "Macroeconomics", "Sociology Fundamentals"],
        imageColor: "linear-gradient(135deg, #0d1b2a, #1b263b)",
        city: "Visakhapatnam",
        state: "Andhra Pradesh",
        brochureUrl: "https://www.andhrauniversity.edu.in/"
    },
    {
        id: "andhra-mba",
        title: "Online MBA (Finance / Marketing)",
        university: "Andhra (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Management",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 150000,
        discountPercent: 0,
        rating: 4.5,
        reviewsCount: 880,
        type: "Regular online assessment & webinars",
        eligibility: "Graduate degree",
        careerSupport: true,
        syllabus: ["Financial Management", "Consumer Behavior", "Taxation Laws", "Sales & Distribution"],
        imageColor: "linear-gradient(135deg, #0d1b2a, #415a77)",
        city: "Visakhapatnam",
        state: "Andhra Pradesh",
        brochureUrl: "https://www.andhrauniversity.edu.in/"
    },

    // --- AU (Online) ---
    {
        id: "au-bba",
        title: "Online BBA in Digital Marketing",
        university: "AU (Online)",
        mode: "OL/ODL",
        level: "UG",
        category: "Management",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 140000,
        discountPercent: 8,
        rating: 4.4,
        reviewsCount: 290,
        type: "LMS Enabled Study + Self Paced",
        eligibility: "10+2 pass (any stream)",
        careerSupport: true,
        syllabus: ["Search Engine Optimization", "Social Media Marketing", "Content Strategy", "Digital Analytics"],
        imageColor: "linear-gradient(135deg, #2b2d42, #8d99ae)",
        city: "Hyderabad",
        state: "Telangana",
        brochureUrl: "https://anurag.edu.in/"
    },
    {
        id: "au-mba",
        title: "Online MBA (Business Analytics)",
        university: "AU (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Management",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 210000,
        discountPercent: 0,
        rating: 4.6,
        reviewsCount: 410,
        type: "Weekly webinars + Assessments",
        eligibility: "Graduation with Math/Commerce background preferred",
        careerSupport: true,
        syllabus: ["Predictive Modelling", "R & Python for Managers", "Data warehousing", "Strategic Decisions"],
        imageColor: "linear-gradient(135deg, #2b2d42, #ef233c)",
        city: "Hyderabad",
        state: "Telangana",
        brochureUrl: "https://anurag.edu.in/"
    },

    // --- Bennett (Online) ---
    {
        id: "bennett-bca",
        title: "Online BCA (Cloud & Cybersecurity)",
        university: "Bennett (Online)",
        mode: "OL/ODL",
        level: "UG",
        category: "Computer Science",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 180000,
        discountPercent: 5,
        rating: 4.6,
        reviewsCount: 390,
        type: "LMS + Practical Labs",
        eligibility: "10+2 with minimum 50% marks",
        careerSupport: true,
        syllabus: ["Cloud Virtualization", "Ethical Hacking", "Operating Systems", "Computer Networks"],
        imageColor: "linear-gradient(135deg, #0f2027, #203a43)",
        city: "Greater Noida",
        state: "Uttar Pradesh",
        brochureUrl: "https://www.bennett.edu.in/"
    },
    {
        id: "bennett-mba",
        title: "Online MBA in Digital Business",
        university: "Bennett (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Management",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 260000,
        discountPercent: 0,
        rating: 4.7,
        reviewsCount: 520,
        type: "Interactive Live Cohorts",
        eligibility: "Bachelor's degree with 50% aggregate",
        careerSupport: true,
        syllabus: ["E-Commerce Strategy", "Digital Product Management", "Data Analytics", "Growth Hacking"],
        imageColor: "linear-gradient(135deg, #0f2027, #2c5364)",
        city: "Greater Noida",
        state: "Uttar Pradesh",
        brochureUrl: "https://www.bennett.edu.in/"
    },

    // --- Christ (Online) ---
    {
        id: "christ-bba",
        title: "Online BBA in Finance & Accounting",
        university: "Christ (Online)",
        mode: "OL/ODL",
        level: "UG",
        category: "Management",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 250000,
        discountPercent: 0,
        rating: 4.8,
        reviewsCount: 840,
        type: "Blended Hybrid Learning",
        eligibility: "Class 12th passed with min 60%",
        careerSupport: true,
        syllabus: ["Corporate Accounting", "Cost Management", "Tax planning", "Financial Institutions"],
        imageColor: "linear-gradient(135deg, #0a1128, #001f54)",
        city: "Bangalore",
        state: "Karnataka",
        brochureUrl: "https://christuniversity.in/"
    },
    {
        id: "christ-mba",
        title: "Online MBA in Executive Leadership",
        university: "Christ (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Management",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 320000,
        discountPercent: 10,
        rating: 4.9,
        reviewsCount: 960,
        type: "Live classes + Case study models",
        eligibility: "Graduation with 55% marks + Interview",
        careerSupport: true,
        syllabus: ["Leadership styles", "Strategic Alliances", "Conflict Resolution", "Global Markets"],
        imageColor: "linear-gradient(135deg, #0a1128, #1282a2)",
        city: "Bangalore",
        state: "Karnataka",
        brochureUrl: "https://christuniversity.in/"
    },

    // --- CUOL (Online) ---
    {
        id: "cuol-bca",
        title: "Online BCA (General Computer Applications)",
        university: "CUOL (Online)",
        mode: "OL/ODL",
        level: "UG",
        category: "Computer Science",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 110000,
        discountPercent: 0,
        rating: 4.5,
        reviewsCount: 1450,
        type: "100% Online Self-Paced",
        eligibility: "12th Standard Passed",
        careerSupport: true,
        syllabus: ["C++ Programming", "Web Design", "Computer Architecture", "Database Systems"],
        imageColor: "linear-gradient(135deg, #ff7b00, #ffb703)",
        city: "Chandigarh",
        state: "Punjab",
        brochureUrl: "https://drive.google.com/file/d/1evJ1s-6KmjPaky4Czpj95bb2BhAmpec9/view?usp=drive_link"
    },
    {
        id: "cuol-mca",
        title: "Online MCA in AI & Machine Learning",
        university: "CUOL (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Computer Science",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 150000,
        discountPercent: 5,
        rating: 4.6,
        reviewsCount: 1890,
        type: "Self-Paced with Faculty Mentors",
        eligibility: "Graduation with BCA/B.Sc. CS or Math",
        careerSupport: true,
        syllabus: ["Supervised ML", "Deep Learning Tools", "Python Coding", "Statistical Inference"],
        imageColor: "linear-gradient(135deg, #ff7b00, #fb8500)",
        city: "Chandigarh",
        state: "Punjab",
        brochureUrl: "https://www.cuchd.in/"
    },

    // --- DPU Mumbai (Online) ---
    {
        id: "dpumumbai-bba",
        title: "Online Bachelor of Business Administration",
        university: "DPU Mumbai (Online)",
        mode: "OL/ODL",
        level: "UG",
        category: "Management",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 135000,
        discountPercent: 0,
        rating: 4.4,
        reviewsCount: 390,
        type: "Recorded Lectures & PDF Notes",
        eligibility: "12th Standard in any stream",
        careerSupport: true,
        syllabus: ["Managerial Accounting", "Organizational Theory", "Retail Management", "B2B Marketing"],
        imageColor: "linear-gradient(135deg, #2b0f54, #ab47bc)",
        city: "Navi Mumbai",
        state: "Maharashtra",
        brochureUrl: "https://www.dyypatil.edu/"
    },
    {
        id: "dpumumbai-mba",
        title: "Online MBA in Retail & Finance",
        university: "DPU Mumbai (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Management",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 175000,
        discountPercent: 10,
        rating: 4.5,
        reviewsCount: 520,
        type: "Online Assessment portal",
        eligibility: "Graduation from recognized board",
        careerSupport: true,
        syllabus: ["Supply Chain in Retail", "Security Analysis", "Merchandising Strategy", "Portfolio Management"],
        imageColor: "linear-gradient(135deg, #2b0f54, #ea80fc)",
        city: "Navi Mumbai",
        state: "Maharashtra",
        brochureUrl: "https://www.dyypatil.edu/"
    },

    // --- DPU Pune (Online) ---
    {
        id: "dpupune-bba",
        title: "Online BBA (IT & Systems Management)",
        university: "DPU Pune (Online)",
        mode: "OL/ODL",
        level: "UG",
        category: "Management",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 140000,
        discountPercent: 0,
        rating: 4.5,
        reviewsCount: 680,
        type: "Webinar sessions & Online Exams",
        eligibility: "12th Standard Pass",
        careerSupport: true,
        syllabus: ["Management Info Systems", "Software Project Basics", "Database for Managers", "Business Analytics"],
        imageColor: "linear-gradient(135deg, #420626, #b0003a)",
        city: "Pune",
        state: "Maharashtra",
        brochureUrl: "https://dpuonline.com/"
    },
    {
        id: "dpupune-mba",
        title: "Online MBA (Core Management Options)",
        university: "DPU Pune (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Management",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 160000,
        discountPercent: 15,
        rating: 4.6,
        reviewsCount: 980,
        type: "LMS Assessment Modules",
        eligibility: "Bachelor's degree with 50% aggregate",
        careerSupport: true,
        syllabus: ["Marketing Management", "Strategic Policy", "Corporate Governance", "International Trade"],
        imageColor: "linear-gradient(135deg, #420626, #d81b60)",
        city: "Pune",
        state: "Maharashtra",
        brochureUrl: "https://dpuonline.com/"
    },

    // --- Galgotias (Online) ---
    {
        id: "galgotias-bca",
        title: "Online BCA (Mobile App Development)",
        university: "Galgotias (Online)",
        mode: "OL/ODL",
        level: "UG",
        category: "Computer Science",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 110000,
        discountPercent: 0,
        rating: 4.4,
        reviewsCount: 820,
        type: "Online lectures + LMS",
        eligibility: "12th Standard from any stream",
        careerSupport: true,
        syllabus: ["Android Programming", "iOS Fundamentals", "UX/UI Design", "Backend APIs"],
        imageColor: "linear-gradient(135deg, #03001e, #7303c0)",
        city: "Greater Noida",
        state: "Uttar Pradesh",
        brochureUrl: "https://www.galgotiasuniversity.edu.in/"
    },
    {
        id: "galgotias-mca",
        title: "Online MCA (Cloud Infrastructure)",
        university: "Galgotias (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Computer Science",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 145000,
        discountPercent: 5,
        rating: 4.5,
        reviewsCount: 710,
        type: "Recorded & Virtual Labs",
        eligibility: "BCA / Bachelor's in CS / IT",
        careerSupport: true,
        syllabus: ["Cloud Storage", "Virtualization Systems", "Datacenter Operations", "Linux Scripting"],
        imageColor: "linear-gradient(135deg, #03001e, #ec38bc)",
        city: "Greater Noida",
        state: "Uttar Pradesh",
        brochureUrl: "https://www.galgotiasuniversity.edu.in/"
    },

    // --- GLA (Online) ---
    {
        id: "gla-bca",
        title: "Online BCA (Web Development)",
        university: "GLA (Online)",
        mode: "OL/ODL",
        level: "UG",
        category: "Computer Science",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 105000,
        discountPercent: 0,
        rating: 4.3,
        reviewsCount: 390,
        type: "Semester Based LMS learning",
        eligibility: "12th Standard Passed",
        careerSupport: true,
        syllabus: ["HTML/CSS/JS", "Node.js & Databases", "PHP Development", "Web Application Architecture"],
        imageColor: "linear-gradient(135deg, #000428, #004e92)",
        city: "Mathura",
        state: "Uttar Pradesh",
        brochureUrl: "https://glaonline.com/"
    },
    {
        id: "gla-mca",
        title: "Online MCA in Software Development",
        university: "GLA (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Computer Science",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 135000,
        discountPercent: 10,
        rating: 4.5,
        reviewsCount: 460,
        type: "Live Weekend Lectures",
        eligibility: "BCA/B.Sc. in CS or Mathematics in 12th",
        careerSupport: true,
        syllabus: ["Advanced Software Engineering", "Object-oriented Frameworks", "Design Patterns", "Agile Methodologies"],
        imageColor: "linear-gradient(135deg, #000428, #0083b0)",
        city: "Mathura",
        state: "Uttar Pradesh",
        brochureUrl: "https://glaonline.com/"
    },

    // --- JU (Online) ---
    {
        id: "ju-bba",
        title: "Online BBA (Core Business Administration)",
        university: "JU (Online)",
        mode: "OL/ODL",
        level: "UG",
        category: "Management",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 130000,
        discountPercent: 0,
        rating: 4.5,
        reviewsCount: 980,
        type: "Self-Paced with Mentor support",
        eligibility: "12th Pass (any stream)",
        careerSupport: true,
        syllabus: ["Principles of Management", "Marketing Strategy", "Business Law", "HR Management"],
        imageColor: "linear-gradient(135deg, #114b5f, #028090)",
        city: "Bangalore",
        state: "Karnataka",
        brochureUrl: "https://jainonline.com/"
    },
    {
        id: "ju-mca",
        title: "Online MCA in Full Stack Development",
        university: "JU (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Computer Science",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 180000,
        discountPercent: 12,
        rating: 4.6,
        reviewsCount: 1100,
        type: "Interactive Cohorts & Projects",
        eligibility: "BCA / Graduate with Math background",
        careerSupport: true,
        syllabus: ["Frontend frameworks (React/Vue)", "Backend with Node & Express", "Deployment & CI/CD", "DBMS"],
        imageColor: "linear-gradient(135deg, #114b5f, #f45b69)",
        city: "Bangalore",
        state: "Karnataka",
        brochureUrl: "https://jainonline.com/"
    },

    // --- KUK (Online) ---
    {
        id: "kuk-ba",
        title: "Online Bachelor of Arts (BA General)",
        university: "KUK (Online)",
        mode: "OL/ODL",
        level: "UG",
        category: "Arts / Humanities",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 55000,
        discountPercent: 0,
        rating: 4.1,
        reviewsCount: 310,
        type: "Material Dispatch + Online Submissions",
        eligibility: "10+2 or equivalent",
        careerSupport: false,
        syllabus: ["English Literature", "Political Science", "Sanskrit studies", "History of India"],
        imageColor: "linear-gradient(135deg, #37000c, #73001c)",
        city: "Kurukshetra",
        state: "Haryana",
        brochureUrl: "https://www.kuk.ac.in/"
    },
    {
        id: "kuk-mba",
        title: "Online MBA (Core Management)",
        university: "KUK (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Management",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 120000,
        discountPercent: 0,
        rating: 4.3,
        reviewsCount: 480,
        type: "Online LMS + Mid-term Assignments",
        eligibility: "Bachelor's degree from recognized university",
        careerSupport: false,
        syllabus: ["Managerial Finance", "Organization Behavior", "Business Communication", "Market Research"],
        imageColor: "linear-gradient(135deg, #37000c, #c3073f)",
        city: "Kurukshetra",
        state: "Haryana",
        brochureUrl: "https://www.kuk.ac.in/"
    },

    // --- LPU (Online) ---
    {
        id: "lpu-bca",
        title: "Online Bachelor of Computer Applications (BCA)",
        university: "LPU (Online)",
        mode: "OL/ODL",
        level: "UG",
        category: "Computer Science",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 87000,
        discountPercent: 0,
        rating: 4.4,
        reviewsCount: 3200,
        type: "LPU e-Connect LMS Portal",
        eligibility: "12th Standard Passed",
        careerSupport: true,
        syllabus: ["Programming Concepts", "Database Management", "HTML and CSS", "Network Security Basics"],
        imageColor: "linear-gradient(135deg, #d35400, #e67e22)",
        city: "Jalandhar",
        state: "Punjab",
        brochureUrl: "https://www.lpuonline.com/"
    },
    {
        id: "lpu-mba",
        title: "Online MBA (Dual Specializations)",
        university: "LPU (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Management",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 130000,
        discountPercent: 10,
        rating: 4.6,
        reviewsCount: 4600,
        type: "LMS + Academic Counseling",
        eligibility: "Bachelor's degree with 50% marks",
        careerSupport: true,
        syllabus: ["International Marketing", "Derivatives and Risk Management", "Product Strategy", "Consumer Analytics"],
        imageColor: "linear-gradient(135deg, #d35400, #f39c12)",
        city: "Jalandhar",
        state: "Punjab",
        brochureUrl: "https://www.lpuonline.com/"
    },

    // --- MAHE (Online) ---
    {
        id: "mahe-mba",
        title: "Online Master of Business Administration",
        university: "MAHE (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Management",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 300000,
        discountPercent: 5,
        rating: 4.8,
        reviewsCount: 2200,
        type: "Live Interactive Lectures & Projects",
        eligibility: "Graduation with 50% aggregate marks",
        careerSupport: true,
        syllabus: ["Marketing Analytics", "Advanced Corporate Finance", "Operations Strategy", "Digital Leadership"],
        imageColor: "linear-gradient(135deg, #2b1055, #7597de)",
        city: "Manipal",
        state: "Karnataka",
        brochureUrl: "https://www.manipalonline.com/"
    },
    {
        id: "mahe-mca",
        title: "Online MCA in Systems Design",
        university: "MAHE (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Computer Science",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 260000,
        discountPercent: 0,
        rating: 4.7,
        reviewsCount: 1890,
        type: "Webinar based live training + labs",
        eligibility: "BCA/B.Sc. in CS or Mathematics in 12th",
        careerSupport: true,
        syllabus: ["Software Architectures", "Modern DBMS", "Cryptography", "Enterprise Networking"],
        imageColor: "linear-gradient(135deg, #2b1055, #7b1fa2)",
        city: "Manipal",
        state: "Karnataka",
        brochureUrl: "https://www.manipalonline.com/"
    },

    // --- MUJ (Online) ---
    {
        id: "muj-bca",
        title: "Online BCA (General Track)",
        university: "MUJ (Online)",
        mode: "OL/ODL",
        level: "UG",
        category: "Computer Science",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 135000,
        discountPercent: 0,
        rating: 4.5,
        reviewsCount: 1650,
        type: "Mobile app enabled self-paced courses",
        eligibility: "12th Standard Passed",
        careerSupport: true,
        syllabus: ["C Programming", "Discrete Mathematics", "Data Communication", "Java Basics"],
        imageColor: "linear-gradient(135deg, #0f4c81, #1f77b4)",
        city: "Jaipur",
        state: "Rajasthan",
        brochureUrl: "https://www.onlinemanipal.com/"
    },
    {
        id: "muj-mca",
        title: "Online MCA (Advanced Application Dev)",
        university: "MUJ (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Computer Science",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 180000,
        discountPercent: 0,
        rating: 4.7,
        reviewsCount: 2200,
        type: "Live classes + Industry expert talks",
        eligibility: "BCA / Bachelor's in CS / IT",
        careerSupport: true,
        syllabus: ["Mobile App Development", "Advanced Web Programming", "Cloud Systems", "Deep Learning Basics"],
        imageColor: "linear-gradient(135deg, #0f4c81, #5c6bc0)",
        city: "Jaipur",
        state: "Rajasthan",
        brochureUrl: "https://www.onlinemanipal.com/"
    },

    // --- NMIMS (Online) ---
    {
        id: "nmims-bba",
        title: "Online BBA in Brand Management",
        university: "NMIMS (Online)",
        mode: "OL/ODL",
        level: "UG",
        category: "Management",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 240000,
        discountPercent: 0,
        rating: 4.7,
        reviewsCount: 2900,
        type: "LMS webinars + Self Study",
        eligibility: "12th pass with minimum 50% marks",
        careerSupport: true,
        syllabus: ["Brand Strategy", "Consumer Insights", "Retail Operations", "Advertising Principles"],
        imageColor: "linear-gradient(135deg, #780016, #b71c1c)",
        city: "Mumbai",
        state: "Maharashtra",
        brochureUrl: "https://distance.nmims.edu/"
    },
    {
        id: "nmims-mba",
        title: "Online MBA (Core Management Strategy)",
        university: "NMIMS (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Management",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 350000,
        discountPercent: 15,
        rating: 4.8,
        reviewsCount: 5200,
        type: "Live Classes + Extensive Industry Placement Support",
        eligibility: "UG graduation with 50% aggregate + Work experience preferred",
        careerSupport: true,
        syllabus: ["Corporate Finance", "Operations Analytics", "Strategic Design", "Talent Management"],
        imageColor: "linear-gradient(135deg, #780016, #d32f2f)",
        city: "Mumbai",
        state: "Maharashtra",
        brochureUrl: "https://distance.nmims.edu/"
    },

    // --- PU (Online) ---
    {
        id: "pu-bba",
        title: "Online BBA (General Business)",
        university: "PU (Online)",
        mode: "OL/ODL",
        level: "UG",
        category: "Management",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 95000,
        discountPercent: 0,
        rating: 4.2,
        reviewsCount: 240,
        type: "Self-study + Periodic webinars",
        eligibility: "12th Standard Passed",
        careerSupport: false,
        syllabus: ["Introduction to Commerce", "Marketing Baselines", "Communication Skills", "Office Management"],
        imageColor: "linear-gradient(135deg, #0e1e38, #1d3557)",
        city: "Patna",
        state: "Bihar",
        brochureUrl: "https://www.patnauniversity.ac.in/"
    },
    {
        id: "pu-mba",
        title: "Online MBA (Marketing Management)",
        university: "PU (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Management",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 140000,
        discountPercent: 0,
        rating: 4.4,
        reviewsCount: 390,
        type: "Semester exams & Online portals",
        eligibility: "Graduation in any stream",
        careerSupport: false,
        syllabus: ["Sales Strategy", "Brand Promotion", "Advertising and PR", "Direct Marketing Models"],
        imageColor: "linear-gradient(135deg, #0e1e38, #457b9d)",
        city: "Patna",
        state: "Bihar",
        brochureUrl: "https://www.patnauniversity.ac.in/"
    },

    // --- SCDOE (Online) ---
    {
        id: "scdoe-pgdba",
        title: "Post Graduate Diploma in Business Administration (PGDBA)",
        university: "SCDOE (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Management",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 70000,
        discountPercent: 5,
        rating: 4.4,
        reviewsCount: 3500,
        type: "Virtual classrooms & Study Kit",
        eligibility: "Bachelor's degree in any discipline",
        careerSupport: false,
        syllabus: ["Business communication", "Marketing management", "Finance structures", "Managerial Economics"],
        imageColor: "linear-gradient(135deg, #003366, #0066cc)",
        city: "Pune",
        state: "Maharashtra",
        brochureUrl: "https://www.scdl.net/"
    },

    // --- Sharda (Online) ---
    {
        id: "sharda-bca",
        title: "Online BCA (Mobile App Development)",
        university: "Sharda (Online)",
        mode: "OL/ODL",
        level: "UG",
        category: "Computer Science",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 125000,
        discountPercent: 0,
        rating: 4.4,
        reviewsCount: 450,
        type: "Online lectures + Sandbox lab environments",
        eligibility: "12th Standard Passed",
        careerSupport: true,
        syllabus: ["iOS App Development", "Android SDK Integration", "User Interface Engineering", "Cloud API Hooks"],
        imageColor: "linear-gradient(135deg, #1b5e20, #388e3c)",
        city: "Greater Noida",
        state: "Uttar Pradesh",
        brochureUrl: "https://www.sharda.ac.in/"
    },
    {
        id: "sharda-mba",
        title: "Online MBA (Global Marketing Focus)",
        university: "Sharda (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Management",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 200000,
        discountPercent: 10,
        rating: 4.5,
        reviewsCount: 520,
        type: "Interactive weekend programs",
        eligibility: "Bachelor's degree with minimum 50% marks",
        careerSupport: true,
        syllabus: ["International Trade Rules", "Cross-cultural Marketing", "Global Finance Analytics", "Corporate Negotiations"],
        imageColor: "linear-gradient(135deg, #1b5e20, #66bb6a)",
        city: "Greater Noida",
        state: "Uttar Pradesh",
        brochureUrl: "https://www.sharda.ac.in/"
    },

    // --- SMU (Online) ---
    {
        id: "smu-bca",
        title: "Online BCA (Software Engineering Track)",
        university: "SMU (Online)",
        mode: "OL/ODL",
        level: "UG",
        category: "Computer Science",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 120000,
        discountPercent: 0,
        rating: 4.5,
        reviewsCount: 840,
        type: "Online learning portals with LMS",
        eligibility: "10+2 with basic math knowledge",
        careerSupport: true,
        syllabus: ["System Programming", "C++ Concepts", "Web application development", "Software Testing Basics"],
        imageColor: "linear-gradient(135deg, #bf360c, #e64a19)",
        city: "Gangtok",
        state: "Sikkim",
        brochureUrl: "https://smu.edu.in/"
    },
    {
        id: "smu-mba",
        title: "Online MBA (General Administration Options)",
        university: "SMU (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Management",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 175000,
        discountPercent: 10,
        rating: 4.6,
        reviewsCount: 1100,
        type: "Recorded & live combination schedules",
        eligibility: "Bachelor's degree from recognized university",
        careerSupport: true,
        syllabus: ["Strategic Management", "Organizational development", "Human Resource Systems", "Finance Policies"],
        imageColor: "linear-gradient(135deg, #bf360c, #ff7043)",
        city: "Gangtok",
        state: "Sikkim",
        brochureUrl: "https://smu.edu.in/"
    },

    // --- SRM (Online) ---
    {
        id: "srm-bca",
        title: "Online BCA (Database Systems)",
        university: "SRM (Online)",
        mode: "OL/ODL",
        level: "UG",
        category: "Computer Science",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 140000,
        discountPercent: 0,
        rating: 4.5,
        reviewsCount: 920,
        type: "Weekend Live Classes",
        eligibility: "12th Standard Passed (any stream)",
        careerSupport: true,
        syllabus: ["SQL Server Administration", "Oracle SQL Developer", "NoSQL Foundations", "Database Clustering"],
        imageColor: "linear-gradient(135deg, #0d3b66, #f4d35e)",
        city: "Chennai",
        state: "Tamil Nadu",
        brochureUrl: "https://www.srmonline.in/"
    },
    {
        id: "srm-mca",
        title: "Online MCA in Data Analytics",
        university: "SRM (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Computer Science",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 190000,
        discountPercent: 10,
        rating: 4.7,
        reviewsCount: 1400,
        type: "Live Interactive webinars & hands-on code sessions",
        eligibility: "BCA/B.Sc. in CS or Mathematics in 12th",
        careerSupport: true,
        syllabus: ["Statistics for Analytics", "Tableau Data Visualization", "R and Python Frameworks", "Hadoop & Spark Analytics"],
        imageColor: "linear-gradient(135deg, #0d3b66, #f95738)",
        city: "Chennai",
        state: "Tamil Nadu",
        brochureUrl: "https://www.srmonline.in/"
    },

    // --- UPES (Online) ---
    {
        id: "upes-bba",
        title: "Online BBA in Aviation Management",
        university: "UPES (Online)",
        mode: "OL/ODL",
        level: "UG",
        category: "Management",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 160000,
        discountPercent: 0,
        rating: 4.6,
        reviewsCount: 540,
        type: "Self-Paced with Live Expert Interventions",
        eligibility: "12th Standard Passed (min 50%)",
        careerSupport: true,
        syllabus: ["Aviation Operations", "Airport Planning & Design", "Passenger Services", "Logistics Strategy"],
        imageColor: "linear-gradient(135deg, #002244, #1f4e79)",
        city: "Dehradun",
        state: "Uttarakhand",
        brochureUrl: "https://www.upes.ac.in/"
    },
    {
        id: "upes-mba",
        title: "Online MBA (Oil & Gas Management)",
        university: "UPES (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Management",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 290000,
        discountPercent: 12,
        rating: 4.8,
        reviewsCount: 1100,
        type: "Weekly Webinars + Industry Case Studies",
        eligibility: "Graduate degree with min 50% aggregate",
        careerSupport: true,
        syllabus: ["Petroleum Regulation", "Energy Markets Macroeconomics", "Safety & Operations Management", "Renewable Resource Strategy"],
        imageColor: "linear-gradient(135deg, #002244, #0077b6)",
        city: "Dehradun",
        state: "Uttarakhand",
        brochureUrl: "https://www.upes.ac.in/"
    },

    // --- UU (Online) ---
    {
        id: "uu-bca",
        title: "Online BCA (Systems Design & Analysis)",
        university: "UU (Online)",
        mode: "OL/ODL",
        level: "UG",
        category: "Computer Science",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 100000,
        discountPercent: 0,
        rating: 4.3,
        reviewsCount: 220,
        type: "Standard online syllabus & exams",
        eligibility: "10+2 equivalent with basic math stream",
        careerSupport: true,
        syllabus: ["Algorithm Design", "Information System Modelling", "Software Development Cycle", "Intro to Databases"],
        imageColor: "linear-gradient(135deg, #370617, #6a040f)",
        city: "Dehradun",
        state: "Uttarakhand",
        brochureUrl: "https://uttaranchaluniversity.ac.in/"
    },
    {
        id: "uu-mca",
        title: "Online MCA (Advanced Application Development)",
        university: "UU (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Computer Science",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 145000,
        discountPercent: 0,
        rating: 4.5,
        reviewsCount: 390,
        type: "Recorded & interactive web panels",
        eligibility: "BCA / Bachelor's in CS / IT",
        careerSupport: true,
        syllabus: ["Advanced Java Coding", "Cloud Infrastructure Dev", "Cyber Threat Landscapes", "Dynamic Programming Projects"],
        imageColor: "linear-gradient(135deg, #370617, #d00000)",
        city: "Dehradun",
        state: "Uttarakhand",
        brochureUrl: "https://uttaranchaluniversity.ac.in/"
    },

    // --- VGU (Online) ---
    {
        id: "vgu-bca",
        title: "Online BCA (Data Science Focus)",
        university: "VGU (Online)",
        mode: "OL/ODL",
        level: "UG",
        category: "Computer Science",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 115000,
        discountPercent: 0,
        rating: 4.4,
        reviewsCount: 310,
        type: "Online assignments and LMS classes",
        eligibility: "12th Standard in any stream",
        careerSupport: true,
        syllabus: ["Data Mining", "Foundations of AI", "Python Scripting", "Database Query Languages"],
        imageColor: "linear-gradient(135deg, #03071e, #370617)",
        city: "Jaipur",
        state: "Rajasthan",
        brochureUrl: "https://vgu.ac.in/"
    },
    {
        id: "vgu-mba",
        title: "Online MBA (Agri-Business Management)",
        university: "VGU (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Management",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 160000,
        discountPercent: 10,
        rating: 4.5,
        reviewsCount: 420,
        type: "Live seminars & project implementations",
        eligibility: "Bachelor's degree in any discipline",
        careerSupport: true,
        syllabus: ["Agri-Products Economics", "Cold Chain Logistics", "Agri-Supply Optimization", "Rural Marketing Strategies"],
        imageColor: "linear-gradient(135deg, #03071e, #f72585)",
        city: "Jaipur",
        state: "Rajasthan",
        brochureUrl: "https://vgu.ac.in/"
    },

    // --- VIT (Online) ---
    {
        id: "vit-mba",
        title: "Online MBA (Core Management Focus)",
        university: "VIT (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Management",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 250000,
        discountPercent: 0,
        rating: 4.7,
        reviewsCount: 1550,
        type: "Recorded Videos + Weekly Q&A Panels",
        eligibility: "Bachelor's degree with min 50% marks",
        careerSupport: true,
        syllabus: ["Marketing Administration", "HR Strategy Development", "Financial Accounting & Modeling", "Operations Research Models"],
        imageColor: "linear-gradient(135deg, #2b1100, #5c2c16)",
        city: "Vellore",
        state: "Tamil Nadu",
        brochureUrl: "https://vit.ac.in/"
    },
    {
        id: "vit-mca",
        title: "Online MCA in Software Engineering",
        university: "VIT (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Computer Science",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 210000,
        discountPercent: 8,
        rating: 4.8,
        reviewsCount: 2010,
        type: "Direct VIT Learning Portal Interaction",
        eligibility: "Bachelor's degree with Mathematics stream",
        careerSupport: true,
        syllabus: ["Full Stack Engineering", "DevOps & Cloud Orchestration", "Mobile Application Architecture", "Project Quality Metrics"],
        imageColor: "linear-gradient(135deg, #2b1100, #8d4f2a)",
        city: "Vellore",
        state: "Tamil Nadu",
        brochureUrl: "https://vit.ac.in/"
    },

    // --- VU (Online) ---
    {
        id: "vu-mca",
        title: "Online MCA (Advanced Application Development)",
        university: "VU (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Computer Science",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 150000,
        discountPercent: 0,
        rating: 4.4,
        reviewsCount: 410,
        type: "Recorded & interactive web panels",
        eligibility: "BCA / Bachelor's in CS / IT",
        careerSupport: true,
        syllabus: ["Enterprise Java Coding", "Cloud Infrastructure Development", "Cyber Security", "Web Frameworks"],
        imageColor: "linear-gradient(135deg, #10002b, #3c096c)",
        city: "Pune",
        state: "Maharashtra",
        brochureUrl: "https://www.vupune.ac.in/"
    },
    {
        id: "vu-mba",
        title: "Online MBA (Finance / Marketing Dynamics)",
        university: "VU (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Management",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 190000,
        discountPercent: 10,
        rating: 4.6,
        reviewsCount: 520,
        type: "LMS interactive classes",
        eligibility: "Graduation degree with min 50% aggregate",
        careerSupport: true,
        syllabus: ["Risk Management", "Product Strategy Development", "Consumer Psychology", "Portfolio Analytics"],
        imageColor: "linear-gradient(135deg, #10002b, #7b2cbf)",
        city: "Pune",
        state: "Maharashtra",
        brochureUrl: "https://www.vupune.ac.in/"
    },

    // --- JIIT (Online) ---
    {
        id: "jiit-mtech",
        title: "Online M.Tech in Computer Science & Engineering",
        university: "JIIT (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Computer Science",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 210000,
        discountPercent: 0,
        rating: 4.7,
        reviewsCount: 380,
        type: "Online lectures + Lab assignments on virtual environments",
        eligibility: "B.Tech/BE in CS/IT or MCA/M.Sc. in CS",
        careerSupport: true,
        syllabus: ["Advanced Algorithmic Design", "Cryptography & Secure Systems", "Distributed Cloud Architecture", "Deep Learning Models"],
        imageColor: "linear-gradient(135deg, #03071e, #1a0f30)",
        city: "Noida",
        state: "Uttar Pradesh",
        brochureUrl: "https://www.jiit.ac.in/"
    },

    // --- Birchwood (Executive) ---
    {
        id: "birchwood-mba",
        title: "Global Executive MBA",
        university: "Birchwood (Executive)",
        mode: "Executive",
        level: "PG",
        category: "Management",
        duration: "1 Year",
        durationWeeks: 52,
        cost: 450000,
        discountPercent: 5,
        rating: 4.6,
        reviewsCount: 310,
        type: "Live weekend interactive cohorts",
        eligibility: "Bachelor's degree with min 2 years of work experience",
        careerSupport: true,
        syllabus: ["Global Leadership Models", "Macroeconomics and Corporate Strategy", "Venture Investments", "Innovation Management"],
        imageColor: "linear-gradient(135deg, #143601, #244f0b)",
        city: "Bangalore",
        state: "Karnataka",
        brochureUrl: "https://birchwood.edu/"
    },

    // --- EIMT (Executive) ---
    {
        id: "eimt-ds",
        title: "Executive Certificate in Data Science",
        university: "EIMT (Executive)",
        mode: "Executive",
        level: "PG",
        category: "Data Science",
        duration: "9 Months",
        durationWeeks: 36,
        cost: 380000,
        discountPercent: 12,
        rating: 4.8,
        reviewsCount: 220,
        type: "Live interactive international cohort lectures",
        eligibility: "Bachelor's degree in quantitative field or IT background",
        careerSupport: true,
        syllabus: ["Python Programming for Analysis", "Deep Neural Networks", "Natural Language Processing", "Cloud MLOps Pipeline"],
        imageColor: "linear-gradient(135deg, #0b1f3b, #1d3557)",
        city: "Zurich",
        state: "Switzerland",
        brochureUrl: "https://eimt.ch/"
    },

    // --- UpGrad (Executive) ---
    {
        id: "upgrad-mba",
        title: "Executive MBA in Global Business",
        university: "UpGrad (Executive)",
        mode: "Executive",
        level: "PG",
        category: "Management",
        duration: "18 Months",
        durationWeeks: 72,
        cost: 320000,
        discountPercent: 10,
        rating: 4.8,
        reviewsCount: 2450,
        type: "Cohort-based Online Classes + Campus visits",
        eligibility: "Graduation with minimum 3 years of work experience",
        careerSupport: true,
        syllabus: ["Global Trade Macroeconomics", "Mergers and Acquisitions", "Corporate Restructuring", "Executive Communication Strategy"],
        imageColor: "linear-gradient(135deg, #1c1c1c, #3d0c02)",
        city: "Mumbai",
        state: "Maharashtra",
        brochureUrl: "https://www.upgrad.com/"
    },

    // --- FCU (Executive) ---
    {
        id: "fcu-mba",
        title: "Executive MBA (Strategic Management)",
        university: "FCU (Executive)",
        mode: "Executive",
        level: "PG",
        category: "Management",
        duration: "1 Year",
        durationWeeks: 52,
        cost: 290000,
        discountPercent: 0,
        rating: 4.5,
        reviewsCount: 190,
        type: "Self-paced modules + Live masterclasses",
        eligibility: "Bachelor's degree with min 2 years of work experience",
        careerSupport: true,
        syllabus: ["Competitive Strategy", "Corporate Governance Rules", "Leadership Development", "Digital Transformation Management"],
        imageColor: "linear-gradient(135deg, #2b2d42, #1b263b)",
        city: "Singapore",
        state: "Singapore",
        brochureUrl: "https://www.fcu.edu.sg/"
    },

    // --- BOSSE (Regular) ---
    {
        id: "bosse-12",
        title: "Secondary Education Certification (Grade 12 Equivalent)",
        university: "BOSSE (Regular)",
        mode: "Distance",
        level: "UG",
        category: "Arts / Humanities",
        duration: "1 Year",
        durationWeeks: 52,
        cost: 25000,
        discountPercent: 0,
        rating: 4.1,
        reviewsCount: 1400,
        type: "Regular schooling classes / Board Examinations",
        eligibility: "Class 10th Passed",
        careerSupport: false,
        syllabus: ["English Language", "General Science Foundations", "Social Studies Studies", "Mathematics Fundamentals"],
        imageColor: "linear-gradient(135deg, #22577a, #38a3a5)",
        city: "Gangtok",
        state: "Sikkim",
        brochureUrl: "https://www.bosse.ac.in/"
    },

    // --- MUFTEL (F-Tel) ---
    {
        id: "muftel-telecom",
        title: "PG Program in Telecom Management",
        university: "MUFTEL (F-Tel)",
        mode: "Distance",
        level: "PG",
        category: "Management",
        duration: "1 Year",
        durationWeeks: 52,
        cost: 110000,
        discountPercent: 0,
        rating: 4.4,
        reviewsCount: 180,
        type: "Recorded & live technical classes",
        eligibility: "BE/B.Tech or B.Sc. in Electronics / IT / Telecom",
        careerSupport: true,
        syllabus: ["Wireless Network Technologies", "Telecom Economics & Operations", "Regulatory Policies", "IoT & Future Networks"],
        imageColor: "linear-gradient(135deg, #023e8a, #0077b6)",
        city: "Manipal",
        state: "Karnataka",
        brochureUrl: "https://manipal.edu/"
    },

    // --- MUODL (Distance) ---
    {
        id: "muodl-bcom",
        title: "Distance B.Com (Business Commerce)",
        university: "MUODL (Distance)",
        mode: "Distance",
        level: "UG",
        category: "Commerce",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 85000,
        discountPercent: 5,
        rating: 4.3,
        reviewsCount: 950,
        type: "Study Material (SLM) + Periodic Mentoring",
        eligibility: "12th Standard Passed (any stream)",
        careerSupport: false,
        syllabus: ["Financial Accounting Basics", "Corporate Regulations", "Income Tax Rules", "Auditing Guidelines"],
        imageColor: "linear-gradient(135deg, #42033d, #7c1158)",
        city: "Sikkim",
        state: "Sikkim",
        brochureUrl: "https://smude.edu.in/"
    },
    {
        id: "muodl-bba",
        title: "Distance BBA (General Business Management)",
        university: "MUODL (Distance)",
        mode: "Distance",
        level: "UG",
        category: "Management",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 95000,
        discountPercent: 0,
        rating: 4.4,
        reviewsCount: 1120,
        type: "Correspondence study materials + assessments",
        eligibility: "Class 12th completion (any stream)",
        careerSupport: false,
        syllabus: ["Business communication", "Marketing management", "Basic Business Law", "Economics foundations"],
        imageColor: "linear-gradient(135deg, #42033d, #aa167d)",
        city: "Sikkim",
        state: "Sikkim",
        brochureUrl: "https://smude.edu.in/"
    },

    // --- MUOL (Online) ---
    {
        id: "muol-bca",
        title: "Online BCA (General Computing)",
        university: "MUOL (Online)",
        mode: "OL/ODL",
        level: "UG",
        category: "Computer Science",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 125000,
        discountPercent: 0,
        rating: 4.5,
        reviewsCount: 780,
        type: "100% Online study modules",
        eligibility: "Class 12th passed (any stream)",
        syllabus: ["Core Programming Concepts", "Databases", "Networking", "Software Engineering"],
        imageColor: "linear-gradient(135deg, #1b263b, #000814)",
        city: "Manipal",
        state: "Karnataka",
        brochureUrl: "https://www.manipalonline.com/",
        careerSupport: true
    },
    {
        id: "muol-mba",
        title: "Online MBA (Corporate Management)",
        university: "MUOL (Online)",
        mode: "OL/ODL",
        level: "PG",
        category: "Management",
        duration: "2 Years",
        durationWeeks: 104,
        cost: 220000,
        discountPercent: 10,
        rating: 4.7,
        reviewsCount: 1240,
        type: "Live webinars + Group tasks",
        eligibility: "Bachelor's degree with 50% aggregate",
        careerSupport: true,
        syllabus: ["Strategic Decision Models", "Consumer Behaviors", "Macroeconomics", "Organizational Leadership"],
        imageColor: "linear-gradient(135deg, #1b263b, #003566)",
        city: "Manipal",
        state: "Karnataka",
        brochureUrl: "https://www.manipalonline.com/"
    },

    // --- SVSU (Distance) ---
    {
        id: "svsu-ba",
        title: "Distance Bachelor of Arts (BA Core Studies)",
        university: "SVSU (Distance)",
        mode: "Distance",
        level: "UG",
        category: "Arts / Humanities",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 60000,
        discountPercent: 0,
        rating: 4.2,
        reviewsCount: 1400,
        type: "SLM Study Material Books + Annual Examinations",
        eligibility: "12th Standard Passed (any stream)",
        careerSupport: false,
        syllabus: ["History of Modern India", "Political Systems Principles", "English Language Studies", "Sociology Foundations"],
        imageColor: "linear-gradient(135deg, #1b0000, #3e2723)",
        city: "Meerut",
        state: "Uttar Pradesh",
        brochureUrl: "https://subhartidde.com/"
    },
    {
        id: "svsu-bcom",
        title: "Distance Bachelor of Commerce (B.Com General)",
        university: "SVSU (Distance)",
        mode: "Distance",
        level: "UG",
        category: "Commerce",
        duration: "3 Years",
        durationWeeks: 156,
        cost: 65000,
        discountPercent: 0,
        rating: 4.3,
        reviewsCount: 890,
        type: "Correspondence study books + Annual exam centers",
        eligibility: "12th Standard passed (any stream)",
        careerSupport: false,
        syllabus: ["Accounting principles", "Business law and codes", "Macroeconomics", "Auditing Basics"],
        imageColor: "linear-gradient(135deg, #1b0000, #5c2c16)",
        city: "Meerut",
        state: "Uttar Pradesh",
        brochureUrl: "https://subhartidde.com/"
    }
];

// Application State
let courses = [];
let selectedCourses = [];
let filters = {
    search: '',
    degrees: [],
    levels: [],
    modes: [],
    states: [],
    categories: [],
    universities: [],
    approvals: [],
    examPatterns: [],
    maxCost: 700000,
    sortBy: 'recommended'
};

// DOM Elements
const coursesGrid = document.getElementById('courses-grid');
const resultCountEl = document.getElementById('result-count');
const searchInput = document.getElementById('search-input');
const costSlider = document.getElementById('cost-slider');
const costValueEl = document.getElementById('cost-value');
const compareTray = document.getElementById('compare-tray');
const trayItemsContainer = document.getElementById('tray-items');
const compareActionBtn = document.getElementById('compare-action-btn');
const comparisonModal = document.getElementById('comparison-modal');
const modalContentBody = document.getElementById('modal-content-body');
const closeModalBtn = document.getElementById('close-modal-btn');
const totalCoursesStat = document.getElementById('total-courses-stat');
const avgRatingStat = document.getElementById('avg-rating-stat');

// Degree Extraction Helper
function getCourseDegree(course) {
    const title = course.title || '';
    if (/\bMBA\b/i.test(title)) return 'MBA';
    if (/\bBCA\b/i.test(title)) return 'BCA';
    if (/\bBBA\b/i.test(title)) return 'BBA';
    if (/\bMCA\b/i.test(title)) return 'MCA';
    if (/\bB\.Com\b/i.test(title) || /\bBCom\b/i.test(title)) return 'B.Com';
    if (/\bBA\b/i.test(title)) return 'BA';
    if (/\bPGDBA\b/i.test(title) || /\bDiploma\b/i.test(title)) return 'Diploma / PGDBA';
    return 'Other';
}

// Update dashboard metrics
function updateDashboardStats() {
    if (totalCoursesStat) totalCoursesStat.textContent = courses.length;
}

// Generate checkbox dynamic lists
function renderFilterCheckboxes() {
    const degreesContainer = document.getElementById('degrees-filter');
    const levelsContainer = document.getElementById('levels-filter');
    const modesContainer = document.getElementById('modes-filter');
    const statesContainer = document.getElementById('states-filter');
    const categoriesContainer = document.getElementById('categories-filter');
    const universitiesContainer = document.getElementById('universities-filter');

    // Degrees / Program Titles
    if (degreesContainer) {
        const degrees = [...new Set(courses.map(c => getCourseDegree(c)))].filter(Boolean).sort();
        degreesContainer.innerHTML = degrees.map(deg => `
            <label class="custom-checkbox">
                <input type="checkbox" name="degree" value="${deg}" ${filters.degrees.includes(deg) ? 'checked' : ''}>
                <span class="checkbox-box"></span>
                ${deg}
            </label>
        `).join('');
    }

    // Levels
    const levels = [...new Set(courses.map(c => c.level))].filter(Boolean);
    levelsContainer.innerHTML = levels.map(level => `
        <label class="custom-checkbox">
            <input type="checkbox" name="level" value="${level}" ${filters.levels.includes(level) ? 'checked' : ''}>
            <span class="checkbox-box"></span>
            ${level === 'UG' ? 'Undergraduate (UG)' : 'Postgraduate (PG)'}
        </label>
    `).join('');

    // Delivery Modes
    const modes = [...new Set(courses.map(c => c.mode))].filter(Boolean);
    modesContainer.innerHTML = modes.map(mode => `
        <label class="custom-checkbox">
            <input type="checkbox" name="mode" value="${mode}" ${filters.modes.includes(mode) ? 'checked' : ''}>
            <span class="checkbox-box"></span>
            ${mode}
        </label>
    `).join('');

    // States
    const states = [...new Set(courses.map(c => c.state))].filter(Boolean).sort();
    statesContainer.innerHTML = states.map(state => `
        <label class="custom-checkbox">
            <input type="checkbox" name="state" value="${state}" ${filters.states.includes(state) ? 'checked' : ''}>
            <span class="checkbox-box"></span>
            ${state}
        </label>
    `).join('');

    // Categories
    const categories = [...new Set(courses.map(c => c.category))].filter(Boolean);
    categoriesContainer.innerHTML = categories.map(cat => `
        <label class="custom-checkbox">
            <input type="checkbox" name="category" value="${cat}" ${filters.categories.includes(cat) ? 'checked' : ''}>
            <span class="checkbox-box"></span>
            ${cat}
        </label>
    `).join('');

    // Universities
    const universities = [...new Set(courses.map(c => c.university))].filter(Boolean);
    universitiesContainer.innerHTML = universities.map(univ => `
        <label class="custom-checkbox">
            <input type="checkbox" name="university" value="${univ}" ${filters.universities.includes(univ) ? 'checked' : ''}>
            <span class="checkbox-box"></span>
            ${univ}
        </label>
    `).join('');

    // Accreditations
    const approvalsContainer = document.getElementById('approvals-filter');
    let allApprovals = [];
    courses.forEach(c => { if (c.approvals) allApprovals.push(...c.approvals); });
    const uniqueApprovals = [...new Set(allApprovals)].filter(Boolean).sort();
    if (approvalsContainer) {
        approvalsContainer.innerHTML = uniqueApprovals.map(appr => `
            <label class="custom-checkbox">
                <input type="checkbox" name="approval" value="${appr}" ${filters.approvals.includes(appr) ? 'checked' : ''}>
                <span class="checkbox-box"></span>
                ${appr}
            </label>
        `).join('');
    }

    // Exam Patterns
    const examPatternContainer = document.getElementById('exam-pattern-filter');
    if (examPatternContainer) {
        const patterns = [...new Set(courses.map(c => c.examPattern))].filter(Boolean).sort();
        examPatternContainer.innerHTML = patterns.map(pat => `
            <label class="custom-checkbox">
                <input type="checkbox" name="examPattern" value="${pat}" ${filters.examPatterns.includes(pat) ? 'checked' : ''}>
                <span class="checkbox-box"></span>
                ${pat}
            </label>
        `).join('');
    }
}

// Render active filter pills
function renderActiveFilterChips() {
    const chipsBar = document.getElementById('active-filters-bar');
    if (!chipsBar) return;

    let chips = [];

    if (filters.search) {
        chips.push({ label: `Search: "${filters.search}"`, type: 'search' });
    }
    filters.degrees.forEach(d => chips.push({ label: `Degree: ${d}`, type: 'degree', value: d }));
    filters.levels.forEach(l => chips.push({ label: `Level: ${l}`, type: 'level', value: l }));
    filters.modes.forEach(m => chips.push({ label: `Mode: ${m}`, type: 'mode', value: m }));
    filters.states.forEach(s => chips.push({ label: `State: ${s}`, type: 'state', value: s }));
    filters.categories.forEach(c => chips.push({ label: `Domain: ${c}`, type: 'category', value: c }));
    filters.universities.forEach(u => chips.push({ label: `Univ: ${u}`, type: 'university', value: u }));
    filters.approvals.forEach(a => chips.push({ label: `Approval: ${a}`, type: 'approval', value: a }));
    filters.examPatterns.forEach(e => chips.push({ label: `Exam: ${e}`, type: 'examPattern', value: e }));
    if (filters.maxCost < 700000) {
        chips.push({ label: `Max Fee: ₹${filters.maxCost.toLocaleString('en-IN')}`, type: 'maxCost' });
    }

    if (chips.length === 0) {
        chipsBar.style.display = 'none';
        chipsBar.innerHTML = '';
        return;
    }

    chipsBar.style.display = 'flex';
    chipsBar.innerHTML = `
        <span style="font-size:0.8rem; color:var(--text-muted); font-weight:600; margin-right:0.3rem;">Active Filters:</span>
        ${chips.map(chip => `
            <span class="filter-chip">
                ${chip.label}
                <span class="chip-remove" data-type="${chip.type}" data-value="${chip.value || ''}">&times;</span>
            </span>
        `).join('')}
        <button class="clear-all-chip" id="clear-all-chips-btn">Clear All 🔄</button>
    `;

    // Bind remove events
    chipsBar.querySelectorAll('.chip-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const type = e.currentTarget.getAttribute('data-type');
            const value = e.currentTarget.getAttribute('data-value');
            removeSingleFilter(type, value);
        });
    });

    const clearAllBtn = document.getElementById('clear-all-chips-btn');
    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', resetAllFilters);
    }
}

// Remove single filter tag
function removeSingleFilter(type, value) {
    if (type === 'search') {
        filters.search = '';
        if (searchInput) searchInput.value = '';
    } else if (type === 'maxCost') {
        filters.maxCost = 700000;
        if (costSlider) costSlider.value = 700000;
        if (costValueEl) costValueEl.textContent = '₹7,00,000';
    } else if (type === 'degree') {
        filters.degrees = filters.degrees.filter(d => d !== value);
    } else if (type === 'level') {
        filters.levels = filters.levels.filter(l => l !== value);
    } else if (type === 'mode') {
        filters.modes = filters.modes.filter(m => m !== value);
    } else if (type === 'state') {
        filters.states = filters.states.filter(s => s !== value);
    } else if (type === 'category') {
        filters.categories = filters.categories.filter(c => c !== value);
    } else if (type === 'university') {
        filters.universities = filters.universities.filter(u => u !== value);
    } else if (type === 'approval') {
        filters.approvals = filters.approvals.filter(a => a !== value);
    } else if (type === 'examPattern') {
        filters.examPatterns = filters.examPatterns.filter(e => e !== value);
    }

    renderFilterCheckboxes();
    renderCourses();
}

// Reset all filters
function resetAllFilters() {
    filters.search = '';
    filters.degrees = [];
    filters.levels = [];
    filters.modes = [];
    filters.states = [];
    filters.categories = [];
    filters.universities = [];
    filters.approvals = [];
    filters.examPatterns = [];
    filters.maxCost = 700000;
    filters.sortBy = 'recommended';

    if (searchInput) searchInput.value = '';

    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) sortSelect.value = 'recommended';

    if (costSlider) costSlider.value = 700000;
    if (costValueEl) costValueEl.textContent = '₹7,00,000';

    document.querySelectorAll('.filters-sidebar input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
    });

    renderFilterCheckboxes();
    renderCourses();
}

// Render filtered courses
function renderCourses() {
    renderActiveFilterChips();

    let filtered = courses.filter(course => {
        const matchesSearch = (course.title || '').toLowerCase().includes(filters.search.toLowerCase()) ||
            (course.university || '').toLowerCase().includes(filters.search.toLowerCase()) ||
            (course.category || '').toLowerCase().includes(filters.search.toLowerCase()) ||
            (course.city || '').toLowerCase().includes(filters.search.toLowerCase()) ||
            (course.state || '').toLowerCase().includes(filters.search.toLowerCase());

        const courseDegree = getCourseDegree(course);
        const matchesDegree = filters.degrees.length === 0 || filters.degrees.includes(courseDegree);
        const matchesLevel = filters.levels.length === 0 || filters.levels.includes(course.level);
        const matchesMode = filters.modes.length === 0 || filters.modes.includes(course.mode);
        const matchesState = filters.states.length === 0 || filters.states.includes(course.state);
        const matchesCategory = filters.categories.length === 0 || filters.categories.includes(course.category);
        const matchesUniversity = filters.universities.length === 0 || filters.universities.includes(course.university);
        const matchesApproval = filters.approvals.length === 0 || filters.approvals.some(a => (course.approvals || []).includes(a));
        const matchesExam = filters.examPatterns.length === 0 || filters.examPatterns.includes(course.examPattern);

        const effectiveCost = getEffectiveCost(course);
        const matchesCost = effectiveCost <= filters.maxCost;

        return matchesSearch && matchesDegree && matchesLevel && matchesMode && matchesState && matchesCategory && matchesUniversity && matchesApproval && matchesExam && matchesCost;
    });

    // Sorting logic
    if (filters.sortBy === 'price-asc') {
        filtered.sort((a, b) => getEffectiveCost(a) - getEffectiveCost(b));
    } else if (filters.sortBy === 'price-desc') {
        filtered.sort((a, b) => getEffectiveCost(b) - getEffectiveCost(a));
    } else if (filters.sortBy === 'duration-asc') {
        filtered.sort((a, b) => (a.durationWeeks || 0) - (b.durationWeeks || 0));
    } else if (filters.sortBy === 'title-asc') {
        filtered.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
    }

    resultCountEl.textContent = `${filtered.length} courses match your criteria`;

    if (filtered.length === 0) {
        coursesGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <div class="empty-icon">🔍</div>
                <h3>No courses found</h3>
                <p>Try resetting some filters or tweaking your search terms.</p>
                <button onclick="resetAllFilters()" class="compare-action-btn" style="margin-top:1rem; padding:0.6rem 1.5rem;">Reset All Filters 🔄</button>
            </div>
        `;
        return;
    }

    coursesGrid.innerHTML = filtered.map((course, index) => {
        const isAdded = selectedCourses.some(c => c.id === course.id);
        const hasDiscount = course.discountPercent > 0;
        const originalCost = course.cost;
        const finalCost = getEffectiveCost(course);
        const animDelay = (index * 0.04).toFixed(2);

        return `
            <div class="course-card" data-id="${course.id}" style="animation-delay: ${animDelay}s;">
                <div class="card-banner" style="background: ${course.imageColor || 'linear-gradient(135deg, #1f2937, #111827)'}">
                    <span class="univ-badge">${course.university}</span>
                    <span class="level-badge ${course.level ? course.level.toLowerCase() : 'ug'}">${course.level}</span>
                </div>
                <div class="card-body">
                    <h3 class="course-title">${course.title}</h3>
                    
                    <div style="font-size:0.8rem; color:var(--text-muted); display:flex; align-items:center; gap:0.25rem; margin-bottom:0.6rem;">
                        <span>📍</span>
                        <span>${course.city || 'N/A'}, ${course.state || 'N/A'}</span>
                    </div>

                    <div class="card-metrics">
                        <div class="metric">
                            <span class="metric-label">Duration</span>
                            <span class="metric-val">${course.duration}</span>
                        </div>
                        <div class="metric">
                            <span class="metric-label">Domain</span>
                            <span class="metric-val">${course.category}</span>
                        </div>
                        <div class="metric">
                            <span class="metric-label">Exam Mode</span>
                            <span class="metric-val" style="font-size: 0.8rem; font-weight:600; color:var(--primary);">${course.examPattern || 'N/A'}</span>
                        </div>
                        <div class="metric">
                            <span class="metric-label">Delivery Mode</span>
                            <span class="metric-val" style="font-size: 0.8rem; line-height: 1.1;">
                                ${(course.type || '').split(' / ')[0]}
                            </span>
                        </div>
                    </div>
                    
                    <div style="display:flex; gap:0.4rem; flex-wrap:wrap; margin-top:0.2rem;">
                        ${(course.approvals || []).map(a => `<span style="font-size:0.65rem; background:rgba(255,255,255,0.03); padding:0.15rem 0.4rem; border-radius:4px; border:1px solid rgba(255,255,255,0.08); color:var(--text-muted);">${a}</span>`).join('')}
                    </div>
                    
                    <div class="card-actions" style="gap: 0.5rem;">
                        <div class="cost-display">
                            <span class="metric-label">Total Fee</span>
                            ${hasDiscount ? `
                                <div style="display:flex; flex-direction:column;">
                                    <span style="text-decoration: line-through; font-size: 0.85rem; color: var(--text-muted); line-height:1;">
                                        ₹${originalCost.toLocaleString('en-IN')}
                                    </span>
                                    <span class="cost-amount" style="font-size:1.15rem;">
                                        ₹${finalCost.toLocaleString('en-IN')} 
                                    </span>
                                </div>
                            ` : `
                                <span class="cost-amount" style="font-size:1.15rem;">₹${finalCost.toLocaleString('en-IN')}</span>
                            `}
                            ${course.emi ? `<div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.2rem; font-weight:600;">EMI from ₹${course.emi.toLocaleString('en-IN')}/mo</div>` : ''}
                        </div>
                        
                        <div style="display:flex; gap:0.4rem;">
                            <a href="${course.brochureUrl || '#'}" target="_blank" class="compare-btn" style="text-decoration:none; padding: 0.5rem 0.6rem; border-color:rgba(255,255,255,0.15); color:var(--text-muted);" title="Download Syllabus Brochure">
                                📄
                            </a>
                            <button class="compare-btn ${isAdded ? 'active' : ''}" data-id="${course.id}">
                                <span>${isAdded ? 'Selected' : 'Compare'}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Bind event listeners to compare buttons
    document.querySelectorAll('.compare-btn').forEach(btn => {
        if (btn.hasAttribute('data-id')) {
            btn.addEventListener('click', (e) => {
                const courseId = e.currentTarget.getAttribute('data-id');
                toggleCompareCourse(courseId);
            });
        }
    });
}

// Setup Event Listeners
function setupEventListeners() {
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            filters.search = e.target.value;
            renderCourses();
        });
    }

    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            filters.sortBy = e.target.value;
            renderCourses();
        });
    }

    if (costSlider) {
        costSlider.addEventListener('input', (e) => {
            filters.maxCost = parseInt(e.target.value);
            costValueEl.textContent = `₹${filters.maxCost.toLocaleString('en-IN')}`;
            renderCourses();
        });
    }

    // Clear all buttons
    const resetHeaderBtn = document.getElementById('reset-filters-btn-header');
    const resetFooterBtn = document.getElementById('reset-filters-btn-footer');
    if (resetHeaderBtn) resetHeaderBtn.addEventListener('click', resetAllFilters);
    if (resetFooterBtn) resetFooterBtn.addEventListener('click', resetAllFilters);

    document.querySelectorAll('.filters-sidebar').forEach(sidebar => {
        sidebar.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox') {
                const name = e.target.name;
                const value = e.target.value;
                const checked = e.target.checked;

                if (name === 'degree') {
                    if (checked) filters.degrees.push(value);
                    else filters.degrees = filters.degrees.filter(d => d !== value);
                } else if (name === 'level') {
                    if (checked) filters.levels.push(value);
                    else filters.levels = filters.levels.filter(l => l !== value);
                } else if (name === 'mode') {
                    if (checked) filters.modes.push(value);
                    else filters.modes = filters.modes.filter(m => m !== value);
                } else if (name === 'state') {
                    if (checked) filters.states.push(value);
                    else filters.states = filters.states.filter(s => s !== value);
                } else if (name === 'category') {
                    if (checked) filters.categories.push(value);
                    else filters.categories = filters.categories.filter(c => c !== value);
                } else if (name === 'university') {
                    if (checked) filters.universities.push(value);
                    else filters.universities = filters.universities.filter(u => u !== value);
                } else if (name === 'approval') {
                    if (checked) filters.approvals.push(value);
                    else filters.approvals = filters.approvals.filter(a => a !== value);
                } else if (name === 'examPattern') {
                    if (checked) filters.examPatterns.push(value);
                    else filters.examPatterns = filters.examPatterns.filter(e => e !== value);
                }

                renderCourses();
            }
        });
    });

    compareActionBtn.addEventListener('click', openComparisonModal);
    closeModalBtn.addEventListener('click', closeComparisonModal);

    comparisonModal.addEventListener('click', (e) => {
        if (e.target === comparisonModal) closeComparisonModal();
    });

    // Mobile/Universal Drawer Toggle
    const toggleFiltersBtn = document.getElementById('toggle-filters-btn');
    const filterDrawer = document.getElementById('filter-drawer');
    const closeFiltersBtn = document.getElementById('close-filters-btn');

    if (toggleFiltersBtn && filterDrawer) {
        toggleFiltersBtn.addEventListener('click', () => {
            filterDrawer.classList.add('open');
        });

        closeFiltersBtn.addEventListener('click', () => {
            filterDrawer.classList.remove('open');
        });

        filterDrawer.addEventListener('click', (e) => {
            if (e.target === filterDrawer) {
                filterDrawer.classList.remove('open');
            }
        });
    }

    setupQuickCompare();
}

// Render dynamic comparison matrix inside modal
function renderComparisonMatrix() {
    const minCost = Math.min(...selectedCourses.map(c => getEffectiveCost(c)));
    const minWeeks = Math.min(...selectedCourses.map(c => c.durationWeeks));

    const cols = selectedCourses;

    let html = `
        <div class="comparison-table-wrapper">
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th class="feature-label">Feature</th>
                        ${cols.map(c => `
                            <th class="table-header-col">
                                <div class="univ-name">${c.university}</div>
                                <div class="course-name">${c.title}</div>
                            </th>
                        `).join('')}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="feature-label">Program Level</td>
                        ${cols.map(c => `<td><span class="level-badge ${c.level ? c.level.toLowerCase() : 'ug'}">${c.level === 'UG' ? 'Undergraduate' : 'Postgraduate'}</span></td>`).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Campus Location</td>
                        ${cols.map(c => `<td>📍 <strong>${c.city || 'N/A'}, ${c.state || 'N/A'}</strong></td>`).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Tuition Fee</td>
                        ${cols.map(c => {
        const effectiveCost = getEffectiveCost(c);
        const originalCost = c.cost;
        const isBest = effectiveCost === minCost;
        const hasDiscount = c.discountPercent > 0;

        return `<td class="${isBest ? 'highlight-best' : ''}">
                                ${hasDiscount ? `
                                    <span style="text-decoration: line-through; font-size: 0.8rem; color: var(--text-muted);">
                                        ₹${originalCost.toLocaleString('en-IN')}
                                    </span><br>
                                ` : ''}
                                <strong>₹${effectiveCost.toLocaleString('en-IN')}</strong>
                                ${hasDiscount ? `<span style="font-size:0.75rem; color:var(--accent); font-weight:700;"> (-${c.discountPercent}%)</span>` : ''}
                                ${isBest ? '<div style="font-size:0.75rem; color:var(--accent); font-weight:bold; margin-top:4px;">Best Price</div>' : ''}
                            </td>`;
    }).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Fee Breakdown</td>
                        ${cols.map(c => `
                            <td>
                                <ul style="list-style:none; padding:0; margin:0; font-size:0.75rem; color:var(--text-muted);">
                                    ${c.otp > 0 ? `<li style="margin-bottom:2px;"><strong style="color:#fff;">OTP:</strong> ₹${c.otp.toLocaleString('en-IN')}</li>` : ''}
                                    ${c.sem1 > 0 ? `<li style="margin-bottom:2px;"><strong>Sem 1:</strong> ₹${c.sem1.toLocaleString('en-IN')}</li>` : ''}
                                    ${c.sem2 > 0 ? `<li style="margin-bottom:2px;"><strong>Sem 2:</strong> ₹${c.sem2.toLocaleString('en-IN')}</li>` : ''}
                                    ${c.sem3 > 0 ? `<li style="margin-bottom:2px;"><strong>Sem 3:</strong> ₹${c.sem3.toLocaleString('en-IN')}</li>` : ''}
                                    ${c.sem4 > 0 ? `<li style="margin-bottom:2px;"><strong>Sem 4:</strong> ₹${c.sem4.toLocaleString('en-IN')}</li>` : ''}
                                    ${c.sem5 > 0 ? `<li style="margin-bottom:2px;"><strong>Sem 5:</strong> ₹${c.sem5.toLocaleString('en-IN')}</li>` : ''}
                                    ${c.sem6 > 0 ? `<li style="margin-bottom:2px;"><strong>Sem 6:</strong> ₹${c.sem6.toLocaleString('en-IN')}</li>` : ''}
                                    ${c.emi > 0 ? `<li style="margin-top:4px; padding-top:4px; border-top:1px solid rgba(255,255,255,0.1);"><strong style="color:var(--primary);">EMI Options:</strong> ₹${c.emi.toLocaleString('en-IN')}/mo</li>` : ''}
                                </ul>
                            </td>
                        `).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Duration</td>
                        ${cols.map(c => {
        const isBest = c.durationWeeks === minWeeks;
        return `<td class="${isBest ? 'highlight-best' : ''}">
                                ${c.duration} (${c.durationWeeks} weeks)
                                ${isBest ? '<div style="font-size:0.75rem; color:var(--accent); font-weight:bold; margin-top:4px;">Shortest Program</div>' : ''}
                            </td>`;
    }).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Category / Domain</td>
                        ${cols.map(c => `<td>${c.category}</td>`).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Accreditations</td>
                        ${cols.map(c => `
                            <td>
                                <div style="display:flex; flex-direction:column; gap:0.3rem;">
                                    ${(c.approvals || []).map(a => `<span class="support-badge yes" style="font-size:0.75rem;">${a}</span>`).join('')}
                                </div>
                            </td>
                        `).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Prerequisites</td>
                        ${cols.map(c => `<td style="font-size:0.85rem; color:var(--text-muted);">${c.eligibility}</td>`).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Mode of Delivery</td>
                        ${cols.map(c => `<td style="font-size:0.85rem;">${c.type}</td>`).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Exam Pattern</td>
                        ${cols.map(c => `<td style="font-size:0.85rem; font-weight:600; color:var(--primary);">${c.examPattern || 'N/A'}</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>
    `;

    modalContentBody.innerHTML = html;
}

// Execute Init


// Render filtered courses
function renderCourses() {
    const filtered = courses.filter(course => {
        const matchesSearch = (course.title || '').toLowerCase().includes(filters.search.toLowerCase()) ||
            (course.university || '').toLowerCase().includes(filters.search.toLowerCase()) ||
            (course.category || '').toLowerCase().includes(filters.search.toLowerCase()) ||
            (course.city || '').toLowerCase().includes(filters.search.toLowerCase()) ||
            (course.state || '').toLowerCase().includes(filters.search.toLowerCase());

        const matchesLevel = filters.levels.length === 0 || filters.levels.includes(course.level);
        const matchesMode = filters.modes.length === 0 || filters.modes.includes(course.mode);
        const matchesState = filters.states.length === 0 || filters.states.includes(course.state);
        const matchesCategory = filters.categories.length === 0 || filters.categories.includes(course.category);
        const matchesUniversity = filters.universities.length === 0 || filters.universities.includes(course.university);
        const matchesApproval = filters.approvals.length === 0 || filters.approvals.some(a => (course.approvals || []).includes(a));
        const matchesExam = filters.examPatterns.length === 0 || filters.examPatterns.includes(course.examPattern);

        const effectiveCost = getEffectiveCost(course);
        const matchesCost = effectiveCost <= filters.maxCost;

        return matchesSearch && matchesLevel && matchesMode && matchesState && matchesCategory && matchesUniversity && matchesApproval && matchesExam && matchesCost;
    });

    resultCountEl.textContent = `${filtered.length} courses match your criteria`;

    if (filtered.length === 0) {
        coursesGrid.innerHTML = `
        < div class="empty-state" style = "grid-column: 1 / -1;" >
                <div class="empty-icon">🔍</div>
                <h3>No courses found</h3>
                <p>Try resetting some filters or tweaking your search terms.</p>
            </div >
        `;
        return;
    }

    coursesGrid.innerHTML = filtered.map((course, index) => {
        const isAdded = selectedCourses.some(c => c.id === course.id);
        const hasDiscount = course.discountPercent > 0;
        const originalCost = course.cost;
        const finalCost = getEffectiveCost(course);
        const animDelay = (index * 0.05).toFixed(2);

        return `
        < div class="course-card" data - id="${course.id}" style = "animation-delay: ${animDelay}s;" >
                <div class="card-banner" style="background: ${course.imageColor || 'linear-gradient(135deg, #1f2937, #111827)'}">
                    <span class="univ-badge">${course.university}</span>
                    <span class="level-badge ${course.level ? course.level.toLowerCase() : 'ug'}">${course.level}</span>
                </div>
                <div class="card-body">
                    <h3 class="course-title">${course.title}</h3>
                    
                    <div style="font-size:0.8rem; color:var(--text-muted); display:flex; align-items:center; gap:0.25rem; margin-bottom:0.6rem;">
                        <span>📍</span>
                        <span>${course.city || 'N/A'}, ${course.state || 'N/A'}</span>
                    </div>

                    <div class="card-metrics">
                        <div class="metric">
                            <span class="metric-label">Duration</span>
                            <span class="metric-val">${course.duration}</span>
                        </div>
                        <div class="metric">
                            <span class="metric-label">Type</span>
                            <span class="metric-val">${course.category}</span>
                        </div>
                        <div class="metric">
                            <span class="metric-label">Exam Mode</span>
                            <span class="metric-val" style="font-size: 0.8rem; font-weight:600; color:var(--primary);">${course.examPattern || 'N/A'}</span>
                        </div>
                        <div class="metric">
                            <span class="metric-label">Rating</span>
                            <div class="metric-val rating-row">
                                <span class="star-icon">★</span>
                                <span>${course.rating} (${course.reviewsCount})</span>
                            </div>
                        </div>
                        <div class="metric">
                            <span class="metric-label">Mode</span>
                            <span class="metric-val" style="font-size: 0.8rem; line-height: 1.1;">
                                ${(course.type || '').split(' / ')[0]}
                            </span>
                        </div>
                    </div>
                    
                    <div style="display:flex; gap:0.4rem; flex-wrap:wrap; margin-top:0.2rem;">
                        ${(course.approvals || []).map(a => `<span style="font-size:0.65rem; background:rgba(255,255,255,0.03); padding:0.15rem 0.4rem; border-radius:4px; border:1px solid rgba(255,255,255,0.08); color:var(--text-muted);">${a}</span>`).join('')}
                    </div>
                    
                    <div class="card-actions" style="gap: 0.5rem;">
                        <div class="cost-display">
                            <span class="metric-label">Total Fee</span>
                            ${hasDiscount ? `
                                <div style="display:flex; flex-direction:column;">
                                    <span style="text-decoration: line-through; font-size: 0.85rem; color: var(--text-muted); line-height:1;">
                                        ₹${originalCost.toLocaleString('en-IN')}
                                    </span>
                                    <span class="cost-amount" style="font-size:1.15rem;">
                                        ₹${finalCost.toLocaleString('en-IN')} 
                                    </span>
                                </div>
                            ` : `
                                <span class="cost-amount" style="font-size:1.15rem;">₹${finalCost.toLocaleString('en-IN')}</span>
                            `}
                            ${course.emi ? `<div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.2rem; font-weight:600;">EMI from ₹${course.emi.toLocaleString('en-IN')}/mo</div>` : ''}
                        </div>
                        
                        <div style="display:flex; gap:0.4rem;">
                            <a href="${course.brochureUrl || '#'}" target="_blank" class="compare-btn" style="text-decoration:none; padding: 0.5rem 0.6rem; border-color:rgba(255,255,255,0.15); color:var(--text-muted);" title="Download Syllabus Brochure">
                                📄
                            </a>
                            <button class="compare-btn ${isAdded ? 'active' : ''}" data-id="${course.id}">
                                <span>${isAdded ? 'Selected' : 'Compare'}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        `;
    }).join('');

    // Bind event listeners to compare buttons
    document.querySelectorAll('.compare-btn').forEach(btn => {
        // Toggle compare only for buttons that have data-id
        if (btn.hasAttribute('data-id')) {
            btn.addEventListener('click', (e) => {
                const courseId = e.currentTarget.getAttribute('data-id');
                toggleCompareCourse(courseId);
            });
        }
    });
}

// Toggle comparison course state
function toggleCompareCourse(id) {
    const course = courses.find(c => c.id === id);
    const index = selectedCourses.findIndex(c => c.id === id);

    if (index > -1) {
        selectedCourses.splice(index, 1);
    } else {
        if (selectedCourses.length >= 3) {
            alert("You can compare a maximum of 3 courses at a time.");
            return;
        }
        selectedCourses.push(course);
    }

    updateCompareTray();
    renderCourses();
}

// Update comparison tray UI
function updateCompareTray() {
    if (selectedCourses.length > 0) {
        compareTray.classList.add('visible');
        trayItemsContainer.innerHTML = selectedCourses.map(course => `
        < div class="tray-item" >
                <span>${course.university} - ${course.title.split(' ')[0]}...</span>
                <span class="remove-tray-item" data-id="${course.id}">✕</span>
            </div >
        `).join('');

        document.querySelectorAll('.remove-tray-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                toggleCompareCourse(id);
            });
        });
    } else {
        compareTray.classList.remove('visible');
    }
}

// Setup Event Listeners
function setupEventListeners() {
    searchInput.addEventListener('input', (e) => {
        filters.search = e.target.value;
        renderCourses();
    });

    costSlider.addEventListener('input', (e) => {
        filters.maxCost = parseInt(e.target.value);
        costValueEl.textContent = `₹${filters.maxCost.toLocaleString('en-IN')} `;
        renderCourses();
    });

    document.querySelectorAll('.filters-sidebar').forEach(sidebar => {
        sidebar.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox') {
                const name = e.target.name;
                const value = e.target.value;
                const checked = e.target.checked;

                if (name === 'level') {
                    if (checked) filters.levels.push(value);
                    else filters.levels = filters.levels.filter(l => l !== value);
                } else if (name === 'mode') {
                    if (checked) filters.modes.push(value);
                    else filters.modes = filters.modes.filter(m => m !== value);
                } else if (name === 'state') {
                    if (checked) filters.states.push(value);
                    else filters.states = filters.states.filter(s => s !== value);
                } else if (name === 'category') {
                    if (checked) filters.categories.push(value);
                    else filters.categories = filters.categories.filter(c => c !== value);
                } else if (name === 'university') {
                    if (checked) filters.universities.push(value);
                    else filters.universities = filters.universities.filter(u => u !== value);
                } else if (name === 'approval') {
                    if (checked) filters.approvals.push(value);
                    else filters.approvals = filters.approvals.filter(a => a !== value);
                } else if (name === 'examPattern') {
                    if (checked) filters.examPatterns.push(value);
                    else filters.examPatterns = filters.examPatterns.filter(e => e !== value);
                }

                renderCourses();
            }
        });
    });

    compareActionBtn.addEventListener('click', openComparisonModal);
    closeModalBtn.addEventListener('click', closeComparisonModal);

    comparisonModal.addEventListener('click', (e) => {
        if (e.target === comparisonModal) closeComparisonModal();
    });

    // Mobile/Universal Drawer Toggle
    const toggleFiltersBtn = document.getElementById('toggle-filters-btn');
    const filterDrawer = document.getElementById('filter-drawer');
    const closeFiltersBtn = document.getElementById('close-filters-btn');

    if (toggleFiltersBtn && filterDrawer) {
        toggleFiltersBtn.addEventListener('click', () => {
            filterDrawer.classList.add('open');
        });

        closeFiltersBtn.addEventListener('click', () => {
            filterDrawer.classList.remove('open');
        });

        filterDrawer.addEventListener('click', (e) => {
            if (e.target === filterDrawer) {
                filterDrawer.classList.remove('open');
            }
        });
    }

    setupQuickCompare();
}

// --- Quick Compare Modal Logic ---
function setupQuickCompare() {
    const quickCompareBtn = document.getElementById('quick-compare-btn');
    if (!quickCompareBtn) return;

    const quickModal = document.getElementById('quick-compare-modal');
    if (!quickModal) return;

    const closeQuickBtn = document.getElementById('close-quick-compare-btn');
    const searchInput = document.getElementById('quick-compare-search');
    const resultsContainer = document.getElementById('quick-compare-results');
    const countBadge = document.getElementById('quick-compare-count');
    const launchCompareBtn = document.getElementById('quick-launch-compare-btn');

    function renderQuickResults(query = '') {
        const lowerQuery = query.toLowerCase().trim();
        const filtered = courses.filter(c =>
            (c.university && c.university.toLowerCase().includes(lowerQuery)) ||
            (c.title && c.title.toLowerCase().includes(lowerQuery)) ||
            (c.category && c.category.toLowerCase().includes(lowerQuery)) ||
            (c.level && c.level.toLowerCase().includes(lowerQuery))
        );

        if (countBadge) {
            countBadge.textContent = `${selectedCourses.length} / 3 Selected`;
        }

        if (launchCompareBtn) {
            if (selectedCourses.length > 0) {
                launchCompareBtn.style.display = 'inline-flex';
                launchCompareBtn.textContent = `Compare ${selectedCourses.length} Program${selectedCourses.length > 1 ? 's' : ''} 📊`;
            } else {
                launchCompareBtn.style.display = 'none';
            }
        }

        if (filtered.length === 0) {
            resultsContainer.innerHTML = `
                <div style="text-align:center; padding:2rem; color:var(--text-muted);">
                    <div style="font-size:2rem; margin-bottom:0.5rem;">🔍</div>
                    <div style="font-size:0.9rem;">No matching courses found</div>
                </div>
            `;
            return;
        }

        resultsContainer.innerHTML = filtered.map(course => {
            const isAdded = selectedCourses.some(sc => sc.id === course.id);
            const effectiveCost = getEffectiveCost(course);
            return `
                <div class="quick-compare-item ${isAdded ? 'added' : ''}">
                    <div style="flex-grow:1; padding-right:1rem;">
                        <div style="font-weight:700; color:var(--primary); font-size:0.8rem; text-transform:uppercase; letter-spacing:0.5px;">${course.university}</div>
                        <div style="font-size:0.9rem; color:#fff; font-weight:600; margin-top:2px;">${course.title}</div>
                        <div style="font-size:0.75rem; color:var(--text-muted); margin-top:4px; display:flex; gap:0.6rem; align-items:center;">
                            <span class="level-badge ${course.level ? course.level.toLowerCase() : 'ug'}" style="font-size:0.65rem; padding:0.1rem 0.4rem;">${course.level}</span>
                            <span>${course.category}</span> • 
                            <span style="color:var(--primary); font-weight:700;">₹${effectiveCost.toLocaleString('en-IN')}</span>
                        </div>
                    </div>
                    <button class="quick-add-btn ${isAdded ? 'active' : ''}" data-id="${course.id}" title="${isAdded ? 'Remove from comparison' : 'Add to comparison'}">
                        ${isAdded ? '✓' : '+'}
                    </button>
                </div>
            `;
        }).join('');

        // Attach click listeners
        resultsContainer.querySelectorAll('.quick-add-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                toggleCompareCourse(id);
                renderQuickResults(searchInput ? searchInput.value : '');
            });
        });
    }

    quickCompareBtn.addEventListener('click', () => {
        quickModal.classList.add('open');
        if (searchInput) {
            searchInput.value = '';
            setTimeout(() => searchInput.focus(), 100);
        }
        renderQuickResults();
    });

    if (closeQuickBtn) {
        closeQuickBtn.addEventListener('click', () => {
            quickModal.classList.remove('open');
        });
    }

    quickModal.addEventListener('click', (e) => {
        if (e.target === quickModal) {
            quickModal.classList.remove('open');
        }
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderQuickResults(e.target.value);
        });
    }

    if (launchCompareBtn) {
        launchCompareBtn.addEventListener('click', () => {
            quickModal.classList.remove('open');
            openComparisonModal();
        });
    }
}

// Open comparison modal
function openComparisonModal() {
    if (selectedCourses.length === 0) return;
    comparisonModal.classList.add('open');
    renderComparisonMatrix();
}

// Close comparison modal
function closeComparisonModal() {
    comparisonModal.classList.remove('open');
}

// Render dynamic comparison matrix inside modal
function renderComparisonMatrix() {
    const minCost = Math.min(...selectedCourses.map(c => getEffectiveCost(c)));
    const minWeeks = Math.min(...selectedCourses.map(c => c.durationWeeks));
    const maxRating = Math.max(...selectedCourses.map(c => c.rating));

    const cols = selectedCourses;

    let html = `
        <div class="comparison-table-wrapper">
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th class="feature-label">Feature</th>
                        ${cols.map(c => `
                            <th class="table-header-col">
                                <div class="univ-name">${c.university}</div>
                                <div class="course-name">${c.title}</div>
                            </th>
                        `).join('')}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="feature-label">Program Level</td>
                        ${cols.map(c => `<td><span class="level-badge ${c.level ? c.level.toLowerCase() : 'ug'}">${c.level === 'UG' ? 'Undergraduate' : 'Postgraduate'}</span></td>`).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Campus Location</td>
                        ${cols.map(c => `<td>📍 <strong>${c.city || 'N/A'}, ${c.state || 'N/A'}</strong></td>`).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Tuition Fee</td>
                        ${cols.map(c => {
        const effectiveCost = getEffectiveCost(c);
        const originalCost = c.cost;
        const isBest = effectiveCost === minCost;
        const hasDiscount = c.discountPercent > 0;

        return `<td class="${isBest ? 'highlight-best' : ''}">
                                ${hasDiscount ? `
                                    <span style="text-decoration: line-through; font-size: 0.8rem; color: var(--text-muted);">
                                        ₹${originalCost.toLocaleString('en-IN')}
                                    </span><br>
                                ` : ''}
                                <strong>₹${effectiveCost.toLocaleString('en-IN')}</strong>
                                ${hasDiscount ? `<span style="font-size:0.75rem; color:var(--accent); font-weight:700;"> (-${c.discountPercent}%)</span>` : ''}
                                ${isBest ? '<div style="font-size:0.75rem; color:var(--accent); font-weight:bold; margin-top:4px;">Best Price</div>' : ''}
                            </td>`;
    }).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Fee Breakdown</td>
                        ${cols.map(c => `
                            <td>
                                <ul style="list-style:none; padding:0; margin:0; font-size:0.75rem; color:var(--text-muted);">
                                    ${c.otp > 0 ? `<li style="margin-bottom:2px;"><strong style="color:#fff;">OTP:</strong> ₹${c.otp.toLocaleString('en-IN')}</li>` : ''}
                                    ${c.sem1 > 0 ? `<li style="margin-bottom:2px;"><strong>Sem 1:</strong> ₹${c.sem1.toLocaleString('en-IN')}</li>` : ''}
                                    ${c.sem2 > 0 ? `<li style="margin-bottom:2px;"><strong>Sem 2:</strong> ₹${c.sem2.toLocaleString('en-IN')}</li>` : ''}
                                    ${c.sem3 > 0 ? `<li style="margin-bottom:2px;"><strong>Sem 3:</strong> ₹${c.sem3.toLocaleString('en-IN')}</li>` : ''}
                                    ${c.sem4 > 0 ? `<li style="margin-bottom:2px;"><strong>Sem 4:</strong> ₹${c.sem4.toLocaleString('en-IN')}</li>` : ''}
                                    ${c.sem5 > 0 ? `<li style="margin-bottom:2px;"><strong>Sem 5:</strong> ₹${c.sem5.toLocaleString('en-IN')}</li>` : ''}
                                    ${c.sem6 > 0 ? `<li style="margin-bottom:2px;"><strong>Sem 6:</strong> ₹${c.sem6.toLocaleString('en-IN')}</li>` : ''}
                                    ${c.emi > 0 ? `<li style="margin-top:4px; padding-top:4px; border-top:1px solid rgba(255,255,255,0.1);"><strong style="color:var(--primary);">EMI Options:</strong> ₹${c.emi.toLocaleString('en-IN')}/mo</li>` : ''}
                                </ul>
                            </td>
                        `).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Duration</td>
                        ${cols.map(c => {
        const isBest = c.durationWeeks === minWeeks;
        return `<td class="${isBest ? 'highlight-best' : ''}">
                                ${c.duration} (${c.durationWeeks} weeks)
                                ${isBest ? '<div style="font-size:0.75rem; color:var(--accent); font-weight:bold; margin-top:4px;">Shortest Program</div>' : ''}
                            </td>`;
    }).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Category</td>
                        ${cols.map(c => `<td>${c.category}</td>`).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Accreditations</td>
                        ${cols.map(c => `
                            <td>
                                <div style="display:flex; flex-direction:column; gap:0.3rem;">
                                    ${(c.approvals || []).map(a => `<span class="support-badge yes" style="font-size:0.75rem;">${a}</span>`).join('')}
                                </div>
                            </td>
                        `).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Prerequisites</td>
                        ${cols.map(c => `<td style="font-size:0.85rem; color:var(--text-muted);">${c.eligibility}</td>`).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Student Rating</td>
                        ${cols.map(c => {
        const isBest = c.rating === maxRating;
        return `<td class="${isBest ? 'highlight-best' : ''}">
                                <span class="star-icon">★</span> <strong>${c.rating}</strong> / 5.0 (${c.reviewsCount} reviews)
                            </td>`;
    }).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Mode of Delivery</td>
                        ${cols.map(c => `<td style="font-size:0.85rem;">${c.type}</td>`).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Exam Pattern</td>
                        ${cols.map(c => `<td style="font-size:0.85rem; font-weight:600; color:var(--primary);">${c.examPattern || 'N/A'}</td>`).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Career Assistance</td>
                        ${cols.map(c => `
                            <td>
                                <span class="support-badge ${c.careerSupport ? 'yes' : 'no'}">
                                    ${c.careerSupport ? 'Placement Support Included' : 'No Placement Services'}
                                </span>
                            </td>
                        `).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Syllabus highlights</td>
                        ${cols.map(c => `
                            <td>
                                <ul class="syllabus-list">
                                    ${(c.syllabus || []).map(item => `<li>${item}</li>`).join('')}
                                </ul>
                            </td>
                        `).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Brochure Link</td>
                        ${cols.map(c => `
                            <td>
                                <a href="${c.brochureUrl || '#'}" target="_blank" style="color:var(--primary); text-decoration:underline; font-weight:600;">
                                    Download Brochure PDF 📄
                                </a>
                            </td>
                        `).join('')}
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- ROI Calculator Widget Section -->
        <div class="roi-section">
            <h4 class="roi-title">💼 Interactive Tuition ROI Estimator</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">
                Estimate and compare your potential return on investment. Adjust the sliders to see how fast you will offset program tuition fees.
            </p>
            <div class="roi-controls">
                <div class="roi-control">
                    <label for="current-salary" style="font-size: 0.85rem; font-weight:600;">Your Current Salary (Annual): <span id="current-salary-val" style="color:var(--primary); font-weight:700;">₹5,00,000</span></label>
                    <input type="range" id="current-salary" class="range-slider" min="200000" max="3000000" step="50000" value="500000">
                </div>
                <div class="roi-control">
                    <label for="post-program-hike" style="font-size: 0.85rem; font-weight:600;">Expected Salary Hike: <span id="hike-val" style="color:var(--primary); font-weight:700;">35%</span></label>
                    <input type="range" id="post-program-hike" class="range-slider" min="5" max="80" step="5" value="35">
                </div>
            </div>
            
            <div class="roi-output-grid" id="roi-outputs">
                <!-- Will be dynamically populated for each compared course -->
            </div>
        </div>
    `;

    modalContentBody.innerHTML = html;
    setupRoiCalculator();
}

// Setup and handle ROI Calculations
function setupRoiCalculator() {
    const salarySlider = document.getElementById('current-salary');
    const hikeSlider = document.getElementById('post-program-hike');

    const salaryVal = document.getElementById('current-salary-val');
    const hikeVal = document.getElementById('hike-val');

    function calculateRoi() {
        const currentSalary = parseInt(salarySlider.value);
        const hikePercent = parseInt(hikeSlider.value);

        salaryVal.textContent = `₹${currentSalary.toLocaleString('en-IN')}`;
        hikeVal.textContent = `${hikePercent}%`;

        const salaryIncrease = currentSalary * (hikePercent / 100);

        const roiOutputsContainer = document.getElementById('roi-outputs');
        roiOutputsContainer.innerHTML = selectedCourses.map(course => {
            const finalCost = getEffectiveCost(course);
            const monthsToRecover = ((finalCost / salaryIncrease) * 12).toFixed(1);
            const fiveYearProfit = (salaryIncrease * 5) - finalCost;

            return `
                <div class="roi-stat">
                    <div style="font-size:0.8rem; font-weight:700; color:var(--primary); overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
                        ${(course.title || '').split(' ')[0]} (${(course.university || '').split(' ')[0]})
                    </div>
                    <div style="margin-top:0.4rem;">
                        <span class="metric-label" style="font-size: 0.7rem;">Tuition Payback</span>
                        <div class="roi-stat-num positive">${monthsToRecover} Months</div>
                    </div>
                    <div style="margin-top:0.4rem;">
                        <span class="metric-label" style="font-size: 0.7rem;">5-Yr Net Gain</span>
                        <div class="roi-stat-num" style="color:#fff;">₹${fiveYearProfit.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    salarySlider.addEventListener('input', calculateRoi);
    hikeSlider.addEventListener('input', calculateRoi);

    calculateRoi();
}

// Custom CSV Parser to handle sheets exports
function parseCSV(text) {
    const lines = text.split(/\r?\n/);
    if (lines.length < 2) return fallbackCourses;

    const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
    const parsed = [];

    for (let i = 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue;

        const row = [];
        let inQuotes = false;
        let currentValue = '';

        for (let j = 0; j < lines[i].length; j++) {
            const char = lines[i][j];
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                row.push(currentValue.trim());
                currentValue = '';
            } else {
                currentValue += char;
            }
        }
        row.push(currentValue.trim());

        const course = {};
        headers.forEach((header, idx) => {
            let val = row[idx] || '';

            if (val.startsWith('"') && val.endsWith('"')) {
                val = val.substring(1, val.length - 1);
            }

            if (header === 'cost' || header === 'durationweeks' || header === 'reviewscount' || header === 'otp' || header === 'emi' || header.startsWith('sem')) {
                course[header] = parseInt(val) || 0;
            } else if (header === 'discountpercent' || header === 'rating') {
                course[header] = parseFloat(val) || 0;
            } else if (header === 'careersupport') {
                course[header] = val.toLowerCase() === 'true';
            } else if (header === 'syllabus' || header === 'approvals') {
                course[header] = val ? val.split(';').map(item => item.trim()) : [];
            } else {
                if (header === 'durationweeks') course['durationWeeks'] = parseInt(val) || 0;
                else if (header === 'discountpercent') course['discountPercent'] = parseFloat(val) || 0;
                else if (header === 'reviewscount') course['reviewsCount'] = parseInt(val) || 0;
                else if (header === 'careersupport') course['careerSupport'] = val.toLowerCase() === 'true';
                else if (header === 'brochureurl') course['brochureUrl'] = val;
                else if (header === 'exampattern') course['examPattern'] = val;
                else if (header === 'imagecolor') course['imageColor'] = val;
                else course[header] = val;
            }
        });

        if (course.durationweeks !== undefined) course.durationWeeks = course.durationweeks;
        if (course.discountpercent !== undefined) course.discountPercent = course.discountpercent;
        if (course.reviewscount !== undefined) course.reviewsCount = course.reviewscount;
        if (course.careersupport !== undefined) course.careerSupport = course.careersupport;
        if (course.brochureurl !== undefined) course.brochureUrl = course.brochureurl;

        parsed.push(course);
    }
    return parsed.length ? parsed : fallbackCourses;
}

// Initializer
async function init() {
    try {
        if (GOOGLE_SHEET_CSV_URL) {
            const response = await fetch(GOOGLE_SHEET_CSV_URL);
            if (response.ok) {
                const text = await response.text();
                const fetchedCourses = parseCSV(text);
                if (fetchedCourses && fetchedCourses.length > 0) {
                    courses = fetchedCourses;
                } else {
                    courses = fallbackCourses;
                }
            } else {
                courses = fallbackCourses;
            }
        } else {
            courses = fallbackCourses;
        }
    } catch (err) {
        console.warn('Failed to fetch live Google Sheets data, using fallback seed data:', err);
        courses = fallbackCourses;
    }

    const universityApprovalsMap = {
        'ADTU (Online)': ['UGC-DEB', 'NAAC A+', 'NIRF', 'AICTE'],
        'Alliance (Online)': ['UGC-DEB', 'NAAC A+', 'NIRF', 'AACSB'],
        'Amrita (Online)': ['UGC-DEB', 'NAAC A++', 'NIRF Top 10', 'WES'],
        'Andhra (Online)': ['UGC-DEB', 'NAAC A', 'NIRF'],
        'AU (Online)': ['UGC-DEB', 'NAAC A+'],
        'Bennett (Online)': ['UGC-DEB', 'NIRF', 'AICTE'],
        'BITS Pilani (WILP)': ['UGC-DEB', 'NIRF Top 20', 'AICTE', 'WES'],
        'Chandigarh University (Online)': ['UGC-DEB', 'NAAC A+', 'QS Ranked', 'WES'],
        'Datta Meghe (Online)': ['UGC-DEB', 'NAAC A+'],
        'DPU (Online)': ['UGC-DEB', 'NAAC A++', 'AICTE'],
        'GLA (Online)': ['UGC-DEB', 'NAAC A+'],
        'Graphic Era (Online)': ['UGC-DEB', 'NAAC A+'],
        'IGNOU': ['UGC-DEB', 'AICTE', 'WES'],
        'IIM Ahmedabad': ['AACSB', 'EQUIS', 'NIRF #1'],
        'IIM Kozhikode': ['AMBA', 'EQUIS', 'NIRF Top 5'],
        'IIT Madras': ['NIRF #1', 'AICTE'],
        'IIT Roorkee': ['NIRF Top 10', 'AICTE'],
        'Jain (Online)': ['UGC-DEB', 'NAAC A++', 'WES', 'AICTE'],
        'Jaypee (Online)': ['UGC-DEB', 'NAAC A+'],
        'KL (Online)': ['UGC-DEB', 'NAAC A++'],
        'LPU (Online)': ['UGC-DEB', 'NAAC A++', 'WES', 'NIRF'],
        'Manipal (Online)': ['UGC-DEB', 'NAAC A+', 'WES', 'AICTE'],
        'NMIMS (Online)': ['UGC-DEB', 'NAAC A+', 'Autonomy Cat I', 'WES'],
        'Sathyabama (Online)': ['UGC-DEB', 'NAAC A++'],
        'Sharda (Online)': ['UGC-DEB', 'NAAC A+'],
        'Shiv Nadar (Online)': ['UGC-DEB', 'NIRF'],
        'SRM (Online)': ['UGC-DEB', 'NAAC A++', 'QS Ranked'],
        'Symbiosis (SSODL)': ['UGC-DEB', 'NAAC A++', 'WES', 'AICTE'],
        'UPES (Online)': ['UGC-DEB', 'NAAC A', 'IACBE'],
        'Vignan (Online)': ['UGC-DEB', 'NAAC A+']
    };

    courses.forEach(course => {
        if (!course.approvals || course.approvals.length === 0) {
            let mappedApprovals = universityApprovalsMap[course.university];
            if (!mappedApprovals && course.university && course.university.toLowerCase().includes('amity')) {
                mappedApprovals = ['UGC-DEB', 'NAAC A+', 'NIRF', 'AICTE', 'WES'];
            }
            course.approvals = mappedApprovals || ['UGC', 'AICTE', 'WES'];
        }

        if (!course.examPattern) {
            const patterns = ["Online Proctored", "Center Based", "Assignment Based"];
            course.examPattern = patterns[(course.title || 'default').length % patterns.length];
        }

        if (course.otp === undefined) course.otp = 5000;
        if (course.emi === undefined) course.emi = Math.round((course.cost * 1.1) / (course.durationWeeks > 104 ? 36 : 24));
        const numSems = course.level === 'UG' ? 6 : 4;
        const semFee = Math.round((course.cost - course.otp) / numSems);
        for (let i = 1; i <= 6; i++) {
            if (i <= numSems && course[`sem${i}`] === undefined) course[`sem${i}`] = semFee;
            else if (course[`sem${i}`] === undefined) course[`sem${i}`] = 0;
        }
    });

    updateDashboardStats();
    renderFilterCheckboxes();
    renderActiveFilterChips();
    renderCourses();
    setupEventListeners();
}

// Execute Init
document.addEventListener('DOMContentLoaded', init);

