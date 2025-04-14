import { NextResponse } from "next/server"
import { getCollegeById } from "@/lib/college-data"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)
  const college = getCollegeById(id)

  if (!college) {
    return NextResponse.json({ error: "College not found" }, { status: 404 })
  }

  return NextResponse.json(college)
}
