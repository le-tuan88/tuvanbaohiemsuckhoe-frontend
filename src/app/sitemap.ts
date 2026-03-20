import { MetadataRoute } from 'next';
import { fetchGraphQL } from '@/lib/wp';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tuvanbaohiemsuckhoe.com';

    // Các Static URLs cơ bản
    const sitemapUrls: MetadataRoute.Sitemap = [
        {
            url: `${siteUrl}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${siteUrl}/lien-he`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${siteUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ];

    try {
        // Gọi API động từ WordPress Backend để lấy bài viết và chuyên mục
        const query = `
      query GetSitemapData {
        posts(first: 100) {
          nodes {
            slug
            modified
          }
        }
        categories(first: 100) {
          nodes {
            slug
          }
        }
      }
    `;

        const data = await fetchGraphQL(query);

        // Thêm các URL bài viết từ WordPress
        if (data?.posts?.nodes) {
            const postsUrls = data.posts.nodes.map((post: any) => ({
                url: `${siteUrl}/${post.slug}`,
                lastModified: post.modified ? new Date(post.modified) : new Date(),
                changeFrequency: 'monthly',
                priority: 0.6,
            }));
            sitemapUrls.push(...postsUrls);
        }

        // Thêm các URL chuyên mục từ WordPress (giả thiết đường dẫn là /blog/category/[slug])
        if (data?.categories?.nodes) {
            const categoriesUrls = data.categories.nodes.map((category: any) => ({
                url: `${siteUrl}/blog/category/${category.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.6,
            }));
            sitemapUrls.push(...categoriesUrls);
        }
    } catch (error) {
        console.error("Lỗi khi fetch dữ liệu sitemap từ WordPress API:", error);
    }

    return sitemapUrls;
}
