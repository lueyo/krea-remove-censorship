// Autor: lueyo

const filter = {
    urls: ["https://www.krea.ai/api/prompt"]
};

browser.webRequest.onBeforeRequest.addListener(
    (details) => {
        // No changes, just let the request proceed
    },
    filter,
    ["blocking"]
);

// Intercept and replace the response body with {m:false}
browser.webRequest.onBeforeRequest.addListener(
    (details) => {
        if (details.method === "POST") {
            const filter = browser.webRequest.filterResponseData(details.requestId);
            const encoder = new TextEncoder();
            const data = encoder.encode(JSON.stringify({ m: false }));
            filter.ondata = (event) => {
                filter.write(data);
                filter.disconnect();
            };
            filter.onstop = () => { };
        }
    },
    filter,
    ["blocking"]
);