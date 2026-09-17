// MySQL integration testing

// For MySQL, create a separate:

// advanced_dsa_test

// database.

// Never run destructive tests against:

// advanced_dsa

// your development database.



const pool =
    require("../../src/config/mysql");

describe("MySQL Database", () => {

    test("should insert project", async () => {

        const [result] =
            await pool.execute(
                `
                INSERT INTO projects
                (name)
                VALUES (?)
                `,
                ["DSA Test Project"]
            );

        expect(result.insertId)
            .toBeGreaterThan(0);
    });

});









