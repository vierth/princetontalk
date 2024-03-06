class TextLine{
  constructor(line_text, x, y, w, h, font_size){
    this.text = line_text;
    this.v = createVector(x,y)
    this.w = w
    this.h = h
    this.font_size = font_size
  }
  
  show(){
    // rect(this.v.x, this.v.y, this.w, this.h)
    textAlign(LEFT, TOP);
    textSize(this.font_size);
    textFont('Courier New');
    fill('#FFFFFF');
    noStroke();
    text(this.text, this.v.x, this.v.y)
  }
}

class DataLine{
  constructor(data, x, y, w, h, g_min, g_max){
    this.data = data
    this.v = createVector(x,y)
    this.w = w
    this.h = h
    this.c_from = color(255, 0, 255);
    this.c_to = color(0, 255, 255);
    this.g_min = g_min
    this.g_max = g_max
    
  }
  
  show(){
    
    for (let i=1; i < this.data.length;i++){
      let x1 = map(i-1,0,this.data.length,this.v.x,this.v.x+this.w)
      let x2 = map(i,0,this.data.length,this.v.x,this.v.x+this.w)
      let y1 = map(this.data[i - 1],this.g_min, this.g_max,this.v.y+this.h,this.v.y)
      let y2 = map(this.data[i],this.g_min, this.g_max,this.v.y+this.h,this.v.y,)
      let c = lerpColor(this.c_from, this.c_to, map(this.data[i], this.g_min, this.g_max, 0,1))
      stroke(c)
      line(x1, y1, x2, y2)
    }
    // console.log(this.data)
    
    // rect(this.v.x, this.v.y, this.w, this.h)
  }
}

class InterTextLine{
  constructor(data,x,y,w,h,line_start,line_end){
    this.boxes = []
    this.v = createVector(x,y)
    this.w = w
    this.h = h/2
    this.data = data
    for (let i = 0; i < this.data.length; i ++){
      let startloc = map(data[i][0], line_start, line_end, this.v.x, this.v.x+this.w)
      let boxwidth = map(data[i][1], line_start, line_end, this.v.x, this.v.x+this.w) - startloc
      this.boxes.push([startloc,boxwidth])
    };
    
  }
  
  show(){
    for (let i = 0; i < this.boxes.length; i++){
      noStroke();
      fill("#ffffff")
      rect(this.boxes[i][0], this.v.y, this.boxes[i][1], this.h)
    }
  }
  
  
}

class ChapterAnnotations{
    constructor(data, x, y, w, line_start, line_end){
      this.data = data
      this.v = createVector(x,y)
      this.w = w
      this.chaps = []
      
      for (let i=0;i<data.length;i++){
        let startloc = map(data[i][1], line_start, line_end, this.v.x, this.v.x+this.w)
        this.chaps.push(
          [data[i][0],startloc]
        )
      }
      
    }

    show(){
      for (let i=0; i<this.chaps.length;i++){
        // console.log('writing',i, this.chaps[i])
        textSize(8);
        textFont('Courier New');
        fill('#FFFFFF');
        noStroke();
        textAlign(LEFT, BOTTOM)
        text("Chapter "+this.chaps[i][0], this.chaps[i][1], this.v.y)
      }
    }
}


class TextPane{
  constructor(input_text, x_location, y_location, line_height, offset, font='Courier New'){
    this.x = x_location
    this.y = y_location
    this.line_height = line_height
    this.offset = offset
    this.w = width - (x_location*3)
    this.h = height - (y_location)
    this.lines = []
    this.graphs = []
    this.boxes = []
    this.chapters = []

    this.font_size = .2
    this.min_zoom = 0.01
    this.max_zoom = this.line_height
     // These are precalculated magic numbers
    this.sim_max = 1.0
    this.sim_min = 0.0
    
    textFont(font);
    textSize(this.font_size)
    
    
    
    this.chars_per_line = Math.floor(this.w/textWidth("金"))
    this.input_text = input_text
    
    this.text_lines = []
    this.sim_lines = []
    this.intertext_lines = []
    this.chapter_annotations = []
    
    this.map_locations()
    
    this.total_lines = Math.floor((this.h)/(line_height + offset)) + 1
    
    if (this.text_lines.length < this.total_lines) {
      this.total_lines = this.text_lines.length
    } 
    
    this.first_loaded_line = 0
    this.last_loaded_line = this.total_lines
    
    for (let i = 0; i < this.total_lines; i++){
      this.lines.push(new TextLine(this.text_lines[i], x_location, i*(line_height+offset)+y_location,this.w, line_height,this.font_size))
      this.graphs.push(new DataLine(this.sim_lines[i], x_location, i*(line_height+offset)+y_location+line_height/3,this.w, 3*offset/4, this.sim_min, this.sim_max))
      this.boxes.push(new InterTextLine(this.intertext_lines[i], x_location, i*(line_height+offset)+y_location-line_height/3,this.w, line_height/3, i*this.chars_per_line, (i*this.chars_per_line)+this.chars_per_line))
      this.chapters.push(new ChapterAnnotations(this.chapter_annotations[i], x_location,i*(line_height+offset)+y_location-4,this.w, i*this.chars_per_line, (i*this.chars_per_line)+this.chars_per_line))
    }
      
  }
  
