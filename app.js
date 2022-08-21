const player = {
    name: "me",
    points: 100,
    good: true,
}

console.log(player);
console.log(player.points);

player.good=false;
console.log(player);

player.age = "none";
console.log(player);

player.points = player.points + 15;
console.log(player.points);