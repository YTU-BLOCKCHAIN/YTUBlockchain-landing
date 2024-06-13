import axios from "axios";

const API_HOST = process.env.NEXT_PUBLIC_API_HOST;
const API_PORT = process.env.NEXT_PUBLIC_API_PORT;

const dummyClasses = [
  {
    date: "2024-07-12",
    time: "10:00 AM",
    duration: "2 hours",
    topic: "Introduction to Blockchain",
    instructor: "John Doe",
    instructorImage:
      "https://ytublockchain.s3.eu-central-1.amazonaws.com/uploads/1718066507048_Pesonal%20Picture.png",
    githubLink: "https://github.com/instructor/repo",
    tech: "Blockchain, Ethereum",
    ClassLocation: "EEF111",
  },
  {
    date: "2024-07-13",
    time: "12:00 PM",
    duration: "1 hour",
    topic: "Advanced React",
    instructor: "Jane Smith",
    instructorImage:
      "https://ytublockchain.s3.eu-central-1.amazonaws.com/uploads/1718075712286_YTUBC.png",
    githubLink: "https://github.com/instructor/repo",

    tech: "React, JavaScript",
    ClassLocation: "EEF112",
  },
  {
    date: "2024-05-14",
    time: "10:00 AM",
    duration: "2 hours",
    topic: "Introduction to Blockchain",
    instructor: "John Doe",
    instructorImage:
      "https://ytublockchain.s3.eu-central-1.amazonaws.com/uploads/1718066507048_Pesonal%20Picture.png",
    githubLink: "https://github.com/instructor/repo",
    tech: "Blockchain, Ethereum",
    ClassLocation: "EEF113",
  },
  {
    date: "2024-06-04",
    time: "12:00 PM",
    duration: "1 hour",
    topic: "Advanced React",
    instructor: "Jane Smith",
    instructorImage:
      "https://ytublockchain.s3.eu-central-1.amazonaws.com/uploads/1718075712286_YTUBC.png",
    githubLink: "https://github.com/instructor/repo",
    tech: "React, JavaScript",
    ClassLocation: "EEF114",
  },
  {
    date: "2024-05-03",
    time: "10:00 AM",
    duration: "2 hours",
    topic: "Introduction to Blockchain",
    instructor: "John Doe",
    instructorImage:
      "https://ytublockchain.s3.eu-central-1.amazonaws.com/uploads/1718066507048_Pesonal%20Picture.png",
    githubLink: "https://github.com/instructor/repo",
    tech: "Blockchain, Ethereum",
    ClassLocation: "EEF115",
  },
  {
    date: "2024-12-28",
    time: "12:00 PM",
    duration: "1 hour",
    topic: "Advanced React",
    instructor: "Jane Smith",
    instructorImage:
      "https://ytublockchain.s3.eu-central-1.amazonaws.com/uploads/1718075712286_YTUBC.png",
    githubLink: "https://github.com/instructor/repo",
    tech: "React, JavaScript",
    ClassLocation: "EEF116",
  },
  {
    date: "2024-07-24",
    time: "10:00 AM",
    duration: "2 hours",
    topic: "Introduction to Blockchain",
    instructor: "John Doe",
    instructorImage:
      "https://ytublockchain.s3.eu-central-1.amazonaws.com/uploads/1718066507048_Pesonal%20Picture.png",
    githubLink: "https://github.com/instructor/repo",
    tech: "Blockchain, Ethereum",
    ClassLocation: "EEF117",
  },
  {
    date: "2024-08-04",
    time: "12:00 PM",
    duration: "1 hour",
    topic: "Advanced React",
    instructor: "Jane Smith",
    instructorImage:
      "https://ytublockchain.s3.eu-central-1.amazonaws.com/uploads/1718075712286_YTUBC.png",
    githubLink: "https://github.com/instructor/repo",
    tech: "React, JavaScript",
    ClassLocation: "EEF112",
  },
];

export const addClass = async (classData: any) => {
  const response = await axios.post(
    `http://${API_HOST}:${API_PORT}/api/classes`,
    classData
  );
  return response.data;
};

export const fetchClasses = async () => {
  try {
    const response = await axios.get(
      `http://${API_HOST}:${API_PORT}/api/classes`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching classes", error);
    return dummyClasses;
  }
};
