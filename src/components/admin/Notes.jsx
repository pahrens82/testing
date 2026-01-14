export const Notes = () => {

    const handleSave = (event) => {
        let text = event.currentTarget.previousElementSibling.value;
        text = text.replace(/\n/g, "\r\n");
        let currentInGameDate = document.querySelector(".date-table .border-primary").dataset.dateIndex;
        text = text + "\r\n" + `Current in game date index: ${currentInGameDate}`;
        let blob = new Blob([text], {type: "text/plain"});
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
        <section className={"border rounded p-2 mt-2 bg-dark-subtle"}>
            <p className={"mb-0 h3"}>
                Notes
            </p>
            <textarea className={"form-control notes"}></textarea>
            <button
                className={"btn btn-primary btn-sm mt-2"}
                type={"button"}
                onClick={handleSave}
            >
                Save
            </button>
        </section>
    );
};