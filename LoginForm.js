class LoginForm{
    constructor(){
        this.canvas = createCanvas(windowWidth-936,windowHeight-254);

        this.title = createP('Login');
        this.title.style("font-family","Candara");
        this.title.style("font-size","20px");
        this.title.hide();

        this.usernameHeading = createP('Username:*');
        this.usernameHeading.style("font-family","Candara");
        this.usernameHeading.style("font-size","20px");
        this.usernameHeading.hide();
        
        this.usernameInput = createInput("");
        this.usernameInput.hide();

        this.passwordHeading = createP('Password:*');
        this.passwordHeading.style("font-family","Candara");
        this.passwordHeading.style("font-size","20px");
        this.passwordHeading.hide();

        this.passwordInput = createInput("",'password');
        this.passwordInput.hide();

        this.login = createButton("Login");
        this.login.style('font-size','20px');
        this.login.style("font-family","Candara");
        this.login.style('background-color','#3F72AF');
        this.login.hide();

        this.message = createP('*Please enter correct username and password');
        this.message.style("font-family","Candara");
        this.message.style("font-size","20px");
        this.message.style('color','red');
        this.message.hide();
    }
    display(){
        background("#DBE2EF");

        this.title.position(windowWidth-816,windowHeight-734);
        this.usernameHeading.position(windowWidth-936,windowHeight-569);
        this.passwordHeading.position(windowWidth-936,windowHeight-514);
        this.usernameInput.position(windowWidth-786,windowHeight-544);
        this.passwordInput.position(windowWidth-786,windowHeight-489);
        this.login.position(windowWidth-796,windowHeight-404);
        this.message.position(windowWidth-1056,windowHeight-274);

        this.title.show();
        this.usernameHeading.show();
        this.passwordHeading.show();
        this.usernameInput.show();
        this.passwordInput.show();
        this.login.show();

        this.login.mousePressed(()=>{
            if(this.usernameInput.value() === user.username && this.passwordInput.value() === user.password){
                //hide all elements
                this.title.hide();
                this.usernameHeading.hide();
                this.usernameInput.hide();
                this.passwordHeading.hide();
                this.passwordInput.hide();
                this.login.hide();
                this.message.hide();

                gameState+=1;
            }
            else{
                this.message.show();
            } 
        })
    }
}