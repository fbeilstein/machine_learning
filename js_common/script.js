let shop = document.getElementsByClassName("shop")[0];//document.getElementById("para1");
let invoice = document.getElementsByClassName("invoice")[0];//document.getElementById("para1");

let goods = [];
let buys = [];
let prices = [];

fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>
              {
                  json.length = 9;
                  goods = json;
                  for(let i in json)  
                  {
                      buys.push(0);
                      goods.push(0);
                      prices.push(0);
                      let item = document.createElement("div");
                      item.className = "item";

                      let img = document.createElement("img");
                      img.className = "image";
                      img.src = json[i].image;

                      let title = document.createElement("h4");
                      title.className = "caption";
                      title.innerHTML = json[i].title;

                      let descr = document.createElement("div");
                      descr.className = "desciption";
                      descr.innerHTML = json[i].description;
                      //descr.innerHTML.length = Math.min(20, descr.innerHTML.length);

                      let pricing = document.createElement("div");
                      pricing.className = "pricing";

                      let price = document.createElement("div");
                      price.className = "price";
                      price.innerHTML = json[i].price;
                      prices.push(parseFloat(json[i].price));
                      
                      let btn = document.createElement("button");
                      btn.className = "btn";        
                      btn.innerHTML = "BUY";

                      pricing.appendChild(price);
                      pricing.appendChild(btn);
                      btn.addEventListener("click",()=>{
                        buys[i]++;
                        recalculate_invoice();
                        
                      });
                      item.appendChild(img);
                      item.appendChild(title);
                      item.appendChild(descr);
                      item.appendChild(pricing);

                      shop.appendChild(item);
                  } 
              }
              )
              

function recalculate_invoice()
{
  
  for(let i in buys)
  {
    if(buys[i]>0)
    {
      console.log('clicks');
      let buy_item = document.createElement("div");
      buy_item.className = "buy_item";

      let title = document.createElement("h4");
      title.innerText = buys[i];

      let btn = document.createElement("button");
      btn.className = 'btn_delete';
      btn.innerText = 'DELETE';
      buy_item.appendChild(title);
      buy_item.appendChild(btn);
      invoice.appendChild(buy_item);
    }
  }
}