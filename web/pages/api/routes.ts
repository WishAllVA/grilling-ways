export const hostCms = 'http://localhost:1337'
// export const hostCms = 'https://grilling-ways-api.herokuapp.com'

export const routes = {
    posts: `${hostCms}/api/posts?populate=*`,
    createPost: `${hostCms}/api/posts`,
    signup: `${hostCms}/api/auth/local/register`,
    login: `${hostCms}/api/auth/local`,
    google: `${hostCms}/api/connect/google`,
}

export const pageRoutes = {
    home: `${hostCms}/homepage`,
}