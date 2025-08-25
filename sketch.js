var valor = document.getElementById("pecinco").offsetWidth;

            window.addEventListener("resize", function () {
                valor = document.getElementById("pecinco").offsetWidth;
            });

            function setup() {
                createCanvas(valor, valor, WEBGL).parent("#pecinco");
                select("#nombre").html("María Fernanda García");
                select("#aprendizaje").html("a manejar herramientas necesarias de diseño (indesign y blender por el amor de dios)");
                noStroke();
            }
            function draw() {
                background(255, 255, 255, 0.41);
                orbitControl();
                ambientLight(200);
                let mx = mouseX - 50;
                let my = mouseY - 50;
                pointLight(255,255,255,mx,my,50);
                fill(30,30,255);
                specularMaterial(255);
                shininess(20);
                translate(0,0, 0);
                metalness(1);
                translate(0,0, 0);
                torus(valor / 5);
            }

            function windowResized() {
                resizeCanvas(valor, valor);
            }