import { NextResponse } from "next/server"
import { getAllColleges, searchColleges } from "@/lib/college-data"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("query")
  const city = searchParams.get("city")
  const course = searchParams.get("course")

  let colleges = getAllColleges()

  // Apply search query if provided
  if (query) {
    colleges = searchColleges(query)
  }

  // Filter by city if provided
  if (city && city !== "all") {
    colleges = colleges.filter((college) => college.city.toLowerCase() === city.toLowerCase())
  }

  // Filter by course if provided
  if (course && course !== "all") {
    colleges = colleges.filter((college) => college.courses.some((c) => c.toLowerCase() === course.toLowerCase()))
  }

  return NextResponse.json(colleges)
}
