
export const POST = async ({ request }) => {
    let formData = await request.formData()
    let bookTitle = await formData.get("title")
    let bookAuthor = await formData.get("author")
    let bookNarrator = await formData.get("narrator")
    let bookDescription = await formData.get("description")
    let coverUrl = await formData.get("coverUrl")
    let coverDominantColor = await formData.get("coverDominantColor")
    let audioListName = await formData.get("name")
    let audioListSrc = await formData.get("src")
    let audioListOrder = await formData.get("order")
    console.log(formData)
    return new Response()
}