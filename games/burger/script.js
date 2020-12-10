  
                
          var timer = setInterval(autoClick, 1000);
  
          var dollars = 0;
  
          var clVal = 1;
  
          var AcVal = 0;
  
          var AcPr = 50;
  
          var ClPr = 50;
  
          var z = 0;
  
          function update() {
            document.getElementById("p").innerHTML = dollars + "$";
            document.getElementById("prices").innerHTML = "Autoclick Value Price: $" + AcPr + " <br>Autoclick Speed Price: $" + (AcPr * 2) + " <br>Click Value Price: $" + ClPr;
          }
                
          function saveMoney() {
            localStorage.moneySave = dollars;
          }
          
          function onCl() {
            dollars = dollars + clVal;
            document.getElementById("p").innerHTML = dollars + "$";
          }
          
          function autoClick() {
            dollars = dollars + AcVal;
            document.getElementById("p").innerHTML = dollars + "$";
          }
          
          function upgradeAc() {
            if (dollars >= AcPr) {
              AcVal = AcVal + 1
              dollars = dollars - AcPr
              AcPr = AcPr * 2
              update()
            }
          }
          
          function upgradeAcSpeed() {
            if (dollars >= (AcPr * 2)) {
              if (z === 0) {
                clearInterval(timer)
                timer = setInterval(autoClick, 500)
                dollars = dollars - (AcPr * 2)
                z++
                AcPr = AcPr * 2
                update()
              }
              else {
                if (z == 1) {
                  clearInterval(timer)
                  timer = setInterval(autoClick, 250)
                  dollars = dollars - (AcPr * 2)
                  AcPr = AcPr * 2
                  z++
                  update()
                }
                else {
                  if (z == 2) {
                    clearInterval(timer)
                    timer = setInterval(autoClick, 125)
                    dollars = dollars - (AcPr * 2)
                    AcPr = AcPr * 2
                    z++
                    update()
                    
                  }
                  else {
                    if (z == 3) {
                      clearInterval(timer)
                      timer = setInterval(autoClick, 62)
                      dollars = dollars - (AcPr * 2)
                      AcPr = AcPr * 2
                      z++
                      update()
                    }
                    else {
                      if (z == 4) {
                        clearInterval(timer)
                        timer = setInterval(autoClick, 31)
                        dollars = dollars - (AcPr * 2)
                        AcPr = AcPr * 2
                        z++
                        update()
                      }
                      else {
                        if (z == 5) {
                          clearInterval(timer)
                          timer = setInterval(autoClick, 16)
                          dollars = dollars - (AcPr * 2)
                          AcPr = AcPr * 2
                          z++
                          update()
                        }
                        else {
                          if (z == 6) {
                            clearInterval(timer)
                            timer = setInterval(autoClick, 8)
                            dollars = dollars - (AcPr * 2)
                            AcPr = AcPr * 2
                            z++
                            update()
                          }
                          else {
                            alert("You cannot buy this, it is at the max level.")
                          }
                        }
                        
                      }
                    }
                    
                  }
                }
                
                }
              }
              update()
          }
          
          function upgradeCl() {
            if (dollars >= ClPr) {
                    clVal++
                    dollars = dollars - ClPr
                    ClPr = ClPr * 2
                    update()
            }
          }
          
          function miceOut(numO) {
            if (numO == 1){
              document.getElementById("AcValButt").innerHTML = "Click me to upgrade \n the autoclick value"
            }
            else {
              if (numO == 2) {
                
              }
              else {
                if (numO == 3) {
                  
                }
              }
            }
          }
          
          update()
