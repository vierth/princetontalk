class InfoBox{
    constructor(x, y, w, h, start_loc, text_len, text_size, limit_text = 250){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.start = start_loc
        this.text_len = text_len
        this.limit_text = limit_text
        this.text_size = text_size
        this.current_chapter = 1
        this.next_chapter_start = chapter_locs[this.current_chapter]
        this.this_chapter_start = chapter_locs[this.current_chapter - 1]
        this.last_chapter_start = chapter_locs[this.current_chapter-2]

        this.text = jpm.slice(start_loc, start_loc+this.limit_text)
        this.setText(0,0)
       
    }

    setText(start_loc,highlighted_section){
        this.start = start_loc + highlighted_section
        while (this.start >= this.next_chapter_start) {
            this.current_chapter += 1
            this.next_chapter_start = chapter_locs[this.current_chapter]
            this.this_chapter_start = chapter_locs[this.current_chapter - 1]
            this.last_chapter_start = chapter_locs[this.current_chapter - 2]
        } 
        while (this.start < this.this_chapter_start){
            this.current_chapter -= 1
            this.next_chapter_start = chapter_locs[this.current_chapter]
            this.this_chapter_start = chapter_locs[this.current_chapter - 1]
            this.last_chapter_start = chapter_locs[this.current_chapter - 2]
        }
        
        // this is the text to show
        this.text = jpm.slice(this.start, this.start+this.limit_text)
    

        // here i check what other texts the current chunk appears in
        this.contains_titles = []
        let quote_total = {}
        
        for (let i = this.start; i < this.start + this.text_len; i++){
            if (i in quotes){
                let contains = quotes[i]
                let active_title = "none"
                
                for (let j=0; j<contains.length;j++){
                    active_title = quotemeta[contains[j]][0]
                    if (!(active_title in quote_total)){
                        quote_total[active_title] = 0
                    }
                    quote_total[active_title] += 1
                    
                }    
            }
        }

        // https://stackoverflow.com/questions/1069666/sorting-object-property-by-values
        
        let sorted_quote_total = []
        for (let title in quote_total){
            sorted_quote_total.push([title, quote_total[title]])
        }
        sorted_quote_total.sort(function(a,b){
            return a[1]-b[1]
        }).reverse()
        this.contains_titles = sorted_quote_total
    }

    show(){
        noStroke();
        fill("#ffffff");
        textSize(this.text_size);
        textWrap(CHAR);
        text("Chapter "+this.current_chapter, this.x, this.y, this.w, 60)

        let chap_percent = Math.floor(map(this.start, this.this_chapter_start, this.next_chapter_start, 0, 100))

        text("Start at index "+this.start +" ("+chap_percent+"% through chapter)", this.x, this.y + 60, this.w, 60)
        text(this.text, this.x, this.y + 120, this.w, 300);

        let other_title_info = []
        textSize(this.text_size/2)

            for (let i = 0; i < this.contains_titles.length; i++){
                other_title_info.push(this.contains_titles[i][0] + " (" + this.contains_titles[i][1]+")")
            }

        other_title_info = other_title_info.join(", ")
        text("Contains text from "+ other_title_info, this.x, this.y + 480, this.w, 400);

    }

}