  map_locations(){
    
    this.text_lines = []
    this.sim_lines = []
    this.intertext_lines = []
    this.chapter_annotations = []
   
    
    
    // map items based on characters per line.
    let range_index = 0
    let pass_forward = []
    let active_range = ranges[range_index]
    let remaining_ranges = true;


    let active_chapter = 0
    for (let i=0; i < this.input_text.length; i += this.chars_per_line){
      
      this.text_lines.push(this.input_text.slice(i, i+this.chars_per_line))
      this.sim_lines.push(sims.slice(i, i+this.chars_per_line))

      let local_chapters = []
      if (active_chapter < chapter_locs.length){
        while (chapter_locs[active_chapter] < i + this.chars_per_line){
          local_chapters.push([active_chapter+1, chapter_locs[active_chapter]])
          active_chapter += 1
          if (active_chapter == chapter_locs.length){
            break
          }
        }

      }
      
      this.chapter_annotations.push(local_chapters)
      
      



      let pending_ranges = []
      
      if (!remaining_ranges){
        this.intertext_lines.push(pending_ranges)
        continue
      }
    
      if (pass_forward.length == 2){
        if (pass_forward[1] > this.chars_per_line + i){
            pending_ranges.push([pass_forward[0], this.chars_per_line + i])
            pass_forward = [this.chars_per_line + i, pass_forward[1]]
            this.intertext_lines.push(pending_ranges)
            }
        else {
          pending_ranges.push(pass_forward)
         range_index += 1
         pass_forward = []
          if (range_index == ranges.length) {
              remaining_ranges = false
            }
        }
         
      }
      
      if (pass_forward.length == 0 && remaining_ranges){
        
     
      active_range = ranges[range_index]
      // print(range_index, active_range)
      if (active_range[0] > this.chars_per_line * (i+1)){
    
        this.intertext_lines.push(pending_ranges)
      } else {
        
        while (active_range[0] <= this.chars_per_line + i){
  
          if (active_range[1] <= this.chars_per_line + i){
            
            pending_ranges.push(active_range);
            range_index += 1;
            if (range_index == ranges.length) {
              remaining_ranges = false
              break
            }
            active_range = ranges[range_index];
          } else {
            
            pending_ranges.push([active_range[0],this.chars_per_line + i])
            pass_forward = [this.chars_per_line + i, active_range[1]]
            break
          }
        
        }
        this.intertext_lines.push(pending_ranges)
      }
      
      
      }
    }
    
  }
  
  show(){
    this.lines.forEach((line) =>{
      line.show()
    });
    this.graphs.forEach((dataline) =>{
      stroke("#FFFFFF")
      strokeWeight(.2)
      line(dataline.v.x, dataline.v.y-2, dataline.v.x+ dataline.w, dataline.v.y-2)
      strokeWeight(1)
      line(dataline.v.x, dataline.v.y+this.line_height/3, dataline.v.x+ dataline.w, dataline.v.y+this.line_height/3)
      dataline.show()
    });
    
    this.boxes.forEach((box) =>{
      box.show()
    })

    this.chapters.forEach((chap)=>{
      chap.show()
    })

    // draw lines



  }
  
  reload_lines(text_location=false){
    
    // find where the first line is at
    let first_y = this.lines[0].v.y
    // get character's location in the original text
    
    if (!text_location) {
      text_location = this.chars_per_line * this.first_loaded_line
    }
    
    
    // find new size and what not
    textSize(this.font_size)
    this.chars_per_line = Math.floor(this.w/textWidth("金"))
    
    // remap text and graphs
    this.map_locations()
    
    // this.text_lines = []
    // this.sim_lines = []
    // for (let i=0; i < this.input_text.length; i += this.chars_per_line){
    //   this.text_lines.push(this.input_text.slice(i, i+this.chars_per_line))
    //   this.sim_lines.push(sims.slice(i, i+this.chars_per_line))
    // }
    

    
    
    
    // get the previous upper left characters' location in remapped list
    let new_index = Math.floor(text_location/this.chars_per_line)
    
    
    this.total_lines = Math.floor((height-this.y)/(this.line_height + this.offset)) + 2
    
    
    // reset displayed lines
    this.lines = []
    this.graphs = []
    this.boxes = []
    this.chapters = []
    // add lines from the new index to the system
    for (let i = new_index; i < this.total_lines+new_index; i++){
      this.lines.push(
        new TextLine(this.text_lines[i], this.x, (i-new_index)*(this.line_height+this.offset)+first_y,this.w, this.line_height,this.font_size))
      this.graphs.push(
        new DataLine(this.sim_lines[i], this.x, (i-new_index)*(this.line_height+this.offset)+first_y+this.line_height/3,this.w, 3*this.offset/4, this.sim_min, this.sim_max))
      this.boxes.push(new InterTextLine(this.intertext_lines[i], this.x, (i-new_index)* (this.line_height+this.offset)+first_y-this.line_height/3,this.w, this.line_height/3, i*this.chars_per_line, (i*this.chars_per_line)+this.chars_per_line))
      
      this.chapters.push(new ChapterAnnotations(this.chapter_annotations[i], this.x,(i-new_index)*(this.line_height+this.offset)+first_y-4,this.w, i*this.chars_per_line, (i*this.chars_per_line)+this.chars_per_line))
      
      
    }
    
    
    // reset the first_loaded_line  and last_loaded_line indexes
    this.first_loaded_line = new_index
    this.last_loaded_line = new_index + this.total_lines
    
    
  }
  
