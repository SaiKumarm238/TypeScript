function calculatePayout(song) {
    return song.numStreams * 0.50;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "RRR",
    artist: "MMK",
    numStreams: 1000000,
    credits: {
        producer: "Someone",
        writer: "MMK"
    },
};
console.log(calculatePayout(mySong));
printSong(mySong);
