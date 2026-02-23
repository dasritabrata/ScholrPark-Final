import { db } from "@/db";
import { categories } from "@/db/schema";

export const categoryNames = [
  "All",
  "Programming",
  "Web Development",
  "Data Science",
  "Machine Learning",
  "Artificial Intelligence",
  "Mathematics",
  "Engineering",
  "Electronics",
  "Electrical",
  "Mechanical",
  "Computer Science",
  "Competitive Exams",
  "JEE",
  "GATE",
  "UPSC",
  "CBSE",
  "ICSE",
  "Class 10",
  "Class 11",
  "Class 12",
  "Beginner",
  "Intermediate",
  "Advanced",
  "Live Recording",
  "Crash Course",
  "Revision",
  "Interview Prep",
  "Placement Training",
  "Project Based",
  "Theory",
  "Practical",
  "Assignments",
  "Doubt Session",
  "Free",
  "Paid",
  "Trending",
  "Recently Added",
  "Most Viewed",
  "High Rated",
];

async function main() {
  console.log("Seeding categories...");
  try {
    const values = categoryNames.map((name) => ({
      name,
      description: `Videos related to ${name.toLowerCase()}`,
    }));
    await db.insert(categories).values(values);
    console.log("====================================");
    console.log("Categories seeded successfully");
    console.log("====================================");
  } catch (error) {
    console.error("Error seeding categories: ", error);
    process.exit(1);
  }
}
main();