export function getSlug(post){
    return post.replace(/ /g, "_").replace(/\./g, "").toLowerCase()
}