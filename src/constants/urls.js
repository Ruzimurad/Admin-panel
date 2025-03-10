export const urls = {
    products: {
        get: "https://db18bb3f296af6f7.mokky.dev/products",
        post: "https://db18bb3f296af6f7.mokky.dev/products",
        delete: (id) => `https://db18bb3f296af6f7.mokky.dev/products/${id}`,
        edit: (id) => `https://db18bb3f296af6f7.mokky.dev/products/${id}`,
    },

    banners: {
        get: "https://db18bb3f296af6f7.mokky.dev/banners",
        post: "https://db18bb3f296af6f7.mokky.dev/banners",
        delete: (id) => `https://db18bb3f296af6f7.mokky.dev/banners/${id}`,
        edit: (id) => `https://db18bb3f296af6f7.mokky.dev/banners/${id}`,
    },

    // brands: {
        // get : "https://db18bb3f296af6f7.mokky.dev/brands",
        // post : "https://db18bb3f296af6f7.mokky.dev/brands",
        // delete : (id) => `https://db18bb3f296af6f7.mokky.dev/brands/${id}`,
        // edit : (id) => `https://db18bb3f296af6f7.mokky.dev/brands/${id}`,
    // },
    auth: "/auth",

}