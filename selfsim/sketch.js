let pane;
let current_chapter = 0


function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(width);
  pane = new TextPane(jpm,width/8,height/10, 120, 40);
  
  nextchapter = createButton('Next Chapter');
  nextchapter.position(width-width/8*2 + 40, height/10);
  nextchapter.mousePressed(()=>{
    if (current_chapter < 99) {
      current_chapter += 1
    }
    pane.reload_lines(chapter_locs[current_chapter])
  });
  prevchapter = createButton('Prev Chapter');
  prevchapter.position(width - width/8*2 + 40, height/10 + 40);
  prevchapter.mousePressed(()=>{
    if (current_chapter > 0) {
      current_chapter -= 1
    }
    pane.reload_lines(chapter_locs[current_chapter])
  });
  
  
}

function draw() {
  background("#191919");
  pane.show()
  // check if key is pressed for zoom
  if (keyIsPressed){if (keyCode == 187){pane.zoom(.01, keyCode)
    } else if (keyCode == 189) {pane.zoom(-.01, keyCode)}}
  
  // get info about current state of the pane
  let pane_info = pane.get_info()
  
  let current_index = pane_info[1]
     
  
  // Display info
  noStroke();
  fill("#ffffff");
  textSize(12)
  
  
  text(pane_info[0]+" chars/line", width-width/8*2 + 40, height/10 + 80)
  text("Anchored at index " + current_index,  width-width/8*2 + 40, height/10 + 100)
  
  
  // fill("#191919")
  // rect(0,0,width,pane.y)
  // rect(0, height-pane.y, width, pane.y)
}

function mouseWheel(event) {
  pane.update(-event.delta);
  return false;
}