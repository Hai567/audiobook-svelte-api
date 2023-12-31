import { json } from '@sveltejs/kit';
// connectMongooseDb()

export const GET = async () => {
    return json({
        status: 200,
        msg: "Up and running"
    })
}