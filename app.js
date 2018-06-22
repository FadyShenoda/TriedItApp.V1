var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine","ejs");

var campgrounds = [
    { name:"Fire", image: "https://images.unsplash.com/photo-1481682799713-eb3384705155?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=66192cfe658b49cdd1bbbbebac99eaea&auto=format&fit=crop&w=600&q=60"},
    { name:"Freedom", image: "https://images.unsplash.com/photo-1505906690561-4dc7060250b6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=17543f450e39b9065a8378242768570d&auto=format&fit=crop&w=600&q=60"},
    { name:"Bonfire", image: "https://images.unsplash.com/photo-1486679679458-629f321a617c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce0cc0245473e7cb6f7a765e181e8a1c&auto=format&fit=crop&w=600&q=60"},
    { name: "far away", image :"https://images.unsplash.com/photo-1495685288924-ce05d1036b24?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9c18e42f88d973bbdf030b7ec3544e39&auto=format&fit=crop&w=600&q=60"},
    { name: "Light in the night", image :"https://images.unsplash.com/photo-1432817495152-77aa949fb1e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6f210acc36ab5742aa863e7a2240a2a&auto=format&fit=crop&w=600&q=60"},
    { name: "Camp Gear", image :"https://images.unsplash.com/photo-1493244040629-496f6d136cc4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e0e94d283d8461fa30ef9e7f932b41b5&auto=format&fit=crop&w=600&q=60"},
    { name: "Sunset", image :"https://images.unsplash.com/photo-1496947850313-7743325fa58c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f0bb0006c15a626dab0a5025e7838fa&auto=format&fit=crop&w=600&q=60"},
    { name: "Night views", image :"https://images.unsplash.com/photo-1479741044197-d28c298f8c77?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=00a8cfc7aba62bd47f10abd96551cb1d&auto=format&fit=crop&w=600&q=60"}
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds",{campgrounds : campgrounds});
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.post("/campgrounds", function(req, res){
    var newCampName = req.body.name;
    var newCampImg = req.body.img;
    var newGround = {name: newCampName, image:newCampImg};
    campgrounds.push(newGround);
    res.redirect("/campgrounds");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server is UP!");
})