const autocannon = require("autocannon");

autocannon(
    {
        url: "http://localhost:5000",
        connections: 10,
        duration: 10,

        requests: [
            {
                method: "POST",

                path: "/api/routes/shortest",

                headers: {
                    "content-type":
                        "application/json"
                },

                body: JSON.stringify({
                    source: "A",
                    destination: "D",

                    edges: [
                        {
                            source: "A",
                            destination: "B",
                            weight: 4
                        },
                        {
                            source: "A",
                            destination: "C",
                            weight: 2
                        },
                        {
                            source: "C",
                            destination: "B",
                            weight: 1
                        },
                        {
                            source: "B",
                            destination: "D",
                            weight: 5
                        }
                    ]
                })
            }
        ]
    },
    console.log
);



//// run server - 40 














