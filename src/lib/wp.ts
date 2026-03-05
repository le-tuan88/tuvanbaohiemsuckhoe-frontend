const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "https://quanly.tuvanbaohiemsuckhoe.com/graphql";

export async function fetchGraphQL(query: string, variables: Record<string, any> = {}) {
    try {
        const res = await fetch(WP_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query,
                variables,
            }),
            next: { revalidate: 3600 }, // Cache 1 giờ
        });

        if (!res.ok) {
            console.error("Failed to fetch API", res.status);
            return null;
        }

        const { data, errors } = await res.json();

        if (errors) {
            console.error("GraphQL Errors:", errors);
            throw new Error("Failed to fetch API");
        }

        return data;
    } catch (error) {
        console.error("Lỗi khi gọi GraphQL WP:", error);
        return null;
    }
}

export async function getAllPosts() {
    const query = `
    query GetAllPosts {
      posts(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
        nodes {
          title
          slug
          date
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;
    const data = await fetchGraphQL(query);
    return data?.posts?.nodes || [];
}

export async function getPostBySlug(slug: string) {
    const query = `
    query GetPostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        title
        content
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  `;
    const variables = { id: slug, idType: "SLUG" };
    const data = await fetchGraphQL(query, variables);
    return data?.post;
}

export async function getAllPostSlugs() {
    const query = `
    query GetAllPostSlugs {
      posts(first: 100) {
        nodes {
          slug
        }
      }
    }
  `;
    const data = await fetchGraphQL(query);
    return data?.posts?.nodes || [];
}
