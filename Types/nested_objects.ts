type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: {
        producer: string;
        writer: string;
    }
}

function calculatePayout(song: Song): number {
    return song.numStreams * 0.50;
}


function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`);
}


const mySong: Song = {
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