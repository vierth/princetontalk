
let graph;
let infobox;
let keydown;
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  graph = new Graph(width/10, height/10, width-width/5, height-height/5, [-.5,.5], [-.5,.5], 1000, highlighted_section=0)
  infobox = new InfoBox(graph.w+width/8, graph.y, graph.w-graph.w/4, graph.h, graph.start,graph.data_len,24)
}

function draw() {
  background("#191919");

  if (keyIsPressed){
    console.log(keyCode)
    if (keyCode == 187){
      graph.updateStart(+25)
      
    } else if (keyCode == 189) {
      graph.updateStart(-25)
      
    } else if (keyCode == 39) {
      graph.highlighted_section += 1
      if (graph.highlighted_section >= graph.data_len) {
        graph.highlighted_section = graph.data_len - 1
      }
    } else if (keyCode == 37) {
      graph.highlighted_section -= 1
      if (graph.highlighted_section < 0) {
        graph.highlighted_section = 0
      } 
    } else if (keyCode == 38){
      graph.highlighted_section += 25
      if (graph.highlighted_section >= graph.data_len) {
        graph.highlighted_section = graph.data_len - 1
      }
    } else if (keyCode == 40) {
      graph.highlighted_section -= 25
      if (graph.highlighted_section < 0) {
        graph.highlighted_section = 0
      }

    } else if (keyCode == 77 && !keydown){
      if (infobox.current_chapter < chapter_locs.length){
        graph.setDataStart(infobox.next_chapter_start)
        keydown = true;
      }
    } else if (keyCode == 78 && !keydown){
      if (infobox.current_chapter > 1){
        graph.setDataStart(infobox.last_chapter_start)
        keydown = true;
      }
      
    }
    infobox.setText(graph.start,graph.highlighted_section)
  
  } else {
    keydown = false;
  }
  graph.show()
  infobox.show()


}

// function mouseWheel(event) {
//   graph.updateStart(-event.delta);
//   return false;
// }