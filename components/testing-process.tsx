"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ClipboardList, Code, FileCheck, Bug, CheckCircle2, BarChart3, Workflow } from "lucide-react"

const testingProcess = [
  {
    id: "requirements",
    title: "Requirements Analysis",
    icon: ClipboardList,
    description: "Analyze requirements to identify testable aspects and create test strategy",
    activities: [
      "Review functional and non-functional requirements",
      "Identify test scenarios and acceptance criteria",
      "Create test strategy document",
      "Define test scope and objectives",
      "Identify test data requirements",
    ],
    deliverables: ["Test Strategy", "Test Plan", "Test Scenarios"],
    tools: ["JIRA", "Confluence", "TestRail"],
  },
  {
    id: "design",
    title: "Test Design",
    icon: Workflow,
    description: "Design comprehensive test cases to validate all aspects of the application",
    activities: [
      "Create detailed test cases based on requirements",
      "Design positive and negative test scenarios",
      "Prepare test data for execution",
      "Review test cases with stakeholders",
      "Prioritize test cases based on risk assessment",
    ],
    deliverables: ["Test Cases", "Test Data", "Traceability Matrix"],
    tools: ["TestRail", "JIRA", "Excel"],
  },
  {
    id: "automation",
    title: "Test Automation",
    icon: Code,
    description: "Develop automated test scripts for regression and repetitive test cases",
    activities: [
      "Select appropriate automation framework and tools",
      "Develop reusable automation components",
      "Create automated test scripts for regression tests",
      "Implement data-driven testing approach",
      "Set up continuous integration for automated tests",
    ],
    deliverables: ["Automation Framework", "Test Scripts", "CI/CD Integration"],
    tools: ["Selenium", "Cypress", "Appium", "Jenkins", "GitHub Actions"],
  },
  {
    id: "execution",
    title: "Test Execution",
    icon: FileCheck,
    description: "Execute test cases, record results, and report defects",
    activities: [
      "Execute manual test cases",
      "Run automated test suites",
      "Record test results and evidence",
      "Report defects with detailed reproduction steps",
      "Perform regression testing after fixes",
    ],
    deliverables: ["Test Results", "Defect Reports", "Test Evidence"],
    tools: ["TestRail", "JIRA", "Jenkins", "Browser DevTools"],
  },
  {
    id: "defects",
    title: "Defect Management",
    icon: Bug,
    description: "Track and manage defects through their lifecycle",
    activities: [
      "Log defects with detailed reproduction steps",
      "Prioritize defects based on severity and impact",
      "Verify fixed defects",
      "Track defect metrics and trends",
      "Conduct root cause analysis for critical defects",
    ],
    deliverables: ["Defect Reports", "Defect Metrics", "Root Cause Analysis"],
    tools: ["JIRA", "Bugzilla", "Azure DevOps"],
  },
  {
    id: "reporting",
    title: "Test Reporting",
    icon: BarChart3,
    description: "Generate comprehensive test reports and metrics",
    activities: [
      "Compile test execution results",
      "Calculate test coverage metrics",
      "Generate test summary reports",
      "Present test results to stakeholders",
      "Provide recommendations for quality improvement",
    ],
    deliverables: ["Test Summary Report", "Test Metrics Dashboard", "Quality Recommendations"],
    tools: ["TestRail", "Power BI", "Grafana", "Excel"],
  },
]

export default function TestingProcess() {
  const [activePhase, setActivePhase] = useState("requirements")

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
        {testingProcess.map((phase) => (
          <Card
            key={phase.id}
            className={`cursor-pointer transition-all w-[120px] sm:w-[140px] lg:w-[160px] ${
              activePhase === phase.id ? "border-primary bg-primary/5" : "hover:border-primary/50"
            }`}
            onClick={() => setActivePhase(phase.id)}
          >
            <CardContent className="p-3 sm:p-4 text-center">
              <div
                className={`mx-auto rounded-full p-2 size-10 sm:size-12 flex items-center justify-center mb-2 ${
                  activePhase === phase.id ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                }`}
              >
                <phase.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h5 className="text-xs sm:text-sm font-medium line-clamp-2">{phase.title}</h5>
            </CardContent>
          </Card>
        ))}
      </div>

      {testingProcess.map(
        (phase) =>
          phase.id === activePhase && (
            <Card key={phase.id} className="mt-4 sm:mt-6 border-primary/20">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-start sm:items-center gap-3">
                  <div className="bg-primary/10 text-primary rounded-full p-2 shrink-0">
                    <phase.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0">
                    <CardTitle className="text-lg sm:text-xl">{phase.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base">{phase.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <Tabs defaultValue="activities">
                  <div className="overflow-x-auto">
                    <TabsList className="grid grid-cols-3 mb-4 min-w-max w-full">
                      <TabsTrigger value="activities" className="text-xs sm:text-sm">
                        Activities
                      </TabsTrigger>
                      <TabsTrigger value="deliverables" className="text-xs sm:text-sm">
                        Deliverables
                      </TabsTrigger>
                      <TabsTrigger value="tools" className="text-xs sm:text-sm">
                        Tools
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="activities" className="space-y-4">
                    <ul className="space-y-2">
                      {phase.activities.map((activity, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm sm:text-base">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  <TabsContent value="deliverables">
                    <div className="flex flex-wrap gap-2">
                      {phase.deliverables.map((deliverable, index) => (
                        <Badge key={index} variant="secondary" className="text-xs sm:text-sm py-1 sm:py-1.5">
                          {deliverable}
                        </Badge>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="tools">
                    <div className="flex flex-wrap gap-2">
                      {phase.tools.map((tool, index) => (
                        <Badge key={index} variant="outline" className="text-xs sm:text-sm py-1 sm:py-1.5">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ),
      )}
    </div>
  )
}
