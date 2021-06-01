class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
    async start(){
        if(gameState === 0){
            player=new Player()
       var playercountRef=await database.ref("playerCount").once("value")
       if(playercountRef.exists()){
           playerCount=playercountRef.val()
           player.getcount();
       }
          form = new Form()
          form.display();
         
          
         
        }
      }

      play(){
        form.hide()  
        textSize(30)
        text('the game has begun',200,200)
         
        Player.getplayerinfo()

        if(allPlayers!==undefined){
        var yPos=200
        for(var plr in allPlayers){
           if(plr==="player"+player.index){
             fill("red")
           }else{
             fill("black") 
           }
        yPos=yPos+50
        textSize(20)
        text(allPlayers[plr].name+":"+allPlayers[plr].distance,250,yPos)
        
        }
        }
if(keyDown(UP_ARROW)){
player.distance=player.distance+50
player.update()


}
       





      }
      
}