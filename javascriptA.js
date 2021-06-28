console.log ("Arguments");

const wallColor = function (wall, color) {
    console.log ("The "+ wall + " has been painted "+ color);
};
// paints the wall always red
// wallColor()
 
//paints the wall in a color
// const hall = "green";
// const staircase = "pink";
//wallColor(hall);
//wallColor(staircase);

// met 2 variabelen in een array
let selectedWall = ['north wall', 'south-east wall'];
let selectedColor = ['orange', 'grey'];

wallColor (selectedWall[0], selectedColor[0]);
wallColor (selectedWall[1], selectedColor[1]);

