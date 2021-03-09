import { writable,readable } from "svelte/store"

const headerStore = writable("svelte tutorial")

const tabStore = readable([
    { name: "外国书籍", type: "out" },
    { name: "中国书籍", type: "inner" },
])
console.log(headerStore,'store')
export {
    headerStore,
    tabStore
} 