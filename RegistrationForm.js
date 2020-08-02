class RegistrationForm{
    constructor(){
        this.canvas = createCanvas(windowWidth-936,windowHeight-254);
        
        this.title = createP('New Registration');
        this.title.style("font-family","Candara");
        this.title.style("font-size","20px");

        this.nameHeading = createP('Name:*');
        this.nameHeading.style("font-family","Candara");
        this.nameHeading.style("font-size","20px");
        this.nameHeading.style("font-style","bold");

        this.nameInput = createInput("");

        this.emailHeading = createP('Email ID:*');
        this.emailHeading.style("font-family","Candara");
        this.emailHeading.style("font-size","20px");

        this.emailInput = createInput("");

        this.mobileHeading = createP('Mobile no:*');
        this.mobileHeading.style("font-family","Candara");
        this.mobileHeading.style("font-size","20px");

        this.mobileInput = createInput("",'number');

        this.ageHeading = createP('Age:*');
        this.ageHeading.style("font-family","Candara");
        this.ageHeading.style("font-size","20px");

        this.ageInput = createInput("",'number');
        this.ageInput.size(40);

        this.genderHeading = createP('Gender:*');
        this.genderHeading.style("font-family","Candara");
        this.genderHeading.style("font-size","20px");

        this.radio1 = createRadio();
        this.radio1.style("font-family","Candara");
        this.radio1.style("font-size","16px");
        this.radio1.option('Male',1);
        this.radio1.option('Female',2);
        this.radio1.value('1');

        this.conditionHeading = createP('Any existing conditions:');
        this.conditionHeading.style("font-family","Candara");
        this.conditionHeading.style("font-size","20px");

        this.checkbox1 = createCheckbox('Diabetes');
        this.checkbox1.style("font-family","Candara");
        this.checkbox1.attribute('checked','true');

        this.checkbox2 = createCheckbox('Hypertension');
        this.checkbox2.style("font-family","Candara");
        this.checkbox2.attribute('disabled','');

        this.usernameHeading = createP('Username:*');
        this.usernameHeading.style("font-family","Candara");
        this.usernameHeading.style("font-size","20px");

        this.usernameInput = createInput("");

        this.passwordHeading = createP('Password:*');
        this.passwordHeading.style("font-family","Candara");
        this.passwordHeading.style("font-size","20px");

        this.passwordInput = createInput("",'password');

        this.message = createP('*Please fill the mandatory fields');
        this.message.style("font-family","Candara");
        this.message.style("font-size","20px");
        this.message.style("color","red");

        this.message.hide();

        this.register = createButton("Register");
        this.register.style('font-size','20px');
        this.register.style("font-family","Candara");
        this.register.style('background-color','#3F72AF');
    }
    display(){
        background("#DBE2EF");

        this.title.position(windowWidth-856,windowHeight-734);
        this.nameHeading.position(windowWidth-1056,windowHeight-654);
        this.emailHeading.position(windowWidth-1056,windowHeight-614);
        this.mobileHeading.position(windowWidth-1056,windowHeight-574);
        this.ageHeading.position(windowWidth-1056,windowHeight-534);
        this.genderHeading.position(windowWidth-1056,windowHeight-494);
        this.conditionHeading.position(windowWidth-1056,windowHeight-454);
        this.usernameHeading.position(windowWidth-1056,windowHeight-364);
        this.passwordHeading.position(windowWidth-1056,windowHeight-324);
        this.message.position(windowWidth-1056,windowHeight-284);

        this.nameInput.position(windowWidth-936,windowHeight-634);
        this.emailInput.position(windowWidth-936,windowHeight-594);
        this.mobileInput.position(windowWidth-936,windowHeight-554);
        this.ageInput.position(windowWidth-936,windowHeight-514);
        this.usernameInput.position(windowWidth-936,windowHeight-344);
        this.passwordInput.position(windowWidth-936,windowHeight-304);

        this.radio1.position(windowWidth-936,windowHeight-474);

        this.checkbox1.position(windowWidth-1036,windowHeight-404);
        this.checkbox2.position(windowWidth-1036,windowHeight-374);

        this.register.position(windowWidth-826,windowHeight-204);

        this.register.mousePressed(()=>{
            if(this.nameInput.value() !== "" && this.emailInput.value() !== "" && this.mobileInput.value() !== "" &&
               this.ageInput.value() !== "" && this.usernameInput.value() !== "" && this.passwordInput.value() !== ""){
                //hide all the elements
                this.title.hide();
                this.nameHeading.hide();
                this.nameInput.hide();
                this.emailHeading.hide();
                this.emailInput.hide();
                this.mobileHeading.hide();
                this.mobileInput.hide();
                this.ageHeading.hide();
                this.ageInput.hide();
                this.genderHeading.hide();
                this.radio1.hide();
                this.emailHeading.hide();
                this.conditionHeading.hide();
                this.checkbox1.hide();
                this.checkbox2.hide();
                this.usernameHeading.hide();
                this.usernameInput.hide();
                this.passwordHeading.hide();
                this.passwordInput.hide();
                this.register.hide();
                this.message.hide();

                user.name = this.nameInput.value();
                user.emailID = this.emailInput.value();
                user.mobile = this.mobileInput.value();
                user.age = this.ageInput.value();
                user.gender = this.radio1.value();
                user.username = this.usernameInput.value();
                user.password = this.passwordInput.value();

                if(this.checkbox1.checked()){
                    user.condition = this.checkbox1.value();
                }
                else if(this.checkbox2.checked()){
                    user.condition = this.checkbox2.value();
                }
                else{
                    user.condition = null;
                }

                gameState+=1;
            }
            else{
                this.message.show();
            }
        })
    }
}