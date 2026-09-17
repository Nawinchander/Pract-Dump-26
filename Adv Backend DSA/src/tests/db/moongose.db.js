const mongoose = require("mongoose");
const {
    MongoMemoryServer
} = require("mongodb-memory-server");

const TrafficSnapshot =
    require("../../src/models/mongo/TrafficSnapshot");

let mongoServer;

beforeAll(async () => {

    mongoServer =
        await MongoMemoryServer.create();

    await mongoose.connect(
        mongoServer.getUri()
    );
});

afterEach(async () => {

    await TrafficSnapshot.deleteMany({});
});

afterAll(async () => {

    await mongoose.connection.close();

    await mongoServer.stop();
});

test("should save traffic snapshot", async () => {

    const snapshot =
        await TrafficSnapshot.create({
            source: "A",
            destination: "B",
            trafficMultiplier: 1.5
        });

    expect(
        snapshot.source
    ).toBe("A");

    expect(
        snapshot.trafficMultiplier
    ).toBe(1.5);
});





