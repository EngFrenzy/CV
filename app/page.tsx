import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  ExternalLink,
  Mail,
  Linkedin,
  Settings,
  CheckCircle2,
  Bug,
  Code,
  LineChart,
  BarChart3,
  Layers,
  Workflow,
  Repeat,
  CheckCheck,
  AlertCircle,
  Phone,
  MapPin,
  Award,
  Calendar,
} from "lucide-react"
import TestingMetrics from "@/components/testing-metrics"
import TestingProcess from "@/components/testing-process"
import CodeSnippet from "@/components/code-snippet"

// Ahmed Agamy's actual projects and data
const projects = [
  {
    id: 1,
    title: "Africa Relief (Website & Mobile App)",
    description:
      "Tested donation workflow integrated with Stripe payment gateway, conducted comprehensive integration and regression testing, collaborated on webhook error handling solutions.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Manual Testing", "Stripe Integration", "API Testing", "Regression Testing", "Mobile Testing"],
    githubUrl: "https://github.com/ahmedagamy",
    liveUrl: "https://africarelief.org",
    featured: true,
    metrics: {
      testCoverage: 95,
      automationRate: 70,
      bugsCaught: 47,
      criticalIssues: 8,
    },
  },
  {
    id: 2,
    title: "Precision Insights - Accounting Dashboard",
    description:
      "Comprehensive QA testing covering user roles management, transaction history validation, profit/loss calculations, and document handling workflows.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Dashboard Testing", "User Role Testing", "API Testing", "Financial Data Validation"],
    githubUrl: "https://github.com/ahmedagamy",
    liveUrl: "https://insights.cpapai.com",
    featured: true,
    metrics: {
      testCoverage: 92,
      automationRate: 65,
      bugsCaught: 34,
      criticalIssues: 12,
    },
  },
  {
    id: 3,
    title: "Jmkon (WordPress Website)",
    description:
      "Functional and usability testing for a project management website with Calendly integration, focusing on user experience and workflow optimization.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["WordPress Testing", "Calendly Integration", "Functional Testing", "Usability Testing"],
    githubUrl: "https://github.com/ahmedagamy",
    liveUrl: "https://jmkon.com",
    featured: false,
    metrics: {
      testCoverage: 88,
      automationRate: 45,
      bugsCaught: 23,
      criticalIssues: 5,
    },
  },
  {
    id: 4,
    title: "Fayrouz Pediatrics (WordPress Website)",
    description:
      "UI/UX and accessibility testing focused on appointment scheduling system and responsive design across multiple devices and browsers.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["WordPress Testing", "Accessibility Testing", "Responsive Design", "Appointment System"],
    githubUrl: "https://github.com/ahmedagamy",
    liveUrl: "https://fayrouzpediatric.com",
    featured: false,
    metrics: {
      testCoverage: 90,
      automationRate: 50,
      bugsCaught: 19,
      criticalIssues: 3,
    },
  },
  {
    id: 5,
    title: "Genie App & Dashboard",
    description:
      "E-commerce testing for mobile and web platforms including REST API validation, payment processing, and usability improvements across the platform.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["E-commerce Testing", "REST API", "Mobile Testing", "Payment Testing", "Usability Testing"],
    githubUrl: "https://github.com/ahmedagamy",
    liveUrl: "#",
    featured: false,
    metrics: {
      testCoverage: 87,
      automationRate: 60,
      bugsCaught: 41,
      criticalIssues: 9,
    },
  },
]

const skills = [
  { name: "Manual Testing", level: 95, category: "Core Testing" },
  { name: "Functional Testing", level: 92, category: "Core Testing" },
  { name: "Integration Testing", level: 90, category: "Core Testing" },
  { name: "Regression Testing", level: 88, category: "Core Testing" },
  { name: "API Testing", level: 85, category: "API & Tools" },
  { name: "Postman", level: 90, category: "API & Tools" },
  { name: "REST API Testing", level: 85, category: "API & Tools" },
  { name: "Cross-Browser Testing", level: 92, category: "Compatibility" },
  { name: "Cross-Device Testing", level: 90, category: "Compatibility" },
  { name: "Responsive Design Testing", level: 88, category: "Compatibility" },
  { name: "WordPress Testing", level: 85, category: "Platforms" },
  { name: "CMS Testing", level: 80, category: "Platforms" },
  { name: "Stripe Payment Testing", level: 88, category: "Platforms" },
  { name: "JIRA", level: 90, category: "Tools & Management" },
  { name: "ClickUp", level: 85, category: "Tools & Management" },
  { name: "Agile/Scrum", level: 88, category: "Tools & Management" },
  { name: "Selenium (Familiar)", level: 65, category: "Automation" },
  { name: "OWASP Top 10", level: 75, category: "Security" },
]

