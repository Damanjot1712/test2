var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var dataservice = require(__dirname + "/data_prep.js");
onHttpStart = ()=>{
    console.log('Express http server listening on port ' + HTTP_PORT);
}
app.use(express.static('public'));
app.get("/", function(req,res){
    res.send("<h2>Declaration</h2>"+
    "<p>The rest text is diplayed in the paragraph as shown in the screenshot.<br> I acknowledge the College's academic integrity policy - and my own integrity - remain in effect whether my work is done remotely or onsite. Any test or assingnment is in act of trust between me and my instructor, and specially with my classmates... even when no one is watching. I Declare I will not break that trust.<br/>Name: Damanjot Singh<br />Student Number: 148285216<br /><a href='/cpa'>Click to visit CPA Students.</a><br><a href='/cpa'>Click to see who has the highest GPA.</a></p>");
});
app.get("/data_prep.js", function(req,res){
    res.sendFile(path.join(__dirname,"/data_prep.js"));
});
app.listen(HTTP_PORT, onHttpStart);


app.use((req, res)=>{
    res.status(404).end('404 PAGE NOT FOUND');
});
dataservice.initialize().then(() => {
    app.listen(HTTP_PORT, onHttpStart());
}).catch (() => {
    console.log('promises not stisfied');
});