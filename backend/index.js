import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";
import acceptanceRoutes from "./routes/acceptanceRoutes.js"
import exploitationRoutes from "./routes/exploitationRoutes.js"
import cors from "cors";
 
const app = express();
 
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
 
app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);
app.use('/acceptance', acceptanceRoutes);
app.use('/exploitation', exploitationRoutes); 

app.listen(5000, () => console.log('Server running at port 5000'));