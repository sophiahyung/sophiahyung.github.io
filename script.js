let songRand = ["Lovers Rock By TV Girl", " Dancing Queen By ABBA", " Real Love Baby By Father John Misty", " Thinking Bout You By Frank Ocean", " Baby I love You By The Ramones"," We fell in love in october By girl in red", " Dark Paradise by Lana Del Rey", " Don't Let Me Go by Cigarettes After Sex", " In My Mind by Lyn Lapid", " Heavenly by Cigarettes After Sex"]
function Randomizer() {
    const selectedItem = (songRand[(Math.floor(Math.random() * songRand.length))]);
    console.log(`selected song: ${selectedItem}`)
    document.getElementById(`randomizedNodeID`).innerHTML = selectedItem
}