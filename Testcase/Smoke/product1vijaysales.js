const { search, search1, foc, getext, beforeprice } = require('../../Reuseable/pgstackover');
var toDoPage = require('../../Reuseable/pgstackover');  
var xl = require('../../utilitily/XLReader.js'); 
describe('My first non angular class', function() {

     it('should navigate to stack overflow login page', function() {  
            toDoPage.go();  
          }); 

          var Test_Data = xl.read_from_excel('Sheet1','./Data/testdata.xlsx')
          
    it ('My function', function() {
       // browser.driver.get('https://stackoverflow.com/users/login');
       
       // toDoPage.podpage.click();
       
       allure.createStep("verified that user able to search the products in search box",function(){
        Test_Data.forEach(function(data){
        search(search1,foc,data.Password);
      })
       })();
     

 
               

    });

   /*  it('clear me', function() {  
            toDoPage.clearme();  
          });
*/

})  