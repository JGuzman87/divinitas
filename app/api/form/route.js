import clientPromise from "@/lib/mongodb";

export const POST = async (request) => {
try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("divinitas");

    const result = await db.collection("client-info").insertOne(body);
     return Response.json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
