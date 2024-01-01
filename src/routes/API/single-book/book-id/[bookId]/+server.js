import { connectMongooseDb } from "$lib/connectMongoose.js"
import { audioBooks } from "$lib/Models/bookModel"
import { json } from "@sveltejs/kit"

export const POST = async ({params}) => {
    let bookId = params.bookId
    let returnJsonForm
    try {
        let book = await audioBooks.findOne({ _id: bookId })

        returnJsonForm = {
            status: 200,
            msg: "Success",
            total: 1,
            book
        }     
        return json(returnJsonForm)
    } catch (error) {
        returnJsonForm = {
            status: 400,
            msg: "Book not found",
            total: 0,
        }     
        return json(returnJsonForm)
    }
}