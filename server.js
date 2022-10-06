/*********************************************************************************
* WEB-322 test 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: __Damanjot Singh____ Student ID: __148285216_____ Date: ____06/10/2022_____
*
* Online (Cyclic) URL:
* ______https://coffee-harp-seal-hem.cyclic.app____________________
*
********************************************************************************/

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var dataservice = require(__dirname + "/data_prep.js");
onHttpStart = ()=>{
    console.log('Express http server listening on port' + HTTP_PORT);
}
app.use(express.static('public'));
app.get("/", function(req,res){
    res.send("<h2>Declaration</h2>"+
    "<p>The rest text is diplayed in the paragraph as shown in the screenshot.<br> I acknowledge the College's academic integrity policy - and my own integrity - remain in effect whether my work is done remotely or onsite. Any test or assingnment is in act of trust between me and my instructor, and specially with my classmates... even when no one is watching. I Declare I will not break that trust.<br/>Name: Damanjot Singh<br />Student Number: 148285216<br /><a href='/cpa'>Click to visit CPA Students.</a><br><a href='/highGPA'>Click to see who has the highest GPA.</a></p>");
});
app.get("/cpa", function(req,res){
    res.sendFile(path.join(__dirname,"/data_prep.js"));
});
app.listen(HTTP_PORT, onHttpStart);

app.get("/highGPA", function(req,res){
    res.sendFile(path.join(__dirname,"/data_prep.js"));
});
app.listen(HTTP_PORT, onHttpStart);


app.use((req, res)=>{
    res.status(404).end('404 PAGE NOT FOUND');
});
