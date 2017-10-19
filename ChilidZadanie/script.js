'use strict';
//LIKE & FOLLOWERSY
$(function () {
    var counter = 0;
    $(".follow").click(function () {

        counter++;
        $(".followersy").text(counter);

    });


    var counterLike = 0;
    $(".fa-heart-o").click(function () {

        counterLike++;
        $(".likes").text(counterLike);

    });
/////////popup///////////////////////////   
   
});

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

/////////HIDE comments


$("#hide").click(function () {
   
    $('.hide-elements').toggle(
        function () {
            $(".hide1").fadeOut("slow");
         
        },
        function () {
            $('.show').fadeIn('slow');
         
        });
     
    });


//////End Hide comments

////DISPLAY ADD COMMENT??/////////////////

$("#add").click(function () {
    console.log($("input#com").val());

    //text
    var comm = $('<div />', {
        "class": 'post-description text-space',
        "text": $("input#com").val(),
    })
    //img
    var imageediv = $('<div />', {
        "class": 'pull-left image',
    })


    var imagee = $('<img />', {
        "class": 'img-circle avatar newawatar',
        "src": 'spencer2.jpg',
    })
    // name and Time

    var name = $('<span />', {
        "class": 'youproftex',
        "text": 'Mario Bross ',
    })
    var date = $('<p />', {
        "class": 'date',
        "text": month + "." + day + "." + year,
    })

    var space = $('<div />', {
        "class": 'space',

    })

    $("#your").append(imagee);
    $("#your").append(name);
    $("#your").append(date);
    $("#your").append(imageediv);
    $("#your").append(comm);
    $("#your").append(space);

});

///END oF ADD  DISPLAY COMMENT/////////////////

///////////////////DATE
var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
////////////////////////////////////////

/////JSON FUNCTION

function load() {
    var mydata = JSON.parse(example);
    $(".post-description").text(mydata[0].lorem);

}
load();

