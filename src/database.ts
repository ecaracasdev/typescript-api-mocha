import mongoose from "mongoose"
import { Mockgoose } from "mockgoose";

mongoose.Promise = global.Promise

export async function openConneciton(url: string) {
  try {
    const mockgosse = new Mockgoose(mongoose);

    if (process.env.NODE_ENV === 'test') {
      await mockgosse.prepareStorage()
      await mongoose.connect(url)
    } else {
      await mongoose.connect(url)
    }

  } catch (error) {
    console.error(error)
  }
}

export function closeConnection() {
  return mongoose.disconnect();
}