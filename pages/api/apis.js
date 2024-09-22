// services/api.js
export const fetchBlogs = async () => {
    const response = await fetch('https://your-laravel-api-url.com/api/posts');
    const data = await response.json();
    return data;
};
