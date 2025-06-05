"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeSnippetProps {
  code: string
  language?: string
  showLineNumbers?: boolean
  className?: string
}

export default function CodeSnippet({
  code,
  language = "javascript",
  showLineNumbers = true,
  className,
}: CodeSnippetProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = code.split("\n")

  return (
    <div className={cn("relative rounded-md overflow-hidden bg-muted", className)}>
      <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b">
        <div className="text-xs font-mono text-muted-foreground">{language}</div>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={copyToClipboard}>
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono">
          {lines.map((line, i) => (
            <div key={i} className="table-row">
              {showLineNumbers && (
                <span className="table-cell text-right pr-4 select-none text-muted-foreground">{i + 1}</span>
              )}
              <span className="table-cell">{line}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  )
}
