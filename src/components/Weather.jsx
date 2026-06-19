const HEXAGON_1 = {
    autumn: "",
    connectsTo: [2, 3, 4, 5, 6, 7],
};
const WEATHER = [
    {
        id: 1,
        autumn: "Humid and cloudy",
        winter: "Cold and humid",
        connectsTo: [
            2, 3, 4, 5, 6, 7,
        ],
    },
    {
        id: 2,
        autumn: "Sunny and clear",
        winter: "Cold and foggy",
        connectsTo: [
            1, 3, 7, 8, 9, 19
        ],
    },
    {
        id: 3,
        autumn: "Cold and foggy",
        winter: "Cold rain showers",
        connectsTo: [
            1, 2, 4, 9, 10, 11
        ],
    },
    {
        id: 4,
        autumn: "Thick fog",
        winter: "Cold and cloudy",
        connectsTo: [
            1, 3, 5, 11, 12, 13
        ],
    },
    {
        id: 5,
        autumn: "Rain and fog",
        winter: "Wet snow",
        connectsTo: [
            1, 4, 6, 13, 14, 15
        ],
    },
    {
        id: 6,
        autumn: "Rain and gusty",
        winter: "Rain and snow",
        connectsTo: [
            1, 5, 7, 15, 16, 17
        ],
    },
    {
        id: 7,
        autumn: "Sunny and cloudy",
        winter: "Clear and windy",
        connectsTo: [
            1, 2, 6, 17, 18, 19
        ],
    },
    {
        id: 8,
        autumn: "Sunny and warm",
        winter: "Sunny and chilly",
        connectsTo: [
            2, 9, 19
        ],
    },
    {
        id: 9,
        autumn: "Sporadic gusts",
        winter: "Light drizzle",
        connectsTo: [
            2, 3, 8, 10
        ],
    },
    {
        id: 10,
        autumn: "Strong, cold winds",
        winter: "Heavy rain",
        connectsTo: [
            3, 9, 11
        ],
    },
    {
        id: 11,
        autumn: "Overcast and frosty",
        winter: "Cold winds",
        connectsTo: [
            3, 4, 10, 12
        ],
    },
    {
        id: 12,
        autumn: "Cloudy and cold",
        winter: "Icy and cloudy",
        connectsTo: [
            4, 11, 13
        ],
    },
    {
        id: 13,
        autumn: "Windy and clear",
        winter: "Sleet",
        connectsTo: [
            4, 5, 12, 14
        ],
    },
    {
        id: 14,
        autumn: "Brief showers",
        winter: "Light snowfall",
        connectsTo: [
            5, 13, 15
        ],
    },
    {
        id: 15,
        autumn: "Heavy downpour",
        winter: "Strong winds with snow",
        connectsTo: [
            5, 6, 14, 16
        ],
    },
    {
        id: 16,
        autumn: "Rainy and strong winds",
        winter: "Blizzard",
        connectsTo: [
            6, 15, 17
        ],
    },
    {
        id: 17,
        autumn: "Drizzle",
        winter: "Hail",
        connectsTo: [
            6, 7, 16, 18
        ],
    },
    {
        id: 18,
        autumn: "Sunny and chilly",
        winter: "Cold and clear",
        connectsTo: [
            7, 17, 19
        ],
    },
    {
        id: 19,
        autumn: "Pleasantly warm",
        winter: "Cloudy and chilly",
        connectsTo: [
            2, 7, 8, 18
        ],
    },
]

export const Weather = () => {
    return (
        <section className={"container"}>
            <section className={"row"}>
                <section className={"col"}>
                    <h1>Weather</h1>

                </section>
            </section>
        </section>
    );
};
