class Form{
    constructor(){
        this.input = createInput().attribute("placeHolder","enter your character");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
    }
    display(){
        var title = createElement('h2')
        title.html("Car Racing Game");
        title.position(450, 160);
       
        this.input.position(450, 250);
        
        this.button.position(450, 300);
        
          this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          playerCount++;
          player.index=playerCount;
          player.updateCount(playerCount)
          player.name=this.input.value()
          player.update();
          this.greeting.html("Hello " + player.name)
          this.greeting.position(450, 250);
        });
        }
    hide(){
        this.input.hide();
        this.button.hide(); 
        this.greeting.hide();
    }   
}