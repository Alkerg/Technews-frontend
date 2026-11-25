interface PagedNewsResponse {
    items: MinimalNewsResponse[];
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
}

interface NewsResponse {
    url: string;
    title: string;
    subtitle: string;
    slug: string;
    authors?: string[];
    publishedAt?: Date;
    category?: string;
    tags: string[];
    mainImage: MainImage | null;
    summary: string;
    content: string;
    contentFormat: string;
}

interface MinimalNewsResponse {
    url: string;
    title: string;
    subtitle: string;
    slug: string;
    authors?: string[];
    publishedAt?: Date;
    category?: string;
    tags: string[];
    mainImage: MainImage | null;
    summary: string;
}

interface MainImage{
    url: string;
    alt?: string;
    credit?: string;
}

interface NewsFilters {
  category?: string | null;
  date?: string | null;
  from?: string | null;
  to?: string | null;
  page?: number | null
  pageSize?: number | null;

}