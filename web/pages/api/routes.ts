export const hostCms = 'http://localhost:1337'
// export const hostCms = 'https://grilling-ways-api.herokuapp.com'

export const routes = {
    posts: `${hostCms}/api/posts?populate=*`,
}

export const pageRoutes = {
    home: `${hostCms}/homepage`,
}