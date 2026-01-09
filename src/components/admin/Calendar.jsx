import {
    useEffect,
    useRef,
    useState,
} from "react";

import { STORAGE_KEYS } from "../../constants";

const ANSALONIAN_DAYS = [
    "Giltag", // Sunday
    "Lunitag", // Monday
    "Nuitag", // Tuesday
    "Solitag", // Wednesday
    "Majtag", // Thursday
    "Shintag", // Friday
    "Mishtag", // Saturday
];

const ANSALONIAN_MONTHS = [
    "Chismont", // January
    "Gilmont", // February
    "Lunimont", // March
    "Shinmont", // April
    "Sirrimont", // May
    "Zivmont", // June
    "Branchmont", // July
    "Habbamont", // August
    "Kirimont", // September
    "Mishmont", // October
    "Solimont", // November
    "Nuimont", // December
];

const MONTHS_TO_SEASONS = {
    "Chismont": "Winter", // January
    "Gilmont": "Winter", // February
    "Lunimont": "Spring", // March
    "Shinmont": "Spring", // April
    "Sirrimont": "Spring", // May
    "Zivmont": "Summer", // June
    "Branchmont": "Summer", // July
    "Habbamont": "Summer", // August
    "Kirimont": "Autumn", // September
    "Mishmont": "Autumn", // October
    "Solimont": "Autumn", // November
    "Nuimont": "Winter", // December
};

const EARTH_DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const EARTH_MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const WEEKS_IN_A_MONTH = 4;

// const MOON_PHASES = [
//     "New Moon",
//     "Waxing Crescent",
//     "First Quarter",
//     "Waxing Gibbous",
//     "Full Moon",
//     "Waning Gibbous",
//     "Third Quarter",
//     "Waning Crescent",
// ];

const MOON_PHASES = [
    "Full Moon",
    "Waning Gibbous",
    "Third Quarter",
    "Waning Crescent",
    "New Moon",
    "Waxing Crescent",
    "First Quarter",
    "Waxing Gibbous",
];

const NUITARI = {
    daysPerPhase: 2,
    period: 2 * MOON_PHASES.length,
};
const LUNITARI = {
    daysPerPhase: 7,
    period: 7 * MOON_PHASES.length,
};
const SOLINARI = {
    daysPerPhase: 9,
    period: 9 * MOON_PHASES.length,
};

const WEATHER = [
    {
        autumn: "Humid and cloudy",
        connectsTo: [
            0, 1, 2, 3, 4, 5, 6,
        ],
    },
    {
        autumn: "Sunny and clear",
        connectsTo: [
            0, 1, 2, 6, 7, 8, 18
        ],
    },
    {
        autumn: "Cold and foggy",
        connectsTo: [
            0, 1, 2, 3, 8, 9, 10
        ],
    },
    {
        autumn: "Thick fog",
        connectsTo: [
            0, 2, 3, 4, 10, 11, 12
        ],
    },
    {
        autumn: "Rain and fog",
        connectsTo: [
            0, 3, 4, 5, 12, 13, 14
        ],
    },
    {
        autumn: "Rain and gusty",
        connectsTo: [
            0, 4, 5, 6, 14, 15, 16
        ],
    },
    {
        autumn: "Sunny and cloudy",
        connectsTo: [
            0, 1, 5, 6, 16, 17, 18
        ],
    },
    {
        autumn: "Sunny and warm",
        connectsTo: [
            1, 7, 8, 18
        ],
    },
    {
        autumn: "Sporadic gusts",
        connectsTo: [
            1, 2, 7, 8, 9
        ],
    },
    {
        autumn: "Strong, cold winds",
        connectsTo: [
            2, 8, 9, 10
        ],
    },
    {
        autumn: "Overcast and frosty",
        connectsTo: [
            2, 3, 9, 10, 11
        ],
    },
    {
        autumn: "Cloudy and cold",
        connectsTo: [
            3, 10, 11, 12
        ],
    },
    {
        autumn: "Windy and clear",
        connectsTo: [
            3, 4, 11, 12, 13
        ],
    },
    {
        autumn: "Brief showers",
        connectsTo: [
            4, 12, 13, 14
        ],
    },
    {
        autumn: "Heavy downpour",
        connectsTo: [
            4, 5, 13, 14, 15
        ],
    },
    {
        autumn: "Rainy and strong winds",
        connectsTo: [
            5, 14, 15, 16
        ],
    },
    {
        autumn: "Drizzle",
        connectsTo: [
            5, 6, 15, 16, 17
        ],
    },
    {
        autumn: "Sunny and chilly",
        connectsTo: [
            6, 16, 17, 18
        ],
    },
    {
        autumn: "Pleasantly warm",
        connectsTo: [
            1, 6, 7, 17, 18
        ],
    },
];

