
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  rain1 = new Brick(100,-222,5,10)
  rain2= new Brick(105,-123,5,10)
  rain3= new Brick(107,-432,5,10)
  rain4= new Brick(109,-33,5,10)
  rain5= new Brick(120,-356,5,10)
  rain6= new Brick(115,-257,5,10)
  rain7= new Brick(111.6,-165,5,10)
  rain8= new Brick(112.25,-259,5,10)
  rain9= new Brick(123,-270,5,10)
  rain10= new Brick(50,-201,5,10)
  rain11 = new Brick(73,-202,5,10)
  rain12 = new Brick(47,-204,5,10)
  rain13 = new Brick(89,-220,5,10)
  rain14 = new Brick(310,-214.90,5,10)
  rain15 = new Brick(258,-98.99,5,10)
  rain16 = new Brick(390,-46.9876,5,10)
  rain17 = new Brick(280,-300,5,10)
  rain18 = new Brick(476,-390,5,10)
  rain19 = new Brick(192,-400,5,10)
  rain20 = new Brick(333,-142,5,10)
  rain21 = new Brick(44.9,-168,5,10)
  rain22 = new Brick(122,-186,5,10)
  rain23 = new Brick(40.789654678,-364,5,10)

  rain24 = new Brick(3.49999999999999,-315,5,10)
  rain25 = new Brick(4.346,-192,5,10)
  rain26 = new Brick(378,-149,5,10)
  rain27 = new Brick(390,-199,5,10)
  rain28= new Brick(291,-243,5,10)
  rain29 = new Brick(375,-222,5,10)

  rain30 = new Brick(197,-336.7895,5,10)
  rain31 = new Brick(117.546,-223.90987,5,10)
  rain32 = new Brick(200,-290,5,10)
  rain33 = new Brick(201,-250,5,10)
  rain34 = new Brick(203,-220,5,10)

  rain35 = new Brick(210,-276,5,10)
  rain36 = new Brick(99.999,-224,5,10)
  rain37 = new Brick(397,-271,5,10)
  rain38 = new Brick(247,-361,5,10)
  rain39 = new Brick(205,-277,5,10)
  rain40 = new Brick(256,-166,5,10)
  rain50 = new Brick(378,-219,5,10)

  rain51 = new Brick(222.23,-55.897,5,10)
  rain52 = new Brick(67.457,-245.785,5,10)
  rain53 = new Brick(333,-334,5,10)
  rain54= new Brick(288,-200,5,10)

  rain55 = new Brick(218,-215,5,10)
  rain56 = new Brick(146,-77,5,10)
  rain57 = new Brick(213,-342,5,10)
  rain58 = new Brick(326,-69.96,5,10)
 
  rain59 = new Brick(356,-287.994,5,10)
  rain60 = new Brick(118,0,5,10)
 
  rain61 = new Brick(234.999,0,5,10)
  rain62 = new Brick(156,-9,5,10)
 
  rain63 = new Brick(333,-87,5,10)
  rain64 = new Brick(222,-333.999,5,10)
 
  rain65 = new Brick(111,-174,5,10)
  rain66 = new Brick(53.98,-300,5,10)
 
  rain67 = new Brick(41.90,-260,5,10)
  rain68 = new Brick(399,-239,5,10)
 
  rain69 = new Brick(386,-259.785,5,10)
  rain70 = new Brick(394,-399,5,10)
 
 

}

function draw() {
  background(0,25,60);
  Engine.update(engine);
 rain1.display()
 rain2.display()
 rain3.display()
 rain4.display()
 rain5.display()
 rain6.display()
 rain7.display()
 rain8.display()
 rain9.display()
 rain10.display()
 rain11.display()
 rain12.display()
rain13.display()
rain14.display()
rain15.display()
rain16.display()
rain17.display()
rain18.display()
rain19.display()
rain20.display()
rain21.display()
rain22.display()
rain23.display()
rain24.display()
rain25.display()
rain26.display()
rain27.display()
rain28.display()
rain29.display()
rain30.display()
rain31.display()
rain32.display()
rain33.display()
rain34.display()
rain35.display()
rain36.display()
rain37.display()
rain38.display()
rain39.display()
rain40.display()
rain50.display()
rain51.display()
rain52.display()
rain53.display()
rain54.display()
rain55.display()
rain56.display()
rain57.display()
rain58.display()
rain59.display()
rain60.display()
rain61.display()
rain62.display()
rain63.display()
rain64.display()
rain66.display()
rain67.display()
rain68.display()
rain69.display()
rain70.display()

}