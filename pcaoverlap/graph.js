class Graph{
    constructor(x,y, width, height, x_range, y_range, data_len, highlighted_section){
        this.x = x
        this.y = y
        this.w = width
        this.h = height
        if (this.w < this.h){
            this.h = this.w
        } else if (this.h < this.w) {
            this.w = this.h
        }

        this.x_range = x_range
        this.y_range = y_range
        this.circle_size =4
        this.data_len = data_len
        this.start = 0
        this.c_from = color(255, 0, 255);
        this.c_to = color(0, 255, 255);
        this.highlighted_section = highlighted_section
        this.current_chapter = 0
        this.data = []
        
        
        for (let i=0; i<data_len;i++){
            let x = map(pc1[i], x_range[0], x_range[1], this.x, this.x+this.w)
            let y = map(pc2[i], y_range[0], y_range[1], this.y+this.h, this.y)
            this.data.push([x,y])
        }

        this.loadings = []
        for (let i = 0; i < vocab.length; i++){
            let x = map(pl1[i], x_range[0], x_range[1], this.x, this.x+this.w)
            let y = map(pl2[i], y_range[0], y_range[1], this.y+this.h, this.y)
            this.loadings.push([vocab[i], x, y])
        }

    }

    setDataStart(start){
        // start = Math.floor(start)
        this.start = start
        
        if (this.start < 0){
            this.start =0
        }

        this.data = []
        let end_point = this.data_len + this.start


        if (end_point >= pc1.length) {
            this.start = pc1.length - this.data_len
            end_point = pc1.length
        }

        // console.log(this.start)
        for (let i=this.start; i<end_point;i++){
            let x = map(pc1[i], this.x_range[0],this.x_range[1], this.x, this.x+this.w)
            let y = map(pc2[i], this.y_range[0], this.y_range[1], this.y+this.h, this.y)
            this.data.push([x,y])
        }
    }

    updateStart(shift){
        this.start += shift
        this.setDataStart(this.start)
    }

    showLoadings(){
        for (let i =0; i < this.loadings.length; i ++){
            noStroke()
            // fontSize(12)
            fill("#ffffff")
            text(this.loadings[i][0], this.loadings[i][1], this.loadings[i][2])
        }
    }

    drawData(){
        noStroke()
        for (let i=0; i<this.data.length;i++){

            let c = lerpColor(this.c_from, this.c_to, map(i,0, this.data_len,0,1))
            let circle_size = this.circle_size
            let alpha = .5
            if (i == this.highlighted_section) {
                circle_size *= 3
                alpha = 1
            }

            fill(c)
            circle(this.data[i][0],this.data[i][1],circle_size)
        }
    }

    connectData(){
        
        strokeWeight(.5)
        noFill()
        
        for (let i=1; i<this.data.length;i++){
            
            let c = lerpColor(this.c_from, this.c_to, map(i,1, this.data_len,0,1))
            stroke(c)
            line(this.data[i-1][0],this.data[i-1][1],this.data[i][0],this.data[i][1])
        }

    }

    drawAxes(){
        stroke("#ffffff")
        noFill()
        line(this.x,this.y,this.x+this.w, this.y)
        line(this.x,this.y,this.x, this.y+this.h)
        line(this.x+this.w,this.y,this.x+this.w, this.y+this.h)
        line(this.x,this.y+this.h,this.x+this.w, this.y+this.h)
    }

    show(){
        this.drawAxes()
        this.connectData()
        this.drawData()
        // noStroke()
        // fill("#ff00ff")
        // circle(map(pc1[0], this.x_range[0],this.x_range[1], this.x, this.x+this.w),
        //     map(pc2[0], this.y_range[0], this.y_range[1], this.y+this.h, this.y),
        //     20
        //     )

        // this.showLoadings()
    }

    getInfo(){
        return [this.start,this.data_len]
    }

}