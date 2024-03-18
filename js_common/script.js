       
let tabs_div      = document.getElementsByClassName("tabs-div")[0];
let question_div  = document.getElementsByClassName("content-div")[0];
let buttons_div   = document.getElementsByClassName("buttons-div")[0];

class Quiz_Container
{
    constructor(file)
    {
      let questionmarks = ['Q'];
      let positives = ['✓'];
      let negatives = ['✘'];
      let lines = file.split(/\r?\n/).filter((line)=>(line.length>0 && (questionmarks.includes(line[0]) || positives.includes(line[0]) || negatives.includes(line[0]))));
      this.questions = [];
      this.answers   = []
      for(let i=0; i<lines.length; ) {
        if(questionmarks.includes(lines[i][0])) {
          
            let question = {'question' : lines[i].slice(1), 'options' : []};
            let answer = [];
            let j=i+1;
            for( ; j<lines.length && !questionmarks.includes(lines[j][0]); ++j) {
                question.options.push({
                                        'text' : lines[j].slice(1),
                                        'is_correct' : positives.includes(lines[j][0])
                                      });
                answer.push(false);
            }
            this.questions.push(question);
            this.answers.push(answer);
            i=j;
        }
        else {
          ++i;
        }
      }
    }

    length(){
      return this.questions.length;
    }
}

class SlideManager // knows all UI elements (dispatches orders to them, takes changes from them)
{
  constructor(max_slide){
    this.slide = 0;
    this.max_slide = max_slide;
  }

  set_slide(i)
  {
    this.slide = i;
    this.tabs.focus_tab(this.slide);
    this.content_maker.create_content(this.slide);
  }

  next_slide(){
    if(this.slide+1<this.max_slide) this.set_slide(this.slide+1);
  }

  prev_slide(){
    if(this.slide>0) this.set_slide(this.slide-1);
  }

  mark_slide(i, color){
    this.tabs.change_color_tab(i, color);
  }

  set_content_maker(content_maker){
    this.content_maker=content_maker;
  }

  set_tabs(tabs){
    this.tabs = tabs;
  }
}
    let quiz;
    let slide_manager;
    let content_maker;
    let control_buttons;
    let tabs;

class Tabs{
  constructor(){

  }
  
  set_slide_manager(slide_manager)
  {
    this.slide_manager= slide_manager;
  }

  create_tabs(element, n_slides)
  {
      this.tabs = document.createElement("div");
      tabs.className = "tabs";
      for(let i=0; i<n_slides; ++i)
      {
          let item = document.createElement("button");
          item.className = "tab-btn";
          item.innerHTML = (i+1).toString();
          let sm = this.slide_manager;
          item.addEventListener('click', ()=>{sm.set_slide(i);});
          this.tabs.appendChild(item);
      }
      element.appendChild(this.tabs);
  }
  
  focus_tab(i)
  {
    for(let child of this.tabs.childNodes)
      child.style.border = "1px solid white";
    this.tabs.childNodes[i].style.border = "1px solid black";
  }
  
  change_color_tab(i, color)
  {
    this.tabs.childNodes[i].style.background = color;
  } 
}
// end tab


class ControlButtons
{
  constructor(){
  }

  set_slide_manager(slide_manager)
  {
    this.slide_manager= slide_manager;
  }

  create_buttons()
  {
    let sm = this.slide_manager= slide_manager;
    let left_btn = document.createElement("button");
    left_btn.innerText = "<";
    left_btn.className = "btn left-right-btns";
    left_btn.addEventListener('click', () => {sm.prev_slide();});
    let right_btn = document.createElement("button");
    right_btn.innerText = ">";
    right_btn.className = "btn left-right-btns";
    right_btn.addEventListener('click', () => {sm.next_slide();});
    buttons_div.appendChild(left_btn);
    buttons_div.appendChild(right_btn);
  }
}

class ContentMaker
{
  constructor(){
  }

  set_slide_manager(slide_manager){
     this.slide_manager= slide_manager;
  }

  create_content(i)
  {
    question_div.replaceChildren();
    let question_text = document.createElement("div");
    let delimeter = document.createElement("br");
    question_text.innerHTML = quiz.questions[i].question;
    question_text.style.fontWeight = "bold";
    let options_div = document.createElement("div");
    options_div.className = "options";
    for(let j=0; j<quiz.questions[i].options.length; ++j)
    {
        let item = document.createElement("div");
        item.innerHTML = quiz.questions[i].options[j].text;
        item.addEventListener(('click'), function(){
            quiz.answers[i][j] = !quiz.answers[i][j];
            item.style.background = quiz.answers[i][j] ? "lightgray" : "white";
        });
        item.style.background = quiz.answers[i][j] ? "lightgray" : "white";
        options_div.appendChild(item);
    }
    question_div.appendChild(question_text);
    question_div.appendChild(delimeter);
    question_div.appendChild(options_div);
    question_div.appendChild(delimeter.cloneNode(true));
    let submit_btn = document.createElement("button");
    submit_btn.className = "submit-btn btn"
    submit_btn.innerHTML = "Submit";
    let sm = this.slide_manager;
    submit_btn.addEventListener("click", function(){
      let result= true;
      
      for(let j=0; j<quiz.questions[sm.slide].options.length; ++j)
          result &= (quiz.questions[sm.slide].options[j].is_correct === quiz.answers[sm.slide][j]);
      sm.mark_slide(i, result ? "rgb(159, 250, 159)" : "rgb(255, 176, 176)");
    });
    question_div.appendChild(submit_btn);
  }
}
async function load_from_url(url) { 
  try{
    let data = await fetch(url);
    let file = await data.text();
    quiz            = new Quiz_Container(file);
    slide_manager   = new SlideManager(quiz.length());
    content_maker   = new ContentMaker();
    control_buttons = new ControlButtons();
    tabs            = new Tabs();
    content_maker.set_slide_manager(slide_manager);
    control_buttons.set_slide_manager(slide_manager);
    tabs.set_slide_manager(slide_manager);
    tabs.create_tabs(tabs_div, quiz.length());
    slide_manager.set_content_maker(content_maker);
    slide_manager.set_tabs(tabs);
    control_buttons.create_buttons();
    slide_manager.set_slide(0);
  }
  catch
  {
    console.log("failed to load...");
  }
}


