import http from "http";
import { app } from "./src";
import dbConnect from "./src/config/mongo"
import { PORT } from "./src/config/constants";

const main = async () => {
    await dbConnect();

    const httpServer = http.createServer(app);
    httpServer.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}.`);
    })
};

main()
    .then(() => {
        console.log("API started successfully.");
    })
    .catch((err) => {
        console.log(err);
    })