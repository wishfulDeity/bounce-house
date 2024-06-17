import clientPromise from "$lib/mongodb-client";

export async function customerInquire(request) {
    const dbConnection = await clientPromise;
    const db = dbConnection.db();
    const collection = db.collection('bouncehouse-cluster');
    const inquiry = JSON.parse(request.body);
    const newInquiry = await collection.insertOne(inquiry);
    return {
        status: 200,
        body: {
            newInquiry
        }
    }
}