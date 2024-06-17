function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const day = now.getDate();
    const weekDay = now.toLocaleString('en-US', { weekday: 'long' });
    const month = now.toLocaleString('en-US', { month: 'long' });
    const year = now.getFullYear();

    const clockDict = `
clock: dict = {
    "day": [${day}, "${weekDay}"],
    "month": "${month}",
    "year": ${year},
    "hour": ${hour},
    "minute": ${minute},
    "second": ${second}
}
    `;

    document.getElementById('clock-pre').textContent = clockDict;
}

setInterval(updateClock, 1000);

window.onload = updateClock; 