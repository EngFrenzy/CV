"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "lucide-react"
import {
  Bar,
  BarChart as RechartsBarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Pie,
  PieChart as RechartsPieChart,
  Legend,
} from "recharts"

interface TestingMetricsProps {
  metrics: {
    automationCoverage: number
    defectDetectionEfficiency: number
    testExecutionEfficiency: number
    defectDensity: number
    defectLeakage: number
    testCasesExecuted: number
    defectsIdentified: number
    criticalDefects: number
    automatedTests: number
    manualTests: number
  }
}

export default function TestingMetrics({ metrics }: TestingMetricsProps) {
  const pieData = [
    { name: "Automated Tests", value: metrics.automatedTests, color: "#2563eb" },
    { name: "Manual Tests", value: metrics.manualTests, color: "#d1d5db" },
  ]

  const defectData = [
    { name: "Critical", value: metrics.criticalDefects, color: "#ef4444" },
    { name: "Major", value: Math.floor(metrics.defectsIdentified * 0.35), color: "#f97316" },
    { name: "Minor", value: Math.floor(metrics.defectsIdentified * 0.45), color: "#eab308" },
    { name: "Trivial", value: Math.floor(metrics.defectsIdentified * 0.05), color: "#22c55e" },
  ]

  const efficiencyData = [
    { name: "Automation Coverage", value: metrics.automationCoverage },
    { name: "Defect Detection", value: metrics.defectDetectionEfficiency },
    { name: "Test Execution", value: metrics.testExecutionEfficiency },
  ]

  return (
    <Tabs defaultValue="charts" className="w-full">
      <div className="overflow-x-auto">
        <TabsList className="grid grid-cols-3 mb-4 min-w-max w-full">
          <TabsTrigger value="charts" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
            <BarChart className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Charts</span>
            <span className="sm:hidden">📊</span>
          </TabsTrigger>
          <TabsTrigger value="metrics" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
            <LineChart className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Metrics</span>
            <span className="sm:hidden">📈</span>
          </TabsTrigger>
          <TabsTrigger value="distribution" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
            <PieChart className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Distribution</span>
            <span className="sm:hidden">🥧</span>
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="charts" className="space-y-4">
        <Card>
          <CardContent className="pt-4 sm:pt-6">
            <h5 className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">Testing Efficiency Metrics</h5>
            <div className="h-48 sm:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={efficiencyData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    fontSize={12}
                    tick={{ fontSize: 10 }}
                    interval={0}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis domain={[0, 100]} fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#2563eb" radius={[4, 4, 0, 0]} />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="metrics" className="space-y-4">
        <div className="grid gap-3 sm:gap-4">
          <Card>
            <CardContent className="p-3 sm:p-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm sm:text-base">Automation Coverage</span>
                <span className="font-medium text-sm sm:text-base">{metrics.automationCoverage}%</span>
              </div>
              <Progress value={metrics.automationCoverage} className="h-2" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 sm:p-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm sm:text-base">Defect Detection Efficiency</span>
                <span className="font-medium text-sm sm:text-base">{metrics.defectDetectionEfficiency}%</span>
              </div>
              <Progress value={metrics.defectDetectionEfficiency} className="h-2" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 sm:p-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm sm:text-base">Test Execution Efficiency</span>
                <span className="font-medium text-sm sm:text-base">{metrics.testExecutionEfficiency}%</span>
              </div>
              <Progress value={metrics.testExecutionEfficiency} className="h-2" />
            </CardContent>
          </Card>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            <Card>
              <CardContent className="p-3 sm:p-4">
                <div className="text-center">
                  <p className="text-xs sm:text-sm text-muted-foreground">Defect Density</p>
                  <p className="text-xl sm:text-2xl font-bold">{metrics.defectDensity}</p>
                  <p className="text-xs text-muted-foreground">per 1000 LOC</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-3 sm:p-4">
                <div className="text-center">
                  <p className="text-xs sm:text-sm text-muted-foreground">Defect Leakage</p>
                  <p className="text-xl sm:text-2xl font-bold">{metrics.defectLeakage}%</p>
                  <p className="text-xs text-muted-foreground">production defects</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="distribution" className="space-y-4">
        <div className="grid lg:grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-4 sm:pt-6">
              <h5 className="font-medium mb-3 sm:mb-4 text-center text-sm sm:text-base">
                Test Automation Distribution
              </h5>
              <div className="h-48 sm:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      labelStyle={{ fontSize: "10px" }}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Legend wrapperStyle={{ fontSize: "12px" }} />
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4 sm:pt-6">
              <h5 className="font-medium mb-3 sm:mb-4 text-center text-sm sm:text-base">
                Defect Severity Distribution
              </h5>
              <div className="h-48 sm:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={defectData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      labelStyle={{ fontSize: "10px" }}
                    >
                      {defectData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Legend wrapperStyle={{ fontSize: "12px" }} />
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  )
}
