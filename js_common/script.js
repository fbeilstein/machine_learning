       
let tabs_div;
let content_div;
let buttons_div;

class QuizContainer
{
    constructor(file)
    {
      let questionmarks = ['Q'];
      let positives = ['✓'];
      let negatives = ['✘'];
      let lines = file.split(/\r?\n/).filter((line)=>(line.length>0 && (questionmarks.includes(line[0]) || positives.includes(line[0]) || negatives.includes(line[0]))));
      this.questions = [];
      this.answers   = [];
      this.status = [];
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
            this.status.push("NEVER EDITED");
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

class HTMLContainer
{
    constructor(htmls)
    {
      this.htmls=htmls;
    }

    length(){
      return this.htmls.length;
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
    let content_container;
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

class QuizContentMaker
{
  constructor(){
  }

  set_slide_manager(slide_manager){
     this.slide_manager= slide_manager;
  }

  create_content(i)
  {
    const my_green = "rgb(159, 250, 159)";
    const my_red   = "rgb(255, 176, 176)";
    const my_gray   = "rgb(230, 230, 230)";
    content_div.replaceChildren();
    this.items = [];
    let question_text = document.createElement("div");
    let delimeter = document.createElement("br");
    question_text.innerHTML = container.questions[i].question;
    question_text.style.fontWeight = "bold";
    let options_div = document.createElement("div");
    options_div.className = "options";
    for(let j=0; j<container.questions[i].options.length; ++j)
    {
        let item = document.createElement("div");
        item.innerHTML = container.questions[i].options[j].text;
          item.addEventListener(('click'), function(){
          container.answers[i][j] = !container.answers[i][j];
          status_div.innerText = "EDITED";
          container.status[i]=undefined;
          status_div.style.background = my_gray;

          if(container.answers[i][j] && container.status[i]!="NEVER EDITED"){
            item.style.background =  container.answers[i][j] ? "lightgray" : "white";
          }
          else {
            item.style.background =  "white";
          }
        });

        if(container.answers[i][j] && container.status[i]!="NEVER EDITED"){
          item.style.background =  (container.status[i]==undefined) ? "lightgray" : ((container.answers[i][j] != container.questions[i].options[j].is_correct) ? my_red : my_green);
        }
        else {
          item.style.background =  "white";
        }
        options_div.appendChild(item);
    }
  
    content_div.appendChild(question_text);
    content_div.appendChild(delimeter);
    content_div.appendChild(options_div);
    content_div.appendChild(delimeter.cloneNode(true));
    let submit_status_div = document.createElement("div");
    submit_status_div.className = "submit_status";
    let submit_btn = document.createElement("button");
    submit_btn.className = "submit-btn btn"
    submit_btn.innerHTML = "Submit";
    let status_div = document.createElement("div");
    status_div.className = "status"

    if(container.status[i]!="NEVER EDITED")
    {
      if(container.status[i]==undefined){
          status_div.innerText = "EDITED";
          status_div.style.background = my_gray;
        }
        else if(container.status[i]==true){
          status_div.innerText = "RIGHT";
          status_div.style.background = my_green;
        }
        else{
          status_div.innerText = "WRONG";
          status_div.style.background = my_red;
        }
    }
    
    let sm = this.slide_manager;
    submit_btn.addEventListener("click", function(){
      let result= true;
      
      for(let j=0; j<container.questions[sm.slide].options.length; ++j)
          result &= (container.questions[sm.slide].options[j].is_correct === container.answers[sm.slide][j]);
      sm.mark_slide(i, result ? my_green : my_red);
      container.status[sm.slide] = result;

      for(let k=0; k<options_div.children.length; ++k)
      {
      console.log(options_div.children[k]);
        if(container.answers[i][k]){
          options_div.children[k].style.background =  (container.answers[i][k] != container.questions[i].options[k].is_correct) ? my_red : my_green;
        }
        else {
          options_div.children[k].style.background =  "white";
        }
      }

    if(container.status[sm.slide]!=undefined && container.status[i]!="NEVER EDITED") {
      if(container.status[sm.slide]==true){
          status_div.innerText = "RIGHT";
          status_div.style.background = my_green;
        }
      else{
          status_div.innerText = "WRONG";
          status_div.style.background = my_red;
        }
      }
      else{
          status_div.innerText = "EDITED";
          status_div.style.background = my_gray;
      }
    });
    submit_status_div.appendChild(submit_btn);
    submit_status_div.appendChild(status_div);
    content_div.appendChild(submit_status_div);
  }
}

class HTMLContentMaker
{
  constructor(){
  }

  set_slide_manager(slide_manager){
     this.slide_manager= slide_manager;
  }

  create_content(i)
  {
    content_div.innerHTML = content_container.htmls[i];
  }
}

function init_html_markup(){
  let tabs_button_div = document.createElement("div");
  tabs_button_div.className = "tabs-buttons-div"; 
  tabs_div = document.createElement("div");
  tabs_div.className = "tabs-div"; 
  buttons_div      = document.createElement("div");
  buttons_div.className = "buttons-div";
  tabs_button_div.appendChild(tabs_div);
  tabs_button_div.appendChild(buttons_div);
  content_div      = document.createElement("div");
  content_div.className = "content-div";
  document.body.appendChild(tabs_button_div);
  let delimeter = document.createElement("br");
  content_div.appendChild(delimeter);
  document.body.appendChild(content_div);
}

async function load_quiz_from(url) { 
  try{
    let data = await fetch(url);
    let file = await data.text();
    init_html_markup();
    console.log("file loaded");
    content_container = new QuizContainer(file);
    console.log("Quiz container");
    slide_manager     = new SlideManager(content_container.length());
    content_maker     = new QuizContentMaker();
    console.log("Content maker");
    control_buttons   = new ControlButtons();
    tabs              = new Tabs();
    content_maker.set_slide_manager(slide_manager);
    control_buttons.set_slide_manager(slide_manager);
    tabs.set_slide_manager(slide_manager);
    tabs.create_tabs(tabs_div, content_container.length());
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

async function load_slides_from(htmls) { 
    init_html_markup();
    content_container = new HTMLContainer(htmls);
    slide_manager     = new SlideManager(content_container.length());
    content_maker     = new HTMLContentMaker();
    control_buttons   = new ControlButtons();
    tabs              = new Tabs();
    content_maker.set_slide_manager(slide_manager);
    control_buttons.set_slide_manager(slide_manager);
    tabs.set_slide_manager(slide_manager);
    tabs.create_tabs(tabs_div, content_container.length());
    slide_manager.set_content_maker(content_maker);
    slide_manager.set_tabs(tabs);
    control_buttons.create_buttons();
    slide_manager.set_slide(0);
}



