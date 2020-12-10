var c1,c2,c3,c4
var wall
var speed,weight

function setup() {
  createCanvas(1600,400);

  speed=random(55,90)
  weight=random(400,1500)

  c1=createSprite(200, 350, 50, 50);
  c1.shapeColor="blue"
  c1.velocityX=4
  c2=createSprite(200,250,50,50);
  c2.shapeColor="brown"
  c2.velocityX=4
  c3=createSprite(200,150,50,50);
  c3.shapeColor="black"
  c3.velocityX=2.5
  c4=createSprite(200,50,50,50);
  c4.shapeColor="white"
  c4.velocityX=3

  

  wall=createSprite(1500,200,60,370)
  wall.shapeColor="red"

  var deformation=0.5 * weight *speed/22509

}

function draw() {
  background("pink"); 
  
  

  var deformation=0.5 * weight *speed/22509
  if(c1.x-wall.x<=wall.width/2+c1.width/2 &&
    wall.x-c1.x<=wall.width/2+c1.width/2 &&
    wall.y-c1.y<=wall.height/2+c1.height/2 &&
    c1.y-wall.y<=wall.height/2+c1.height/2){
      
      c1.velocityX=0
      
       
        if(deformation>180){
          c1.shapeColor="red"
        }
        if(deformation<180 && deformation>100){
          c1.shapeColor="yellow"
        }
        if(deformation <100){
          c1.Shapecolor="green"
        }

        }

        
        if(c2.x-wall.x<=wall.width/2+c2.width/2 &&
          wall.x-c2.x<=wall.width/2+c2.width/2 &&
               wall.y-c2.y<=wall.height/2+c2.height/2 &&
               c2.y-wall.y<=wall.height/2+c2.height/2){
          
                 c2.velocityX=0
          
                  // deformation=0.5 * weight *speed/22509
                  if(deformation>180){
                    c2.shapeColor="red"
                  }
                 if(deformation<180 && deformation>100){
                    c2.shapeColor="yellow"
                 }
                 if(deformation <100){
                    c2.shapeColor="green"
                  }
          
                 }
          //fegg
                   if(c3.x-wall.x<=wall.width/2+c3.width/2 &&
                    wall.x-c3.x<=wall.width/2+c3.width/2 &&
                    wall.y-c3.y<=wall.height/2+c3.height/2 &&
                    c3.y-wall.y<=wall.height/2+c3.height/2){
              
                      c3.velocityX=0
              
                       
                       //deformation=0.5 * weight *speed/22509
                      if(deformation>180){
                        c3.shapeColor="red"
                      }
                     if(deformation<180 && deformation>100){
                        c3.shapeColor="yellow"
                      }
                     if(deformation <100){
                        c3.shapeColor="green"
                      }
              
                      }
          
          
                      if(c4.x-wall.x<=wall.width/2+c4.width/2 &&
                        wall.x-c4.x<=wall.width/2+c4.width/2 &&
                       wall.y-c4.y<=wall.height/2+c4.height/2 &&
                        c4.y-wall.y<=wall.height/2+c4.height/2){
                  
                          c4.velocityX=0
                  
                           deformation=0.5 * weight *speed/22509
                          if(deformation>180){
                            c4.shapeColor="red"
                          }
                          if(deformation<180 && deformation>100){
                            c4.shapeColor="yellow"
                          }
                          if(deformation <100){
                            c4.shapeColor="green"
                          }
                        }

  
        
                  
  drawSprites();
      }
