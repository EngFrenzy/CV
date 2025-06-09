/**
 * Image storage utilities for managing images in the dashboard
 */

export interface ImageMetadata {
  id: string
  name: string
  size: number
  type: string
  uploadDate: string
  category: "profile" | "project" | "certification" | "general"
  url: string
}

export class ImageStorage {
  private static readonly STORAGE_KEY = "dashboard_images"
  private static readonly MAX_SIZE = 5 * 1024 * 1024 // 5MB

  /**
   * Save image to localStorage and return metadata
   */
  static async saveImage(file: File, category: ImageMetadata["category"] = "general"): Promise<ImageMetadata> {
    // Validate file size
    if (file.size > this.MAX_SIZE) {
      throw new Error("File size must be less than 5MB")
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      throw new Error("File must be an image")
    }

    return new Promise((resolve, reject) => {
      const reader = new FileReader()

      reader.onload = (e) => {
        try {
          const result = e.target?.result as string
          const imageId = `img_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

          const metadata: ImageMetadata = {
            id: imageId,
            name: file.name,
            size: file.size,
            type: file.type,
            uploadDate: new Date().toISOString(),
            category,
            url: result,
          }

          // Save to localStorage
          const existingImages = this.getAllImages()
          existingImages[imageId] = metadata
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(existingImages))

          resolve(metadata)
        } catch (error) {
          reject(new Error("Failed to save image"))
        }
      }

      reader.onerror = () => reject(new Error("Failed to read file"))
      reader.readAsDataURL(file)
    })
  }

  /**
   * Get all stored images
   */
  static getAllImages(): Record<string, ImageMetadata> {
    if (typeof window === "undefined") return {}

    try {
      const stored = localStorage.getItem(this.STORAGE_KEY)
      return stored ? JSON.parse(stored) : {}
    } catch {
      return {}
    }
  }

  /**
   * Get images by category
   */
  static getImagesByCategory(category: ImageMetadata["category"]): ImageMetadata[] {
    const allImages = this.getAllImages()
    return Object.values(allImages).filter((img) => img.category === category)
  }

  /**
   * Get image by ID
   */
  static getImage(id: string): ImageMetadata | null {
    const allImages = this.getAllImages()
    return allImages[id] || null
  }

  /**
   * Delete image by ID
   */
  static deleteImage(id: string): boolean {
    try {
      const allImages = this.getAllImages()
      if (allImages[id]) {
        delete allImages[id]
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(allImages))
        return true
      }
      return false
    } catch {
      return false
    }
  }

  /**
   * Get image URL by ID
   */
  static getImageUrl(id: string): string {
    const image = this.getImage(id)
    return image?.url || "/placeholder.svg?height=200&width=300"
  }

  /**
   * Get storage usage statistics
   */
  static getStorageStats() {
    const allImages = this.getAllImages()
    const images = Object.values(allImages)

    return {
      totalImages: images.length,
      totalSize: images.reduce((sum, img) => sum + img.size, 0),
      byCategory: {
        profile: images.filter((img) => img.category === "profile").length,
        project: images.filter((img) => img.category === "project").length,
        certification: images.filter((img) => img.category === "certification").length,
        general: images.filter((img) => img.category === "general").length,
      },
    }
  }

  /**
   * Format file size for display
   */
  static formatFileSize(bytes: number): string {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }
}
