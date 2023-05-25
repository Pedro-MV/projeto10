const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//variaveis
var engine;
var world;
var solo, bola, bola2; caixa, caixa2
var parado;
var mexendo;
var solo_options, bola_options, bola2_options,caixa_options,caixa2_options


function setup() {
    createCanvas(400, 400);

    //ETAPA 1: Configurar o motor de física
    //criar o motor
    engine=Engine.create()

    //guardar o mundo
    world=engine.world


    //ETAPA 2: Criar os corpos
    //definir a propriedade do solo
    solo_options={isStatic:true}
    //parado = {}
   
    //criar o corpo do solo
    solo=Bodies.rectangle(200,390,400,20, solo_options)
    //adicionar o solo no mundo
    World.add(world,solo)
    //definir a propriedade da bola
    bola_options={
        restitution:1,
        frictionAir:0.01
    }
    bola2_options={
        restitution:1,
        frictionAir:0.001
    }
    caixa_options={
        restitution:0.5,
        frictionAir:0
    }
    caixa2_options={
        restitution:1,
        frictionAir:0.01
    }

    //criar o corpo da bola
    bola=Bodies.circle(150,200,30,bola_options)
    bola2=Bodies.circle(70,200,20,bola2_options)

    caixa=Bodies.rectangle(230,200,50,50,caixa_options)
    caixa2=Bodies.rectangle(230,150,100,30,caixa2_options)

    //adicionar a bola no mundo
    World.add(world,bola)
    World.add(world,bola2)
    World.add(world,caixa)
    World.add(world,caixa2)

    rectMode(CENTER)
    ellipseMode(RADIUS)
}


function draw() {
    background("cyan");

    //atualizar o motor
    Engine.update(engine)

    //pintar o solo de verde
    fill("green")
    //desenhar o retângulo no corpo do solo
    rect (solo.position.x,solo.position.y,400,20)

    //pintar a bola;
    fill("");
    //desenhar a ellipse na posição do corpo da bola
    ellipse(bola.position.x,bola.position.y,30)
    fill("red")
    ellipse(bola2.position.x,bola2.position.y,20)
    fill("gray")
    rect(caixa.position.x,caixa.position.y,50,50)
    fill("yellow")
    rect(caixa2.position.x,caixa2.position.y,100,30)

   

    console.log(solo)
}
