"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Trash2, Download, Eye, Filter, Grid3X3, List } from "lucide-react"
import { ImageStorage, type ImageMetadata } from "@/lib/image-storage"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ImageGalleryProps {
  onImageSelect?: (imageId: string, metadata: ImageMetadata) => void
  selectable?: boolean
  category?: ImageMetadata["category"] | "all"
  className?: string
}

export function ImageGallery({ onImageSelect, selectable = false, category = "all", className }: ImageGalleryProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState<ImageMetadata["category"] | "all">(category)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedImage, setSelectedImage] = useState<ImageMetadata | null>(null)

  const allImages = ImageStorage.getAllImages()
  const imageList = Object.values(allImages)

  const filteredImages = useMemo(() => {
    return imageList.filter((image) => {
      const matchesSearch = image.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = filterCategory === "all" || image.category === filterCategory
      return matchesSearch && matchesCategory
    })
  }, [imageList, searchTerm, filterCategory])

  const handleDelete = (imageId: string) => {
    if (confirm("Are you sure you want to delete this image?")) {
      ImageStorage.deleteImage(imageId)
      // Force re-render by updating state
      setSearchTerm((prev) => prev + "")
    }
  }

  const handleDownload = (image: ImageMetadata) => {
    const link = document.createElement("a")
    link.href = image.url
    link.download = image.name
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const stats = ImageStorage.getStorageStats()

  return (
    <div className={className}>
      {/* Header with Stats */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Image Gallery</span>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="text-center">
              <p className="text-2xl font-bold">{stats.totalImages}</p>
              <p className="text-sm text-muted-foreground">Total Images</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{ImageStorage.formatFileSize(stats.totalSize)}</p>
              <p className="text-sm text-muted-foreground">Storage Used</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{stats.byCategory.project}</p>
              <p className="text-sm text-muted-foreground">Project Images</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{stats.byCategory.profile}</p>
              <p className="text-sm text-muted-foreground">Profile Images</p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search images..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterCategory} onValueChange={(value) => setFilterCategory(value as any)}>
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="profile">Profile</SelectItem>
                <SelectItem value="project">Project</SelectItem>
                <SelectItem value="certification">Certification</SelectItem>
                <SelectItem value="general">General</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Images Grid/List */}
      {filteredImages.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">No images found</p>
          </CardContent>
        </Card>
      ) : (
        <div
          className={
            viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" : "space-y-4"
          }
        >
          {filteredImages.map((image) => (
            <Card key={image.id} className="overflow-hidden">
              {viewMode === "grid" ? (
                <>
                  <div className="aspect-square relative">
                    <Image src={image.url || "/placeholder.svg"} alt={image.name} fill className="object-cover" />
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="text-xs">
                        {image.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-medium text-sm truncate mb-2">{image.name}</h4>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <span>{ImageStorage.formatFileSize(image.size)}</span>
                      <span>{new Date(image.uploadDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex gap-2">
                      {selectable && onImageSelect && (
                        <Button size="sm" className="flex-1" onClick={() => onImageSelect(image.id, image)}>
                          Select
                        </Button>
                      )}
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>{image.name}</DialogTitle>
                            <DialogDescription>
                              {ImageStorage.formatFileSize(image.size)} • {image.type} •{" "}
                              {new Date(image.uploadDate).toLocaleString()}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="relative aspect-video">
                            <Image
                              src={image.url || "/placeholder.svg"}
                              alt={image.name}
                              fill
                              className="object-contain rounded-md"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button size="sm" variant="outline" onClick={() => handleDownload(image)}>
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleDelete(image.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </>
              ) : (
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16">
                      <Image
                        src={image.url || "/placeholder.svg"}
                        alt={image.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium truncate">{image.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <Badge variant="outline" className="text-xs">
                          {image.category}
                        </Badge>
                        <span>{ImageStorage.formatFileSize(image.size)}</span>
                        <span>{new Date(image.uploadDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {selectable && onImageSelect && (
                        <Button size="sm" onClick={() => onImageSelect(image.id, image)}>
                          Select
                        </Button>
                      )}
                      <Button size="sm" variant="outline" onClick={() => handleDownload(image)}>
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleDelete(image.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