const SCROLL_OPTIONS = {
    behavior: "smooth",
    block: "center",
    container: "nearest"
};


export const Calendar = () => {
    let storedDateIndex = localStorage.getItem(STORAGE_KEYS.currentDateIndex);
    if (storedDateIndex) {
        storedDateIndex = Number(storedDateIndex);
    } else {
        storedDateIndex = 236;
    }
    let [currentDateIndex, setCurrentDateIndex] = useState(storedDateIndex);
    let tableContainerRef = useRef(null);
    let dates = [];

    useEffect(
        () => {
            scrollToCurrentDate();
        },
        [currentDateIndex]
    );

    let years = 5;
    let months = 12;
    let weeks = 4;
    let days = 7;
    let previousWeather = WEATHER[0]

    let yearsCounter = 0;
    while (yearsCounter < years) {
        let monthsCounter = 0;
        while (monthsCounter < months) {
            let weeksCounter = 0;
            while (weeksCounter < weeks) {
                let daysCounter = 0;
                while (daysCounter < days) {
                    let randomIndex = Math.floor(Math.random() * (previousWeather.connectsTo.length))
                    let connectsTo = previousWeather.connectsTo[randomIndex];
                    let newWeather = WEATHER[connectsTo];
                    dates.push(
                        {
                            day: daysCounter,
                            date: (daysCounter + 1) + (weeksCounter * 7),
                            month: monthsCounter,
                            year: 351 + yearsCounter,
                            weather: newWeather,
                        }
                    );
                    previousWeather = newWeather;
                    daysCounter++;
                };
                weeksCounter++;
            };
            monthsCounter++;
        };
        yearsCounter++;
    };

    const incrementDate = () => {
        let newDateIndex = currentDateIndex += 1;
        if (newDateIndex > dates.length - 1) newDateIndex = dates.length - 1;
        setCurrentDateIndex(newDateIndex);
    };

    const decrementDate = () => {
        let newDateIndex = currentDateIndex -= 1;
        if (newDateIndex >= 0) {
            setCurrentDateIndex(newDateIndex);
        }
    };

    const scrollToCurrentDate = () => {
        let target = document.querySelector(`.date-${currentDateIndex}`);
        if (target) {
            localStorage.setItem(STORAGE_KEYS.currentDateIndex, currentDateIndex);
            target.scrollIntoView(SCROLL_OPTIONS);
        }
    };

    return (
        <div className={"calendar-container border rounded p-2"}>
            <p className={"mb-0 h3"}>
                Calendar
            </p>
            <div className={"d-flex justify-content-between"}>
                <strong>Day</strong>
                <strong>Date</strong>
                <strong>Month</strong>
                <strong>Year</strong>
            </div>
            <div
                className={"date-table-container"}
                ref={tableContainerRef}
            >
                <table className={"table table-sm"}>
                    <tbody>
                        {dates.map((date, index) => {
                            return (
                                <tr
                                    className={`date-${index} ${index === currentDateIndex ? "table-active" : ""}`}
                                    key={index}
                                >
                                    <td>{date.date}</td>
                                    <td title={EARTH_DAYS[date.day]}>{ANSALONIAN_DAYS[date.day]}</td>
                                    <td title={EARTH_MONTHS[date.month]}>{ANSALONIAN_MONTHS[date.month]}</td>
                                    <td>{date.year} PC</td>
                                    {/* <td>{date.weather.autumn}</td> */}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className={"d-flex justify-content-between pt-2"}>
                <button
                    disabled={currentDateIndex === 0}
                    className={"btn btn-danger btn-sm"}
                    onClick={decrementDate}
                >
                    - Date
                </button>

                <button
                    className={"btn btn-secondary btn-sm"}
                    onClick={scrollToCurrentDate}
                >
                    Current
                </button>
                <button
                    disabled={currentDateIndex === dates.length}
                    className={"btn btn-success btn-sm"}
                    onClick={incrementDate}
                >
                    Date +
                </button>
            </div>
            {/* <div>
                <strong>Weather</strong>
                <p>{datesRef.current[currentDateIndex].weather.autumn}</p>
            </div> */}
        </div>
    );
};

