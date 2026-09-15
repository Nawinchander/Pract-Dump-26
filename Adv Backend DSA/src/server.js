

require("dotenv").config();

const app = require("./app");
const connectMongo =
    require("./config/mongo");

const PORT =
    process.env.PORT || 5000;

async function startServer() {

    await connectMongo();

    app.listen(PORT, () => {

        console.log(
            `Server running on port ${PORT}`
        );

    });
}

startServer();



/// npm run dev



