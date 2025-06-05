"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
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

    // Simulate loading delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      // Use sessionStorage instead of localStorage for better compatibility with static exports
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
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Lock className="h-6 w-6" />
          </div>
          <CardTitle className="text-2xl">Dashboard Login</CardTitle>
          <CardDescription>Enter your credentials to access Ahmed Agamy's QA Dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  disabled={isLoading}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
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
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <h4 className="text-sm font-medium mb-2">Demo Credentials:</h4>
            <div className="text-xs text-muted-foreground space-y-1">
              <div>
                Username: <code className="bg-background px-1 rounded">ahmed.agamy</code>
              </div>
              <div>
                Password: <code className="bg-background px-1 rounded">QA2024@Test</code>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <Button variant="ghost" size="sm" asChild>
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

// Ahmed Agamy's actual projects and data
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
]

const initialSkills = [
  { id: 1, name: "Manual Testing", level: 95, category: "Core Testing" },
  { id: 2, name: "API Testing", level: 85, category: "API & Tools" },
  { id: 3, name: "Cross-Browser Testing", level: 92, category: "Compatibility" },
  { id: 4, name: "WordPress Testing", level: 85, category: "Platforms" },
  { id: 5, name: "JIRA", level: 90, category: "Tools & Management" },
]

const initialTestCases = [
  {
    id: 1,
    title: "Verify Stripe Payment Processing for Donations",
    priority: "Critical",
    status: "Passed",
    automated: false,
    lastExecuted: "2024-05-30",
    executionTime: "Manual",
    project: "Africa Relief",
  },
  {
    id: 2,
    title: "Verify User Role Permissions in Dashboard",
    priority: "High",
    status: "Passed",
    automated: false,
    lastExecuted: "2024-05-29",
    executionTime: "Manual",
    project: "Precision Insights",
  },
  {
    id: 3,
    title: "Verify Calendly Integration Functionality",
    priority: "Medium",
    status: "Passed",
    automated: false,
    lastExecuted: "2024-05-28",
    executionTime: "Manual",
    project: "Jmkon",
  },
  {
    id: 4,
    title: "Verify Appointment Scheduling System",
    priority: "High",
    status: "Passed",
    automated: false,
    lastExecuted: "2024-05-27",
    executionTime: "Manual",
    project: "Fayrouz Pediatrics",
  },
  {
    id: 5,
    title: "Verify Cross-Browser Compatibility",
    priority: "Medium",
    status: "In Progress",
    automated: false,
    lastExecuted: "2024-05-26",
    executionTime: "Manual",
    project: "Genie App",
  },
]

const initialBugs = [
  {
    id: 1,
    title: "Webhook timeout error during high donation volume",
    severity: "Critical",
    status: "Fixed",
    assignee: "Development Team",
    reportedDate: "2024-05-15",
    environment: "Production",
    project: "Africa Relief",
  },
  {
    id: 2,
    title: "User role permissions not properly validated",
    severity: "High",
    status: "Fixed",
    assignee: "Backend Developer",
    reportedDate: "2024-05-10",
    environment: "Staging",
    project: "Precision Insights",
  },
  {
    id: 3,
    title: "Calendly integration fails on mobile devices",
    severity: "Medium",
    status: "Fixed",
    assignee: "Frontend Developer",
    reportedDate: "2024-05-08",
    environment: "Production",
    project: "Jmkon",
  },
  {
    id: 4,
    title: "Appointment form validation missing for required fields",
    severity: "High",
    status: "Fixed",
    assignee: "Frontend Developer",
    reportedDate: "2024-05-05",
    environment: "Staging",
    project: "Fayrouz Pediatrics",
  },
  {
    id: 5,
    title: "Payment processing delay in e-commerce checkout",
    severity: "Medium",
    status: "Open",
    assignee: "Payment Team",
    reportedDate: "2024-05-20",
    environment: "Production",
    project: "Genie App",
  },
]

