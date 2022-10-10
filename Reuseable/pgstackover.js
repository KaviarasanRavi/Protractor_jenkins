//pgstackover.js
'use strict';   
module.exports = {  

          txt_username: element(by.id('email')),
          txt_password: element(by.id('password')),
          btn_submit: element(by.id('submit-button')),
          podpage:element(by.xpath("//li[@id='CatHDesktopliWashingMachines']")),
          beforeprice:element(by.xpath("(//div[@class='Dynamic-Bucket-vsp dvpricepdlft'])")),
          afterprice:element(by.xpath("(//span[contains(text(),'₹')])")), 
          search1:element(by.xpath("//input[@name='ctl00$txtSearch']")),
          foc:element(by.xpath("//input[@name='ctl00$btnSearch']")),
          async clearme() {
            await this.txt_username.isDisplayed();
            await this.txt_username.clear();
            await this.txt_password.clear();
          }, 

          wait:function(){
            browser.manage().timeouts().implicitlyWait(3000);
          },
          windowhandles:function(input){
            browser.getAllWindowHandles().then(function(handles){
                browser.switchTo().window(handles[input]).then(function(){
                   
                });
            });
          },

         go: function() {  
                browser.driver.ignoreSynchronization = true;
                browser.waitForAngularEnabled(false);
                browser.driver.manage().window().maximize();
                browser.driver.get("https://www.vijaysales.com/"); //overrides baseURL  
            },

          search:function(fun,fun2,value){
            try {
              
            } catch (error) {
              
            }
              return fun.isDisplayed().then(function(result){
                if(result){
                 fun.clear().sendKeys(value).then(
                  function(){
                  browser.sleep(2000);
                  fun2.click();

                  }
                 )

                }
              })
          } ,
          getext:function(fun){
           fun.getText();
           
          } ,

               //element(by.css('div[class="login"]')),element(by.css('input[name="password"]'))
            varauth : function(loginstr, passwordstr,fun,fun1,fun2) {
              return element(by.css('div[class="login"]')).isDisplayed().then(function (result) {
                if (result) {
                  fun.clear().sendKeys(loginstr).then(
                    function () {
                      fun1.clear().sendKeys(passwordstr).then(function () {
                        fun2.click().then(function () {
                          return element(by.id('welcome')).isPresent();
                        });
                      });
                    });
                }
              });
            }  

          }