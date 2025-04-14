import { Search, Filter } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { getAllColleges } from "@/lib/college-data"

export default function CollegesPage() {
  const colleges = getAllColleges()

  return (
    <div className="container py-8 px-4 md:px-6">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter">Colleges in India</h1>
        <p className="text-gray-500">
          Browse through our comprehensive list of IT and Management colleges across India.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="my-8 p-6 border rounded-lg bg-gray-50">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input type="search" placeholder="Search by college name, city or course..." className="pl-8" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Select>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cities</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="chennai">Chennai</SelectItem>
                <SelectItem value="hyderabad">Hyderabad</SelectItem>
                <SelectItem value="pune">Pune</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Courses</SelectItem>
                <SelectItem value="btech">B.Tech</SelectItem>
                <SelectItem value="mtech">M.Tech</SelectItem>
                <SelectItem value="bca">BCA</SelectItem>
                <SelectItem value="mca">MCA</SelectItem>
                <SelectItem value="bba">BBA</SelectItem>
                <SelectItem value="mba">MBA</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <Filter className="h-4 w-4 mr-2" />
              Apply Filters
            </Button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="top-rated" />
            <Label htmlFor="top-rated">Top Rated</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="government" />
            <Label htmlFor="government">Government</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="private" />
            <Label htmlFor="private">Private</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="scholarship" />
            <Label htmlFor="scholarship">Scholarship Available</Label>
          </div>
        </div>
      </div>

      {/* College Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {colleges.map((college) => (
          <Link href={`/colleges/${college.id}`} key={college.id} className="group">
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <img
                src={college.image || `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(college.name)}`}
                alt={college.name}
                width={400}
                height={200}
                className="object-cover w-full h-48"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors">{college.name}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  {college.city}, {college.state}
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {college.courses.slice(0, 3).map((course, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-gray-700"
                    >
                      {course}
                    </span>
                  ))}
                  {college.courses.length > 3 && (
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-gray-500">
                      +{college.courses.length - 3} more
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <nav className="flex items-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" className="bg-blue-50 text-blue-600">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </nav>
      </div>
    </div>
  )
}
