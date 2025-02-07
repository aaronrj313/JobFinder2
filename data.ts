import c1 from "./app/images/c1.png";
import c2 from "./app/images/c2.png";
import c3 from "./app/images/c3.png";
import c4 from "./app/images/c4.png";
import c5 from "./app/images/c5.png";
import c6 from "./app/images/c6.png";

export interface Job {
    id: number;
    title: string;
    image: string;
    salary: string;
    location: string;
    jobtype: string;
  }
  
  const JobData: Job[] = [
    {
      id: 1,
      title: "Software Engineer",
      image: c1.src,
      salary: "35k - 40k",
      location: "Kuala Lumpur, Malaysia",
      jobtype: "full time",
    },
    {
      id: 2,
      title: "DevOps Engineer",
      image: c2.src,
      salary: "35k - 40k",
      location: "Cyberjaya, Malaysia",
      jobtype: "full time",
    },
    {
      id: 3,
      title: "Fronetend Engineer",
      image: c3.src,
      salary: "45k - 50k",
      location: "Kuala Lumpur, Malaysia",
      jobtype: "full time",
    },
    {
      id: 4,
      title: "Backend Developer",
      image: c4.src,
      salary: "25k - 30k",
      location: "Singapore",
      jobtype: "Part time",
    },
    {
      id: 5,
      title: "Fullstack Developer",
      image: c5.src,
      salary: "55k - 60k",
      location: "Ampang, Kuala Lumpur",
      jobtype: "full time",
    },
    {
      id: 6,
      title: "Web Designer",
      image: c6.src,
      salary: "25k - 30k",
      location: "Kuala Lumpur",
      jobtype: "Freelance",
    },
  ];
  
  export default JobData;