const skillCategories = [
  "Core Testing",
  "API & Tools",
  "Compatibility",
  "Platforms",
  "Tools & Management",
  "Automation",
  "Security",
]

const testingMethodologies = [
  {
    name: "Manual Testing Excellence",
    description:
      "Expertise in comprehensive manual testing approaches, ensuring thorough coverage of functional and non-functional requirements across web and mobile platforms",
    icon: CheckCheck,
  },
  {
    name: "API Testing & Integration",
    description:
      "Proficient in API testing using Postman, validating REST endpoints, data integrity, and integration points between different system components",
    icon: Workflow,
  },
  {
    name: "Cross-Platform Compatibility",
    description:
      "Specialized in cross-browser and cross-device testing to ensure consistent user experience across different platforms and environments",
    icon: Layers,
  },
  {
    name: "Agile QA Practices",
    description:
      "Experienced in Agile/Scrum methodologies, participating in sprint planning, daily standups, and delivering quality software in iterative cycles",
    icon: Repeat,
  },
]

const testMetrics = {
  automationCoverage: 65,
  defectDetectionEfficiency: 94,
  testExecutionEfficiency: 88,
  defectDensity: 0.8,
  defectLeakage: 2.1,
  testCasesExecuted: 8500,
  defectsIdentified: 164,
  criticalDefects: 37,
  automatedTests: 2800,
  manualTests: 5700,
}

const certifications = [
  {
    name: "ISTQB Foundation Level V4",
    issuer: "ISTQB",
    score: "72.5%",
    date: "2024",
    icon: Award,
  },
  {
    name: "Manual Testing",
    issuer: "QA Cart",
    date: "2024",
    icon: CheckCircle2,
  },
  {
    name: "API Testing",
    issuer: "Nezam Academy",
    date: "2024",
    icon: Code,
  },
  {
    name: "Java and OOP",
    issuer: "Nezam Academy",
    date: "2024",
    icon: Code,
  },
  {
    name: "OWASP Top 10",
    issuer: "LinkedIn Learning",
    date: "2024",
    icon: CheckCircle2,
  },
]

const workExperience = [
  {
    company: "Blue Sky Digital Solutions International",
    position: "Software Test Engineer",
    duration: "May 2024 – Present",
    location: "Alexandria, Egypt",
    responsibilities: [
      "Developed comprehensive test cases for mobile and web applications",
      "Conducted API testing using Postman for REST endpoint validation",
      "Participated actively in Agile development cycles and sprint planning",
      "Performed cross-device and cross-browser compatibility testing",
      "Collaborated with development teams to ensure quality deliverables",
    ],
  },
  {
    company: "Aim Tech",
    position: "Software Tester Intern",
    duration: "April 2024 – Present",
    location: "Alexandria, Egypt",
    responsibilities: [
      "Executed manual, regression, and functional testing across multiple platforms",
      "Managed bug reporting and tracking using JIRA",
      "Applied Agile QA practices in fast-paced development environment",
      "Conducted usability and accessibility testing for web applications",
      "Supported quality assurance processes and documentation",
    ],
  },
]

