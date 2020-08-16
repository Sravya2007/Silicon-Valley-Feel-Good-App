class UI {
    constructor() {
        //some of the buttons, elements, messages, images etc.

        this.welcomeGreeting = createElement('h1');
        this.welcomeGreetingPart = createElement('h2');

        this.noMessage = createElement('h1');
        this.noMessage1 = createElement('h2');

        this.homeMessage = createElement('h1');

        this.musicMessage = createElement('h2');
        this.musicMessage1 = createElement('h2');

        this.libMessage = createElement('h2');
        this.libMessage1 = createElement('h2');

        this.instrumentMessage = createElement('h2');
        this.birdMessage = createElement('h2');
        this.relaxMessage = createElement('h2');
        this.bellMessage = createElement('h2');
        this.sleepMessage = createElement('h2');

        this.timeMessage = createElement('h2');
        this.natureMessage = createElement('h2');
        this.shortMessage = createElement('h2');
        this.lifeMessage = createElement('h2');
        this.motiveMessage = createElement('h2');

        this.instrumentButton = createImg('Images/InstrumentButton.jpg');
        this.instrumentButton.hide();
        this.birdButton = createImg('Images/BirdButton.jpg');
        this.birdButton.hide();
        this.relaxButton = createImg('Images/RelaxingButton.jpg');
        this.relaxButton.hide();
        this.bellButton = createImg('Images/BellButton.jpg');
        this.bellButton.hide();
        this.sleepButton = createImg('Images/SleepButton.jpg');
        this.sleepButton.hide();

        this.timeButton = createImg('Images/TimeButton.jpg');
        this.timeButton.hide();
        this.natureButton = createImg('Images/NatureButton.jpg');
        this.natureButton.hide();
        this.shortButton = createImg('Images/ButterflyButton.jpg');
        this.shortButton.hide();
        this.lifeButton = createImg('Images/LifeButton.jpg');
        this.lifeButton.hide();
        this.motiveButton = createImg('Images/MotivationButton.png');
        this.motiveButton.hide();

        this.yes = createButton('YES!');
        this.no = createButton('NO');

        this.musicButton = createButton('Listen to soothing music!');
        this.musicButton.hide();
        this.libButton = createButton('Know something exciting!');
        this.libButton.hide();

        //custom color
        this.color1 = color(0, 255, 0);
    }

    display() {

        //greeting screen
        this.welcomeGreeting.html("Hi! Welcome to the Feel-Good App!");
        this.welcomeGreeting.position(displayWidth/2 - 250, 0);
        this.welcomeGreeting.style('color', "blue");

        this.welcomeGreetingPart.html("Do you want to have some fun with me?");
        this.welcomeGreetingPart.position(displayWidth/2 - 220, displayHeight/2 - 450);
        this.welcomeGreetingPart.style('color', "cyan");

        this.yes.style('background-color', this.color1);
        this.yes.position(displayWidth/2 - 120, displayHeight/2 - 300);
        this.yes.size(200, 100);
        this.yes.style('font-size', '30px');

        this.no.style('background-color', "red");
        this.no.position(displayWidth/2 - 120, displayHeight/2 - 100);
        this.no.size(200, 100);
        this.no.style('font-size', '30px');

        //yes and no events(no is more likely to be pressed)
        this.no.mousePressed(() =>{
            this.welcomeGreeting.hide();
            this.welcomeGreetingPart.hide();
            this.no.hide();

            this.noMessage.html("Oh, I am sad that I missed some memorable moments with you...");
            this.noMessage.position(displayWidth/2 - 400, displayHeight/2 - 450);
            this.noMessage.style('color', "indigo");

            this.noMessage1.html("Would you like to revive those memorable moments?");
            this.noMessage1.position(displayWidth/2 - 280, displayHeight/2 - 400);
            this.noMessage1.style('color', "blue");
        });

        this.yes.mousePressed(() =>{
            this.welcomeGreeting.hide();
            this.welcomeGreetingPart.hide();
            this.noMessage.hide();
            this.noMessage1.hide();
            this.yes.hide();
            this.no.hide();

            this.homeMessage.html("Awesome! Choose what you want us to do:");
            this.homeMessage.position(displayWidth/2 - 300, displayHeight/2 - 450);
            this.homeMessage.style('color', this.color1);

            this.musicButton.style('background-color', "yellow");
            this.musicButton.position(displayWidth/2 - 120, displayHeight/2 - 300);
            this.musicButton.size(200, 150);
            this.musicButton.style('font-size', '30px');
            this.musicButton.show();

            this.libButton.style('background-color', "blue");
            this.libButton.position(displayWidth/2 - 120, displayHeight/2 - 80);
            this.libButton.size(200, 150);
            this.libButton.style('font-size', '30px');
            this.libButton.style('color', "white");
            this.libButton.show();
        });

        //events when "Listen to soothing music" is pressed
        this.musicButton.mousePressed(() =>{
            this.musicButton.hide();
            this.libButton.hide();
            this.homeMessage.hide();
            this.timeButton.hide();
            this.natureButton.hide();
            this.shortButton.hide();
            this.lifeButton.hide();
            this.motiveButton.hide();

            this.instrumentButton.show();
            this.birdButton.show();
            this.relaxButton.show();
            this.bellButton.show();
            this.sleepButton.show();

            this.musicMessage.html("Welcome to the sound library! Here we can listen to amazingly soothing sounds.");
            this.musicMessage.position(displayWidth/2 - 400, displayHeight/2 - 450);
            this.musicMessage.style('color', "yellow");

            this.musicMessage1.html("To get the best out of these sounds, let's close our eyes while listening to them and enjoy!😊");
            this.musicMessage1.position(displayWidth/2 - 450, displayHeight/2 - 400);
            this.musicMessage1.style('color', "yellow");

            this.instrumentButton.position(displayWidth/2 - 300, displayHeight/2 - 300);
            this.instrumentButton.size(200, 150);

            this.instrumentMessage.html("Instrument Sounds");
            this.instrumentMessage.position(displayWidth/2 - 300, displayHeight/2 - 150);
            
            this.birdButton.position(displayWidth/2, displayHeight/2 - 300);
            this.birdButton.size(200, 150);

            this.birdMessage.html("Bird Sounds");
            this.birdMessage.position(displayWidth/2 + 35, displayHeight/2 - 150);

            this.relaxButton.position(displayWidth/2 - 300, displayHeight/2 - 50);
            this.relaxButton.size(200, 150);

            this.relaxMessage.html("Relaxing Sounds");
            this.relaxMessage.position(displayWidth/2 - 290, displayHeight/2 + 100);

            this.bellButton.position(displayWidth/2, displayHeight/2 - 50);
            this.bellButton.size(200, 150);

            this.bellMessage.html("Bell Sounds");
            this.bellMessage.position(displayWidth/2 + 30, displayHeight/2 + 100);

            this.sleepButton.position(displayWidth/2 - 300, displayHeight/2 + 200);
            this.sleepButton.size(200, 150);

            this.sleepMessage.html("Sleepy Sounds");
            this.sleepMessage.position(displayWidth/2 - 280, displayHeight/2 + 350);
        });

        //events when "Know something exciting" is pressed
        this.libButton.mousePressed(() =>{
            this.libButton.hide();
            this.musicButton.hide();
            this.homeMessage.hide();
            this.instrumentButton.hide();
            this.birdButton.hide();
            this.relaxButton.hide();
            this.bellButton.hide();
            this.sleepButton.hide();

            this.timeButton.show();
            this.natureButton.show();
            this.shortButton.show();
            this.lifeButton.show();
            this.motiveButton.show();
            
            this.libMessage.html("Welcome to the quote library! Here you can find awesome and ");
            this.libMessage.position(displayWidth/2 - 325, displayHeight/2 - 450);
            this.libMessage.style('color', "brown");

            this.libMessage1.html("heart-touching quotes that will surely cheer you up.😊");
            this.libMessage1.position(displayWidth/2 - 310, displayHeight/2 - 400);
            this.libMessage1.style('color', "brown");

            this.libMessage2 = createElement('h2');
            this.libMessage2.html("Note: Click on the links to know more about the people who said these quotes.");
            this.libMessage2.position(displayWidth/2 - 400, displayHeight/2 - 350);
            this.libMessage2.style('color', "brown");

            this.timeButton.position(displayWidth/2 - 300, displayHeight/2 - 300);
            this.timeButton.size(200, 150);

            this.timeMessage.html("Time Quotes");
            this.timeMessage.position(displayWidth/2 - 270, displayHeight/2 - 150);

            this.natureButton.position(displayWidth/2, displayHeight/2 - 300);
            this.natureButton.size(200, 150);

            this.natureMessage.html("Nature Quotes");
            this.natureMessage.position(displayWidth/2 + 35, displayHeight/2 - 150);

            
            this.shortButton.position(displayWidth/2 - 300, displayHeight/2 - 50);
            this.shortButton.size(200, 150);

            this.shortMessage.html("Short Quotes");
            this.shortMessage.position(displayWidth/2 - 270, displayHeight/2 + 100);

            this.lifeButton.position(displayWidth/2, displayHeight/2 - 50);
            this.lifeButton.size(200, 150);

            this.lifeMessage.html("Life Quotes");
            this.lifeMessage.position(displayWidth/2 + 30, displayHeight/2 + 100);

            this.motiveButton.position(displayWidth/2 - 300, displayHeight/2 + 200);
            this.motiveButton.size(200, 150);

            this.motiveMessage.html("Motivational Quotes");
            this.motiveMessage.position(displayWidth/2 - 300, displayHeight/2 + 350);
        });

        /*The following mousePressed() events occur 

        when the buttons in the quote library are pressed.*/

        this.timeButton.mousePressed(() =>{
            this.libMessage.hide();
            this.libMessage1.hide();
            this.libMessage2.hide();
            this.timeButton.hide();
            this.timeMessage.hide();
            this.timeMessage.hide();
            this.natureButton.hide();
            this.natureMessage.hide();
            this.shortButton.hide();
            this.shortMessage.hide();
            this.lifeButton.hide();
            this.lifeMessage.hide();
            this.motiveButton.hide();
            this.motiveMessage.hide();

            this.timeQuote1 = createP('"The two most powerful warriors are patience and time." -');
            this.timeQuote1.position(displayWidth/2 - 950, displayHeight/2 - 500);
            this.timeQuote1.style('font-size', '30px');
            this.timeQuote1.style('color', "red");
            this.a1 = createA('https://en.wikipedia.org/wiki/Leo_Tolstoy', 'Leo Tolstoy, War and Peace','_blank');
            this.a1.position(displayWidth/2 - 250, displayHeight/2 - 470);
            this.a1.style('font-size', '30px');
            this.a1.style('color', "red");

            this.timeQuote2 = createP('"The only reason for time is so that everything does not happen at once." -');
            this.timeQuote2.position(displayWidth/2 - 150, displayHeight/2 - 150);
            this.timeQuote2.style('font-size', '30px');
            this.timeQuote2.style('color', this.color1);
            this.a2 = createA('https://en.wikipedia.org/wiki/Albert_Einstein', 'Albert Einstein','_blank');
            this.a2.position(displayWidth/2 + 740, displayHeight/2 - 120);
            this.a2.style('font-size', '30px');
            this.a2.style('color', this.color1);

            this.timeQuote3 = createP('"Better three hours too soon than one minute too late." -');
            this.timeQuote3.position(displayWidth/2 - 950, displayHeight/2 + 200);
            this.timeQuote3.style('font-size', '30px');
            this.timeQuote3.style('color', "cyan");
            this.a3 = createA('https://en.wikipedia.org/wiki/William_Shakespeare', 'William Shakespeare','_blank');
            this.a3.position(displayWidth/2 - 280, displayHeight/2 + 230);
            this.a3.style('font-size', '30px');
            this.a3.style('color', "cyan");
        });

        this.natureButton.mousePressed(() =>{
            this.libMessage.hide();
            this.libMessage1.hide();
            this.libMessage2.hide();
            this.timeButton.hide();
            this.timeMessage.hide();
            this.timeMessage.hide();
            this.natureButton.hide();
            this.natureMessage.hide();
            this.shortButton.hide();
            this.shortMessage.hide();
            this.lifeButton.hide();
            this.lifeMessage.hide();
            this.motiveButton.hide();
            this.motiveMessage.hide();
            
            this.natureQuote1 = createP('"If you truly love nature, you will find beauty everywhere." -');
            this.natureQuote1.position(displayWidth/2 - 950, displayHeight/2 - 500);
            this.natureQuote1.style('font-size', '30px');
            this.natureQuote1.style('color', "red");
            this.a4 = createA('https://en.wikipedia.org/wiki/Vincent_van_Gogh', 'Vincent Van Gogh','_blank');
            this.a4.position(displayWidth/2 - 220, displayHeight/2 - 470);
            this.a4.style('font-size', '30px');
            this.a4.style('color', "red");

            this.timeQuote2 = createP('"The Earth is what we all have in common." -');
            this.timeQuote2.position(displayWidth/2 - 150, displayHeight/2 - 150);
            this.timeQuote2.style('font-size', '30px');
            this.timeQuote2.style('color', this.color1);
            this.a5 = createA('https://en.wikipedia.org/wiki/Wendell_Berry', 'Wendell Berry','_blank');
            this.a5.position(displayWidth/2 + 400, displayHeight/2 - 120);
            this.a5.style('font-size', '30px');
            this.a5.style('color', this.color1);

            this.timeQuote3 = createP('"Nature always wears the colour of spirit." -');
            this.timeQuote3.position(displayWidth/2 - 950, displayHeight/2 + 200);
            this.timeQuote3.style('font-size', '30px');
            this.timeQuote3.style('color', "cyan");
            this.a6 = createA('https://en.wikipedia.org/wiki/Ralph_Waldo_Emerson', 'Ralph Waldo Emerson','_blank');
            this.a6.position(displayWidth/2 - 415, displayHeight/2 + 230);
            this.a6.style('font-size', '30px');
            this.a6.style('color', "cyan");
        });

        this.shortButton.mousePressed(() =>{
            this.libMessage.hide();
            this.libMessage1.hide();
            this.libMessage2.hide();
            this.timeButton.hide();
            this.timeMessage.hide();
            this.timeMessage.hide();
            this.natureButton.hide();
            this.natureMessage.hide();
            this.shortButton.hide();
            this.shortMessage.hide();
            this.lifeButton.hide();
            this.lifeMessage.hide();
            this.motiveButton.hide();
            this.motiveMessage.hide();
            
            this.shortQuote1 = createP('"Rise above the storm and you will find sunshine." -');
            this.shortQuote1.position(displayWidth/2 - 950, displayHeight/2 - 500);
            this.shortQuote1.style('font-size', '30px');
            this.shortQuote1.style('color', "red");
            this.a7 = createA('https://en.wikipedia.org/wiki/M%C3%A1rio_Fernandes_(footballer)', 'Mario Fernandez','_blank');
            this.a7.position(displayWidth/2 - 320, displayHeight/2 - 470);
            this.a7.style('font-size', '30px');
            this.a7.style('color', "red");

            this.shortQuote2 = createP('"No rain, no flowers." -Anonymous');
            this.shortQuote2.position(displayWidth/2 + 245, displayHeight/2 - 150);
            this.shortQuote2.style('font-size', '30px');
            this.shortQuote2.style('color', this.color1);

            this.shortQuote3 = createP('"Life is short, make it sweet." -Anonymous');
            this.shortQuote3.position(displayWidth/2 - 950, displayHeight/2 + 200);
            this.shortQuote3.style('font-size', '30px');
            this.shortQuote3.style('color', "cyan");
        });

        this.lifeButton.mousePressed(() =>{
            this.libMessage.hide();
            this.libMessage1.hide();
            this.libMessage2.hide();
            this.timeButton.hide();
            this.timeMessage.hide();
            this.timeMessage.hide();
            this.natureButton.hide();
            this.natureMessage.hide();
            this.shortButton.hide();
            this.shortMessage.hide();
            this.lifeButton.hide();
            this.lifeMessage.hide();
            this.motiveButton.hide();
            this.motiveMessage.hide();
            
            this.lifeQuote1 = createP('"Life is not about finding yourself. Life is about creating yourself." -');
            this.lifeQuote1.position(displayWidth/2 - 950, displayHeight/2 - 500);
            this.lifeQuote1.style('font-size', '30px');
            this.lifeQuote1.style('color', "red");
            this.a8 = createA('https://en.wikipedia.org/wiki/George_Bernard_Shaw', 'George Bernard Shaw','_blank');
            this.a8.position(displayWidth/2 - 120, displayHeight/2 - 470);
            this.a8.style('font-size', '30px');
            this.a8.style('color', "red");

            this.lifeQuote2 = createP('"The purpose of our life is to be happy." -');
            this.lifeQuote2.position(displayWidth/2 + 245, displayHeight/2 - 150);
            this.lifeQuote2.style('font-size', '30px');
            this.lifeQuote2.style('color', this.color1);
            this.a9 = createA('https://en.wikipedia.org/wiki/Dalai_Lama', 'Dalai Lama','_blank');
            this.a9.position(displayWidth/2 + 750, displayHeight/2 - 120);
            this.a9.style('font-size', '30px');
            this.a9.style('color', this.color1);

            this.lifeQuote3 = createP('"When life gives you a hundred reasons to cry, show that you have a thousand reasons to smile." -Anonymous');
            this.lifeQuote3.position(displayWidth/2 - 950, displayHeight/2 + 200);
            this.lifeQuote3.style('font-size', '30px');
            this.lifeQuote3.style('color', "cyan");
        });

        this.motiveButton.mousePressed(() =>{
            this.libMessage.hide();
            this.libMessage1.hide();
            this.libMessage2.hide();
            this.timeButton.hide();
            this.timeMessage.hide();
            this.timeMessage.hide();
            this.natureButton.hide();
            this.natureMessage.hide();
            this.shortButton.hide();
            this.shortMessage.hide();
            this.lifeButton.hide();
            this.lifeMessage.hide();
            this.motiveButton.hide();
            this.motiveMessage.hide();
            
            this.motiveQuote1 = createP('"There is hope, even when your brain tells you there is not." -');
            this.motiveQuote1.position(displayWidth/2 - 950, displayHeight/2 - 500);
            this.motiveQuote1.style('font-size', '30px');
            this.motiveQuote1.style('color', "red");
            this.a10 = createA('https://en.wikipedia.org/wiki/John_Green_(author)', 'John Green','_blank');
            this.a10.position(displayWidth/2 - 200, displayHeight/2 - 470);
            this.a10.style('font-size', '30px');
            this.a10.style('color', "red");

            this.motiveQuote2 = createP('"Change your thoughts and you will change your world." -Anonymous');
            this.motiveQuote2.position(displayWidth/2 + 80, displayHeight/2 - 150);
            this.motiveQuote2.style('font-size', '30px');
            this.motiveQuote2.style('color', this.color1);

            this.motiveQuote3 = createP('"A positive attitude gives you power over your circumstances instead of your circumstances having power over you." -');
            this.motiveQuote3.position(displayWidth/2 - 950, displayHeight/2 + 200);
            this.motiveQuote3.style('font-size', '30px');
            this.motiveQuote3.style('color', "cyan");
            this.a11 = createA('https://en.wikipedia.org/wiki/Joyce_Meyer', 'Joyce Meyer','_blank');
            this.a11.position(displayWidth/2 + 480, displayHeight/2 + 230);
            this.a11.style('font-size', '30px');
            this.a11.style('color', "cyan");
        });

         /*The following mousePressed() events occur 
        
        when the buttons in the sound library are pressed.*/

        this.instrumentButton.mousePressed(() =>{
            this.instrumentButton.hide();
            this.birdButton.hide();
            this.relaxButton.hide();
            this.bellButton.hide();
            this.sleepButton.hide();
            this.musicMessage.hide();
            this.musicMessage1.hide();
            this.instrumentMessage.hide();
            this.birdMessage.hide();
            this.relaxMessage.hide();
            this.bellMessage.hide();
            this.sleepMessage.hide();

            this.guitarSound = createButton('Acoustic Guitar Sound 🎸');
            this.guitarSound.style('background-color', "red");
            this.guitarSound.position(displayWidth/2 - 120, displayHeight/2 - 300);
            this.guitarSound.size(280, 100);
            this.guitarSound.style('font-size', '30px');

            this.guitarSound.mousePressed(() =>{
                acousticGuitar.play();
            });

            this.pianoSound = createButton('Piano Sound 🎹');
            this.pianoSound.style('background-color', "black");
            this.pianoSound.style('color', "white");
            this.pianoSound.position(displayWidth/2 - 120, displayHeight/2 - 150);
            this.pianoSound.size(280, 100);
            this.pianoSound.style('font-size', '30px');

            this.pianoSound.mousePressed(() =>{
                piano.play();
            });

            this.jazzSound = createButton('Jazz Sound 🎷');
            this.jazzSound.style('background-color', "orange");
            this.jazzSound.position(displayWidth/2 - 120, displayHeight/2);
            this.jazzSound.size(280, 100);
            this.jazzSound.style('font-size', '30px');

            this.jazzSound.mousePressed(() =>{
                jazz.play();
            });
        });

        this.birdButton.mousePressed(() =>{
            this.instrumentButton.hide();
            this.birdButton.hide();
            this.relaxButton.hide();
            this.bellButton.hide();
            this.sleepButton.hide();
            this.musicMessage.hide();
            this.musicMessage1.hide();
            this.instrumentMessage.hide();
            this.birdMessage.hide();
            this.relaxMessage.hide();
            this.bellMessage.hide();
            this.sleepMessage.hide();

            this.koyalSound = createButton('Cuckoo Sound');
            this.koyalSound.style('background-color', "maroon");
            this.koyalSound.style('color', "white");
            this.koyalSound.position(displayWidth/2 - 120, displayHeight/2 - 300);
            this.koyalSound.size(280, 100);
            this.koyalSound.style('font-size', '30px');

            this.koyalSound.mousePressed(() =>{
                koyal.play();
            });

            this.nightingaleSound = createButton('Nightingale Sound');
            this.nightingaleSound.style('background-color', "purple");
            this.nightingaleSound.style('color', "white");
            this.nightingaleSound.position(displayWidth/2 - 120, displayHeight/2 - 150);
            this.nightingaleSound.size(280, 100);
            this.nightingaleSound.style('font-size', '30px');

            this.nightingaleSound.mousePressed(() =>{
                nightingale.play();
            });

            this.forestSound = createButton('Forest Birds');
            this.forestSound.style('background-color', this.color1);
            this.forestSound.position(displayWidth/2 - 120, displayHeight/2);
            this.forestSound.size(280, 100);
            this.forestSound.style('font-size', '30px');

            this.forestSound.mousePressed(() =>{
                forestBirds.play();
            });
        });

        this.relaxButton.mousePressed(() =>{
            this.instrumentButton.hide();
            this.birdButton.hide();
            this.relaxButton.hide();
            this.bellButton.hide();
            this.sleepButton.hide();
            this.musicMessage.hide();
            this.musicMessage1.hide();
            this.instrumentMessage.hide();
            this.birdMessage.hide();
            this.relaxMessage.hide();
            this.bellMessage.hide();
            this.sleepMessage.hide();

            this.oceanSound = createButton('Ocean Sound 🌊');
            this.oceanSound.style('background-color', "cyan");
            this.oceanSound.position(displayWidth/2 - 120, displayHeight/2 - 300);
            this.oceanSound.size(280, 100);
            this.oceanSound.style('font-size', '30px');

            this.oceanSound.mousePressed(() =>{
                ocean.play();
            });

            this.breezeSound = createButton('Breeze Sound 🍃');
            this.breezeSound.style('background-color', "white");
            this.breezeSound.position(displayWidth/2 - 120, displayHeight/2 - 150);
            this.breezeSound.size(280, 100);
            this.breezeSound.style('font-size', '30px');

            this.breezeSound.mousePressed(() =>{
                wind.play();
            });

            this.rainSound = createButton('Rain Sound 🌧');
            this.rainSound.style('background-color', "blue");
            this.rainSound.style('color', "white");
            this.rainSound.position(displayWidth/2 - 120, displayHeight/2);
            this.rainSound.size(280, 100);
            this.rainSound.style('font-size', '30px');

            this.rainSound.mousePressed(() =>{
                rain.play();
            });
        });

        this.bellButton.mousePressed(() =>{
            this.instrumentButton.hide();
            this.birdButton.hide();
            this.relaxButton.hide();
            this.bellButton.hide();
            this.sleepButton.hide();
            this.musicMessage.hide();
            this.musicMessage1.hide();
            this.instrumentMessage.hide();
            this.birdMessage.hide();
            this.relaxMessage.hide();
            this.bellMessage.hide();
            this.sleepMessage.hide();

            this.windChimeSound = createButton('Wind Chimes Sound 🎐');
            this.windChimeSound.style('background-color', "yellow");
            this.windChimeSound.position(displayWidth/2 - 120, displayHeight/2 - 300);
            this.windChimeSound.size(280, 100);
            this.windChimeSound.style('font-size', '30px');

            this.windChimeSound.mousePressed(() =>{
                windChime.play();
            });

            this.singleBellSound = createButton('Single Bell Sound 🔔');
            this.singleBellSound.style('background-color', "gold");
            this.singleBellSound.position(displayWidth/2 - 120, displayHeight/2 - 150);
            this.singleBellSound.size(280, 100);
            this.singleBellSound.style('font-size', '30px');

            this.singleBellSound.mousePressed(() =>{
                singleBell.play();
            });

            this.multiBellSound = createButton('Multiple Bells Sound 🔔🔔');
            this.multiBellSound.style('background-color', "red");
            this.multiBellSound.position(displayWidth/2 - 120, displayHeight/2);
            this.multiBellSound.size(280, 100);
            this.multiBellSound.style('font-size', '30px');

            this.multiBellSound.mousePressed(() =>{
                multipleBells.play();
            });
        });

        this.sleepButton.mousePressed(() =>{
            this.instrumentButton.hide();
            this.birdButton.hide();
            this.relaxButton.hide();
            this.bellButton.hide();
            this.sleepButton.hide();
            this.musicMessage.hide();
            this.musicMessage1.hide();
            this.instrumentMessage.hide();
            this.birdMessage.hide();
            this.relaxMessage.hide();
            this.bellMessage.hide();
            this.sleepMessage.hide();

            /*White noise is a sound that is at a particular frequency and is likely to put 
            people to sleep quicker than any other sound. An example of white sound is soft rain.
            I added another rain sound above, but that sound is at a different frequency than white sound rain.*/
            this.whiteSound = createButton('White Noise 🤍');
            this.whiteSound.style('background-color', "white");
            this.whiteSound.position(displayWidth/2 - 120, displayHeight/2 - 150);
            this.whiteSound.size(280, 100);
            this.whiteSound.style('font-size', '30px');

            this.whiteSound.mousePressed(() =>{
                white.play();
            });
        });
    }
}