import { json } from '@sveltejs/kit'

export const POST = async ({ request }) => {
    let formData = json(request)
    const uploadedFile = formData.body;
    // console.log(formData)
    console.log(uploadedFile)
    return new Response()
}