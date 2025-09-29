function Decode(fPort, obj) {
    return {
        temperature: (Math.random() * 100).toFixed(2),
        humidity: (Math.random() * 100).toFixed(0),
    };
}
