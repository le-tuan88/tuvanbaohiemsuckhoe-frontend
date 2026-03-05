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
            // Cache settings có thể cấu hình sau tuỳ vào Next.js setup (ví dụ: { next: { revalidate: 60 } })
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
