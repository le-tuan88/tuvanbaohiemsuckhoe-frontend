async function test() {
    const query = `
    query GetOffsetPosts {
      posts(where: { offsetPagination: { size: 3, offset: 0 }, orderby: {field: DATE, order: DESC} }) {
        pageInfo {
          offsetPagination {
            total
          }
        }
        nodes {
          title
        }
      }
    }
    `;
    const res = await fetch("https://quanly.tuvanbaohiemsuckhoe.com/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
    });
    const json = await res.json();
    console.log(JSON.stringify(json, null, 2));
}
test();
