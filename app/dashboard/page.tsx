"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Plus,
  Edit,
  Trash2,
  ArrowLeft,
  Save,
  LayoutDashboard,
  FileText,
  Bug,
  CheckCircle2,
  Settings,
  User,
  BarChart3,
  Code,
  Layers,
  Workflow,
  LogOut,
  Award,
  Lock,
  Eye,
  EyeOff,
  Camera,
  Download,
  Upload,
  RefreshCw,
  TrendingUp,
  Clock,
  Target,
  Zap,
  Smartphone,
  Monitor,
  Tablet,
} from "lucide-react"

// Authentication credentials
const ADMIN_CREDENTIALS = {
  username: "ahmed.agamy",
  password: "QA2024@Test",
}

// Login Component
function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      sessionStorage.setItem("dashboard_authenticated", "true")
      sessionStorage.setItem("dashboard_login_time", Date.now().toString())
      onLogin()
    } else {
      setError("Invalid username or password")
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30 p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Lock className="h-8 w-8" />
          </div>
          <div>
            <CardTitle className="text-2xl sm:text-3xl">Dashboard Login</CardTitle>
            <CardDescription className="text-sm sm:text-base mt-2">
              Enter your credentials to access Ahmed Agamy's QA Dashboard
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
                disabled={isLoading}
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  disabled={isLoading}
                  className="h-11 pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-11 w-11 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            {error && (
              <div className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md p-3">
                {error}
              </div>
            )}
            <Button type="submit" className="w-full h-11" disabled={isLoading}>
              {isLoading ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className="p-4 bg-muted/50 rounded-lg">
            <h4 className="text-sm font-medium mb-3">Demo Credentials:</h4>
            <div className="text-xs text-muted-foreground space-y-2">
              <div className="flex items-center justify-between">
                <span>Username:</span>
                <code className="bg-background px-2 py-1 rounded text-xs">ahmed.agamy</code>
              </div>
              <div className="flex items-center justify-between">
                <span>Password:</span>
                <code className="bg-background px-2 py-1 rounded text-xs">QA2024@Test</code>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button variant="ghost" size="sm" asChild className="w-full sm:w-auto">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Enhanced data structures with more comprehensive information
const initialProjects = [
  {
    id: 1,
    title: "Africa Relief (Website & Mobile App)",
    description:
      "Tested donation workflow integrated with Stripe payment gateway, conducted comprehensive integration and regression testing, collaborated on webhook error handling solutions.",
    technologies: ["Manual Testing", "Stripe Integration", "API Testing", "Regression Testing", "Mobile Testing"],
    githubUrl: "https://github.com/ahmedagamy",
    liveUrl: "https://africarelief.org",
    featured: true,
    image: "/placeholder.svg?height=200&width=300",
    status: "Completed",
    startDate: "2024-03-01",
    endDate: "2024-05-30",
    teamSize: 5,
    platform: "Web & Mobile",
    metrics: {
      testCoverage: 95,
      automationRate: 70,
      bugsCaught: 47,
      criticalIssues: 8,
      testCasesExecuted: 245,
      passRate: 92,
    },
  },
  {
    id: 2,
    title: "Precision Insights - Accounting Dashboard",
    description:
      "Comprehensive QA testing covering user roles management, transaction history validation, profit/loss calculations, and document handling workflows.",
    technologies: ["Dashboard Testing", "User Role Testing", "API Testing", "Financial Data Validation"],
    githubUrl: "https://github.com/ahmedagamy",
    liveUrl: "https://insights.cpapai.com",
    featured: true,
    image: "/placeholder.svg?height=200&width=300",
    status: "Completed",
    startDate: "2024-02-15",
    endDate: "2024-04-20",
    teamSize: 3,
    platform: "Web",
    metrics: {
      testCoverage: 92,
      automationRate: 65,
      bugsCaught: 34,
      criticalIssues: 12,
      testCasesExecuted: 189,
      passRate: 88,
    },
  },
]

const initialSkills = [
  { id: 1, name: "Manual Testing", level: 95, category: "Core Testing", yearsExperience: 3, certified: true },
  { id: 2, name: "API Testing", level: 85, category: "API & Tools", yearsExperience: 2, certified: false },
  { id: 3, name: "Cross-Browser Testing", level: 92, category: "Compatibility", yearsExperience: 2, certified: false },
  { id: 4, name: "WordPress Testing", level: 85, category: "Platforms", yearsExperience: 2, certified: false },
  { id: 5, name: "JIRA", level: 90, category: "Tools & Management", yearsExperience: 3, certified: true },
  { id: 6, name: "Postman", level: 88, category: "API & Tools", yearsExperience: 2, certified: false },
  { id: 7, name: "Selenium", level: 65, category: "Automation", yearsExperience: 1, certified: false },
]

const initialTestCases = [
  {
    id: 1,
    title: "Verify Stripe Payment Processing for Donations",
    description:
      "Test the complete donation flow including payment validation, receipt generation, and webhook processing",
    priority: "Critical",
    status: "Passed",
    automated: false,
    lastExecuted: "2024-05-30",
    executionTime: "Manual",
    project: "Africa Relief",
    estimatedTime: "45 minutes",
    actualTime: "52 minutes",
    environment: "Production",
    assignee: "Ahmed Agamy",
    tags: ["Payment", "Integration", "Critical"],
  },
  {
    id: 2,
    title: "Verify User Role Permissions in Dashboard",
    description: "Validate that different user roles have appropriate access levels and permissions",
    priority: "High",
    status: "Passed",
    automated: false,
    lastExecuted: "2024-05-29",
    executionTime: "Manual",
    project: "Precision Insights",
    estimatedTime: "30 minutes",
    actualTime: "28 minutes",
    environment: "Staging",
    assignee: "Ahmed Agamy",
    tags: ["Security", "User Management", "High"],
  },
  {
    id: 3,
    title: "Verify Calendly Integration Functionality",
    description: "Test the integration between the website and Calendly booking system",
    priority: "Medium",
    status: "Passed",
    automated: false,
    lastExecuted: "2024-05-28",
    executionTime: "Manual",
    project: "Jmkon",
    estimatedTime: "25 minutes",
    actualTime: "30 minutes",
    environment: "Production",
    assignee: "Ahmed Agamy",
    tags: ["Integration", "Third-party", "Medium"],
  },
]

const initialBugs = [
  {
    id: 1,
    title: "Webhook timeout error during high donation volume",
    description: "Payment webhooks fail to process when donation volume exceeds 100 concurrent transactions",
    severity: "Critical",
    status: "Fixed",
    assignee: "Development Team",
    reportedDate: "2024-05-15",
    resolvedDate: "2024-05-18",
    environment: "Production",
    project: "Africa Relief",
    stepsToReproduce: "1. Simulate high volume donations\n2. Monitor webhook processing\n3. Observe timeout errors",
    expectedResult: "All webhooks should process successfully",
    actualResult: "Webhooks timeout after 30 seconds",
    workaround: "Implemented retry mechanism",
    tags: ["Performance", "Critical", "Payment"],
  },
  {
    id: 2,
    title: "User role permissions not properly validated",
    description: "Users can access restricted areas by manipulating URL parameters",
    severity: "High",
    status: "Fixed",
    assignee: "Backend Developer",
    reportedDate: "2024-05-10",
    resolvedDate: "2024-05-12",
    environment: "Staging",
    project: "Precision Insights",
    stepsToReproduce: "1. Login as regular user\n2. Modify URL to admin section\n3. Access restricted content",
    expectedResult: "Access should be denied",
    actualResult: "User gains unauthorized access",
    workaround: "Manual verification required",
    tags: ["Security", "High", "Authorization"],
  },
]

const initialCertifications = [
  {
    id: 1,
    name: "ISTQB Foundation Level V4",
    issuer: "ISTQB",
    score: "72.5%",
    date: "2024-03-15",
    expiryDate: "2027-03-15",
    credentialId: "ISTQB-FL-2024-001",
    status: "Active",
    category: "Testing Fundamentals",
  },
  {
    id: 2,
    name: "Manual Testing Certification",
    issuer: "QA Cart",
    date: "2024-02-20",
    credentialId: "QAC-MT-2024-045",
    status: "Active",
    category: "Manual Testing",
  },
  {
    id: 3,
    name: "API Testing Certification",
    issuer: "Nezam Academy",
    date: "2024-01-10",
    credentialId: "NA-API-2024-123",
    status: "Active",
    category: "API Testing",
  },
]

// Enhanced metrics with more comprehensive data
const initialMetrics = {
  testCasesTotal: 850,
  testCasesAutomated: 280,
  testCasesManual: 570,
  testsPassed: 780,
  testsFailed: 45,
  testsBlocked: 25,
  automationCoverage: 33,
  bugsCritical: 8,
  bugsMajor: 15,
  bugsMinor: 22,
  bugsTotal: 45,
  projectsCompleted: 12,
  projectsActive: 2,
  avgTestExecutionTime: 35, // minutes
  defectDetectionRate: 94,
  testEfficiency: 88,
  clientSatisfaction: 96,
  teamProductivity: 92,
}

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [projects, setProjects] = useState(initialProjects)
  const [skills, setSkills] = useState(initialSkills)
  const [testCases, setTestCases] = useState(initialTestCases)
  const [bugs, setBugs] = useState(initialBugs)
  const [certifications, setCertifications] = useState(initialCertifications)
  const [metrics, setMetrics] = useState(initialMetrics)
  const [profileImage, setProfileImage] = useState("/placeholder.svg?height=150&width=150")

  // Dialog states
  const [isProjectDialogOpen, setIsProjectDialogOpen] = useState(false)
  const [isSkillDialogOpen, setIsSkillDialogOpen] = useState(false)
  const [isTestCaseDialogOpen, setIsTestCaseDialogOpen] = useState(false)
  const [isBugDialogOpen, setIsBugDialogOpen] = useState(false)
  const [isCertDialogOpen, setIsCertDialogOpen] = useState(false)
  const [isMetricsDialogOpen, setIsMetricsDialogOpen] = useState(false)

  // Form states
  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
    technologies: "",
    githubUrl: "",
    liveUrl: "",
    featured: false,
    image: "/placeholder.svg?height=200&width=300",
    status: "Active",
    startDate: "",
    endDate: "",
    teamSize: 1,
    platform: "Web",
    metrics: {
      testCoverage: 0,
      automationRate: 0,
      bugsCaught: 0,
      criticalIssues: 0,
      testCasesExecuted: 0,
      passRate: 0,
    },
  })

  const [skillForm, setSkillForm] = useState({
    name: "",
    level: 0,
    category: "",
    yearsExperience: 0,
    certified: false,
  })

  const [testCaseForm, setTestCaseForm] = useState({
    title: "",
    description: "",
    priority: "",
    status: "Not Run",
    automated: false,
    project: "",
    estimatedTime: "",
    environment: "Development",
    assignee: "Ahmed Agamy",
    tags: "",
  })

  const [bugForm, setBugForm] = useState({
    title: "",
    description: "",
    severity: "",
    status: "Open",
    assignee: "",
    environment: "",
    project: "",
    stepsToReproduce: "",
    expectedResult: "",
    actualResult: "",
    workaround: "",
    tags: "",
  })

  const [certForm, setCertForm] = useState({
    name: "",
    issuer: "",
    score: "",
    date: "",
    expiryDate: "",
    credentialId: "",
    category: "",
  })

  const [profileForm, setProfileForm] = useState({
    fullName: "Ahmed Agamy",
    title: "Software Test Engineer",
    bio: "I am an experienced Software Test Engineer with expertise in manual and API testing, cross-browser/device testing, and a strong commitment to quality. I am ISTQB certified and passionate about delivering reliable, defect-free applications by collaborating closely with development teams in Agile environments.",
    email: "Ahisham6448@gmail.com",
    phone: "+20 109 760 4213",
    linkedin: "https://www.linkedin.com/in/ahmedagamy1/",
    location: "Alexandria, Egypt",
    website: "",
    github: "https://github.com/ahmedagamy",
  })

  // Check authentication on component mount
  useEffect(() => {
    const checkAuth = () => {
      const authenticated = sessionStorage.getItem("dashboard_authenticated")
      const loginTime = sessionStorage.getItem("dashboard_login_time")

      if (authenticated === "true" && loginTime) {
        const twentyFourHours = 24 * 60 * 60 * 1000
        const isExpired = Date.now() - Number.parseInt(loginTime) > twentyFourHours

        if (!isExpired) {
          setIsAuthenticated(true)
        } else {
          sessionStorage.removeItem("dashboard_authenticated")
          sessionStorage.removeItem("dashboard_login_time")
        }
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  // Auto-save functionality
  useEffect(() => {
    if (isAuthenticated) {
      const saveData = () => {
        const dashboardData = {
          projects,
          skills,
          testCases,
          bugs,
          certifications,
          metrics,
          profileImage,
          profileForm,
          lastSaved: new Date().toISOString(),
        }
        localStorage.setItem("dashboard_data", JSON.stringify(dashboardData))
      }

      const interval = setInterval(saveData, 30000) // Auto-save every 30 seconds
      return () => clearInterval(interval)
    }
  }, [projects, skills, testCases, bugs, certifications, metrics, profileImage, profileForm, isAuthenticated])

  // Load saved data
  useEffect(() => {
    if (isAuthenticated) {
      const savedData = localStorage.getItem("dashboard_data")
      if (savedData) {
        try {
          const data = JSON.parse(savedData)
          if (data.projects) setProjects(data.projects)
          if (data.skills) setSkills(data.skills)
          if (data.testCases) setTestCases(data.testCases)
          if (data.bugs) setBugs(data.bugs)
          if (data.certifications) setCertifications(data.certifications)
          if (data.metrics) setMetrics(data.metrics)
          if (data.profileImage) setProfileImage(data.profileImage)
          if (data.profileForm) setProfileForm(data.profileForm)
        } catch (error) {
          console.error("Error loading saved data:", error)
        }
      }
    }
  }, [isAuthenticated])

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    sessionStorage.removeItem("dashboard_authenticated")
    sessionStorage.removeItem("dashboard_login_time")
    setIsAuthenticated(false)
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setProfileImage(result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleProjectImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setProjectForm({ ...projectForm, image: result })
      }
      reader.readAsDataURL(file)
    }
  }

  // Enhanced CRUD operations with validation
  const handleAddProject = () => {
    if (!projectForm.title || !projectForm.description) {
      alert("Please fill in all required fields")
      return
    }

    const newProject = {
      id: Date.now(),
      ...projectForm,
      technologies: projectForm.technologies.split(",").map((t) => t.trim()),
    }
    setProjects([...projects, newProject])

    // Update metrics
    setMetrics((prev) => ({
      ...prev,
      projectsActive: prev.projectsActive + 1,
    }))

    // Reset form
    setProjectForm({
      title: "",
      description: "",
      technologies: "",
      githubUrl: "",
      liveUrl: "",
      featured: false,
      image: "/placeholder.svg?height=200&width=300",
      status: "Active",
      startDate: "",
      endDate: "",
      teamSize: 1,
      platform: "Web",
      metrics: {
        testCoverage: 0,
        automationRate: 0,
        bugsCaught: 0,
        criticalIssues: 0,
        testCasesExecuted: 0,
        passRate: 0,
      },
    })
    setIsProjectDialogOpen(false)
  }

  const handleAddSkill = () => {
    if (!skillForm.name || !skillForm.category || skillForm.level === 0) {
      alert("Please fill in all required fields")
      return
    }

    const newSkill = {
      id: Date.now(),
      ...skillForm,
    }
    setSkills([...skills, newSkill])
    setSkillForm({
      name: "",
      level: 0,
      category: "",
      yearsExperience: 0,
      certified: false,
    })
    setIsSkillDialogOpen(false)
  }

  const handleAddTestCase = () => {
    if (!testCaseForm.title || !testCaseForm.priority || !testCaseForm.project) {
      alert("Please fill in all required fields")
      return
    }

    const newTestCase = {
      id: Date.now(),
      ...testCaseForm,
      lastExecuted: new Date().toISOString().split("T")[0],
      executionTime: testCaseForm.automated ? "Automated" : "Manual",
      actualTime: "",
      tags: testCaseForm.tags.split(",").map((t) => t.trim()),
    }
    setTestCases([...testCases, newTestCase])

    // Update metrics
    setMetrics((prev) => ({
      ...prev,
      testCasesTotal: prev.testCasesTotal + 1,
      testCasesManual: testCaseForm.automated ? prev.testCasesManual : prev.testCasesManual + 1,
      testCasesAutomated: testCaseForm.automated ? prev.testCasesAutomated + 1 : prev.testCasesAutomated,
    }))

    setTestCaseForm({
      title: "",
      description: "",
      priority: "",
      status: "Not Run",
      automated: false,
      project: "",
      estimatedTime: "",
      environment: "Development",
      assignee: "Ahmed Agamy",
      tags: "",
    })
    setIsTestCaseDialogOpen(false)
  }

  const handleAddBug = () => {
    if (!bugForm.title || !bugForm.severity || !bugForm.project) {
      alert("Please fill in all required fields")
      return
    }

    const newBug = {
      id: Date.now(),
      ...bugForm,
      reportedDate: new Date().toISOString().split("T")[0],
      resolvedDate: "",
      tags: bugForm.tags.split(",").map((t) => t.trim()),
    }
    setBugs([...bugs, newBug])

    // Update metrics
    setMetrics((prev) => ({
      ...prev,
      bugsTotal: prev.bugsTotal + 1,
      bugsCritical: bugForm.severity === "Critical" ? prev.bugsCritical + 1 : prev.bugsCritical,
      bugsMajor: bugForm.severity === "High" ? prev.bugsMajor + 1 : prev.bugsMajor,
      bugsMinor: bugForm.severity === "Medium" || bugForm.severity === "Low" ? prev.bugsMinor + 1 : prev.bugsMinor,
    }))

    setBugForm({
      title: "",
      description: "",
      severity: "",
      status: "Open",
      assignee: "",
      environment: "",
      project: "",
      stepsToReproduce: "",
      expectedResult: "",
      actualResult: "",
      workaround: "",
      tags: "",
    })
    setIsBugDialogOpen(false)
  }

  const handleAddCertification = () => {
    if (!certForm.name || !certForm.issuer || !certForm.date) {
      alert("Please fill in all required fields")
      return
    }

    const newCert = {
      id: Date.now(),
      ...certForm,
      status: "Active",
    }
    setCertifications([...certifications, newCert])
    setCertForm({
      name: "",
      issuer: "",
      score: "",
      date: "",
      expiryDate: "",
      credentialId: "",
      category: "",
    })
    setIsCertDialogOpen(false)
  }

  // Delete functions
  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter((p) => p.id !== id))
    setMetrics((prev) => ({
      ...prev,
      projectsActive: Math.max(0, prev.projectsActive - 1),
    }))
  }

  const handleDeleteSkill = (id: number) => {
    setSkills(skills.filter((s) => s.id !== id))
  }

  const handleDeleteTestCase = (id: number) => {
    const testCase = testCases.find((tc) => tc.id === id)
    setTestCases(testCases.filter((tc) => tc.id !== id))

    if (testCase) {
      setMetrics((prev) => ({
        ...prev,
        testCasesTotal: Math.max(0, prev.testCasesTotal - 1),
        testCasesManual: testCase.automated ? prev.testCasesManual : Math.max(0, prev.testCasesManual - 1),
        testCasesAutomated: testCase.automated ? Math.max(0, prev.testCasesAutomated - 1) : prev.testCasesAutomated,
      }))
    }
  }

  const handleDeleteBug = (id: number) => {
    const bug = bugs.find((b) => b.id === id)
    setBugs(bugs.filter((b) => b.id !== id))

    if (bug) {
      setMetrics((prev) => ({
        ...prev,
        bugsTotal: Math.max(0, prev.bugsTotal - 1),
        bugsCritical: bug.severity === "Critical" ? Math.max(0, prev.bugsCritical - 1) : prev.bugsCritical,
        bugsMajor: bug.severity === "High" ? Math.max(0, prev.bugsMajor - 1) : prev.bugsMajor,
        bugsMinor:
          bug.severity === "Medium" || bug.severity === "Low" ? Math.max(0, prev.bugsMinor - 1) : prev.bugsMinor,
      }))
    }
  }

  const handleDeleteCertification = (id: number) => {
    setCertifications(certifications.filter((c) => c.id !== id))
  }

  // Export/Import functions
  const handleExportData = () => {
    const data = {
      projects,
      skills,
      testCases,
      bugs,
      certifications,
      metrics,
      profileForm,
      exportDate: new Date().toISOString(),
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `ahmed-agamy-dashboard-${new Date().toISOString().split("T")[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleImportData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string)
          if (data.projects) setProjects(data.projects)
          if (data.skills) setSkills(data.skills)
          if (data.testCases) setTestCases(data.testCases)
          if (data.bugs) setBugs(data.bugs)
          if (data.certifications) setCertifications(data.certifications)
          if (data.metrics) setMetrics(data.metrics)
          if (data.profileForm) setProfileForm(data.profileForm)
          alert("Data imported successfully!")
        } catch (error) {
          alert("Error importing data. Please check the file format.")
        }
      }
      reader.readAsText(file)
    }
  }

  // Utility functions
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Passed":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "Failed":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      case "In Progress":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      case "Not Run":
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
      case "Open":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      case "Fixed":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "Active":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      case "Completed":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      default:
        return ""
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      case "High":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20"
      case "Medium":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "Low":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      default:
        return ""
    }
  }

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />
  }

  // Show dashboard if authenticated
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar className="border-r">
          <SidebarHeader className="border-b p-3 sm:p-4">
            <div className="flex items-center gap-3">
              <div className="size-8 sm:size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="font-semibold text-sm sm:text-base truncate">QA Dashboard</h2>
                <p className="text-xs text-muted-foreground truncate">Ahmed Agamy</p>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent className="px-2">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-medium">Overview</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="w-full">
                      <LayoutDashboard className="h-4 w-4" />
                      <span className="text-sm">Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="w-full">
                      <BarChart3 className="h-4 w-4" />
                      <span className="text-sm">Analytics</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-medium">Testing</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="w-full">
                      <FileText className="h-4 w-4" />
                      <span className="text-sm">Test Cases</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="w-full">
                      <Bug className="h-4 w-4" />
                      <span className="text-sm">Bug Reports</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="w-full">
                      <Code className="h-4 w-4" />
                      <span className="text-sm">API Testing</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-medium">Portfolio</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="w-full">
                      <Layers className="h-4 w-4" />
                      <span className="text-sm">Projects</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="w-full">
                      <Workflow className="h-4 w-4" />
                      <span className="text-sm">Skills</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="w-full">
                      <Award className="h-4 w-4" />
                      <span className="text-sm">Certifications</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-medium">Settings</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="w-full">
                      <User className="h-4 w-4" />
                      <span className="text-sm">Profile</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="w-full">
                      <Settings className="h-4 w-4" />
                      <span className="text-sm">Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t p-2">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="w-full">
                  <Link href="/">
                    <ArrowLeft className="h-4 w-4" />
                    <span className="text-sm">Back to Portfolio</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={handleLogout} className="w-full">
                  <LogOut className="h-4 w-4" />
                  <span className="text-sm">Logout</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="flex-1 min-w-0">
          <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 sm:h-16 items-center gap-4 px-4 sm:px-6">
              <SidebarTrigger className="shrink-0" />
              <div className="flex-1 min-w-0">
                <h1 className="text-base sm:text-lg font-semibold truncate">Ahmed Agamy - QA Dashboard</h1>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Badge
                  variant="outline"
                  className="bg-green-500/10 text-green-500 border-green-500/20 hidden sm:flex text-xs"
                >
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  Authenticated
                </Badge>
                <Button variant="outline" size="sm" onClick={handleExportData} className="hidden lg:flex text-xs">
                  <Download className="h-4 w-4 mr-2" />
                  Export Data
                </Button>
                <Button variant="outline" size="sm" className="hidden sm:flex text-xs">
                  <Save className="h-4 w-4 mr-2" />
                  Auto-saved
                </Button>
              </div>
            </div>
          </header>

          <main className="flex-1 p-4 sm:p-6 space-y-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid grid-cols-3 sm:grid-cols-6 w-full h-auto p-1">
                <TabsTrigger value="overview" className="text-xs sm:text-sm px-2 py-2">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="testcases" className="text-xs sm:text-sm px-2 py-2">
                  Test Cases
                </TabsTrigger>
                <TabsTrigger value="bugs" className="text-xs sm:text-sm px-2 py-2">
                  Bug Reports
                </TabsTrigger>
                <TabsTrigger value="projects" className="text-xs sm:text-sm px-2 py-2">
                  Projects
                </TabsTrigger>
                <TabsTrigger value="skills" className="text-xs sm:text-sm px-2 py-2">
                  Skills
                </TabsTrigger>
                <TabsTrigger value="profile" className="text-xs sm:text-sm px-2 py-2">
                  Profile
                </TabsTrigger>
              </TabsList>

              {/* Enhanced Overview Tab with comprehensive metrics */}
              <TabsContent value="overview" className="space-y-6 mt-6">
                {/* Quick Actions */}
                <div className="flex flex-wrap gap-2 sm:gap-4 mb-6">
                  <Button size="sm" onClick={handleExportData} className="text-xs">
                    <Download className="h-4 w-4 mr-2" />
                    Export Data
                  </Button>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleImportData}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <Button size="sm" variant="outline" className="text-xs">
                      <Upload className="h-4 w-4 mr-2" />
                      Import Data
                    </Button>
                  </div>
                  <Dialog open={isMetricsDialogOpen} onOpenChange={setIsMetricsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="outline" className="text-xs">
                        <Settings className="h-4 w-4 mr-2" />
                        Update Metrics
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md sm:max-w-lg">
                      <DialogHeader>
                        <DialogTitle>Update Dashboard Metrics</DialogTitle>
                        <DialogDescription>Manually update key performance metrics</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4 max-h-96 overflow-y-auto">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="defect-detection">Defect Detection Rate (%)</Label>
                            <Input
                              id="defect-detection"
                              type="number"
                              min="0"
                              max="100"
                              value={metrics.defectDetectionRate}
                              onChange={(e) => setMetrics({ ...metrics, defectDetectionRate: Number(e.target.value) })}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="test-efficiency">Test Efficiency (%)</Label>
                            <Input
                              id="test-efficiency"
                              type="number"
                              min="0"
                              max="100"
                              value={metrics.testEfficiency}
                              onChange={(e) => setMetrics({ ...metrics, testEfficiency: Number(e.target.value) })}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="client-satisfaction">Client Satisfaction (%)</Label>
                            <Input
                              id="client-satisfaction"
                              type="number"
                              min="0"
                              max="100"
                              value={metrics.clientSatisfaction}
                              onChange={(e) => setMetrics({ ...metrics, clientSatisfaction: Number(e.target.value) })}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="team-productivity">Team Productivity (%)</Label>
                            <Input
                              id="team-productivity"
                              type="number"
                              min="0"
                              max="100"
                              value={metrics.teamProductivity}
                              onChange={(e) => setMetrics({ ...metrics, teamProductivity: Number(e.target.value) })}
                            />
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="avg-execution-time">Avg Test Execution Time (minutes)</Label>
                          <Input
                            id="avg-execution-time"
                            type="number"
                            min="0"
                            value={metrics.avgTestExecutionTime}
                            onChange={(e) => setMetrics({ ...metrics, avgTestExecutionTime: Number(e.target.value) })}
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button onClick={() => setIsMetricsDialogOpen(false)}>Update Metrics</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                {/* Key Performance Indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  <Card className="relative overflow-hidden">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-xs sm:text-sm font-medium text-muted-foreground">Total Test Cases</p>
                          <p className="text-xl sm:text-2xl lg:text-3xl font-bold">{metrics.testCasesTotal}</p>
                          <div className="flex items-center text-xs text-green-600">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            <span>+12% from last month</span>
                          </div>
                        </div>
                        <div className="p-2 sm:p-3 bg-primary/10 rounded-full">
                          <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="relative overflow-hidden">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-xs sm:text-sm font-medium text-muted-foreground">Defect Detection</p>
                          <p className="text-xl sm:text-2xl lg:text-3xl font-bold">{metrics.defectDetectionRate}%</p>
                          <div className="flex items-center text-xs text-green-600">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            <span>+3% improvement</span>
                          </div>
                        </div>
                        <div className="p-2 sm:p-3 bg-green-500/10 rounded-full">
                          <Target className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="relative overflow-hidden">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-xs sm:text-sm font-medium text-muted-foreground">Active Projects</p>
                          <p className="text-xl sm:text-2xl lg:text-3xl font-bold">{metrics.projectsActive}</p>
                          <div className="flex items-center text-xs text-blue-600">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>In progress</span>
                          </div>
                        </div>
                        <div className="p-2 sm:p-3 bg-blue-500/10 rounded-full">
                          <Layers className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="relative overflow-hidden">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-xs sm:text-sm font-medium text-muted-foreground">Client Satisfaction</p>
                          <p className="text-xl sm:text-2xl lg:text-3xl font-bold">{metrics.clientSatisfaction}%</p>
                          <div className="flex items-center text-xs text-green-600">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            <span>Excellent rating</span>
                          </div>
                        </div>
                        <div className="p-2 sm:p-3 bg-yellow-500/10 rounded-full">
                          <Award className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Secondary Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-3 sm:p-4 text-center">
                      <div className="space-y-2">
                        <div className="p-2 bg-purple-500/10 rounded-full w-fit mx-auto">
                          <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                        </div>
                        <p className="text-lg sm:text-xl font-bold">{metrics.testEfficiency}%</p>
                        <p className="text-xs text-muted-foreground">Test Efficiency</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-3 sm:p-4 text-center">
                      <div className="space-y-2">
                        <div className="p-2 bg-orange-500/10 rounded-full w-fit mx-auto">
                          <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                        </div>
                        <p className="text-lg sm:text-xl font-bold">{metrics.avgTestExecutionTime}m</p>
                        <p className="text-xs text-muted-foreground">Avg Execution</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-3 sm:p-4 text-center">
                      <div className="space-y-2">
                        <div className="p-2 bg-red-500/10 rounded-full w-fit mx-auto">
                          <Bug className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                        </div>
                        <p className="text-lg sm:text-xl font-bold">{metrics.bugsTotal}</p>
                        <p className="text-xs text-muted-foreground">Total Bugs</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-3 sm:p-4 text-center">
                      <div className="space-y-2">
                        <div className="p-2 bg-green-500/10 rounded-full w-fit mx-auto">
                          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                        </div>
                        <p className="text-lg sm:text-xl font-bold">{metrics.projectsCompleted}</p>
                        <p className="text-xs text-muted-foreground">Completed</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Detailed Analytics */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base sm:text-lg">Test Execution Status</CardTitle>
                      <CardDescription className="text-sm">Current testing progress and results</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Passed</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{metrics.testsPassed}</span>
                            <span className="text-xs text-muted-foreground">
                              ({Math.round((metrics.testsPassed / metrics.testCasesTotal) * 100)}%)
                            </span>
                          </div>
                        </div>
                        <Progress value={(metrics.testsPassed / metrics.testCasesTotal) * 100} className="h-2" />
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Failed</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{metrics.testsFailed}</span>
                            <span className="text-xs text-muted-foreground">
                              ({Math.round((metrics.testsFailed / metrics.testCasesTotal) * 100)}%)
                            </span>
                          </div>
                        </div>
                        <Progress value={(metrics.testsFailed / metrics.testCasesTotal) * 100} className="h-2" />
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Blocked</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{metrics.testsBlocked}</span>
                            <span className="text-xs text-muted-foreground">
                              ({Math.round((metrics.testsBlocked / metrics.testCasesTotal) * 100)}%)
                            </span>
                          </div>
                        </div>
                        <Progress value={(metrics.testsBlocked / metrics.testCasesTotal) * 100} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base sm:text-lg">Bug Severity Distribution</CardTitle>
                      <CardDescription className="text-sm">Breakdown of reported issues by severity</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Critical</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{metrics.bugsCritical}</span>
                            <span className="text-xs text-muted-foreground">
                              ({Math.round((metrics.bugsCritical / metrics.bugsTotal) * 100)}%)
                            </span>
                          </div>
                        </div>
                        <Progress value={(metrics.bugsCritical / metrics.bugsTotal) * 100} className="h-2" />
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Major</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{metrics.bugsMajor}</span>
                            <span className="text-xs text-muted-foreground">
                              ({Math.round((metrics.bugsMajor / metrics.bugsTotal) * 100)}%)
                            </span>
                          </div>
                        </div>
                        <Progress value={(metrics.bugsMajor / metrics.bugsTotal) * 100} className="h-2" />
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Minor</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{metrics.bugsMinor}</span>
                            <span className="text-xs text-muted-foreground">
                              ({Math.round((metrics.bugsMinor / metrics.bugsTotal) * 100)}%)
                            </span>
                          </div>
                        </div>
                        <Progress value={(metrics.bugsMinor / metrics.bugsTotal) * 100} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Platform Testing Coverage */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base sm:text-lg">Platform Testing Coverage</CardTitle>
                    <CardDescription className="text-sm">
                      Testing coverage across different platforms and devices
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="text-center space-y-3">
                        <div className="p-3 bg-blue-500/10 rounded-full w-fit mx-auto">
                          <Monitor className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                          <p className="text-lg font-bold">98%</p>
                          <p className="text-xs text-muted-foreground">Desktop Coverage</p>
                        </div>
                      </div>

                      <div className="text-center space-y-3">
                        <div className="p-3 bg-green-500/10 rounded-full w-fit mx-auto">
                          <Smartphone className="h-6 w-6 text-green-500" />
                        </div>
                        <div>
                          <p className="text-lg font-bold">95%</p>
                          <p className="text-xs text-muted-foreground">Mobile Coverage</p>
                        </div>
                      </div>

                      <div className="text-center space-y-3">
                        <div className="p-3 bg-purple-500/10 rounded-full w-fit mx-auto">
                          <Tablet className="h-6 w-6 text-purple-500" />
                        </div>
                        <div>
                          <p className="text-lg font-bold">92%</p>
                          <p className="text-xs text-muted-foreground">Tablet Coverage</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Enhanced Test Cases Tab */}
              <TabsContent value="testcases" className="space-y-6 mt-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Test Cases Management</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Manage and track all test cases across projects
                    </p>
                  </div>
                  <Dialog open={isTestCaseDialogOpen} onOpenChange={setIsTestCaseDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full sm:w-auto">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Test Case
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Add New Test Case</DialogTitle>
                        <DialogDescription>Create a comprehensive test case for your testing suite</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="test-title">Test Case Title *</Label>
                          <Input
                            id="test-title"
                            value={testCaseForm.title}
                            onChange={(e) => setTestCaseForm({ ...testCaseForm, title: e.target.value })}
                            placeholder="Enter descriptive test case title"
                          />
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="test-description">Description</Label>
                          <Textarea
                            id="test-description"
                            value={testCaseForm.description}
                            onChange={(e) => setTestCaseForm({ ...testCaseForm, description: e.target.value })}
                            placeholder="Detailed description of what this test case validates"
                            rows={3}
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="test-priority">Priority *</Label>
                            <Select
                              value={testCaseForm.priority}
                              onValueChange={(value) => setTestCaseForm({ ...testCaseForm, priority: value })}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select priority" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Critical">Critical</SelectItem>
                                <SelectItem value="High">High</SelectItem>
                                <SelectItem value="Medium">Medium</SelectItem>
                                <SelectItem value="Low">Low</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="grid gap-2">
                            <Label htmlFor="test-project">Project *</Label>
                            <Select
                              value={testCaseForm.project}
                              onValueChange={(value) => setTestCaseForm({ ...testCaseForm, project: value })}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select project" />
                              </SelectTrigger>
                              <SelectContent>
                                {projects.map((project) => (
                                  <SelectItem key={project.id} value={project.title}>
                                    {project.title}
                                  </SelectItem>
                                ))}
                                <SelectItem value="Africa Relief">Africa Relief</SelectItem>
                                <SelectItem value="Precision Insights">Precision Insights</SelectItem>
                                <SelectItem value="Jmkon">Jmkon</SelectItem>
                                <SelectItem value="Fayrouz Pediatrics">Fayrouz Pediatrics</SelectItem>
                                <SelectItem value="Genie App">Genie App</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="test-environment">Environment</Label>
                            <Select
                              value={testCaseForm.environment}
                              onValueChange={(value) => setTestCaseForm({ ...testCaseForm, environment: value })}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select environment" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Development">Development</SelectItem>
                                <SelectItem value="Testing">Testing</SelectItem>
                                <SelectItem value="Staging">Staging</SelectItem>
                                <SelectItem value="Production">Production</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="grid gap-2">
                            <Label htmlFor="test-estimated-time">Estimated Time</Label>
                            <Input
                              id="test-estimated-time"
                              value={testCaseForm.estimatedTime}
                              onChange={(e) => setTestCaseForm({ ...testCaseForm, estimatedTime: e.target.value })}
                              placeholder="e.g., 30 minutes"
                            />
                          </div>
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="test-assignee">Assignee</Label>
                          <Input
                            id="test-assignee"
                            value={testCaseForm.assignee}
                            onChange={(e) => setTestCaseForm({ ...testCaseForm, assignee: e.target.value })}
                            placeholder="Assigned tester name"
                          />
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="test-tags">Tags</Label>
                          <Input
                            id="test-tags"
                            value={testCaseForm.tags}
                            onChange={(e) => setTestCaseForm({ ...testCaseForm, tags: e.target.value })}
                            placeholder="e.g., Payment, Integration, Security (comma separated)"
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <Switch
                            id="automated"
                            checked={testCaseForm.automated}
                            onCheckedChange={(checked) => setTestCaseForm({ ...testCaseForm, automated: checked })}
                          />
                          <Label htmlFor="automated">Automated Test Case</Label>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setIsTestCaseDialogOpen(false)}>
                          Cancel
                        </Button>
                        <Button onClick={handleAddTestCase}>Add Test Case</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                {/* Test Cases Summary Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="space-y-2">
                        <p className="text-2xl font-bold">{testCases.length}</p>
                        <p className="text-xs text-muted-foreground">Total Cases</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="space-y-2">
                        <p className="text-2xl font-bold text-green-600">
                          {testCases.filter((tc) => tc.status === "Passed").length}
                        </p>
                        <p className="text-xs text-muted-foreground">Passed</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="space-y-2">
                        <p className="text-2xl font-bold text-red-600">
                          {testCases.filter((tc) => tc.status === "Failed").length}
                        </p>
                        <p className="text-xs text-muted-foreground">Failed</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="space-y-2">
                        <p className="text-2xl font-bold text-blue-600">
                          {testCases.filter((tc) => tc.automated).length}
                        </p>
                        <p className="text-xs text-muted-foreground">Automated</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Test Cases Table */}
                <Card>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="border-b bg-muted/50">
                          <tr>
                            <th className="text-left p-3 sm:p-4 font-medium text-xs sm:text-sm">Test Case</th>
                            <th className="text-left p-3 sm:p-4 font-medium text-xs sm:text-sm">Project</th>
                            <th className="text-left p-3 sm:p-4 font-medium text-xs sm:text-sm">Priority</th>
                            <th className="text-left p-3 sm:p-4 font-medium text-xs sm:text-sm">Status</th>
                            <th className="text-left p-3 sm:p-4 font-medium text-xs sm:text-sm hidden sm:table-cell">
                              Type
                            </th>
                            <th className="text-left p-3 sm:p-4 font-medium text-xs sm:text-sm hidden lg:table-cell">
                              Last Executed
                            </th>
                            <th className="text-left p-3 sm:p-4 font-medium text-xs sm:text-sm hidden lg:table-cell">
                              Assignee
                            </th>
                            <th className="text-left p-3 sm:p-4 font-medium text-xs sm:text-sm">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {testCases.map((testCase) => (
                            <tr key={testCase.id} className="border-b hover:bg-muted/50 transition-colors">
                              <td className="p-3 sm:p-4">
                                <div className="space-y-1">
                                  <p className="text-xs sm:text-sm font-medium">{testCase.title}</p>
                                  {testCase.description && (
                                    <p className="text-xs text-muted-foreground line-clamp-2">{testCase.description}</p>
                                  )}
                                  {testCase.tags && testCase.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-1 mt-1">
                                      {testCase.tags.slice(0, 2).map((tag, index) => (
                                        <Badge key={index} variant="outline" className="text-xs px-1 py-0">
                                          {tag}
                                        </Badge>
                                      ))}
                                      {testCase.tags.length > 2 && (
                                        <Badge variant="outline" className="text-xs px-1 py-0">
                                          +{testCase.tags.length - 2}
                                        </Badge>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </td>
                              <td className="p-3 sm:p-4">
                                <Badge variant="outline" className="text-xs">
                                  {testCase.project}
                                </Badge>
                              </td>
                              <td className="p-3 sm:p-4">
                                <Badge variant="outline" className={`text-xs ${getPriorityColor(testCase.priority)}`}>
                                  {testCase.priority}
                                </Badge>
                              </td>
                              <td className="p-3 sm:p-4">
                                <Badge variant="outline" className={`text-xs ${getStatusColor(testCase.status)}`}>
                                  {testCase.status}
                                </Badge>
                              </td>
                              <td className="p-3 sm:p-4 hidden sm:table-cell">
                                {testCase.automated ? (
                                  <Badge
                                    variant="outline"
                                    className="bg-green-500/10 text-green-500 border-green-500/20 text-xs"
                                  >
                                    Automated
                                  </Badge>
                                ) : (
                                  <Badge variant="outline" className="text-xs">
                                    Manual
                                  </Badge>
                                )}
                              </td>
                              <td className="p-3 sm:p-4 text-xs sm:text-sm hidden lg:table-cell">
                                {testCase.lastExecuted}
                              </td>
                              <td className="p-3 sm:p-4 text-xs sm:text-sm hidden lg:table-cell">
                                {testCase.assignee}
                              </td>
                              <td className="p-3 sm:p-4">
                                <div className="flex gap-1 sm:gap-2">
                                  <Button size="sm" variant="outline">
                                    <Edit className="h-3 w-3 sm:h-4 sm:w-4" />
                                  </Button>
                                  <Button size="sm" variant="outline" onClick={() => handleDeleteTestCase(testCase.id)}>
                                    <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Enhanced Bug Reports Tab */}
              <TabsContent value="bugs" className="space-y-6 mt-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Bug Reports Management</h2>
                    <p className="text-sm text-muted-foreground mt-1">Track and manage all reported issues</p>
                  </div>
                  <Dialog open={isBugDialogOpen} onOpenChange={setIsBugDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full sm:w-auto">
                        <Plus className="h-4 w-4 mr-2" />
                        Report Bug
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Report New Bug</DialogTitle>
                        <DialogDescription>Create a detailed bug report for tracking and resolution</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="bug-title">Bug Title *</Label>
                          <Input
                            id="bug-title"
                            value={bugForm.title}
                            onChange={(e) => setBugForm({ ...bugForm, title: e.target.value })}
                            placeholder="Brief, descriptive title of the bug"
                          />
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="bug-description">Description *</Label>
                          <Textarea
                            id="bug-description"
                            value={bugForm.description}
                            onChange={(e) => setBugForm({ ...bugForm, description: e.target.value })}
                            placeholder="Detailed description of the bug and its impact"
                            rows={3}
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="bug-severity">Severity *</Label>
                            <Select
                              value={bugForm.severity}
                              onValueChange={(value) => setBugForm({ ...bugForm, severity: value })}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select severity" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Critical">Critical</SelectItem>
                                <SelectItem value="High">High</SelectItem>
                                <SelectItem value="Medium">Medium</SelectItem>
                                <SelectItem value="Low">Low</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="grid gap-2">
                            <Label htmlFor="bug-project">Project *</Label>
                            <Select
                              value={bugForm.project}
                              onValueChange={(value) => setBugForm({ ...bugForm, project: value })}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select project" />
                              </SelectTrigger>
                              <SelectContent>
                                {projects.map((project) => (
                                  <SelectItem key={project.id} value={project.title}>
                                    {project.title}
                                  </SelectItem>
                                ))}
                                <SelectItem value="Africa Relief">Africa Relief</SelectItem>
                                <SelectItem value="Precision Insights">Precision Insights</SelectItem>
                                <SelectItem value="Jmkon">Jmkon</SelectItem>
                                <SelectItem value="Fayrouz Pediatrics">Fayrouz Pediatrics</SelectItem>
                                <SelectItem value="Genie App">Genie App</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="bug-environment">Environment</Label>
                            <Select
                              value={bugForm.environment}
                              onValueChange={(value) => setBugForm({ ...bugForm, environment: value })}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select environment" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Production">Production</SelectItem>
                                <SelectItem value="Staging">Staging</SelectItem>
                                <SelectItem value="Development">Development</SelectItem>
                                <SelectItem value="Testing">Testing</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="grid gap-2">
                            <Label htmlFor="bug-assignee">Assignee</Label>
                            <Input
                              id="bug-assignee"
                              value={bugForm.assignee}
                              onChange={(e) => setBugForm({ ...bugForm, assignee: e.target.value })}
                              placeholder="Assigned developer/team"
                            />
                          </div>
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="bug-steps">Steps to Reproduce</Label>
                          <Textarea
                            id="bug-steps"
                            value={bugForm.stepsToReproduce}
                            onChange={(e) => setBugForm({ ...bugForm, stepsToReproduce: e.target.value })}
                            placeholder="1. Step one&#10;2. Step two&#10;3. Step three"
                            rows={3}
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="bug-expected">Expected Result</Label>
                            <Textarea
                              id="bug-expected"
                              value={bugForm.expectedResult}
                              onChange={(e) => setBugForm({ ...bugForm, expectedResult: e.target.value })}
                              placeholder="What should happen"
                              rows={2}
                            />
                          </div>

                          <div className="grid gap-2">
                            <Label htmlFor="bug-actual">Actual Result</Label>
                            <Textarea
                              id="bug-actual"
                              value={bugForm.actualResult}
                              onChange={(e) => setBugForm({ ...bugForm, actualResult: e.target.value })}
                              placeholder="What actually happens"
                              rows={2}
                            />
                          </div>
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="bug-workaround">Workaround (if any)</Label>
                          <Textarea
                            id="bug-workaround"
                            value={bugForm.workaround}
                            onChange={(e) => setBugForm({ ...bugForm, workaround: e.target.value })}
                            placeholder="Temporary solution or workaround"
                            rows={2}
                          />
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="bug-tags">Tags</Label>
                          <Input
                            id="bug-tags"
                            value={bugForm.tags}
                            onChange={(e) => setBugForm({ ...bugForm, tags: e.target.value })}
                            placeholder="e.g., UI, Performance, Security (comma separated)"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setIsBugDialogOpen(false)}>
                          Cancel
                        </Button>
                        <Button onClick={handleAddBug}>Report Bug</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                {/* Bug Summary Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="space-y-2">
                        <p className="text-2xl font-bold">{bugs.length}</p>
                        <p className="text-xs text-muted-foreground">Total Bugs</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="space-y-2">
                        <p className="text-2xl font-bold text-red-600">
                          {bugs.filter((bug) => bug.status === "Open").length}
                        </p>
                        <p className="text-xs text-muted-foreground">Open</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="space-y-2">
                        <p className="text-2xl font-bold text-green-600">
                          {bugs.filter((bug) => bug.status === "Fixed").length}
                        </p>
                        <p className="text-xs text-muted-foreground">Fixed</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="space-y-2">
                        <p className="text-2xl font-bold text-red-600">
                          {bugs.filter((bug) => bug.severity === "Critical").length}
                        </p>
                        <p className="text-xs text-muted-foreground">Critical</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Bug Reports Table */}
                <Card>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="border-b bg-muted/50">
                          <tr>
                            <th className="text-left p-3 sm:p-4 font-medium text-xs sm:text-sm">Bug Report</th>
                            <th className="text-left p-3 sm:p-4 font-medium text-xs sm:text-sm">Project</th>
                            <th className="text-left p-3 sm:p-4 font-medium text-xs sm:text-sm">Severity</th>
                            <th className="text-left p-3 sm:p-4 font-medium text-xs sm:text-sm">Status</th>
                            <th className="text-left p-3 sm:p-4 font-medium text-xs sm:text-sm hidden lg:table-cell">
                              Assignee
                            </th>
                            <th className="text-left p-3 sm:p-4 font-medium text-xs sm:text-sm hidden lg:table-cell">
                              Reported
                            </th>
                            <th className="text-left p-3 sm:p-4 font-medium text-xs sm:text-sm">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {bugs.map((bug) => (
                            <tr key={bug.id} className="border-b hover:bg-muted/50 transition-colors">
                              <td className="p-3 sm:p-4">
                                <div className="space-y-1">
                                  <p className="text-xs sm:text-sm font-medium">{bug.title}</p>
                                  {bug.description && (
                                    <p className="text-xs text-muted-foreground line-clamp-2">{bug.description}</p>
                                  )}
                                  {bug.tags && bug.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-1 mt-1">
                                      {bug.tags.slice(0, 2).map((tag, index) => (
                                        <Badge key={index} variant="outline" className="text-xs px-1 py-0">
                                          {tag}
                                        </Badge>
                                      ))}
                                      {bug.tags.length > 2 && (
                                        <Badge variant="outline" className="text-xs px-1 py-0">
                                          +{bug.tags.length - 2}
                                        </Badge>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </td>
                              <td className="p-3 sm:p-4">
                                <Badge variant="outline" className="text-xs">
                                  {bug.project}
                                </Badge>
                              </td>
                              <td className="p-3 sm:p-4">
                                <Badge variant="outline" className={`text-xs ${getPriorityColor(bug.severity)}`}>
                                  {bug.severity}
                                </Badge>
                              </td>
                              <td className="p-3 sm:p-4">
                                <Badge variant="outline" className={`text-xs ${getStatusColor(bug.status)}`}>
                                  {bug.status}
                                </Badge>
                              </td>
                              <td className="p-3 sm:p-4 text-xs sm:text-sm hidden lg:table-cell">{bug.assignee}</td>
                              <td className="p-3 sm:p-4 text-xs sm:text-sm hidden lg:table-cell">{bug.reportedDate}</td>
                              <td className="p-3 sm:p-4">
                                <div className="flex gap-1 sm:gap-2">
                                  <Button size="sm" variant="outline">
                                    <Edit className="h-3 w-3 sm:h-4 sm:w-4" />
                                  </Button>
                                  <Button size="sm" variant="outline" onClick={() => handleDeleteBug(bug.id)}>
                                    <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Enhanced Projects Tab */}
              <TabsContent value="projects" className="space-y-6 mt-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Projects Management</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Manage your testing projects and track progress
                    </p>
                  </div>
                  <Dialog open={isProjectDialogOpen} onOpenChange={setIsProjectDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full sm:w-auto">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Project
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md sm:max-w-3xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Add New Project</DialogTitle>
                        <DialogDescription>Create a comprehensive project entry for your portfolio</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-6 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="project-title">Project Title *</Label>
                          <Input
                            id="project-title"
                            value={projectForm.title}
                            onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                            placeholder="Enter project title"
                          />
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="project-description">Description *</Label>
                          <Textarea
                            id="project-description"
                            value={projectForm.description}
                            onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                            placeholder="Detailed description of your testing work on this project"
                            rows={4}
                          />
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="project-technologies">Technologies/Testing Types *</Label>
                          <Input
                            id="project-technologies"
                            value={projectForm.technologies}
                            onChange={(e) => setProjectForm({ ...projectForm, technologies: e.target.value })}
                            placeholder="Manual Testing, API Testing, Cross-Browser Testing (comma separated)"
                          />
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="project-image">Project Image</Label>
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              <Image
                                src={projectForm.image || "/placeholder.svg"}
                                alt="Project preview"
                                width={120}
                                height={80}
                                className="rounded-md object-cover border"
                              />
                            </div>
                            <div className="flex-1">
                              <Input
                                id="project-image"
                                type="file"
                                accept="image/*"
                                onChange={handleProjectImageUpload}
                                className="cursor-pointer"
                              />
                              <p className="text-xs text-muted-foreground mt-1">Upload a project screenshot or image</p>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="project-github">GitHub URL</Label>
                            <Input
                              id="project-github"
                              value={projectForm.githubUrl}
                              onChange={(e) => setProjectForm({ ...projectForm, githubUrl: e.target.value })}
                              placeholder="https://github.com/..."
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="project-live">Project URL</Label>
                            <Input
                              id="project-live"
                              value={projectForm.liveUrl}
                              onChange={(e) => setProjectForm({ ...projectForm, liveUrl: e.target.value })}
                              placeholder="https://project-url.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="project-status">Status</Label>
                            <Select
                              value={projectForm.status}
                              onValueChange={(value) => setProjectForm({ ...projectForm, status: value })}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Active">Active</SelectItem>
                                <SelectItem value="Completed">Completed</SelectItem>
                                <SelectItem value="On Hold">On Hold</SelectItem>
                                <SelectItem value="Cancelled">Cancelled</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="project-platform">Platform</Label>
                            <Select
                              value={projectForm.platform}
                              onValueChange={(value) => setProjectForm({ ...projectForm, platform: value })}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select platform" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Web">Web</SelectItem>
                                <SelectItem value="Mobile">Mobile</SelectItem>
                                <SelectItem value="Web & Mobile">Web & Mobile</SelectItem>
                                <SelectItem value="Desktop">Desktop</SelectItem>
                                <SelectItem value="API">API</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="project-team-size">Team Size</Label>
                            <Input
                              id="project-team-size"
                              type="number"
                              min="1"
                              value={projectForm.teamSize}
                              onChange={(e) => setProjectForm({ ...projectForm, teamSize: Number(e.target.value) })}
                              placeholder="5"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="project-start-date">Start Date</Label>
                            <Input
                              id="project-start-date"
                              type="date"
                              value={projectForm.startDate}
                              onChange={(e) => setProjectForm({ ...projectForm, startDate: e.target.value })}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="project-end-date">End Date</Label>
                            <Input
                              id="project-end-date"
                              type="date"
                              value={projectForm.endDate}
                              onChange={(e) => setProjectForm({ ...projectForm, endDate: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-sm font-medium">Project Metrics</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="project-coverage">Test Coverage (%)</Label>
                              <Input
                                id="project-coverage"
                                type="number"
                                min="0"
                                max="100"
                                value={projectForm.metrics.testCoverage}
                                onChange={(e) =>
                                  setProjectForm({
                                    ...projectForm,
                                    metrics: {
                                      ...projectForm.metrics,
                                      testCoverage: Number(e.target.value) || 0,
                                    },
                                  })
                                }
                                placeholder="95"
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="project-automation">Automation Rate (%)</Label>
                              <Input
                                id="project-automation"
                                type="number"
                                min="0"
                                max="100"
                                value={projectForm.metrics.automationRate}
                                onChange={(e) =>
                                  setProjectForm({
                                    ...projectForm,
                                    metrics: {
                                      ...projectForm.metrics,
                                      automationRate: Number(e.target.value) || 0,
                                    },
                                  })
                                }
                                placeholder="70"
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="project-pass-rate">Pass Rate (%)</Label>
                              <Input
                                id="project-pass-rate"
                                type="number"
                                min="0"
                                max="100"
                                value={projectForm.metrics.passRate}
                                onChange={(e) =>
                                  setProjectForm({
                                    ...projectForm,
                                    metrics: {
                                      ...projectForm.metrics,
                                      passRate: Number(e.target.value) || 0,
                                    },
                                  })
                                }
                                placeholder="92"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="project-bugs">Bugs Found</Label>
                              <Input
                                id="project-bugs"
                                type="number"
                                min="0"
                                value={projectForm.metrics.bugsCaught}
                                onChange={(e) =>
                                  setProjectForm({
                                    ...projectForm,
                                    metrics: {
                                      ...projectForm.metrics,
                                      bugsCaught: Number(e.target.value) || 0,
                                    },
                                  })
                                }
                                placeholder="47"
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="project-critical">Critical Issues</Label>
                              <Input
                                id="project-critical"
                                type="number"
                                min="0"
                                value={projectForm.metrics.criticalIssues}
                                onChange={(e) =>
                                  setProjectForm({
                                    ...projectForm,
                                    metrics: {
                                      ...projectForm.metrics,
                                      criticalIssues: Number(e.target.value) || 0,
                                    },
                                  })
                                }
                                placeholder="8"
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="project-test-cases">Test Cases Executed</Label>
                              <Input
                                id="project-test-cases"
                                type="number"
                                min="0"
                                value={projectForm.metrics.testCasesExecuted}
                                onChange={(e) =>
                                  setProjectForm({
                                    ...projectForm,
                                    metrics: {
                                      ...projectForm.metrics,
                                      testCasesExecuted: Number(e.target.value) || 0,
                                    },
                                  })
                                }
                                placeholder="245"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Switch
                            id="project-featured"
                            checked={projectForm.featured}
                            onCheckedChange={(checked) => setProjectForm({ ...projectForm, featured: checked })}
                          />
                          <Label htmlFor="project-featured">Featured Project</Label>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setIsProjectDialogOpen(false)}>
                          Cancel
                        </Button>
                        <Button onClick={handleAddProject}>Add Project</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                {/* Projects Summary */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="space-y-2">
                        <p className="text-2xl font-bold">{projects.length}</p>
                        <p className="text-xs text-muted-foreground">Total Projects</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="space-y-2">
                        <p className="text-2xl font-bold text-blue-600">
                          {projects.filter((p) => p.status === "Active").length}
                        </p>
                        <p className="text-xs text-muted-foreground">Active</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="space-y-2">
                        <p className="text-2xl font-bold text-green-600">
                          {projects.filter((p) => p.status === "Completed").length}
                        </p>
                        <p className="text-xs text-muted-foreground">Completed</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="space-y-2">
                        <p className="text-2xl font-bold text-yellow-600">
                          {projects.filter((p) => p.featured).length}
                        </p>
                        <p className="text-xs text-muted-foreground">Featured</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-6">
                  {projects.map((project) => (
                    <Card key={project.id} className="overflow-hidden">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-1">
                          <div className="aspect-video relative">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                            {project.featured && (
                              <div className="absolute top-2 left-2">
                                <Badge className="bg-yellow-500/90 text-yellow-900">Featured</Badge>
                              </div>
                            )}
                            <div className="absolute top-2 right-2">
                              <Badge variant="outline" className={`${getStatusColor(project.status)} backdrop-blur-sm`}>
                                {project.status}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <div className="lg:col-span-2 p-6">
                          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <h3 className="text-lg sm:text-xl font-semibold">{project.title}</h3>
                                <Badge variant="outline" className="text-xs">
                                  {project.platform}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-3">{project.description}</p>

                              <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech) => (
                                  <Badge key={tech} variant="secondary" className="text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>

                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                                <div className="text-center">
                                  <p className="text-lg font-bold">{project.metrics.testCoverage}%</p>
                                  <p className="text-xs text-muted-foreground">Coverage</p>
                                </div>
                                <div className="text-center">
                                  <p className="text-lg font-bold">{project.metrics.automationRate}%</p>
                                  <p className="text-xs text-muted-foreground">Automation</p>
                                </div>
                                <div className="text-center">
                                  <p className="text-lg font-bold">{project.metrics.bugsCaught}</p>
                                  <p className="text-xs text-muted-foreground">Bugs Found</p>
                                </div>
                                <div className="text-center">
                                  <p className="text-lg font-bold">{project.metrics.passRate}%</p>
                                  <p className="text-xs text-muted-foreground">Pass Rate</p>
                                </div>
                              </div>

                              <div className="flex flex-col sm:flex-row gap-2 text-xs text-muted-foreground">
                                <span>Team Size: {project.teamSize}</span>
                                {project.startDate && (
                                  <span>
                                    Duration: {project.startDate} - {project.endDate || "Present"}
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="flex gap-2 shrink-0">
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => handleDeleteProject(project.id)}>
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Enhanced Skills Tab */}
              <TabsContent value="skills" className="space-y-6 mt-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Skills Management</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Manage your technical skills and expertise levels
                    </p>
                  </div>
                  <Dialog open={isSkillDialogOpen} onOpenChange={setIsSkillDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full sm:w-auto">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Skill
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md sm:max-w-lg">
                      <DialogHeader>
                        <DialogTitle>Add New Skill</DialogTitle>
                        <DialogDescription>Add a new technical skill to your portfolio</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="skill-name">Skill Name *</Label>
                          <Input
                            id="skill-name"
                            value={skillForm.name}
                            onChange={(e) => setSkillForm({ ...skillForm, name: e.target.value })}
                            placeholder="e.g., Postman API Testing"
                          />
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="skill-category">Category *</Label>
                          <Select
                            value={skillForm.category}
                            onValueChange={(value) => setSkillForm({ ...skillForm, category: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Core Testing">Core Testing</SelectItem>
                              <SelectItem value="API & Tools">API & Tools</SelectItem>
                              <SelectItem value="Compatibility">Compatibility</SelectItem>
                              <SelectItem value="Platforms">Platforms</SelectItem>
                              <SelectItem value="Tools & Management">Tools & Management</SelectItem>
                              <SelectItem value="Automation">Automation</SelectItem>
                              <SelectItem value="Security">Security</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="skill-level">Skill Level (%) *</Label>
                            <Input
                              id="skill-level"
                              type="number"
                              min="0"
                              max="100"
                              value={skillForm.level}
                              onChange={(e) => setSkillForm({ ...skillForm, level: Number(e.target.value) || 0 })}
                              placeholder="85"
                            />
                          </div>

                          <div className="grid gap-2">
                            <Label htmlFor="skill-experience">Years of Experience</Label>
                            <Input
                              id="skill-experience"
                              type="number"
                              min="0"
                              max="20"
                              step="0.5"
                              value={skillForm.yearsExperience}
                              onChange={(e) =>
                                setSkillForm({ ...skillForm, yearsExperience: Number(e.target.value) || 0 })
                              }
                              placeholder="2.5"
                            />
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Switch
                            id="skill-certified"
                            checked={skillForm.certified}
                            onCheckedChange={(checked) => setSkillForm({ ...skillForm, certified: checked })}
                          />
                          <Label htmlFor="skill-certified">Certified in this skill</Label>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setIsSkillDialogOpen(false)}>
                          Cancel
                        </Button>
                        <Button onClick={handleAddSkill}>Add Skill</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                {/* Skills Summary */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="space-y-2">
                        <p className="text-2xl font-bold">{skills.length}</p>
                        <p className="text-xs text-muted-foreground">Total Skills</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="space-y-2">
                        <p className="text-2xl font-bold text-green-600">
                          {skills.filter((s) => s.level >= 90).length}
                        </p>
                        <p className="text-xs text-muted-foreground">Expert Level</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="space-y-2">
                        <p className="text-2xl font-bold text-blue-600">{skills.filter((s) => s.certified).length}</p>
                        <p className="text-xs text-muted-foreground">Certified</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="space-y-2">
                        <p className="text-2xl font-bold text-purple-600">
                          {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
                        </p>
                        <p className="text-xs text-muted-foreground">Avg Level</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Skills by Category */}
                <div className="space-y-6">
                  {Array.from(new Set(skills.map((s) => s.category))).map((category) => (
                    <Card key={category}>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base sm:text-lg">{category}</CardTitle>
                        <CardDescription className="text-sm">
                          {skills.filter((s) => s.category === category).length} skills in this category
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4">
                          {skills
                            .filter((skill) => skill.category === category)
                            .map((skill) => (
                              <div
                                key={skill.id}
                                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border rounded-lg"
                              >
                                <div className="flex-1 min-w-0 space-y-2">
                                  <div className="flex items-center gap-2">
                                    <h4 className="font-semibold text-sm sm:text-base">{skill.name}</h4>
                                    {skill.certified && (
                                      <Badge
                                        variant="outline"
                                        className="bg-green-500/10 text-green-500 border-green-500/20 text-xs"
                                      >
                                        <Award className="h-3 w-3 mr-1" />
                                        Certified
                                      </Badge>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                    <span>{skill.yearsExperience} years experience</span>
                                    <span>Level: {skill.level}%</span>
                                  </div>
                                  <div className="w-full">
                                    <Progress value={skill.level} className="h-2" />
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                  <Badge
                                    variant={skill.level > 90 ? "default" : skill.level > 75 ? "secondary" : "outline"}
                                  >
                                    {skill.level}%
                                  </Badge>
                                  <Button size="sm" variant="outline">
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button size="sm" variant="outline" onClick={() => handleDeleteSkill(skill.id)}>
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Enhanced Profile Tab */}
              <TabsContent value="profile" className="space-y-6 mt-6">
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Profile Settings</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Manage your personal information and portfolio settings
                  </p>
                </div>

                <Tabs defaultValue="personal" className="w-full">
                  <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full">
                    <TabsTrigger value="personal" className="text-xs sm:text-sm">
                      Personal
                    </TabsTrigger>
                    <TabsTrigger value="certifications" className="text-xs sm:text-sm">
                      Certifications
                    </TabsTrigger>
                    <TabsTrigger value="preferences" className="text-xs sm:text-sm">
                      Preferences
                    </TabsTrigger>
                    <TabsTrigger value="export" className="text-xs sm:text-sm">
                      Data
                    </TabsTrigger>
                  </TabsList>

                  {/* Personal Information */}
                  <TabsContent value="personal" className="space-y-6 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base sm:text-lg">Personal Information</CardTitle>
                        <CardDescription className="text-sm">
                          Update your personal details and contact information
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* Profile Image Section */}
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                          <div className="relative">
                            <Image
                              src={profileImage || "/placeholder.svg"}
                              alt="Profile"
                              width={120}
                              height={120}
                              className="rounded-full object-cover border-4 border-primary/10"
                            />
                            <div className="absolute bottom-0 right-0">
                              <label htmlFor="profile-image-upload" className="cursor-pointer">
                                <div className="bg-primary text-primary-foreground rounded-full p-2 shadow-lg hover:bg-primary/90 transition-colors">
                                  <Camera className="h-4 w-4" />
                                </div>
                                <input
                                  id="profile-image-upload"
                                  type="file"
                                  accept="image/*"
                                  onChange={handleImageUpload}
                                  className="hidden"
                                />
                              </label>
                            </div>
                          </div>
                          <div className="text-center sm:text-left space-y-2">
                            <h3 className="text-lg font-semibold">Profile Picture</h3>
                            <p className="text-sm text-muted-foreground">
                              Click the camera icon to upload a new profile picture
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Recommended: Square image, at least 300x300px, max 5MB
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="profile-name">Full Name</Label>
                            <Input
                              id="profile-name"
                              value={profileForm.fullName}
                              onChange={(e) => setProfileForm({ ...profileForm, fullName: e.target.value })}
                              placeholder="Your full name"
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="profile-title">Professional Title</Label>
                            <Input
                              id="profile-title"
                              value={profileForm.title}
                              onChange={(e) => setProfileForm({ ...profileForm, title: e.target.value })}
                              placeholder="Your job title"
                            />
                          </div>
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="profile-bio">Professional Bio</Label>
                          <Textarea
                            id="profile-bio"
                            rows={4}
                            value={profileForm.bio}
                            onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                            placeholder="Write a brief description about yourself and your expertise"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="profile-email">Email Address</Label>
                            <Input
                              id="profile-email"
                              type="email"
                              value={profileForm.email}
                              onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                              placeholder="your.email@example.com"
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="profile-phone">Phone Number</Label>
                            <Input
                              id="profile-phone"
                              value={profileForm.phone}
                              onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="profile-location">Location</Label>
                            <Input
                              id="profile-location"
                              value={profileForm.location}
                              onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                              placeholder="City, Country"
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="profile-website">Website</Label>
                            <Input
                              id="profile-website"
                              value={profileForm.website}
                              onChange={(e) => setProfileForm({ ...profileForm, website: e.target.value })}
                              placeholder="https://yourwebsite.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="profile-linkedin">LinkedIn Profile</Label>
                            <Input
                              id="profile-linkedin"
                              value={profileForm.linkedin}
                              onChange={(e) => setProfileForm({ ...profileForm, linkedin: e.target.value })}
                              placeholder="https://linkedin.com/in/yourprofile"
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="profile-github">GitHub Profile</Label>
                            <Input
                              id="profile-github"
                              value={profileForm.github}
                              onChange={(e) => setProfileForm({ ...profileForm, github: e.target.value })}
                              placeholder="https://github.com/yourusername"
                            />
                          </div>
                        </div>

                        <Button className="w-full sm:w-auto">
                          <Save className="h-4 w-4 mr-2" />
                          Save Profile Changes
                        </Button>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Certifications Management */}
                  <TabsContent value="certifications" className="space-y-6 mt-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h3 className="text-lg font-semibold">Certifications & Training</h3>
                        <p className="text-sm text-muted-foreground">Manage your professional certifications</p>
                      </div>
                      <Dialog open={isCertDialogOpen} onOpenChange={setIsCertDialogOpen}>
                        <DialogTrigger asChild>
                          <Button className="w-full sm:w-auto">
                            <Plus className="h-4 w-4 mr-2" />
                            Add Certification
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md sm:max-w-lg">
                          <DialogHeader>
                            <DialogTitle>Add New Certification</DialogTitle>
                            <DialogDescription>
                              Add a professional certification or training completion
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                              <Label htmlFor="cert-name">Certification Name *</Label>
                              <Input
                                id="cert-name"
                                value={certForm.name}
                                onChange={(e) => setCertForm({ ...certForm, name: e.target.value })}
                                placeholder="e.g., ISTQB Foundation Level"
                              />
                            </div>

                            <div className="grid gap-2">
                              <Label htmlFor="cert-issuer">Issuing Organization *</Label>
                              <Input
                                id="cert-issuer"
                                value={certForm.issuer}
                                onChange={(e) => setCertForm({ ...certForm, issuer: e.target.value })}
                                placeholder="e.g., ISTQB, Coursera, etc."
                              />
                            </div>

                            <div className="grid gap-2">
                              <Label htmlFor="cert-category">Category</Label>
                              <Select
                                value={certForm.category}
                                onValueChange={(value) => setCertForm({ ...certForm, category: value })}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Testing Fundamentals">Testing Fundamentals</SelectItem>
                                  <SelectItem value="Manual Testing">Manual Testing</SelectItem>
                                  <SelectItem value="API Testing">API Testing</SelectItem>
                                  <SelectItem value="Automation">Automation</SelectItem>
                                  <SelectItem value="Security Testing">Security Testing</SelectItem>
                                  <SelectItem value="Performance Testing">Performance Testing</SelectItem>
                                  <SelectItem value="Tools & Frameworks">Tools & Frameworks</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="grid gap-2">
                                <Label htmlFor="cert-date">Issue Date *</Label>
                                <Input
                                  id="cert-date"
                                  type="date"
                                  value={certForm.date}
                                  onChange={(e) => setCertForm({ ...certForm, date: e.target.value })}
                                />
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor="cert-expiry">Expiry Date</Label>
                                <Input
                                  id="cert-expiry"
                                  type="date"
                                  value={certForm.expiryDate}
                                  onChange={(e) => setCertForm({ ...certForm, expiryDate: e.target.value })}
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="grid gap-2">
                                <Label htmlFor="cert-score">Score/Grade</Label>
                                <Input
                                  id="cert-score"
                                  value={certForm.score}
                                  onChange={(e) => setCertForm({ ...certForm, score: e.target.value })}
                                  placeholder="e.g., 85%, Pass, A+"
                                />
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor="cert-credential">Credential ID</Label>
                                <Input
                                  id="cert-credential"
                                  value={certForm.credentialId}
                                  onChange={(e) => setCertForm({ ...certForm, credentialId: e.target.value })}
                                  placeholder="Certificate ID or URL"
                                />
                              </div>
                            </div>
                          </div>
                          <DialogFooter>
                            <Button variant="outline" onClick={() => setIsCertDialogOpen(false)}>
                              Cancel
                            </Button>
                            <Button onClick={handleAddCertification}>Add Certification</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>

                    <div className="grid gap-4">
                      {certifications.map((cert) => (
                        <Card key={cert.id}>
                          <CardContent className="p-4 sm:p-6">
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                              <div className="flex-1 min-w-0 space-y-2">
                                <div className="flex items-center gap-2">
                                  <h4 className="font-semibold text-sm sm:text-base">{cert.name}</h4>
                                  <Badge
                                    variant="outline"
                                    className="bg-green-500/10 text-green-500 border-green-500/20 text-xs"
                                  >
                                    {cert.status}
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                                {cert.category && (
                                  <Badge variant="secondary" className="text-xs w-fit">
                                    {cert.category}
                                  </Badge>
                                )}
                                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                                  <span>Issued: {cert.date}</span>
                                  {cert.expiryDate && <span>Expires: {cert.expiryDate}</span>}
                                  {cert.score && <span>Score: {cert.score}</span>}
                                </div>
                                {cert.credentialId && (
                                  <p className="text-xs text-muted-foreground">Credential ID: {cert.credentialId}</p>
                                )}
                              </div>
                              <div className="flex gap-2 shrink-0">
                                <Button size="sm" variant="outline">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button size="sm" variant="outline" onClick={() => handleDeleteCertification(cert.id)}>
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Preferences */}
                  <TabsContent value="preferences" className="space-y-6 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base sm:text-lg">Dashboard Preferences</CardTitle>
                        <CardDescription className="text-sm">Customize your dashboard experience</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <Label className="text-sm font-medium">Auto-save Data</Label>
                              <p className="text-xs text-muted-foreground">
                                Automatically save changes every 30 seconds
                              </p>
                            </div>
                            <Switch defaultChecked />
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <Label className="text-sm font-medium">Email Notifications</Label>
                              <p className="text-xs text-muted-foreground">Receive email updates about your projects</p>
                            </div>
                            <Switch />
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <Label className="text-sm font-medium">Show Advanced Metrics</Label>
                              <p className="text-xs text-muted-foreground">Display detailed analytics and charts</p>
                            </div>
                            <Switch defaultChecked />
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <Label className="text-sm font-medium">Compact View</Label>
                              <p className="text-xs text-muted-foreground">Use smaller cards and reduced spacing</p>
                            </div>
                            <Switch />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Data Management */}
                  <TabsContent value="export" className="space-y-6 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base sm:text-lg">Data Management</CardTitle>
                        <CardDescription className="text-sm">
                          Export, import, and manage your dashboard data
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid gap-4">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border rounded-lg">
                            <div className="space-y-1">
                              <h4 className="font-medium">Export All Data</h4>
                              <p className="text-sm text-muted-foreground">
                                Download all your projects, skills, test cases, and bugs as JSON
                              </p>
                            </div>
                            <Button onClick={handleExportData} className="w-full sm:w-auto">
                              <Download className="h-4 w-4 mr-2" />
                              Export Data
                            </Button>
                          </div>

                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border rounded-lg">
                            <div className="space-y-1">
                              <h4 className="font-medium">Import Data</h4>
                              <p className="text-sm text-muted-foreground">
                                Import previously exported data or migrate from another system
                              </p>
                            </div>
                            <div className="relative w-full sm:w-auto">
                              <input
                                type="file"
                                accept=".json"
                                onChange={handleImportData}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                              />
                              <Button variant="outline" className="w-full sm:w-auto">
                                <Upload className="h-4 w-4 mr-2" />
                                Import Data
                              </Button>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border rounded-lg border-destructive/20">
                            <div className="space-y-1">
                              <h4 className="font-medium text-destructive">Reset All Data</h4>
                              <p className="text-sm text-muted-foreground">
                                Clear all data and reset dashboard to default state
                              </p>
                            </div>
                            <Button variant="destructive" className="w-full sm:w-auto">
                              <RefreshCw className="h-4 w-4 mr-2" />
                              Reset Dashboard
                            </Button>
                          </div>
                        </div>

                        <div className="p-4 bg-muted/50 rounded-lg">
                          <h4 className="font-medium mb-2">Data Statistics</h4>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-muted-foreground">Projects</p>
                              <p className="font-medium">{projects.length}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Skills</p>
                              <p className="font-medium">{skills.length}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Test Cases</p>
                              <p className="font-medium">{testCases.length}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Bug Reports</p>
                              <p className="font-medium">{bugs.length}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </TabsContent>
            </Tabs>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