  set_size(input_size){
    this.lines.forEach((line) =>{
      this.font_size = input_size
      this.offset = input_size * 2
      line.font_size = this.font_size
    });
    this.reload_lines();
  }
  
  zoom(zoom_rate,key_code){
    if ((key_code == 187 && this.font_size < this.max_zoom)||(key_code == 189 && this.font_size > this.min_zoom))
{    this.lines.forEach((line) =>{
      this.font_size += zoom_rate
      this.offset += zoom_rate * 2
      line.font_size = this.font_size
    });
    
    this.reload_lines();
    this.update(-.1);
    this.update(.1);
  }
    
  }
  
  update(location_delta){
    
    if (this.first_loaded_line == 0 && location_delta > 0 && this.lines[0].v.y <= this.y_location) {
      location_delta = 0
    }
    
    for (let i=0;i<this.lines.length;i++){
      this.lines[i].v.y += location_delta
      this.graphs[i].v.y += location_delta
      
      this.boxes[i].v.y += location_delta
      this.chapters[i].v.y += location_delta
      
      
    }
    
    // this.lines.forEach((line) =>{
    //   line
    // });
    
  
    let last_y = this.lines.slice(-1)[0].v.y
    let first_y = this.lines[0].v.y
    
    while (last_y < height){

      
      this.last_loaded_line += 1
      this.lines.push(
        new TextLine(this.text_lines[this.last_loaded_line], this.x, last_y + this.line_height+this.offset,this.w, this.line_height,this.font_size)
      )
      
      this.graphs.push(
        new DataLine(this.sim_lines[this.last_loaded_line], this.x, last_y + this.line_height+this.offset+this.line_height/3,this.w, 3*this.offset/4, this.sim_min, this.sim_max)
      )
      
      this.boxes.push(new InterTextLine(this.intertext_lines[this.last_loaded_line], this.x, last_y+ this.line_height+this.offset-this.line_height/3,this.w, this.line_height/3, this.last_loaded_line*this.chars_per_line, (this.last_loaded_line*this.chars_per_line)+this.chars_per_line))

      this.chapters.push(new ChapterAnnotations(this.chapter_annotations[this.last_loaded_line], this.x,last_y+ (this.line_height+this.offset)-4,this.w, this.last_loaded_line*this.chars_per_line, (this.last_loaded_line*this.chars_per_line)+this.chars_per_line))

      last_y = this.lines.slice(-1)[0].v.y
    }
    
    if (last_y > height + (this.line_height + this.offset) * 2 && location_delta > 0){
      this.lines.pop()
      this.graphs.pop()
      this.boxes.pop()
      this.chapters.pop()
      this.last_loaded_line -= 1
    }
    
    if (this.lines[0].v.y <= -(this.line_height+this.offset)  && location_delta < 0){
      this.lines.shift()
      this.graphs.shift()
      this.boxes.shift()
      this.chapters.shift()
      this.first_loaded_line += 1
    } 
    
    while (this.lines[0].v.y >= -(this.line_height+this.offset) && this.first_loaded_line > 0 && location_delta > 0) {
      this.first_loaded_line -= 1
      
      
      this.lines.unshift(new TextLine(this.text_lines[this.first_loaded_line], this.x, this.lines[0].v.y - (this.line_height+this.offset),this.w, this.line_height,this.font_size))
      this.graphs.unshift(new DataLine(this.sim_lines[this.first_loaded_line], this.x, this.lines[0].v.y - (this.line_height+this.offset)+this.line_height/3,this.w, 3*this.offset/4, this.sim_min, this.sim_max))
      
      this.boxes.unshift(new InterTextLine(this.intertext_lines[this.first_loaded_line], this.x, this.lines[0].v.y -(this.line_height+this.offset)-this.line_height/3,this.w, this.line_height/3, this.first_loaded_line*this.chars_per_line, (this.first_loaded_line*this.chars_per_line)+this.chars_per_line))
      this.chapters.unshift(new ChapterAnnotations(this.chapter_annotations[this.first_loaded_line], this.x,this.lines[0].v.y+ (this.line_height+this.offset)-4,this.w, this.first_loaded_line*this.chars_per_line, (this.first_loaded_line*this.chars_per_line)+this.chars_per_line))

    }
   
    
    
  }
  
  get_info(){
    return [this.chars_per_line, this.chars_per_line * this.first_loaded_line]
  }
  
}
