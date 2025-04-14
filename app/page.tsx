import { Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Discover the Perfect College for Your Future
            </h1>
            <p className="max-w-[700px] text-gray-200 md:text-xl">
              Explore top IT and Management colleges across India to find the best match for your career goals.
            </p>
            <div className="w-full max-w-md flex items-center space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search by college, city or course..."
                  className="pl-8 bg-white text-black"
                />
              </div>
              <Button className="bg-white text-blue-600 hover:bg-gray-100">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Our Platform?</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We help students make informed decisions about their education and future.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-blue-100 p-3">
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
                    className="h-6 w-6 text-blue-600"
                  >
                    <path d="m21 8-9-5-9 5 9 5 9-5" />
                    <path d="M3 8v8l9 5 9-5V8" />
                    <path d="M3 8v8l9 5 9-5V8" />
                    <path d="M12 16v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Comprehensive Database</h3>
                <p className="text-gray-500">
                  Access information on hundreds of colleges and universities across India.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-blue-100 p-3">
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
                    className="h-6 w-6 text-blue-600"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Personalized Recommendations</h3>
                <p className="text-gray-500">Get college suggestions based on your preferences and interests.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-blue-100 p-3">
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
                    className="h-6 w-6 text-blue-600"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Verified Information</h3>
                <p className="text-gray-500">All college data is verified and regularly updated for accuracy.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Colleges Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Popular Colleges</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover top-rated institutions across India.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Link href={`/colleges/${i}`} key={i} className="group">
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <img
                    src={`/placeholder.svg?height=200&width=400&text=College+${i}`}
                    alt={`College ${i}`}
                    width={400}
                    height={200}
                    className="object-cover w-full h-48"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors">
                      {i === 1 && "Indian Institute of Technology, Delhi"}
                      {i === 2 && "Indian Institute of Management, Ahmedabad"}
                      {i === 3 && "National Institute of Technology, Trichy"}
                      {i === 4 && "BITS Pilani"}
                      {i === 5 && "Delhi University"}
                      {i === 6 && "Manipal Institute of Technology"}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {i === 1 && "Delhi"}
                      {i === 2 && "Ahmedabad, Gujarat"}
                      {i === 3 && "Tiruchirappalli, Tamil Nadu"}
                      {i === 4 && "Pilani, Rajasthan"}
                      {i === 5 && "Delhi"}
                      {i === 6 && "Manipal, Karnataka"}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link href="/colleges">View All Colleges</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Find Your Dream College?
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Create an account to save your favorite colleges and get personalized recommendations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/register">Sign Up</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/login">Log In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
