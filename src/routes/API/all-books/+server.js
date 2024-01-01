import { json } from "@sveltejs/kit"
import { connectMongooseDb } from "$lib/connectMongoose"
import { audioBooks } from "$lib/Models/bookModel"
export const POST = async function(){ 
    // await connectMongooseDb()
    let returnJsonForm
    try {
        let books = await audioBooks.find()

        returnJsonForm = {
            status: 200,
            msg: "Success",
            total: books.length,
            books
        }
        return json(returnJsonForm)
    } catch (error) {
        console.log("Error finding books: ", error)

        returnJsonForm = {
            status: 400,
            mgs: "Error finding books"
        }
        return json(returnJsonForm)
    }
}