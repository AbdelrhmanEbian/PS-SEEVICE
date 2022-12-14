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
var me={}

let cards = document.querySelectorAll(".card");
if (localStorage.length !== 0) {
  //  for (let i = 1; i <= cards.length; i++) {
  //   if (localStorage.hasOwnProperty(`start_${i}`)===true) {
  //     me[`start_${i}`]=localStorage.getItem("start_"+i)
  //   }
  //  }
   valid=false
   playing=true
   }
  
for (let i = 1; i <= cards.length; i++) {

   if (localStorage.hasOwnProperty("start_"+i)===true) {
       
     document.querySelector(`#device-${i} .start`).style.display="none"
     document.querySelector(`#device-${i} .play`).innerHTML = "playing...";
     }}

   
cards.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    id = e.id;
    startbutton = document.querySelector(`#${id} .start`);

    pplay = document.querySelector(`#${id}  .play`);
  
    stopbuttonn = document.querySelector(`#${id} .stop`);
    ptime = document.querySelector(`#${id} .time`);
    pprice = document.querySelector(`#${id} .price`);
    document.querySelector(`#${id} .start`)
      .addEventListener("click", function() {
      valid=true
        ptime.innerHTML = "";
        pprice.innerHTML = "";
       
        
        document.querySelector(`#${id} .start`).style.display="none"
        document.querySelector(`#${id} .play`).innerHTML = "playing...";
        
        se = setInterval(function () {}, 1000);
        
        
          switch (id) {
            case "device-1":
              if (localStorage.hasOwnProperty("start_1") === false) {
                start_1 = new Date();
                localStorage.setItem("start_1",[start_1.getHours(),start_1.getMinutes()])  
              }
             break;
          case "device-2":
            if (localStorage.hasOwnProperty("start_2") === false) {
              start_2 = new Date();
              localStorage.setItem("start_2",[start_2.getHours(),start_2.getMinutes()])  
            }
             break;
          case "device-3":
            if (localStorage.hasOwnProperty("start_3") === false) {
              start_3 = new Date();
              localStorage.setItem("start_3",[start_3.getHours(),start_3.getMinutes()])  
            }
             break;

          case "device-4":
            if (localStorage.hasOwnProperty("start_4") === false) {
              start_4 = new Date();
              localStorage.setItem("start_4",[start_4.getHours(),start_4.getMinutes()])  
            }
             break;
          case "device-5":
            if (localStorage.hasOwnProperty("start_5") === false) {
              start_5 = new Date();
              localStorage.setItem("start_5",[start_5.getHours(),start_5.getMinutes()])  
            }start_5[1]
             break;
          case "device-6":
            if (localStorage.hasOwnProperty("start_6") === false) {
              start_6 = new Date();
              localStorage.setItem("start_6",[start_6.getHours(),start_6.getMinutes()])  
            }
             break;
          default:
            None;
            break;
          }
        
          
        })
        stopbuttonn.addEventListener("click", function () {
         
            if (valid === true) {
              clearInterval(se);
            }
          
          done = true;
          if (done === true) {
            end = new Date();
            console.log(end.getMinutes());
          }
          //   start minutes > end minutes
          switch (id) {
            case "device-1":
           if (localStorage.hasOwnProperty("start_1") === true) {
            start_1=localStorage.getItem("start_1").split(",")
           }
           localStorage.removeItem("start_1")
            
              if (end.getHours() < start_1[0]) {
                let day = start_1[0] - end.getHours();
                let date = start_1[1] - end.getMinutes();
                let hours = 24 - day;
                time = hours * 60 - date;
                if (start_1[1] < end.getMinutes()) {
                  date = end.getMinutes() -start_1[1];
                  time = hours * 60 + date;
                }
              }
              //   start minutes > end minutes
              else if (end.getHours() > start_1[0]) {
                let date =start_1[1] - end.getMinutes();
                let hours = end.getHours() - start_1[0];
                time = hours * 60 - date;
                if (end.getMinutes() >start_1[1]) {
                  date = end.getMinutes() -start_1[1];
                  time = date + hours * 60;
                }
              } else {
                time = end.getMinutes() - start_1[1];
              }
              break;
            case "device-2":
              if (localStorage.hasOwnProperty("start_2") === true) {
                start_2=localStorage.getItem("start_2").split(",")
               }
               localStorage.removeItem("start_2")
              if (end.getHours() < start_2[0]) {
                let day = start_2[0] - end.getHours();
                let date = start_2[1] - end.getMinutes();
                let hours = 24 - day;
                time = hours * 60 - date;
                if (start_2[1] < end.getMinutes()) {
                  date = end.getMinutes() - start_2[1];
                  time = hours * 60 + date;
                }
              }
              //   start minutes > end minutes
              else if (end.getHours() > start_2[0]) {
                let date = start_2[1] - end.getMinutes();
                let hours = end.getHours() - start_2[0];
                time = hours * 60 - date;
                if (end.getMinutes() > start_2[1]) {
                  date = end.getMinutes() - start_2[1];
                  time = date + hours * 60;
                }
              } else {
                time = end.getMinutes() - start_2[1];
              }
              break;
            case "device-3": 
            if (localStorage.hasOwnProperty("start_3") === true) {
              start_3=localStorage.getItem("start_3").split(",")
             }
             localStorage.removeItem("start_3")
              if (end.getHours() < start_3[0]) {
                let day = start_3[0] - end.getHours();
                let date = start_3[1] - end.getMinutes();
                let hours = 24 - day;
                time = hours * 60 - date;
                if (start_3[1] < end.getMinutes()) {
                  date = end.getMinutes() - start_3[1];
                  time = hours * 60 + date;
                }
              }
              //   start minutes > end minutes
              else if (end.getHours() > start_3[0]) {
                let date = start_3[1] - end.getMinutes();
                let hours = end.getHours() - start_3[0];
                time = hours * 60 - date;
                if (end.getMinutes() > start_3[1]) {
                  date = end.getMinutes() - start_3[1];
                  time = date + hours * 60;
                }
              } else {
                time = end.getMinutes() - start_3[1];
              }
              break;
            case "device-4":
              
            if (localStorage.hasOwnProperty("start_4") === true) {
              start_4=localStorage.getItem("start_4").split(",")
             }
             localStorage.removeItem("start_4")
              if (end.getHours() < start_4[0]) {
                let day = start_4[0] - end.getHours();
                let date = start_4[1] - end.getMinutes();
                let hours = 24 - day;
                time = hours * 60 - date;
                if (start_4[1] < end.getMinutes()) {
                  date = end.getMinutes() - start_4[1];
                  time = hours * 60 + date;
                }
              }
              //   start minutes > end minutes
              else if (end.getHours() > start_4[0]) {
                let date = start_4[1] - end.getMinutes();
                let hours = end.getHours() - start_4[0];
                time = hours * 60 - date;
                if (end.getMinutes() > start_4[1]) {
                  date = end.getMinutes() - start_4[1];
                  time = date + hours * 60;
                }
              } else {
                time = end.getMinutes() - start_4[1];
              }
              break;
            case "device-5":
              if (localStorage.hasOwnProperty("start_5") === true) {
                start_5=localStorage.getItem("start_5").split(",")
               }
               localStorage.removeItem("start_5")
            
              if (end.getHours() < start_5[0]) {
                let day = start_5[0] - end.getHours();
                let date = start_5[1] - end.getMinutes();
                let hours = 24 - day;
                time = hours * 60 - date;
                if (start_5[1] < end.getMinutes()) {
                  date = end.getMinutes() - start_5[1];
                  time = hours * 60 + date;
                }
              }
              //   start minutes > end minutes
              else if (end.getHours() > start_5[0]) {
                let date = start_5[1] - end.getMinutes();
                let hours = end.getHours() - start_5[0];
                time = hours * 60 - date;
                if (end.getMinutes() > start_5[1]) {
                  date = end.getMinutes() - start_5[1];
                  time = date + hours * 60;
                }
              } else {
                time = end.getMinutes() - start_5[1];
              }
              break;
            case "device-6":
              if (localStorage.hasOwnProperty("start_6") === true) {
                start_6=localStorage.getItem("start_6").split(",")
               }
               localStorage.removeItem("start_6")
              if (end.getHours() < start_6[0]) {
                let day = start_6[0] - end.getHours();
                let date = start_6[1] - end.getMinutes();
                let hours = 24 - day;
                time = hours * 60 - date;
                if (start_6[1] < end.getMinutes()) {
                  date = end.getMinutes() - start_6[1];
                  time = hours * 60 + date;
                }
              }
              //   start minutes > end minutes
              else if (end.getHours() > start_6[0]) {
                let date = start_6[1] - end.getMinutes();
                let hours = end.getHours() - start_6[0];
                time = hours * 60 - date;
                if (end.getMinutes() > start_6[1]) {
                  date = end.getMinutes() - start_6[1];
                  time = date + hours * 60;
                }
              } else {
                time = end.getMinutes() - start_6[1];
              }
              break;
            default:
              None;
              break;
          }
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
