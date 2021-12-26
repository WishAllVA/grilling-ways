export const hostCms = 'http://localhost:1337'
// export const hostCms = 'https://grilling-ways-api.herokuapp.com'

export const routes = {
    posts: `${hostCms}/api/posts?populate=*`,
    signup: `${hostCms}/api/auth/local/register`,
    login: `${hostCms}/api/auth/local`,
}

export const pageRoutes = {
    home: `${hostCms}/homepage`,
}