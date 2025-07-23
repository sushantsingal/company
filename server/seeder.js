const mongoose = require("mongoose");
require("dotenv").config();
const Portfolio = require("./models/Portfolio");

const dummyProjects = [
  {
    title: "The Best SEO Tools for 2023",
    description: "In the ever-evolving world of SEO, staying ahead of the competition requires utilizing the best tools available.",
    image: "/assets/Project1.png",
    link: "/portfolio/ecommerce-branding",
    date: "June 16, 2023",
    author: "marketingcrawlers",
    category: "Digital Marketing",
    comments: "No comments yet",
  },
  {
    title: "Social Campaign for EdTech",
    description: "This campaign targeted students with viral content and influencer collaborations to boost signups.",
    image: "/assets/Project2.png",
    link: "/portfolio/edtech-social-campaign",
    date: "May 20, 2023",
    author: "marketingcrawlers",
    category: "Campaigns",
    comments: "5 comments",
  },
  {
    title: "UI/UX for a FinTech App",
    description: "Redesigned a dashboard to improve engagement and user retention across devices.",
    image: "/assets/Project3.png",
    link: "/portfolio/fintech-ui-ux",
    date: "April 10, 2023",
    author: "marketingcrawlers",
    category: "UI/UX",
    comments: "2 comments",
  },
  {
    title: "Digital Strategy for NGO",
    description: "Delivered a donor-driven strategy that helped raise over ₹10L in a quarter.",
    image: "/assets/Project4.png",
    link: "/portfolio/ngo-digital-strategy",
    date: "March 28, 2023",
    author: "marketingcrawlers",
    category: "Strategy",
    comments: "No comments yet",
  },
];

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log("Connected to MongoDB");

  await Portfolio.deleteMany({});
  console.log("Old data deleted");

  await Portfolio.insertMany(dummyProjects);
  console.log("Dummy portfolio data inserted");

  process.exit();
})
.catch((err) => {
  console.error("Error connecting to MongoDB:", err);
  process.exit(1);
});
