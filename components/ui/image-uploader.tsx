"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Upload, Camera, X, ImageIcon, AlertCircle, Check } from "lucide-react"
import { ImageStorage, type ImageMetadata } from "@/lib/image-storage"
import { cn } from "@/lib/utils"

interface ImageUploaderProps {
  currentImageId?: string
  category?: ImageMetadata["category"]
  onImageSelect: (imageId: string, metadata: ImageMetadata) => void
  onImageRemove?: () => void
  className?: string
  showPreview?: boolean
  allowMultiple?: boolean
  label?: string
  description?: string
}

export function ImageUploader({
  currentImageId,
  category = "general",
  onImageSelect,
  onImageRemove,
  className,
  showPreview = true,
  allowMultiple = false,
  label = "Upload Image",
  description = "Click to upload or drag and drop",
}: ImageUploaderProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (files: FileList | null) => {
    if (!files || files.length === 0) return

    setError(null)
    setIsUploading(true)
    setUploadProgress(0)

    try {
      const file = files[0] // For now, handle single file

      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval)
            return 90
          }
          return prev + 10
        })
      }, 100)

      const metadata = await ImageStorage.saveImage(file, category)

      clearInterval(progressInterval)
      setUploadProgress(100)

      setTimeout(() => {
        setSuccess(true)
        onImageSelect(metadata.id, metadata)

        setTimeout(() => {
          setIsUploading(false)
          setUploadProgress(0)
          setSuccess(false)
        }, 1000)
      }, 500)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to upload image")
      setIsUploading(false)
      setUploadProgress(0)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    handleFileSelect(e.dataTransfer.files)
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleRemove = () => {
    if (currentImageId) {
      ImageStorage.deleteImage(currentImageId)
      onImageRemove?.()
    }
  }

  const currentImageUrl = currentImageId ? ImageStorage.getImageUrl(currentImageId) : null

  return (
    <div className={cn("space-y-4", className)}>
      {/* Current Image Preview */}
      {showPreview && currentImageUrl && (
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image
                  src={currentImageUrl || "/placeholder.svg"}
                  alt="Current image"
                  width={80}
                  height={80}
                  className="rounded-md object-cover border"
                />
                {onImageRemove && (
                  <Button
                    size="icon"
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-6 w-6"
                    onClick={handleRemove}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Current Image</p>
                <p className="text-xs text-muted-foreground">
                  {ImageStorage.getImage(currentImageId)?.name || "Unknown"}
                </p>
                <Badge variant="outline" className="mt-1">
                  {category}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Upload Area */}
      <Card
        className={cn(
          "border-2 border-dashed transition-colors cursor-pointer",
          isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25",
          isUploading && "pointer-events-none opacity-50",
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <CardContent className="p-6 text-center">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple={allowMultiple}
            onChange={(e) => handleFileSelect(e.target.files)}
            className="hidden"
          />

          {isUploading ? (
            <div className="space-y-4">
              <div className="flex justify-center">
                {success ? (
                  <div className="rounded-full bg-green-500/10 p-3">
                    <Check className="h-8 w-8 text-green-500" />
                  </div>
                ) : (
                  <div className="rounded-full bg-primary/10 p-3">
                    <Upload className="h-8 w-8 text-primary animate-pulse" />
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">{success ? "Upload Complete!" : "Uploading..."}</p>
                <Progress value={uploadProgress} className="h-2" />
                <p className="text-xs text-muted-foreground">{uploadProgress}% complete</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <ImageIcon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">{label}</h4>
                <p className="text-xs text-muted-foreground">{description}</p>
                <p className="text-xs text-muted-foreground">Supports: JPG, PNG, GIF, WebP (Max 5MB)</p>
              </div>
              <Button variant="outline" size="sm">
                <Camera className="h-4 w-4 mr-2" />
                Choose File
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Error Message */}
      {error && (
        <Card className="border-destructive/50 bg-destructive/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-destructive">
              <AlertCircle className="h-4 w-4" />
              <p className="text-sm">{error}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
