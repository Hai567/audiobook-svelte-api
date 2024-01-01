import { audioBooks } from '$lib/Models/bookModel.js'
import { json } from '@sveltejs/kit'

export const POST = async ({ params }) => {
    let returnJsonForm
    let { authorName } = params
    try {
        let authorsBooks = await audioBooks.find({ author: authorName })
        returnJsonForm = {
            status: 200,
            msg: "Success",
            total: authorsBooks.length,
            books: authorsBooks
        }

        return json(returnJsonForm)
    } catch (error) {
        returnJsonForm = {
            status: 400,
            msg: "Error finding books",
            total: 0
        }
        
        console.log("Error finding books", error)
        return json(returnJsonForm)
    }
}