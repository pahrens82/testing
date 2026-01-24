import {
    useEffect,
    useState,
} from "react";

import { MONTHS } from "../../constants";



export const Notes = () => {
    let today = new Date()
    let date = today.getDate();
    let month = MONTHS[today.getMonth()];
    let year = today.getFullYear();
    let storageKey = `patlance-notes_${month}-${date}-${year}`;
    let [text, setText] = useState(localStorage.getItem(storageKey) || "");

    useEffect(
        () => {
            localStorage.setItem(storageKey, text);
        },
        [text]
    );

    const handleChange = (event) => {
        setText(event.currentTarget.value);
    };

    const handleSave = () => {
        let correctedText = text.replace(/\n/g, "\r\n");
        let currentInGameDate = document.querySelector(".date-table .border-primary").dataset.dateIndex;
        correctedText = correctedText + "\r\n" + `Current in game date index: ${currentInGameDate}`;
        let blob = new Blob([correctedText], { type: "text/plain" });
        let anchor = document.createElement("a");
        let date = Date();
        let now = Date.now();
        date = date.split(" ");
        let fileName = `${date[1]}_${date[2]}_${date[3]}_${now}_Notes`;
        anchor.download = `${fileName}.txt`;
        anchor.href = window.URL.createObjectURL(blob);
        anchor.target = "_blank";
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        window.URL.revokeObjectURL(anchor.href);
    };

    return (
        <details
            className={"border rounded p-1 mt-2 bg-dark-subtle"}
            open
        >
            <summary className={"fw-bold"}>
                Notes
            </summary>
            <textarea
                className={"form-control notes"}
                value={text}
                onChange={handleChange}
            />
            <button
                className={"btn btn-primary btn-sm mt-2"}
                type={"button"}
                onClick={handleSave}
            >
                Save
            </button>
        </details>
    );
};