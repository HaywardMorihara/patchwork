var Game;

Main = {
    debugMode: false,
    screenWidth: 800,
    screenHeight: 800
};

function preload() {
}

function create() {
    
    Game.stage.backgroundColor = '#124184';
}

function update() {
}

function render() {
}

document.addEventListener('DOMContentLoaded', function() {
   Game = new Phaser.Game(Main.screenWidth, Main.screenHeight, Phaser.AUTO, 'patchwork', 
    { preload: preload, 
        create: create, 
        update: update, 
        render: render });
}, false);
