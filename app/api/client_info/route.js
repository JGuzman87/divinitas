import clientPromise from "@/lib/mongodb";

export const GET = async () => {
    try {
        const client = await clientPromise;
        const db = client.db("divinitas");
        const posts = await db.collection('client-info').find({}).toArray();

     return Response.json(posts);
    }catch (error) {
        return Response.json({ error: "Error fetching clients "}, { status: 500 });
    }
}

export const POST = async () => {
    try {
        const body = await request.json();
        const client = await clientPromise;
        const db = client.db('divinitas');

        const result = await db.collection("client-info").insertOne(body);

        return Response.json(result);
    } catch (error) {
        return Response.json({ error: "Error submitting form"}, { status: 500 });
    }
}