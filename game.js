class MainScene extends Phaser.Scene {

    constructor() {
        super("MainScene");
    }

    create() {
        this.add.text(
            20,
            20,
            "Solarion Defense",
            {
                fontSize:"32px",
                color:"#ffffff"
            }
        );
    }
}

const config = {

    type: Phaser.AUTO,

    width:1280,
    height:720,

    scene:[MainScene]

};

new Phaser.Game(config);