const testMetrics = {
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
}

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [projects, setProjects] = useState(initialProjects)
  const [skills, setSkills] = useState(initialSkills)
  const [testCases, setTestCases] = useState(initialTestCases)
  const [bugs, setBugs] = useState(initialBugs)
  const [isProjectDialogOpen, setIsProjectDialogOpen] = useState(false)
  const [isSkillDialogOpen, setIsSkillDialogOpen] = useState(false)
  const [isTestCaseDialogOpen, setIsTestCaseDialogOpen] = useState(false)
  const [isBugDialogOpen, setIsBugDialogOpen] = useState(false)

  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
    technologies: "",
    githubUrl: "",
    liveUrl: "",
    featured: false,
    metrics: {
      testCoverage: 0,
      automationRate: 0,
      bugsCaught: 0,
      criticalIssues: 0,
    },
  })

  const [skillForm, setSkillForm] = useState({
    name: "",
    level: 0,
    category: "",
  })

  // Check authentication on component mount
  useEffect(() => {
    const checkAuth = () => {
      // Use sessionStorage instead of localStorage for better compatibility with static exports
      const authenticated = sessionStorage.getItem("dashboard_authenticated")
      const loginTime = sessionStorage.getItem("dashboard_login_time")

      if (authenticated === "true" && loginTime) {
        // Check if login is still valid (24 hours)
        const twentyFourHours = 24 * 60 * 60 * 1000
        const isExpired = Date.now() - Number.parseInt(loginTime) > twentyFourHours

        if (!isExpired) {
          setIsAuthenticated(true)
        } else {
          // Clear expired session
          sessionStorage.removeItem("dashboard_authenticated")
          sessionStorage.removeItem("dashboard_login_time")
        }
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    sessionStorage.removeItem("dashboard_authenticated")
    sessionStorage.removeItem("dashboard_login_time")
    setIsAuthenticated(false)
  }

  const handleAddProject = () => {
    const newProject = {
      id: Date.now(),
      ...projectForm,
      technologies: projectForm.technologies.split(",").map((t) => t.trim()),
    }
    setProjects([...projects, newProject])
    setProjectForm({
      title: "",
      description: "",
      technologies: "",
      githubUrl: "",
      liveUrl: "",
      featured: false,
      metrics: {
        testCoverage: 0,
        automationRate: 0,
        bugsCaught: 0,
        criticalIssues: 0,
      },
    })
    setIsProjectDialogOpen(false)
  }

  const handleAddSkill = () => {
    const newSkill = {
      id: Date.now(),
      ...skillForm,
    }
    setSkills([...skills, newSkill])
    setSkillForm({
      name: "",
      level: 0,
      category: "",
    })
    setIsSkillDialogOpen(false)
  }

  const handleDeleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id))
  }

  const handleDeleteSkill = (id) => {
    setSkills(skills.filter((s) => s.id !== id))
  }

  const getStatusColor = (status) => {
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
      default:
        return ""
    }
  }

  const getPriorityColor = (priority) => {
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
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
      <div className="flex min-h-screen">
        <Sidebar className="border-r">
          <SidebarHeader className="border-b p-4">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <div>
                <h2 className="font-semibold">QA Dashboard</h2>
                <p className="text-xs text-muted-foreground">Ahmed Agamy</p>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Overview</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <LayoutDashboard className="h-4 w-4" />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <BarChart3 className="h-4 w-4" />
                      <span>Analytics</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Testing</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <FileText className="h-4 w-4" />
                      <span>Test Cases</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Bug className="h-4 w-4" />
                      <span>Bug Reports</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Code className="h-4 w-4" />
                      <span>API Testing</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Portfolio</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Layers className="h-4 w-4" />
                      <span>Projects</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Workflow className="h-4 w-4" />
                      <span>Skills</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Award className="h-4 w-4" />
                      <span>Certifications</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Settings</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t p-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to Portfolio</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={handleLogout}>
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="flex-1">
          <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 items-center gap-4 px-4">
              <SidebarTrigger />
              <div className="flex-1">
                <h1 className="text-lg font-semibold">Ahmed Agamy - QA Dashboard</h1>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  Authenticated
                </Badge>
                <Button variant="outline" size="sm">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </div>
          </header>

          <main className="flex-1 p-6">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid grid-cols-6 w-full">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="testcases">Test Cases</TabsTrigger>
                <TabsTrigger value="bugs">Bug Reports</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Total Test Cases</p>
                          <p className="text-3xl font-bold">{testMetrics.testCasesTotal}</p>
                        </div>
                        <FileText className="h-8 w-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Manual Testing Focus</p>
                          <p className="text-3xl font-bold">
                            {Math.round((testMetrics.testCasesManual / testMetrics.testCasesTotal) * 100)}%
                          </p>
                        </div>
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Tests Passed</p>
                          <p className="text-3xl font-bold">{testMetrics.testsPassed}</p>
                        </div>
                        <CheckCircle2 className="h-8 w-8 text-green-500" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Bugs Reported</p>
                          <p className="text-3xl font-bold">{testMetrics.bugsTotal}</p>
                        </div>
                        <Bug className="h-8 w-8 text-red-500" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Test Execution Status</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Passed</span>
                          <span className="font-medium">{testMetrics.testsPassed}</span>
                        </div>
                        <Progress
                          value={(testMetrics.testsPassed / testMetrics.testCasesTotal) * 100}
                          className="h-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Failed</span>
                          <span className="font-medium">{testMetrics.testsFailed}</span>
                        </div>
                        <Progress
                          value={(testMetrics.testsFailed / testMetrics.testCasesTotal) * 100}
                          className="h-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Blocked</span>
                          <span className="font-medium">{testMetrics.testsBlocked}</span>
                        </div>
                        <Progress
                          value={(testMetrics.testsBlocked / testMetrics.testCasesTotal) * 100}
                          className="h-2"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Bug Severity Distribution</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Critical</span>
                          <span className="font-medium">{testMetrics.bugsCritical}</span>
                        </div>
                        <Progress value={(testMetrics.bugsCritical / testMetrics.bugsTotal) * 100} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Major</span>
                          <span className="font-medium">{testMetrics.bugsMajor}</span>
                        </div>
                        <Progress value={(testMetrics.bugsMajor / testMetrics.bugsTotal) * 100} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Minor</span>
                          <span className="font-medium">{testMetrics.bugsMinor}</span>
                        </div>
                        <Progress value={(testMetrics.bugsMinor / testMetrics.bugsTotal) * 100} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Test Cases Tab */}
              <TabsContent value="testcases" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold">Test Cases Management</h2>
                  <Dialog open={isTestCaseDialogOpen} onOpenChange={setIsTestCaseDialogOpen}>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Test Case
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add New Test Case</DialogTitle>
                        <DialogDescription>Create a new test case for your testing suite.</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="test-title">Test Case Title</Label>
                          <Input id="test-title" placeholder="Enter test case title" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="test-priority">Priority</Label>
                          <Select>
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
                          <Label htmlFor="test-project">Project</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select project" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Africa Relief">Africa Relief</SelectItem>
                              <SelectItem value="Precision Insights">Precision Insights</SelectItem>
                              <SelectItem value="Jmkon">Jmkon</SelectItem>
                              <SelectItem value="Fayrouz Pediatrics">Fayrouz Pediatrics</SelectItem>
                              <SelectItem value="Genie App">Genie App</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="automated" />
                          <Label htmlFor="automated">Automated Test</Label>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button>Add Test Case</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                <Card>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="border-b">
                          <tr>
                            <th className="text-left p-4 font-medium">Test Case</th>
                            <th className="text-left p-4 font-medium">Project</th>
                            <th className="text-left p-4 font-medium">Priority</th>
                            <th className="text-left p-4 font-medium">Status</th>
                            <th className="text-left p-4 font-medium">Automated</th>
                            <th className="text-left p-4 font-medium">Last Executed</th>
                            <th className="text-left p-4 font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {testCases.map((testCase) => (
                            <tr key={testCase.id} className="border-b">
                              <td className="p-4">{testCase.title}</td>
                              <td className="p-4">
                                <Badge variant="outline">{testCase.project}</Badge>
                              </td>
                              <td className="p-4">
                                <Badge variant="outline" className={getPriorityColor(testCase.priority)}>
                                  {testCase.priority}
                                </Badge>
                              </td>
                              <td className="p-4">
                                <Badge variant="outline" className={getStatusColor(testCase.status)}>
                                  {testCase.status}
                                </Badge>
                              </td>
                              <td className="p-4">
                                {testCase.automated ? (
                                  <Badge
                                    variant="outline"
                                    className="bg-green-500/10 text-green-500 border-green-500/20"
                                  >
                                    Yes
                                  </Badge>
                                ) : (
                                  <Badge variant="outline">Manual</Badge>
                                )}
                              </td>
                              <td className="p-4">{testCase.lastExecuted}</td>
                              <td className="p-4">
                                <div className="flex gap-2">
                                  <Button size="sm" variant="outline">
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button size="sm" variant="outline">
                                    <Trash2 className="h-4 w-4" />
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

              {/* Bug Reports Tab */}
              <TabsContent value="bugs" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold">Bug Reports Management</h2>
                  <Dialog open={isBugDialogOpen} onOpenChange={setIsBugDialogOpen}>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Report Bug
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Report New Bug</DialogTitle>
                        <DialogDescription>Report a new bug found during testing.</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="bug-title">Bug Title</Label>
                          <Input id="bug-title" placeholder="Enter bug title" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="bug-severity">Severity</Label>
                          <Select>
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
                          <Label htmlFor="bug-project">Project</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select project" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Africa Relief">Africa Relief</SelectItem>
                              <SelectItem value="Precision Insights">Precision Insights</SelectItem>
                              <SelectItem value="Jmkon">Jmkon</SelectItem>
                              <SelectItem value="Fayrouz Pediatrics">Fayrouz Pediatrics</SelectItem>
                              <SelectItem value="Genie App">Genie App</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="bug-description">Description</Label>
                          <Textarea id="bug-description" placeholder="Describe the bug" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button>Report Bug</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                <Card>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="border-b">
                          <tr>
                            <th className="text-left p-4 font-medium">Bug Title</th>
                            <th className="text-left p-4 font-medium">Project</th>
                            <th className="text-left p-4 font-medium">Severity</th>
                            <th className="text-left p-4 font-medium">Status</th>
                            <th className="text-left p-4 font-medium">Assignee</th>
                            <th className="text-left p-4 font-medium">Reported Date</th>
                            <th className="text-left p-4 font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {bugs.map((bug) => (
                            <tr key={bug.id} className="border-b">
                              <td className="p-4">{bug.title}</td>
                              <td className="p-4">
                                <Badge variant="outline">{bug.project}</Badge>
                              </td>
                              <td className="p-4">
                                <Badge variant="outline" className={getPriorityColor(bug.severity)}>
                                  {bug.severity}
                                </Badge>
                              </td>
                              <td className="p-4">
                                <Badge variant="outline" className={getStatusColor(bug.status)}>
                                  {bug.status}
                                </Badge>
                              </td>
                              <td className="p-4">{bug.assignee}</td>
                              <td className="p-4">{bug.reportedDate}</td>
                              <td className="p-4">
                                <div className="flex gap-2">
                                  <Button size="sm" variant="outline">
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button size="sm" variant="outline">
                                    <Trash2 className="h-4 w-4" />
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

              {/* Projects Tab */}
              <TabsContent value="projects" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold">Manage Projects</h2>
                  <Dialog open={isProjectDialogOpen} onOpenChange={setIsProjectDialogOpen}>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Project
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Add New Project</DialogTitle>
                        <DialogDescription>Fill in the details for your new testing project.</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="title">Project Title</Label>
                          <Input
                            id="title"
                            value={projectForm.title}
                            onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                            placeholder="Enter project title"
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="description">Description</Label>
                          <Textarea
                            id="description"
                            value={projectForm.description}
                            onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                            placeholder="Describe your testing project"
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="technologies">Technologies/Testing Types</Label>
                          <Input
                            id="technologies"
                            value={projectForm.technologies}
                            onChange={(e) => setProjectForm({ ...projectForm, technologies: e.target.value })}
                            placeholder="Manual Testing, API Testing, Cross-Browser Testing (comma separated)"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="github">GitHub URL</Label>
                            <Input
                              id="github"
                              value={projectForm.githubUrl}
                              onChange={(e) => setProjectForm({ ...projectForm, githubUrl: e.target.value })}
                              placeholder="https://github.com/..."
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="live">Project URL</Label>
                            <Input
                              id="live"
                              value={projectForm.liveUrl}
                              onChange={(e) => setProjectForm({ ...projectForm, liveUrl: e.target.value })}
                              placeholder="https://project-url.com"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="coverage">Test Coverage (%)</Label>
                            <Input
                              id="coverage"
                              type="number"
                              value={projectForm.metrics.testCoverage}
                              onChange={(e) =>
                                setProjectForm({
                                  ...projectForm,
                                  metrics: {
                                    ...projectForm.metrics,
                                    testCoverage: Number.parseInt(e.target.value) || 0,
                                  },
                                })
                              }
                              placeholder="95"
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="bugs">Bugs Found</Label>
                            <Input
                              id="bugs"
                              type="number"
                              value={projectForm.metrics.bugsCaught}
                              onChange={(e) =>
                                setProjectForm({
                                  ...projectForm,
                                  metrics: {
                                    ...projectForm.metrics,
                                    bugsCaught: Number.parseInt(e.target.value) || 0,
                                  },
                                })
                              }
                              placeholder="47"
                            />
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch
                            id="featured"
                            checked={projectForm.featured}
                            onCheckedChange={(checked) => setProjectForm({ ...projectForm, featured: checked })}
                          />
                          <Label htmlFor="featured">Featured Project</Label>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button onClick={handleAddProject}>Add Project</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="grid gap-4">
                  {projects.map((project) => (
                    <Card key={project.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="flex items-center gap-2">
                              {project.title}
                              {project.featured && <Badge>Featured</Badge>}
                            </CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleDeleteProject(project.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
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
                              <span>Bugs Found</span>
                              <span className="font-medium">{project.metrics.bugsCaught}</span>
                            </div>
                            <Progress value={Math.min(project.metrics.bugsCaught, 100)} className="h-2" />
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>Project URL: {project.liveUrl}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Skills Tab */}
              <TabsContent value="skills" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold">Manage Skills</h2>
                  <Dialog open={isSkillDialogOpen} onOpenChange={setIsSkillDialogOpen}>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Skill
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add New Skill</DialogTitle>
                        <DialogDescription>Add a new testing skill to your portfolio.</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="skill-name">Skill Name</Label>
                          <Input
                            id="skill-name"
                            value={skillForm.name}
                            onChange={(e) => setSkillForm({ ...skillForm, name: e.target.value })}
                            placeholder="e.g., Postman API Testing"
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="skill-level">Skill Level (%)</Label>
                          <Input
                            id="skill-level"
                            type="number"
                            min="0"
                            max="100"
                            value={skillForm.level}
                            onChange={(e) =>
                              setSkillForm({ ...skillForm, level: Number.parseInt(e.target.value) || 0 })
                            }
                            placeholder="85"
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="skill-category">Category</Label>
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
                      </div>
                      <DialogFooter>
                        <Button onClick={handleAddSkill}>Add Skill</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="grid gap-4">
                  {skills.map((skill) => (
                    <Card key={skill.id}>
                      <CardContent className="flex justify-between items-center p-6">
                        <div className="flex items-center gap-4 flex-1">
                          <div className="flex-1">
                            <h3 className="font-semibold">{skill.name}</h3>
                            <p className="text-sm text-muted-foreground">{skill.category}</p>
                            <div className="mt-2">
                              <Progress value={skill.level} className="h-2" />
                            </div>
                          </div>
                          <Badge variant={skill.level > 90 ? "default" : skill.level > 75 ? "secondary" : "outline"}>
                            {skill.level}%
                          </Badge>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleDeleteSkill(skill.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-6">
                <h2 className="text-3xl font-bold">Profile Settings</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details and contact information.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" defaultValue="Ahmed Agamy" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="title">Professional Title</Label>
                        <Input id="title" defaultValue="Software Test Engineer" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        defaultValue="I am an experienced Software Test Engineer with expertise in manual and API testing, cross-browser/device testing, and a strong commitment to quality. I am ISTQB certified and passionate about delivering reliable, defect-free applications by collaborating closely with development teams in Agile environments."
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="Ahisham6448@gmail.com" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" defaultValue="+20 109 760 4213" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="linkedin">LinkedIn</Label>
                        <Input id="linkedin" defaultValue="https://www.linkedin.com/in/ahmedagamy1/" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" defaultValue="Alexandria, Egypt" />
                      </div>
                    </div>
                    <Button>Save Profile</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
