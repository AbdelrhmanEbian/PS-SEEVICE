let id;
let startbutton;
let stopbuttonn;
let end;
let done;
let ptime;
let pprice;
let time;
let pplay;
let start_2
let start_6
let start_5
let start_4
let start_3
let start_1
let valid;
let playing;

let cards = document.querySelectorAll(".card");

cards.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    id = e.id;
    startbutton = document.querySelector(`#${id} .start`);

    pplay = document.querySelector(`#${id}  .play`);
  
    stopbuttonn = document.querySelector(`#${id} .stop`);
    ptime = document.querySelector(`#${id} .time`);
    pprice = document.querySelector(`#${id} .price`);
    
    document
      .querySelector(`#${id} .start`)
      .addEventListener("click", function() {
      
        ptime.innerHTML = "";
        pprice.innerHTML = "";
        startbutton.style.display="none"
        pplay.innerHTML = "playing...";
        se = setInterval(function () {}, 1000);
        
          
          switch (id) {
            case "device-1":
              start_1 = new Date();
             localStorage.setItem("start_1",start_1)
             break;
          case "device-2":
            start_2 = new Date();
             localStorage.setItem("start_2",start_2)
             break;
          case "device-3":
             start_3 = new Date();
             localStorage.setItem("start_3",start_3)
             break;

          case "device-4":
             start_4 = new Date();
             localStorage.setItem("start_4",start_4)
             break;
          case "device-5":
             start_5 = new Date();
             localStorage.setItem("start_5",start_5)
             break;
          case "device-6":
             start_6 = new Date();
             localStorage.setItem("start_6",start_6)
             break;
          default:
            None;
            break;
          }
          
          
        })
        stopbuttonn.addEventListener("click", function () {
         
            
            clearInterval(se);
          
          done = true;
          if (done === true) {
            end = new Date();
            console.log(end.getMinutes());
          }
          //   start minutes > end minutes
          switch (id) {
            case "device-1":
              
  
            
              if (end.getHours() < start_1.getHours()) {
                let day = start_1.getHours() - end.getHours();
                let date = start_1.getMinutes() - end.getMinutes();
                let hours = 24 - day;
                time = hours * 60 - date;
                if (start_1.getMinutes() < end.getMinutes()) {
                  date = end.getMinutes() - start_1.getMinutes();
                  time = hours * 60 + date;
                }
              }
              //   start minutes > end minutes
              else if (end.getHours() > start_1.getHours()) {
                let date = start_1.getMinutes() - end.getMinutes();
                let hours = end.getHours() - start_1.getHours();
                time = hours * 60 - date;
                if (end.getMinutes() > start_1.getMinutes()) {
                  date = end.getMinutes() - start_1.getMinutes();
                  time = date + hours * 60;
                }
              } else {
                time = end.getMinutes() - start_1.getMinutes();
              }
              break;
            case "device-2":
           
              if (end.getHours() < start_2.getHours()) {
                let day = start_2.getHours() - end.getHours();
                let date = start_2.getMinutes() - end.getMinutes();
                let hours = 24 - day;
                time = hours * 60 - date;
                if (start_2.getMinutes() < end.getMinutes()) {
                  date = end.getMinutes() - start_2.getMinutes();
                  time = hours * 60 + date;
                }
              }
              //   start minutes > end minutes
              else if (end.getHours() > start_2.getHours()) {
                let date = start_2.getMinutes() - end.getMinutes();
                let hours = end.getHours() - start_2.getHours();
                time = hours * 60 - date;
                if (end.getMinutes() > start_2.getMinutes()) {
                  date = end.getMinutes() - start_2.getMinutes();
                  time = date + hours * 60;
                }
              } else {
                time = end.getMinutes() - start_2.getMinutes();
              }
              break;
            case "device-3": 
      
              if (end.getHours() < start_3.getHours()) {
                let day = start_3.getHours() - end.getHours();
                let date = start_3.getMinutes() - end.getMinutes();
                let hours = 24 - day;
                time = hours * 60 - date;
                if (start_3.getMinutes() < end.getMinutes()) {
                  date = end.getMinutes() - start_3start_3.getMinutes();
                  time = hours * 60 + date;
                }
              }
              //   start minutes > end minutes
              else if (end.getHours() > start_3.getHours()) {
                let date = start_3.getMinutes() - end.getMinutes();
                let hours = end.getHours() - start_3.getHours();
                time = hours * 60 - date;
                if (end.getMinutes() > start_3.getMinutes()) {
                  date = end.getMinutes() - start_3.getMinutes();
                  time = date + hours * 60;
                }
              } else {
                time = end.getMinutes() - start_3.getMinutes();
              }
              break;
            case "device-4":
              
        
              if (end.getHours() < start_4.getHours()) {
                let day = start_4.getHours() - end.getHours();
                let date = start_4.getMinutes() - end.getMinutes();
                let hours = 24 - day;
                time = hours * 60 - date;
                if (start_4.getMinutes() < end.getMinutes()) {
                  date = end.getMinutes() - start_4.getMinutes();
                  time = hours * 60 + date;
                }
              }
              //   start minutes > end minutes
              else if (end.getHours() > start_4.getHours()) {
                let date = start_4.getMinutes() - end.getMinutes();
                let hours = end.getHours() - start_4.getHours();
                time = hours * 60 - date;
                if (end.getMinutes() > start_4.getMinutes()) {
                  date = end.getMinutes() - start_4.getMinutes();
                  time = date + hours * 60;
                }
              } else {
                time = end.getMinutes() - start_4.getMinutes();
              }
              break;
            case "device-5":
              
            
              if (end.getHours() < start_5.getHours()) {
                let day = start_5.getHours() - end.getHours();
                let date = start_5.getMinutes() - end.getMinutes();
                let hours = 24 - day;
                time = hours * 60 - date;
                if (start_5.getMinutes() < end.getMinutes()) {
                  date = end.getMinutes() - start_5.getMinutes();
                  time = hours * 60 + date;
                }
              }
              //   start minutes > end minutes
              else if (end.getHours() > start_5.getHours()) {
                let date = start_5.getMinutes() - end.getMinutes();
                let hours = end.getHours() - start_5.getHours();
                time = hours * 60 - date;
                if (end.getMinutes() > start_5.getMinutes()) {
                  date = end.getMinutes() - start_5.getMinutes();
                  time = date + hours * 60;
                }
              } else {
                time = end.getMinutes() - start_5.getMinutes();
              }
              break;
            case "device-6":
             
              if (end.getHours() < start_6.getHours()) {
                let day = start_6.getHours() - end.getHours();
                let date = start_6.getMinutes() - end.getMinutes();
                let hours = 24 - day;
                time = hours * 60 - date;
                if (start_6.getMinutes() < end.getMinutes()) {
                  date = end.getMinutes() - start_6.getMinutes();
                  time = hours * 60 + date;
                }
              }
              //   start minutes > end minutes
              else if (end.getHours() > start_6.getHours()) {
                let date = start_6.getMinutes() - end.getMinutes();
                let hours = end.getHours() - start_6.getHours();
                time = hours * 60 - date;
                if (end.getMinutes() > start_6.getMinutes()) {
                  date = end.getMinutes() - start_6.getMinutes();
                  time = date + hours * 60;
                }
              } else {
                time = end.getMinutes() - start_6.getMinutes();
              }
              break;
            default:
              None;
              break;
          }
          valid=true
          document.querySelector(`#${id} .play`).innerHTML = "";
          ptime = document.querySelector(`#${id} .time`);
          ptime.innerHTML = `time:${time} minute`;
          pprice = document.querySelector(`#${id} .price`);
          pprice.innerHTML = `price:${time * 0.5}`;
        startbutton.style.display="inline-block"

          console.log(pprice.innerHTML);
        });
      
  });
});
