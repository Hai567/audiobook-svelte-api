import { audioBooks } from '$lib/Models/bookModel.js'
import { json } from '@sveltejs/kit'

export const POST = async ({ params }) => {
    let returnJsonForm
    let narratorName = params

    try {
        let narratorsBooks = await audioBooks.find({ narrator: narratorName })

        returnJsonForm = {
            status: 200,
            msg: "Success",
            total: narratorsBooks.length,
            books: narratorsBooks
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