import mongoose from 'mongoose';
import 'dotenv/config'


async function connectDataBase() {
    await mongoose.connect(process.env.example.URL)
}

export default connectDataBase