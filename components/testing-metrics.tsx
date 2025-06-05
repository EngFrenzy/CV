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
    <Tabs defaultValue="charts">
      <TabsList className="grid grid-cols-3 mb-4">
        <TabsTrigger value="charts" className="flex items-center gap-2">
          <BarChart className="h-4 w-4" />
          <span>Charts</span>
        </TabsTrigger>
        <TabsTrigger value="metrics" className="flex items-center gap-2">
          <LineChart className="h-4 w-4" />
          <span>Metrics</span>
        </TabsTrigger>
        <TabsTrigger value="distribution" className="flex items-center gap-2">
          <PieChart className="h-4 w-4" />
          <span>Distribution</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="charts" className="space-y-4">
        <Card>
          <CardContent className="pt-6">
            <h5 className="font-medium mb-4">Testing Efficiency Metrics</h5>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={efficiencyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#2563eb" radius={[4, 4, 0, 0]} />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="metrics" className="space-y-4">
        <div className="grid gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between mb-2">
                <span>Automation Coverage</span>
                <span className="font-medium">{metrics.automationCoverage}%</span>
              </div>
              <Progress value={metrics.automationCoverage} className="h-2" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between mb-2">
                <span>Defect Detection Efficiency</span>
                <span className="font-medium">{metrics.defectDetectionEfficiency}%</span>
              </div>
              <Progress value={metrics.defectDetectionEfficiency} className="h-2" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between mb-2">
                <span>Test Execution Efficiency</span>
                <span className="font-medium">{metrics.testExecutionEfficiency}%</span>
              </div>
              <Progress value={metrics.testExecutionEfficiency} className="h-2" />
            </CardContent>
          </Card>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Defect Density</p>
                  <p className="text-2xl font-bold">{metrics.defectDensity}</p>
                  <p className="text-xs text-muted-foreground">per 1000 LOC</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Defect Leakage</p>
                  <p className="text-2xl font-bold">{metrics.defectLeakage}%</p>
                  <p className="text-xs text-muted-foreground">production defects</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="distribution" className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6">
              <h5 className="font-medium mb-4 text-center">Test Automation Distribution</h5>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h5 className="font-medium mb-4 text-center">Defect Severity Distribution</h5>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={defectData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {defectData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Legend />
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
