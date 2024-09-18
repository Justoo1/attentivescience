export type articleProps = {
    title: string
    createdAt: Date
    imageUrl: string
    videoUrl: string
    description: string
    content: string
    published: boolean
    createdBy: string
    _id: string
    category: { _id: string, name: string },
}

export type dataProps = {
    bannerImageUrl?: string,
    imageUrl?: string,
    content1?: string,
    title1?: string,
    content2?: string,
    title2?: string,
    content3?: string,
    title3?: string,
    content4?: string,
    title4?: string,
    title5?: string,
    content5?: string,
    title6?: string,
    content6?: string,
    title7?: string,
    content7?: string,
    title8?: string,
    content8?: string,
    title9?: string,
    content9?: string,
}

export type SearchParamProps = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }

export type UrlQueryParams = {
    params: string
    key: string
    value: string | null
}
  
export type RemoveUrlQueryParams = {
    params: string
    keysToRemove: string[]
}

// ====== EVENT PARAMS
export type Event = {
    _id: string
    title: string
    imageUrl: string
    description: string
    location: string
    startDateTime: Date
    endDateTime: Date
    categoryId: string
    published: boolean
    category: {
      _id: string
      name: string
    }
    content: string
    createdBy: string
  }
export type CreateEventParams = {
    createdBy: string
    event: {
        title: string
        imageUrl: string
        description: string
        location: string
        startDateTime: Date
        endDateTime: Date
        categoryId: string
        published: boolean
        content: string
    }
    path: string
}

export type UpdateEventParams = {
    createdBy: string
    event: {
        _id: string
        title: string
        imageUrl: string
        description: string
        location: string
        startDateTime: Date
        endDateTime: Date
        categoryId: string
        published: boolean
    }
    path: string
}
      
export type DeleteEventParams = {
eventId?: string
path: string
}

export type GetAllEventsParams = {
query: string
category: string
limit: number
page: number
}

export type GetRelatedEventsByCategoryParams = {
    categoryId: string
    eventId: string
    limit?: number
    page: number | string
  }

//   BLOG PARAMS

export type CreateBlogParams = {
    createdBy: string,
    blog: {
        createdAt: Date
        published: boolean
        title: string
        description: string
        content: string
        createdBy: string
        categoryId: string
        imageUrl: string
        videoUrl: string
    }
    path: string
}

export type GetAllBlogsParams = {
    query: string
    category: string
    limit: number
    page: number
    }

export type GetRelatedBlogsByCategoryParams = {
    categoryId: string
    blogId: string
    limit?: number
    page?: number | string
  }

  export type DeleteBlogParams = {
    blogId?: string
    path: string
    }

    export type Blog = {
        _id: string
        createdAt: Date
        published: boolean
        title: string
        description: string
        imageUrl: string
        videoUrl: string
        category: {
          _id: string
          name: string
        }
        content: string
        createdBy: string
      }
    
    export type UpdateBlogParams = {
        createdBy: string
        blog: {
            _id: string
            createdAt: Date
            published: boolean
            title: string
            description: string
            content: string
            createdBy: string
            categoryId: string
            imageUrl: string
            videoUrl: string
        }
        path: string
    }

export type CreateCategoryParams = {
    categoryName: string
    }