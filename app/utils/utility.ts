export async function getSearchResults(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return await response.json();
}