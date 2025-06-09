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
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-muted/50 border-b">
        <div className="text-xs font-mono text-muted-foreground">{language}</div>
        <Button variant="ghost" size="icon" className="h-6 w-6 sm:h-8 sm:w-8" onClick={copyToClipboard}>
          {copied ? <Check className="h-3 w-3 sm:h-4 sm:w-4" /> : <Copy className="h-3 w-3 sm:h-4 sm:w-4" />}
        </Button>
      </div>
      <div className="overflow-x-auto">
        <pre className="p-3 sm:p-4">
          <code className="text-xs sm:text-sm font-mono">
            {lines.map((line, i) => (
              <div key={i} className="table-row">
                {showLineNumbers && (
                  <span className="table-cell text-right pr-2 sm:pr-4 select-none text-muted-foreground min-w-[2rem]">
                    {i + 1}
                  </span>
                )}
                <span className="table-cell whitespace-pre">{line}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  )
}
