// /** @type {import('@sveltejs/kit').Handle} */
import { connectMongooseDb } from './lib/connectMongoose'
await connectMongooseDb()
// export async function handle({ event, resolve }) {
//     const response = await resolve(event);
//     return response;
// }