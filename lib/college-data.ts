// This file contains mock data for colleges

export type College = {
  id: number
  name: string
  city: string
  state: string
  address: string
  pincode: string
  phone: string
  email: string
  website: string
  description: string
  image?: string
  established: string
  accreditation: string
  studentCount: number
  facultyCount: number
  courses: string[]
  courseDetails: {
    name: string
    duration: string
    eligibility: string
    fee: string
  }[]
  facilities: {
    name: string
    description: string
  }[]
  rankings: string[]
  admissionProcess: string
  importantDates: {
    event: string
    date: string
  }[]
  placement: {
    rate: string
    highestPackage: string
    averagePackage: string
    topRecruiters: string[]
  }
}

const colleges: College[] = [
  {
    id: 1,
    name: "Indian Institute of Technology, Delhi",
    city: "Delhi",
    state: "Delhi",
    address: "Hauz Khas",
    pincode: "110016",
    phone: "+91-11-2659-7135",
    email: "info@iitd.ac.in",
    website: "https://www.iitd.ac.in",
    description:
      "IIT Delhi is one of India's most prestigious engineering institutions, known for its cutting-edge research and academic excellence. Established in 1961, it has consistently ranked among the top engineering colleges in India and has produced numerous successful entrepreneurs, researchers, and industry leaders.",
    established: "1961",
    accreditation: "NAAC A++ Grade",
    studentCount: 8500,
    facultyCount: 600,
    courses: ["B.Tech", "M.Tech", "PhD", "MBA"],
    courseDetails: [
      {
        name: "B.Tech in Computer Science",
        duration: "4 years",
        eligibility: "JEE Advanced",
        fee: "2,20,000 per year",
      },
      {
        name: "B.Tech in Electrical Engineering",
        duration: "4 years",
        eligibility: "JEE Advanced",
        fee: "2,20,000 per year",
      },
      {
        name: "M.Tech in Artificial Intelligence",
        duration: "2 years",
        eligibility: "GATE",
        fee: "1,50,000 per year",
      },
      {
        name: "PhD in Engineering",
        duration: "3-5 years",
        eligibility: "Masters degree + entrance test",
        fee: "30,000 per semester",
      },
    ],
    facilities: [
      {
        name: "Central Library",
        description: "State-of-the-art library with over 300,000 books and digital resources",
      },
      {
        name: "Research Labs",
        description: "Advanced research laboratories for various engineering disciplines",
      },
      {
        name: "Sports Complex",
        description: "Modern sports facilities including swimming pool, tennis courts, and indoor games",
      },
      {
        name: "Hostels",
        description: "Separate hostels for boys and girls with modern amenities",
      },
    ],
    rankings: [
      "Ranked #2 in Engineering by NIRF 2023",
      "QS World University Ranking: 185",
      "Times Higher Education Ranking: Top 400 globally",
    ],
    admissionProcess:
      "Admission to undergraduate programs is through JEE Advanced, while postgraduate admissions are through GATE, JAM, or other national-level entrance exams. PhD admissions involve a written test and interview process.",
    importantDates: [
      {
        event: "JEE Advanced Application",
        date: "April 2024",
      },
      {
        event: "JEE Advanced Exam",
        date: "May 2024",
      },
      {
        event: "Counselling Process",
        date: "June-July 2024",
      },
    ],
    placement: {
      rate: "95%",
      highestPackage: "₹1.8 Crore per annum",
      averagePackage: "₹25 Lakhs per annum",
      topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs", "Intel"],
    },
  },
  {
    id: 2,
    name: "Indian Institute of Management, Ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    address: "Vastrapur",
    pincode: "380015",
    phone: "+91-79-6632-4000",
    email: "info@iima.ac.in",
    website: "https://www.iima.ac.in",
    description:
      "IIM Ahmedabad is India's premier management institute, established in 1961. It offers world-class education in management and business administration. The institute is known for its case-based teaching methodology and has consistently ranked as the top business school in India. The institute's alumni network includes numerous CEOs, entrepreneurs, and leaders who have made significant contributions to the business world.",
    established: "1961",
    accreditation: "AACSB, EQUIS",
    studentCount: 1200,
    facultyCount: 100,
    courses: ["MBA", "PGPX", "PhD", "Executive Education"],
    courseDetails: [
      {
        name: "Post Graduate Programme in Management (MBA)",
        duration: "2 years",
        eligibility: "CAT + PI",
        fee: "23,00,000 for entire program",
      },
      {
        name: "Executive MBA (PGPX)",
        duration: "1 year",
        eligibility: "GMAT/GRE + Work Experience",
        fee: "28,00,000 for entire program",
      },
      {
        name: "PhD Programme",
        duration: "4-5 years",
        eligibility: "Masters degree + entrance test",
        fee: "2,50,000 per year",
      },
      {
        name: "Executive Education",
        duration: "Variable",
        eligibility: "Working professionals",
        fee: "Varies by program",
      },
    ],
    facilities: [
      {
        name: "Vikram Sarabhai Library",
        description: "One of Asia's finest management libraries with extensive resources",
      },
      {
        name: "Computing Facilities",
        description: "State-of-the-art computing infrastructure and software resources",
      },
      {
        name: "Accommodation",
        description: "On-campus housing for students with modern amenities",
      },
      {
        name: "Recreation Facilities",
        description: "Sports complex, gymnasium, and various recreational spaces",
      },
    ],
    rankings: [
      "Ranked #1 in Management by NIRF 2023",
      "Financial Times Global MBA Ranking: Top 50",
      "QS Global MBA Rankings: Top 50 in Asia",
    ],
    admissionProcess:
      "Admission to the flagship PGP (MBA) program is through CAT (Common Admission Test), followed by Written Ability Test, Personal Interview, and profile evaluation. Executive MBA requires GMAT/GRE scores and significant work experience.",
    importantDates: [
      {
        event: "CAT Registration",
        date: "August-September 2024",
      },
      {
        event: "CAT Exam",
        date: "November 2024",
      },
      {
        event: "Interview Process",
        date: "February-March 2025",
      },
    ],
    placement: {
      rate: "100%",
      highestPackage: "₹1.6 Crore per annum",
      averagePackage: "₹32 Lakhs per annum",
      topRecruiters: ["McKinsey", "BCG", "Bain", "Amazon", "Microsoft"],
    },
  },
  {
    id: 3,
    name: "National Institute of Technology, Trichy",
    city: "Tiruchirappalli",
    state: "Tamil Nadu",
    address: "Tanjore Main Road",
    pincode: "620015",
    phone: "+91-431-2503000",
    email: "info@nitt.edu",
    website: "https://www.nitt.edu",
    description:
      "NIT Trichy is one of the premier engineering institutions in India, known for its academic excellence and research contributions. Established in 1964 as Regional Engineering College, it was granted NIT status in 2003. The institute offers undergraduate, postgraduate, and doctoral programs in various engineering disciplines.",
    established: "1964",
    accreditation: "NAAC A+ Grade",
    studentCount: 6500,
    facultyCount: 350,
    courses: ["B.Tech", "M.Tech", "MCA", "MBA", "PhD"],
    courseDetails: [
      {
        name: "B.Tech in Computer Science",
        duration: "4 years",
        eligibility: "JEE Main",
        fee: "1,25,000 per year",
      },
      {
        name: "B.Tech in Mechanical Engineering",
        duration: "4 years",
        eligibility: "JEE Main",
        fee: "1,25,000 per year",
      },
      {
        name: "M.Tech in Data Science",
        duration: "2 years",
        eligibility: "GATE",
        fee: "75,000 per year",
      },
      {
        name: "MBA",
        duration: "2 years",
        eligibility: "CAT/MAT",
        fee: "1,50,000 per year",
      },
    ],
    facilities: [
      {
        name: "Central Library",
        description: "Modern library with extensive collection of books and digital resources",
      },
      {
        name: "Computer Center",
        description: "24/7 computing facility with high-speed internet",
      },
      {
        name: "Sports Facilities",
        description: "Olympic-sized swimming pool, cricket ground, and indoor sports complex",
      },
      {
        name: "Hostels",
        description: "Separate hostels for boys and girls with all necessary amenities",
      },
    ],
    rankings: [
      "Ranked #9 in Engineering by NIRF 2023",
      "Among Top 10 Technical Institutes in India",
      "Ranked #3 among NITs",
    ],
    admissionProcess:
      "Admission to B.Tech programs is through JEE Main rank and counseling conducted by JOSAA. M.Tech admissions are based on GATE scores, while MBA admissions consider CAT/MAT scores followed by group discussion and personal interview.",
    importantDates: [
      {
        event: "JEE Main Application",
        date: "February 2024",
      },
      {
        event: "JEE Main Exam",
        date: "April 2024",
      },
      {
        event: "JOSAA Counselling",
        date: "June-July 2024",
      },
    ],
    placement: {
      rate: "92%",
      highestPackage: "₹70 Lakhs per annum",
      averagePackage: "₹12 Lakhs per annum",
      topRecruiters: ["Microsoft", "Amazon", "Qualcomm", "Goldman Sachs", "Samsung"],
    },
  },
  {
    id: 4,
    name: "BITS Pilani",
    city: "Pilani",
    state: "Rajasthan",
    address: "Vidya Vihar",
    pincode: "333031",
    phone: "+91-1596-242090",
    email: "info@pilani.bits-pilani.ac.in",
    website: "https://www.bits-pilani.ac.in",
    description:
      "BITS Pilani is one of India's leading institutions of higher education and a deemed university. Founded in 1964, it has established itself as a premier engineering institute with campuses in Pilani, Goa, Hyderabad, and Dubai. BITS is known for its innovative teaching methods, industry connections, and practice school program.",
    established: "1964",
    accreditation: "NAAC A Grade",
    studentCount: 15000,
    facultyCount: 700,
    courses: ["B.E.", "B.Pharm", "M.E.", "M.Pharm", "MBA", "PhD"],
    courseDetails: [
      {
        name: "B.E. in Computer Science",
        duration: "4 years",
        eligibility: "BITSAT",
        fee: "2,15,000 per year",
      },
      {
        name: "B.E. in Electrical & Electronics",
        duration: "4 years",
        eligibility: "BITSAT",
        fee: "2,15,000 per year",
      },
      {
        name: "M.E. in Software Systems",
        duration: "2 years",
        eligibility: "GATE/BITS HD Test",
        fee: "1,75,000 per year",
      },
      {
        name: "MBA",
        duration: "2 years",
        eligibility: "CAT/GMAT + PI",
        fee: "9,50,000 for entire program",
      },
    ],
    facilities: [
      {
        name: "Library",
        description: "Modern library with extensive collection of books, journals, and online resources",
      },
      {
        name: "Innovation Labs",
        description: "State-of-the-art labs for research and innovation",
      },
      {
        name: "Sports Complex",
        description: "Comprehensive sports facilities including swimming pool, tennis courts, and more",
      },
      {
        name: "Hostels",
        description: "Well-equipped hostels with modern amenities for all students",
      },
    ],
    rankings: [
      "Ranked #27 in Engineering by NIRF 2023",
      "QS BRICS University Rankings: Top 200",
      "Among Top 10 Private Engineering Institutes in India",
    ],
    admissionProcess:
      "Admission to undergraduate programs is through BITSAT (BITS Admission Test), an online computer-based test. Postgraduate admissions consider GATE scores or BITS HD test, followed by interviews. MBA admissions require CAT/GMAT scores and personal interviews.",
    importantDates: [
      {
        event: "BITSAT Registration",
        date: "January-April 2024",
      },
      {
        event: "BITSAT Exam",
        date: "May 2024",
      },
      {
        event: "Admission Process",
        date: "June-July 2024",
      },
    ],
    placement: {
      rate: "90%",
      highestPackage: "₹1.2 Crore per annum",
      averagePackage: "₹18 Lakhs per annum",
      topRecruiters: ["Google", "Microsoft", "Amazon", "Oracle", "Adobe"],
    },
  },
  {
    id: 5,
    name: "Delhi University",
    city: "Delhi",
    state: "Delhi",
    address: "North Campus",
    pincode: "110007",
    phone: "+91-11-27667853",
    email: "info@du.ac.in",
    website: "https://www.du.ac.in",
    description:
      "University of Delhi (DU) is a premier university in India, established in 1922. It offers a wide range of undergraduate, postgraduate, and doctoral programs across various disciplines including arts, commerce, science, law, and management. DU is known for its prestigious colleges, quality education, and vibrant campus life.",
    established: "1922",
    accreditation: "NAAC A++ Grade",
    studentCount: 132000,
    facultyCount: 7000,
    courses: ["BA", "B.Com", "B.Sc", "BBA", "MA", "M.Com", "M.Sc", "MBA", "PhD"],
    courseDetails: [
      {
        name: "Bachelor of Commerce (Hons)",
        duration: "3 years",
        eligibility: "10+2 with minimum 95% (for top colleges)",
        fee: "20,000-50,000 per year",
      },
      {
        name: "Bachelor of Computer Applications",
        duration: "3 years",
        eligibility: "10+2 with Mathematics",
        fee: "25,000-60,000 per year",
      },
      {
        name: "Master of Business Administration",
        duration: "2 years",
        eligibility: "Graduation + Entrance Test",
        fee: "50,000-1,50,000 per year",
      },
      {
        name: "Master of Computer Applications",
        duration: "2 years",
        eligibility: "Graduation with Mathematics",
        fee: "40,000-80,000 per year",
      },
    ],
    facilities: [
      {
        name: "Central Library",
        description: "One of the largest university libraries in India with millions of volumes",
      },
      {
        name: "Computer Labs",
        description: "Modern computer labs with latest software and high-speed internet",
      },
      {
        name: "Sports Complex",
        description: "Extensive sports facilities for various indoor and outdoor games",
      },
      {
        name: "Hostels",
        description: "Accommodation facilities in various colleges of the university",
      },
    ],
    rankings: [
      "Ranked #11 in University Category by NIRF 2023",
      "QS World University Rankings: Top 500",
      "Times Higher Education World University Rankings: Top 800",
    ],
    admissionProcess:
      "Admission to undergraduate programs is based on cut-off percentages announced by individual colleges. Some courses require entrance tests. Postgraduate admissions are through entrance tests followed by interviews in some cases.",
    importantDates: [
      {
        event: "UG Application Process",
        date: "May-June 2024",
      },
      {
        event: "First Cut-off List",
        date: "Late June 2024",
      },
      {
        event: "Academic Session Begins",
        date: "July 2024",
      },
    ],
    placement: {
      rate: "75-90% (varies by college)",
      highestPackage: "₹30 Lakhs per annum",
      averagePackage: "₹8 Lakhs per annum",
      topRecruiters: ["Deloitte", "EY", "KPMG", "TCS", "Infosys"],
    },
  },
  {
    id: 6,
    name: "Manipal Institute of Technology",
    city: "Manipal",
    state: "Karnataka",
    address: "Madhav Nagar",
    pincode: "576104",
    phone: "+91-820-2922985",
    email: "admissions@manipal.edu",
    website: "https://manipal.edu/mit",
    description:
      "Manipal Institute of Technology (MIT) is one of India's leading private engineering institutions and a constituent of Manipal Academy of Higher Education (MAHE). Established in 1957, MIT offers a wide range of undergraduate, postgraduate, and doctoral programs in various engineering disciplines. The institute is known for its world-class infrastructure and industry-oriented curriculum.",
    established: "1957",
    accreditation: "NAAC A+ Grade",
    studentCount: 10000,
    facultyCount: 600,
    courses: ["B.Tech", "M.Tech", "MCA", "PhD"],
    courseDetails: [
      {
        name: "B.Tech in Computer Science",
        duration: "4 years",
        eligibility: "10+2 with PCM + MET",
        fee: "3,00,000 per year",
      },
      {
        name: "B.Tech in Information Technology",
        duration: "4 years",
        eligibility: "10+2 with PCM + MET",
        fee: "3,00,000 per year",
      },
      {
        name: "M.Tech in Data Science",
        duration: "2 years",
        eligibility: "B.Tech + GATE/MET",
        fee: "2,50,000 per year",
      },
      {
        name: "MCA",
        duration: "2 years",
        eligibility: "Graduation with Mathematics",
        fee: "2,25,000 per year",
      },
    ],
    facilities: [
      {
        name: "Innovation Center",
        description: "State-of-the-art innovation hub for students to work on projects",
      },
      {
        name: "Central Library",
        description: "Modern library with extensive collection of books and digital resources",
      },
      {
        name: "Sports Complex",
        description: "World-class sports facilities including swimming pool, tennis courts, and more",
      },
      {
        name: "Hostels",
        description: "Comfortable accommodation with all modern amenities",
      },
    ],
    rankings: [
      "Ranked #45 in Engineering by NIRF 2023",
      "Among Top 10 Private Engineering Colleges in India",
      "QS Asia University Rankings: Top 300",
    ],
    admissionProcess:
      "Admission to undergraduate programs is through Manipal Entrance Test (MET) or JEE Main scores. Postgraduate admissions consider GATE scores or MET, followed by interviews in some cases.",
    importantDates: [
      {
        event: "MET Registration",
        date: "November 2023-April 2024",
      },
      {
        event: "MET Exam",
        date: "April-May 2024",
      },
      {
        event: "Counselling Process",
        date: "May-June 2024",
      },
    ],
    placement: {
      rate: "95%",
      highestPackage: "₹60 Lakhs per annum",
      averagePackage: "₹10 Lakhs per annum",
      topRecruiters: ["Microsoft", "Amazon", "IBM", "Accenture", "Infosys"],
    },
  },
  {
    id: 7,
    name: "Vellore Institute of Technology",
    city: "Vellore",
    state: "Tamil Nadu",
    address: "Katpadi",
    pincode: "632014",
    phone: "+91-416-2202168",
    email: "admissions@vit.ac.in",
    website: "https://vit.ac.in",
    description:
      "Vellore Institute of Technology (VIT) is a leading private university known for its quality education and research in engineering, technology, and applied sciences. Established in 1984, VIT has campuses in Vellore, Chennai, Amaravati, and Bhopal. The university is recognized for its industry-focused curriculum, international collaborations, and placement opportunities.",
    established: "1984",
    accreditation: "NAAC A++ Grade",
    studentCount: 35000,
    facultyCount: 1500,
    courses: ["B.Tech", "M.Tech", "MCA", "MBA", "PhD"],
    courseDetails: [
      {
        name: "B.Tech in Computer Science",
        duration: "4 years",
        eligibility: "10+2 with PCM + VITEEE",
        fee: "2,25,000 per year",
      },
      {
        name: "B.Tech in Electronics & Communication",
        duration: "4 years",
        eligibility: "10+2 with PCM + VITEEE",
        fee: "2,25,000 per year",
      },
      {
        name: "M.Tech in Artificial Intelligence",
        duration: "2 years",
        eligibility: "B.Tech + GATE/VITMEE",
        fee: "1,75,000 per year",
      },
      {
        name: "MBA",
        duration: "2 years",
        eligibility: "Graduation + CAT/MAT/XAT/GMAT",
        fee: "4,50,000 for entire program",
      },
    ],
    facilities: [
      {
        name: "Central Library",
        description: "Modern library with extensive collection of books, journals, and digital resources",
      },
      {
        name: "Technology Tower",
        description: "Advanced labs and research facilities for various engineering disciplines",
      },
      {
        name: "Sports Complex",
        description: "State-of-the-art sports facilities including indoor and outdoor games",
      },
      {
        name: "Hostels",
        description: "Well-equipped hostels with modern amenities for all students",
      },
    ],
    rankings: [
      "Ranked #13 in Engineering by NIRF 2023",
      "QS Asia University Rankings: Top 200",
      "Times Higher Education World University Rankings: Top 800",
    ],
    admissionProcess:
      "Admission to undergraduate programs is through VIT Engineering Entrance Examination (VITEEE). Postgraduate admissions consider GATE scores or VIT Master's Entrance Examination (VITMEE), followed by interviews in some cases.",
    importantDates: [
      {
        event: "VITEEE Registration",
        date: "November 2023-March 2024",
      },
      {
        event: "VITEEE Exam",
        date: "April 2024",
      },
      {
        event: "Counselling Process",
        date: "May-June 2024",
      },
    ],
    placement: {
      rate: "94%",
      highestPackage: "₹75 Lakhs per annum",
      averagePackage: "₹9 Lakhs per annum",
      topRecruiters: ["Amazon", "Microsoft", "IBM", "Deloitte", "Cognizant"],
    },
  },
  {
    id: 8,
    name: "NMIMS University",
    city: "Mumbai",
    state: "Maharashtra",
    address: "V.L. Mehta Road, Vile Parle West",
    pincode: "400056",
    phone: "+91-22-42355555",
    email: "admissions@nmims.edu",
    website: "https://www.nmims.edu",
    description:
      "NMIMS (Narsee Monjee Institute of Management Studies) is a leading private university established in 1981. It started as a management school and has now expanded to offer programs in engineering, pharmacy, commerce, economics, law, and more. NMIMS is known for its industry-relevant curriculum, experienced faculty, and strong corporate connections.",
    established: "1981",
    accreditation: "NAAC A+ Grade",
    studentCount: 17000,
    facultyCount: 800,
    courses: ["BBA", "B.Tech", "MBA", "PGDM", "MCA", "PhD"],
    courseDetails: [
      {
        name: "MBA Core",
        duration: "2 years",
        eligibility: "Graduation + NMAT/CAT/GMAT",
        fee: "11,50,000 for entire program",
      },
      {
        name: "B.Tech in Computer Science",
        duration: "4 years",
        eligibility: "10+2 with PCM + NMIMS-CET",
        fee: "3,50,000 per year",
      },
      {
        name: "BBA",
        duration: "3 years",
        eligibility: "10+2 + NPAT",
        fee: "4,75,000 per year",
      },
      {
        name: "MCA",
        duration: "2 years",
        eligibility: "Graduation with Mathematics",
        fee: "2,50,000 per year",
      },
    ],
    facilities: [
      {
        name: "Library & Information Center",
        description: "Modern library with extensive collection of books, journals, and digital resources",
      },
      {
        name: "Computer Labs",
        description: "State-of-the-art computing facilities with latest software and high-speed internet",
      },
      {
        name: "Bloomberg Lab",
        description: "Advanced financial lab with Bloomberg terminals for finance students",
      },
      {
        name: "Hostels",
        description: "Comfortable accommodation facilities for outstation students",
      },
    ],
    rankings: [
      "Ranked #10 in Management by NIRF 2023",
      "Among Top 5 Private Business Schools in India",
      "QS BRICS University Rankings: Top 250",
    ],
    admissionProcess:
      "Admission to MBA programs is through NMAT by GMAC, CAT, or GMAT scores, followed by group discussion and personal interview. Undergraduate admissions are through NPAT (NMIMS Programs After Twelfth) or NMIMS-CET for engineering programs.",
    importantDates: [
      {
        event: "NMAT Registration",
        date: "July-November 2024",
      },
      {
        event: "NPAT Registration",
        date: "January-May 2024",
      },
      {
        event: "GD/PI Process (MBA)",
        date: "February-March 2025",
      },
    ],
    placement: {
      rate: "98%",
      highestPackage: "₹58 Lakhs per annum",
      averagePackage: "₹22 Lakhs per annum",
      topRecruiters: ["BCG", "Deloitte", "KPMG", "Amazon", "Accenture"],
    },
  },
  {
    id: 9,
    name: "SRM Institute of Science and Technology",
    city: "Chennai",
    state: "Tamil Nadu",
    address: "Kattankulathur",
    pincode: "603203",
    phone: "+91-44-27417777",
    email: "admissions@srmist.edu.in",
    website: "https://www.srmist.edu.in",
    description:
      "SRM Institute of Science and Technology (formerly known as SRM University) is one of India's largest private universities. Established in 1985, it offers a wide range of undergraduate, postgraduate, and doctoral programs across various disciplines including engineering, management, medicine, and humanities. SRM is known for its infrastructure, international collaborations, and placement opportunities.",
    established: "1985",
    accreditation: "NAAC A++ Grade",
    studentCount: 50000,
    facultyCount: 3000,
    courses: ["B.Tech", "M.Tech", "MBA", "MCA", "MBBS", "PhD"],
    courseDetails: [
      {
        name: "B.Tech in Computer Science",
        duration: "4 years",
        eligibility: "10+2 with PCM + SRMJEEE",
        fee: "2,50,000 per year",
      },
      {
        name: "B.Tech in Artificial Intelligence",
        duration: "4 years",
        eligibility: "10+2 with PCM + SRMJEEE",
        fee: "2,75,000 per year",
      },
      {
        name: "MBA",
        duration: "2 years",
        eligibility: "Graduation + CAT/MAT/XAT/GMAT",
        fee: "4,00,000 per year",
      },
      {
        name: "MCA",
        duration: "2 years",
        eligibility: "Graduation with Mathematics",
        fee: "1,75,000 per year",
      },
    ],
    facilities: [
      {
        name: "Central Library",
        description: "Modern library with extensive collection of books, journals, and digital resources",
      },
      {
        name: "Research Centers",
        description: "Advanced research facilities across various disciplines",
      },
      {
        name: "Sports Complex",
        description: "World-class sports facilities including swimming pool, cricket ground, and more",
      },
      {
        name: "Hostels",
        description: "Well-equipped hostels with modern amenities for all students",
      },
    ],
    rankings: [
      "Ranked #29 in Engineering by NIRF 2023",
      "QS Asia University Rankings: Top 350",
      "Times Higher Education World University Rankings: Top 1000",
    ],
    admissionProcess:
      "Admission to undergraduate engineering programs is through SRM Joint Engineering Entrance Examination (SRMJEEE). Management program admissions consider CAT/MAT/XAT/GMAT scores, followed by group discussion and personal interview.",
    importantDates: [
      {
        event: "SRMJEEE Registration",
        date: "November 2023-April 2024",
      },
      {
        event: "SRMJEEE Exam",
        date: "April 2024",
      },
      {
        event: "Counselling Process",
        date: "May-June 2024",
      },
    ],
    placement: {
      rate: "90%",
      highestPackage: "₹50 Lakhs per annum",
      averagePackage: "₹7 Lakhs per annum",
      topRecruiters: ["Amazon", "Microsoft", "IBM", "Infosys", "TCS"],
    },
  },
  {
    id: 10,
    name: "IIIT Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    address: "Gachibowli",
    pincode: "500032",
    phone: "+91-40-66531000",
    email: "info@iiit.ac.in",
    website: "https://www.iiit.ac.in",
    description:
      "International Institute of Information Technology, Hyderabad (IIIT-H) is an autonomous university founded in 1998. It is known for its strong focus on computer science, electronics, and related fields. IIIT Hyderabad is recognized for its research contributions, industry collaborations, and entrepreneurial ecosystem.",
    established: "1998",
    accreditation: "NAAC A Grade",
    studentCount: 2000,
    facultyCount: 150,
    courses: ["B.Tech", "M.Tech", "MS by Research", "PhD"],
    courseDetails: [
      {
        name: "B.Tech in Computer Science",
        duration: "4 years",
        eligibility: "JEE Main + IIIT-H UGEE",
        fee: "2,75,000 per year",
      },
      {
        name: "B.Tech in Electronics & Communication",
        duration: "4 years",
        eligibility: "JEE Main + IIIT-H UGEE",
        fee: "2,75,000 per year",
      },
      {
        name: "M.Tech in Computer Science",
        duration: "2 years",
        eligibility: "GATE + PGEE",
        fee: "2,00,000 per year",
      },
      {
        name: "MS by Research",
        duration: "2-3 years",
        eligibility: "B.Tech + Entrance Test + Interview",
        fee: "1,75,000 per year",
      },
    ],
    facilities: [
      {
        name: "Library",
        description: "Modern library with extensive collection of books, journals, and digital resources",
      },
      {
        name: "Research Centers",
        description: "Specialized research centers in areas like AI, data science, and robotics",
      },
      {
        name: "Innovation Hub",
        description: "Facilities for startups and entrepreneurial ventures",
      },
      {
        name: "Hostels",
        description: "On-campus accommodation with modern amenities",
      },
    ],
    rankings: [
      "Ranked #49 in Engineering by NIRF 2023",
      "Among Top 10 Institutes for Computer Science in India",
      "QS BRICS University Rankings: Top 300",
    ],
    admissionProcess:
      "Admission to undergraduate programs is through JEE Main scores followed by IIIT-H Undergraduate Entrance Examination (UGEE). Postgraduate admissions consider GATE scores followed by IIIT-H Postgraduate Entrance Examination (PGEE) and interviews.",
    importantDates: [
      {
        event: "UGEE Registration",
        date: "March-April 2024",
      },
      {
        event: "UGEE Exam",
        date: "May 2024",
      },
      {
        event: "Admission Process",
        date: "June 2024",
      },
    ],
    placement: {
      rate: "98%",
      highestPackage: "₹1.5 Crore per annum",
      averagePackage: "₹24 Lakhs per annum",
      topRecruiters: ["Google", "Microsoft", "Amazon", "Facebook", "Adobe"],
    },
  },
]

export function getAllColleges(): College[] {
  return colleges
}

export function getCollegeById(id: number): College | undefined {
  return colleges.find((college) => college.id === id)
}

export function searchColleges(query: string): College[] {
  const lowercaseQuery = query.toLowerCase()
  return colleges.filter(
    (college) =>
      college.name.toLowerCase().includes(lowercaseQuery) ||
      college.city.toLowerCase().includes(lowercaseQuery) ||
      college.state.toLowerCase().includes(lowercaseQuery) ||
      college.courses.some((course) => course.toLowerCase().includes(lowercaseQuery)),
  )
}
