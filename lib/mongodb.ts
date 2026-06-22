import { MongoClient, type Db } from "mongodb"

let client: MongoClient | null = null
let clientPromise: Promise<MongoClient> | null = null

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

async function initializeClient(): Promise<MongoClient> {
  // ✅ Sirf runtime par check hoga
  if (!process.env.MONGODB_URI) {
    throw new Error("Please add MONGODB_URI to your environment variables")
  }

  if (clientPromise) {
    return clientPromise
  }

  const uri = process.env.MONGODB_URI
  const options = {}

  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options)
      global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
  } else {
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
  }

  return clientPromise
}

export async function getDatabase(): Promise<Db> {
  const connectedClient = await initializeClient()
  return connectedClient.db("singh_bus_service")
}

export default (async () => initializeClient())()