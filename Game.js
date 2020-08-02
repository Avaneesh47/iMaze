class Game{
    constructor(){
        this.canvas1 = createCanvas(windowWidth-936,windowHeight-354);
        
        this.img1 = createImg("images/battery1.png");
        this.img1.hide();

        this.img2 = createImg("images/battery2.png");
        this.img2.hide();

        this.img3 = createImg("images/battery3.png");
        this.img3.hide();

        this.img4 = createImg("images/battery4.png");
        this.img4.hide();

        this.calsIntake = 0;
        this.calsBurnt = 0;
        this.cals = 0;

        this.summary = createP('Summary for the day');
        this.summary.style("font-family","Candara");
        this.summary.style("font-size","18px");
        this.summary.hide();

        this.totalCalsIntake = createP('Total calorie intake: '+this.calsIntake);
        this.totalCalsIntake.style("font-family","Candara");
        this.totalCalsIntake.style("font-size","15px");
        this.totalCalsIntake.hide();

        this.totalCalsBurnt = createP('Total calories burnt: '+this.calsBurnt);
        this.totalCalsBurnt.style("font-family","Candara");
        this.totalCalsBurnt.style("font-size","15px");
        this.totalCalsBurnt.hide();

        this.totalCals = createP('Total calories: '+this.cals);
        this.totalCals.style("font-family","Candara");
        this.totalCals.style("font-size","15px");
        this.totalCals.hide();

        this.overallHealth = createP('Overall Health:');
        this.overallHealth.style("font-family","Candara");
        this.overallHealth.style("font-size","15px");
        this.overallHealth.hide();

        this.loggedIn = createP('Logged in user: '+ user.name);
        this.loggedIn.style("font-family","Candara");
        this.loggedIn.style("font-size","15px");
        this.loggedIn.hide();

        this.logout = createButton('Logout');
        this.logout.style('font-size','15px');
        this.logout.style("font-family","Candara");
        this.logout.style('background-color','#3F72AF');
        this.logout.hide();

        this.walls = new Walls();
        this.walls.removeWallsH();
        this.walls.removeWallsV();

        this.player = createSprite(20,20,20,20);
        this.player.shapeColor = "#00ADB5";

        this.virusImg = loadImage("images/virus.png");

        //borders of the canvas so that the ball stays in the canvas
        this.topEdge    = createSprite(300,0,600,10);
        this.topEdge.shapeColor = "#EAEAEA";
        this.topEdge.visible = false;

        this.bottomEdge = createSprite(280,400,560,10);
        this.bottomEdge.shapeColor = "#EAEAEA";
        this.bottomEdge.visible = false;

        this.rightEdge  = createSprite(600,180,10,360);
        this.rightEdge.shapeColor = "#EAEAEA";
        this.rightEdge.visible = false;

        this.leftEdge   = createSprite(0,200,10,400);
        this.leftEdge.shapeColor = "#EAEAEA";
        this.leftEdge.visible = false;

        //creating the obstacles
        this.obstacle1 = createSprite(140,80,20,20);
        this.obstacle1.addImage("obstacle1",this.virusImg);
        this.obstacle1.scale = 0.25;
        this.obstacle1.visible = false;
        this.obstacle1.setCollider("rectangle",0,0,150,150);

        this.obstacle2 = createSprite(20,340,20,20);
        this.obstacle2.addImage("obstacle2",this.virusImg);
        this.obstacle2.scale = 0.25;
        this.obstacle2.visible = false;
        this.obstacle2.setCollider("rectangle",0,0,150,150);

        this.obstacle3 = createSprite(180,200,20,20);
        this.obstacle3.addImage("obstacle2",this.virusImg);
        this.obstacle3.scale = 0.25;
        this.obstacle3.visible = false;
        this.obstacle3.setCollider("rectangle",0,0,150,150);

        this.obstacle4 = createSprite(180,140,20,20);
        this.obstacle4.addImage("obstacle2",this.virusImg);
        this.obstacle4.scale = 0.25;
        this.obstacle4.visible = false;
        this.obstacle4.setCollider("rectangle",0,0,150,150);

        this.obstacle5 = createSprite(300,20,20,20);
        this.obstacle5.addImage("obstacle2",this.virusImg);
        this.obstacle5.scale = 0.25;
        this.obstacle5.visible = false;
        this.obstacle5.setCollider("rectangle",0,0,150,150);

        this.obstacle6 = createSprite(420,340,20,20);
        this.obstacle6.addImage("obstacle2",this.virusImg);
        this.obstacle6.scale = 0.25;
        this.obstacle6.visible = false;
        this.obstacle6.setCollider("rectangle",0,0,150,150);

        this.obstacle7 = createSprite(380,60,20,20);
        this.obstacle7.addImage("obstacle2",this.virusImg);
        this.obstacle7.scale = 0.25;
        this.obstacle7.visible = false;
        this.obstacle7.setCollider("rectangle",0,0,150,150);

        this.obstacle8 = createSprite(460,140,20,20);
        this.obstacle8.addImage("obstacle2",this.virusImg);
        this.obstacle8.scale = 0.25;
        this.obstacle8.visible = false;
        this.obstacle8.setCollider("rectangle",0,0,150,150);

        this.obstacle9 = createSprite(420,260,20,20);
        this.obstacle9.addImage("obstacle2",this.virusImg);
        this.obstacle9.scale = 0.25;
        this.obstacle9.visible = false;
        this.obstacle9.setCollider("rectangle",0,0,150,150);

        this.obstacle10 = createSprite(580,380,20,20);
        this.obstacle10.addImage("obstacle2",this.virusImg);
        this.obstacle10.scale = 0.25;
        this.obstacle10.visible = false;
        this.obstacle10.setCollider("rectangle",0,0,150,150);
    }
    play(){
        //background
        background("#222831");


        //showing the summary
        this.summary.show();
        this.summary.position(windowWidth-1311,windowHeight-674);

        this.totalCalsIntake.show();
        this.totalCalsIntake.html("Total calorie intake: "+this.calsIntake);
        this.totalCalsIntake.position(windowWidth-1311,windowHeight-634);

        this.totalCalsBurnt.show();
        this.totalCalsBurnt.html("Total calories burnt: "+this.calsBurnt);
        this.totalCalsBurnt.position(windowWidth-1311,windowHeight-594);

        this.cals = this.calsIntake - this.calsBurnt;
        this.totalCals.show();
        this.totalCals.html("Total calories: "+this.cals);
        this.totalCals.position(windowWidth-1311,windowHeight-554);

        this.overallHealth.position(windowWidth-1311,windowHeight-514);
        this.overallHealth.show();

        this.img1.show();
        this.img1.position(windowWidth-1311,windowHeight-474);
        this.img2.position(windowWidth-1311,windowHeight-474);
        this.img3.position(windowWidth-1311,windowHeight-474);
        this.img4.position(windowWidth-1311,windowHeight-474);

        this.loggedIn.html('Logged in user: '+ user.name);
        this.loggedIn.position(windowWidth-436,windowHeight-674);
        this.loggedIn.show();

        this.logout.position(windowWidth-436,windowHeight-614);
        this.logout.show();

        //make walls visible
        for(var i = 0; i < wallsV.length; i++){
            if(wallsV[i]){
              wallsV[i].visible = true;
            }
        }
        for(var j = 0; j < wallsV.length; j++){
            if(wallsH[j]){
              wallsH[j].visible = true;
            }
        }

        //player stays within the boundaries
        //this.player.bounceOff(wallsGroup);
        this.player.bounceOff(this.topEdge);
        this.player.bounceOff(this.bottomEdge);
        this.player.bounceOff(this.rightEdge);
        this.player.bounceOff(this.leftEdge);

        //spawn the obstacles according to time of day
        if(hour >= 6 && hour < 8){
            this.obstacle1.visible = true;
            this.obstacle2.visible = true;
        }
        if(hour >= 8 && hour < 10){
            this.obstacle3.visible = true;
        }
        if(hour >= 10 && hour < 12){
            this.obstacle4.visible = true;
        }
        if(hour >= 12 && hour < 14){
            this.obstacle5.visible = true;
        }
        if(hour >= 14 && hour < 16){
            this.obstacle6.visible = true;
        }
        if(hour >= 16 && hour < 18){
            this.obstacle7.visible = true;
            this.obstacle8.visible = true;
        }
        if(hour >= 18 && hour < 20){
            this.obstacle9.visible = true;
        }
        if(hour >= 20 && hour < 22){
            this.obstacle10.visible = true;
        }

        //colliding with the viruses
        if(user.condition === "Diabetes"){
            if(this.obstacle1.visible === true && this.player.collide(this.obstacle1)){
                window.alert("Early morning: Drink 1 glass of water");
                this.obstacle1.destroy();
                window.open('Dialog.html','name','scrollbars=no,width=400,height=300,top=200,left=550');
            }
            if(this.obstacle2.visible === true && this.player.collide(this.obstacle2)){
                window.alert("Early morning walk");
                this.obstacle2.destroy();
                this.calsBurnt+=150;
            }
            if(this.obstacle3.visible === true && this.player.collide(this.obstacle3)){
                window.alert("Breakfast: Eggs / Sprouts / Methi Paratha");
                this.obstacle3.destroy();
                this.calsIntake+=159;
                this.img2.show();
                this.img1.hide();
            }
            if(this.obstacle4.visible === true && this.player.collide(this.obstacle4)){
                window.alert("Morning snack:Yoghurt with berries / Handful of almonds");
                this.obstacle4.destroy();
                this.calsIntake+=59;
            }
            if(this.obstacle5.visible === true && this.player.collide(this.obstacle5)){
                window.alert("Lunch: Salmon, raw vegetables, such as cherry tomatoes, carrots, cauliflower, and broccoli");
                this.obstacle5.destroy();
                this.calsIntake+=250;
                //this.popupWindow = window.open('Dialog.html?obstacle=5','name','width=200,height=200');
            }
            if(this.obstacle6.visible === true && this.player.collide(this.obstacle6)){
                window.alert("Post Lunch: Granola (with no sugar added) and fresh fruit");
                this.obstacle6.destroy();
                this.calsIntake+=471;
                this.img3.show();
                this.img2.hide();
            }
            if(this.obstacle7.visible === true && this.player.collide(this.obstacle7)){
                window.alert("Evening snack: Sliced apple with peanut butter");
                this.obstacle7.destroy();
                this.calsIntake+=52;
            }
            if(this.obstacle8.visible === true && this.player.collide(this.obstacle8)){
                window.alert("Evening exercise: Jogging/Running for 30 min");
                this.obstacle8.destroy();
                this.calsBurnt+=350;
            }
            if(this.obstacle9.visible === true && this.player.collide(this.obstacle9)){
                window.alert("Dinner: Stuffed chicken breast");
                this.obstacle9.destroy();
                this.calsIntake+=165;
            }
            if(this.obstacle10.visible === true && this.player.collide(this.obstacle10)){
                window.alert("Post dinner snack: Air-popped popcorn (1 cup)");
                this.obstacle10.destroy();
                this.calsIntake+=30;
                this.img4.show();
                this.img3.hide();
            }    
        }

        this.logout.mousePressed(()=>{
            this.summary.hide();
            this.totalCals.hide();
            this.totalCalsBurnt.hide();
            this.totalCalsIntake.hide();
            this.loggedIn.hide();
            this.logout.hide();

            gameState = 1;
        })
        
        drawSprites();
    }
}