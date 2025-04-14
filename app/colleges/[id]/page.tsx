import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getCollegeById } from "@/lib/college-data"
import { MapPin, Phone, Mail, Globe, BookOpen, Award, Building, Users, Calendar } from "lucide-react"
import Link from "next/link"

export default function CollegeDetailPage({ params }: { params: { id: string } }) {
  const college = getCollegeById(Number.parseInt(params.id))

  if (!college) {
    return (
      <div className="container py-16 px-4 md:px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">College Not Found</h1>
        <p className="mb-8">The college you are looking for does not exist or has been removed.</p>
        <Button asChild>
          <Link href="/colleges">Back to Colleges</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container py-8 px-4 md:px-6">
      {/* College Header */}
      <div className="relative rounded-lg overflow-hidden mb-8">
        <img
          src={college.image || `/placeholder.svg?height=400&width=1200&text=${encodeURIComponent(college.name)}`}
          alt={college.name}
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">{college.name}</h1>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <p>
                {college.city}, {college.state}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* College Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
              <TabsTrigger value="admissions">Admissions</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="p-4 border rounded-md mt-4">
              <h2 className="text-2xl font-bold mb-4">About {college.name}</h2>
              <p className="mb-6">{college.description}</p>

              <h3 className="text-xl font-bold mb-3">Key Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Building className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Established</h4>
                    <p className="text-gray-600">{college.established}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Accreditation</h4>
                    <p className="text-gray-600">{college.accreditation}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Student Population</h4>
                    <p className="text-gray-600">{college.studentCount}+ students</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Faculty Strength</h4>
                    <p className="text-gray-600">{college.facultyCount}+ faculty members</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">Rankings & Recognition</h3>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                {college.rankings.map((ranking, index) => (
                  <li key={index}>{ranking}</li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="courses" className="p-4 border rounded-md mt-4">
              <h2 className="text-2xl font-bold mb-4">Courses Offered</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {college.courseDetails.map((course, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold mb-2">{course.name}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Duration:</span>
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Eligibility:</span>
                          <span>{course.eligibility}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Fee (approx):</span>
                          <span>₹{course.fee}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="facilities" className="p-4 border rounded-md mt-4">
              <h2 className="text-2xl font-bold mb-4">Campus Facilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {college.facilities.map((facility, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-blue-600"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">{facility.name}</h4>
                      <p className="text-gray-600">{facility.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="admissions" className="p-4 border rounded-md mt-4">
              <h2 className="text-2xl font-bold mb-4">Admission Process</h2>
              <div className="mb-6">
                <p className="mb-4">{college.admissionProcess}</p>

                <h3 className="text-xl font-bold mb-3">Important Dates</h3>
                <div className="space-y-4">
                  {college.importantDates.map((date, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <Calendar className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{date.event}</h4>
                        <p className="text-gray-600">{date.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-2">Ready to Apply?</h3>
                <p className="mb-4">Get more information about the admission process and apply online.</p>
                <Button>Apply Now</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div>
          <Card className="mb-6">
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm">{college.address}</p>
                    <p className="text-sm">
                      {college.city}, {college.state} - {college.pincode}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-gray-500" />
                  <p className="text-sm">{college.phone}</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-gray-500" />
                  <p className="text-sm">{college.email}</p>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-gray-500" />
                  <a
                    href={college.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {college.website.replace(/^https?:\/\//, "")}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-4">Placement Highlights</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Placement Rate:</span>
                  <span className="font-medium">{college.placement.rate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Highest Package:</span>
                  <span className="font-medium">{college.placement.highestPackage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Average Package:</span>
                  <span className="font-medium">{college.placement.averagePackage}</span>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-medium mb-2">Top Recruiters</h4>
                <div className="flex flex-wrap gap-2">
                  {college.placement.topRecruiters.map((recruiter, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                    >
                      {recruiter}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-4">Save for Later</h3>
              <p className="text-sm text-gray-500 mb-4">
                Create an account to save this college to your favorites and get updates.
              </p>
              <div className="space-y-2">
                <Button className="w-full">Save to Favorites</Button>
                <Button variant="outline" className="w-full">
                  Compare
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
