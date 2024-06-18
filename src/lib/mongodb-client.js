import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';

dotenv.config();

const uri = process.env['MONGODB_URI'];
const options = {
    useUnifiedTopology: true,
    userNewUrlPArser: true,
    versiom: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
}

let client;
let clientPromise;

if (!uri) {
    throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env['NODE_ENV'] === 'development') {
    // in dev mode, use global variable so that the value
    // is preserved accross the module reloads caused by Hot Module Replacement
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // in prod, dont use global
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

// Export module-scoped MongoClient promise
// By doing this in a separate module the client can be shared accross functions
export default clientPromise;