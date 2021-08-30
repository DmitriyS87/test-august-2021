import Papa from 'papaparse';

export const convertToJSON = (url) => {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            Papa.parse(data, {
                header: true,
                skipEmptyLines: true,
                complete: function (results, file) {
                    console.log("Parsing complete:", JSON.stringify(results.data), file);
                },
                error: function (err) {
                    console.log("Parsing error:", err);
                }
            });
        });

};