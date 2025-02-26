export const urls = {
    products: {
        get : "https://db18bb3f296af6f7.mokky.dev/products",
        post : "https://db18bb3f296af6f7.mokky.dev/products",
        delete : (id) => `https://db18bb3f296af6f7.mokky.dev/products/${id}`,
        edit : (id) => `https://db18bb3f296af6f7.mokky.dev/products/${id}`,
    },

    banners: {
        get : "https://db18bb3f296af6f7.mokky.dev/banners",
        post : "/banners",
        delete:  (id) => `/banners/${id}`,
        edit : (id) => `/banners/${id}`,
    },
    
}