const apiTestingSnippet = `// Postman API Test Example - User Authentication
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response has required fields", function () {
    const responseJson = pm.response.json();
    pm.expect(responseJson).to.have.property('token');
    pm.expect(responseJson).to.have.property('user');
    pm.expect(responseJson.user).to.have.property('email');
});

pm.test("Token is valid format", function () {
    const responseJson = pm.response.json();
    pm.expect(responseJson.token).to.match(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/);
});

// Set token for subsequent requests
pm.globals.set("auth_token", pm.response.json().token);`

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with glass effect */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <h1 className="text-2xl font-bold">Ahmed Agamy</h1>
            <Badge variant="outline" className="ml-2">
              Software Test Engineer
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/ahmedagamy1/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:Ahisham6448@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard">
                <Settings className="h-4 w-4 mr-2" />
                Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with animated background */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-background to-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="relative mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary blur-md"></div>
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Ahmed Agamy Profile"
                width={150}
                height={150}
                className="rounded-full mx-auto relative"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4">Software Test Engineer</h2>
          <div className="flex items-center justify-center gap-6 mb-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Alexandria, Egypt</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>Ahisham6448@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+20 109 760 4213</span>
            </div>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            I am an experienced Software Test Engineer with expertise in manual and API testing, cross-browser/device
            testing, and a strong commitment to quality. I am ISTQB certified and passionate about delivering reliable,
            defect-free applications by collaborating closely with development teams in Agile environments.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <CheckCircle2 className="h-4 w-4" />
              View Testing Portfolio
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <FileText className="h-4 w-4" />
              Download CV
            </Button>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-4 text-center">
                <Bug className="h-8 w-8 mb-2 mx-auto text-primary" />
                <p className="text-3xl font-bold">164+</p>
                <p className="text-sm text-muted-foreground">Bugs Identified</p>
              </CardContent>
            </Card>
            <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-4 text-center">
                <Code className="h-8 w-8 mb-2 mx-auto text-primary" />
                <p className="text-3xl font-bold">8,500+</p>
                <p className="text-sm text-muted-foreground">Test Cases Executed</p>
              </CardContent>
            </Card>
            <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-4 text-center">
                <LineChart className="h-8 w-8 mb-2 mx-auto text-primary" />
                <p className="text-3xl font-bold">94%</p>
                <p className="text-sm text-muted-foreground">Defect Detection</p>
              </CardContent>
            </Card>
            <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-4 text-center">
                <Award className="h-8 w-8 mb-2 mx-auto text-primary" />
                <p className="text-3xl font-bold">ISTQB</p>
                <p className="text-sm text-muted-foreground">Certified</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Professional Experience</h3>
          <div className="max-w-4xl mx-auto space-y-8">
            {workExperience.map((job, index) => (
              <Card key={index} className="overflow-hidden border-primary/10 bg-background/60 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{job.position}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">{job.company}</CardDescription>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{job.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" />
                        <span className="text-sm">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Expertise Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Testing Expertise</h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-2xl font-semibold mb-6 flex items-center">
                <Workflow className="mr-2 h-6 w-6 text-primary" />
                Testing Methodologies
              </h4>
              <div className="space-y-6">
                {testingMethodologies.map((methodology) => (
                  <div key={methodology.name} className="flex gap-4">
                    <div className="mt-1">
                      <methodology.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold">{methodology.name}</h5>
                      <p className="text-muted-foreground">{methodology.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-semibold mb-6 flex items-center">
                <BarChart3 className="mr-2 h-6 w-6 text-primary" />
                Testing Metrics
              </h4>
              <TestingMetrics metrics={testMetrics} />
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center">
              <Layers className="mr-2 h-6 w-6 text-primary" />
              Testing Process
            </h4>
            <TestingProcess />
          </div>
        </div>
      </section>

      {/* Featured Projects with metrics */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Featured Testing Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <Card key={project.id} className="overflow-hidden border-primary/10 bg-background/60 backdrop-blur-sm">
                  <div className="aspect-video relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="secondary" className="bg-primary/20 text-primary">
                        Featured Project
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Test Coverage</span>
                          <span className="font-medium">{project.metrics.testCoverage}%</span>
                        </div>
                        <Progress value={project.metrics.testCoverage} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Automation Rate</span>
                          <span className="font-medium">{project.metrics.automationRate}%</span>
                        </div>
                        <Progress value={project.metrics.automationRate} className="h-2" />
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Button size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Project
                          </a>
                        </Button>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center text-sm">
                          <Bug className="h-4 w-4 mr-1 text-destructive" />
                          <span>{project.metrics.bugsCaught}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <AlertCircle className="h-4 w-4 mr-1 text-destructive" />
                          <span>{project.metrics.criticalIssues}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Skills Section with visual representation */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Testing Skills & Technologies</h3>

          <Tabs defaultValue="Core Testing" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-7 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger key={category} value={category} className="text-xs">
                  {category.replace(" ", "\n")}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category} value={category} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <Card key={skill.name} className="overflow-hidden">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-semibold">{skill.name}</h4>
                            <Badge variant={skill.level > 90 ? "default" : skill.level > 75 ? "secondary" : "outline"}>
                              {skill.level}%
                            </Badge>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Certifications & Training</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="overflow-hidden border-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary rounded-full p-2">
                      <cert.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-muted-foreground">{cert.date}</span>
                        {cert.score && (
                          <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                            {cert.score}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Snippet Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">API Testing Examples</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="h-5 w-5 mr-2 text-primary" />
                  Postman API Test Script
                </CardTitle>
                <CardDescription>Authentication endpoint validation with comprehensive checks</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeSnippet code={apiTestingSnippet} language="javascript" />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Badge variant="outline">Postman</Badge>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View More Examples
                </Button>
              </CardFooter>
            </Card>

            <div className="space-y-6">
              <Card className="overflow-hidden border-primary/10">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    Test Case Example
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Test ID:</span>
                        <span>STRIPE-PAY-001</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Test Title:</span>
                        <span>Verify Stripe Payment Processing</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Priority:</span>
                        <Badge>Critical</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Status:</span>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                          Passed
                        </Badge>
                      </div>
                    </div>

                    <div className="pt-2 border-t">
                      <h5 className="font-medium mb-2">Test Steps:</h5>
                      <ol className="list-decimal list-inside space-y-1 text-sm">
                        <li>Navigate to donation page</li>
                        <li>Enter donation amount</li>
                        <li>Fill in valid payment details</li>
                        <li>Submit payment form</li>
                        <li>Verify payment success message</li>
                        <li>Confirm webhook response</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-primary/10">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg">
                    <Bug className="h-5 w-5 mr-2 text-primary" />
                    Bug Report Example
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Bug ID:</span>
                      <span>AFRICA-REL-045</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Severity:</span>
                      <Badge variant="destructive">High</Badge>
                    </div>
                    <div>
                      <span className="font-medium">Summary:</span>
                      <p className="text-sm mt-1">
                        Donation webhook fails to process recurring payment notifications from Stripe
                      </p>
                    </div>
                    <div>
                      <span className="font-medium">Environment:</span>
                      <Badge variant="outline">Production</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">All Testing Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {project.title}
                    {project.featured && <Badge>Featured</Badge>}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12">Education</h3>
          <Card className="overflow-hidden border-primary/10">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 text-primary rounded-full p-3">
                  <Award className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold">Bachelor's in Computer and Information Systems</h4>
                  <p className="text-lg text-primary font-medium">
                    High Institute for Computers and Information Systems (HICIS)
                  </p>
                  <p className="text-muted-foreground">Alexandria University</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Graduated: May 2023</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12">Get In Touch</h3>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Contact Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-3 text-primary" />
                        <span>Ahisham6448@gmail.com</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-3 text-primary" />
                        <span>+20 109 760 4213</span>
                      </div>
                      <div className="flex items-center">
                        <Linkedin className="h-5 w-5 mr-3 text-primary" />
                        <a
                          href="https://www.linkedin.com/in/ahmedagamy1/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          linkedin.com/in/ahmedagamy1
                        </a>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-3 text-primary" />
                        <span>Alexandria, Egypt</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Testing Services</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                        <span>Manual & Functional Testing</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                        <span>API Testing & Integration Testing</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                        <span>Cross-Browser & Cross-Device Testing</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                        <span>WordPress & CMS Testing</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                        <span>Payment Gateway Testing (Stripe)</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                        <span>Agile QA Process Implementation</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Your email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can I help you?" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Your message" rows={4} />
                    </div>
                  </div>
                  <Button className="w-full">Send Message</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Ahmed Agamy. Software Test Engineer - Alexandria, Egypt.</p>
        </div>
      </footer>
    </div>
  )
}

function FileText(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  )
}
