$(function (){
//GET API Users
var $users = $('#users');
var $friends = $('#friends');
//GET Users
$.ajax({
		headers: {
		    'Content-Type': 'application/x-www-form-urlencoded'
		},
		type: 'GET',
		dataType: "json",
		url: 'http://localhost:9096/wsrepeteco/users',
		crossDomain : true,
		origin: "*",
		success: 
		function(users) {
		$.each(users, function(i, user){
			$users.append('<li>Id:<b class="text-success">'+ user.id +'</b>| name:'+ user.name +'| id_fb_users:'+ user.id_fb_users +'| email:'+ user.email + '| gender:'+ user.gender + '| city:'+ user.city + '| nationality:'+ user.nationality + '| preferencia:'+ user.preference + '| friendsTotalFb:'+ user.friendsTotalFb + '| friendsTotalApp:'+ user.friendsTotalApp + '| createData:'+ user.createData + '| updateData:'+ user.updateData + '</li></br>')
		});
	  }
	});
console.log("GET users - 0k");
//GET Friends
$.ajax({
		headers: {
		    'Content-Type': 'application/x-www-form-urlencoded'
		},
		type: 'GET',
		dataType: "json",
		url: 'http://localhost:9096/wsrepeteco/friends',
		crossDomain : true,
		origin: "*",
		success: 
		function(friends) {
		$.each(friends, function(i, friends){
			$friends.append('<li>Id:'+ friends.id +'| id_fb_users:'+ friends.id_fb_users +'| name:'+ friends.name +'| email:'+ friends.email + '| gender:'+ friends.gender + '| city:'+ friends.city + '| nationality:'+ friends.nationality + '| preferencia:'+ friends.preference + '| friendsTotalFb:'+ friends.friendsTotalFb + '</li></br>')
		});
	  }
	});
	console.log("GET friends - 0k");
});

//POST Api Users
function postApiUser(){
var users = {
	id: "995291386",
    id_fb_users: "1952913858311706",
    name: "Usuario Teste",
    imagem: "https://scontent.xx.fbcdn.net/v/t1.0-1/p320x320/21766721_1952913691645056_3628685747763752896_n.jpg?oh=0bcc5d8dd3b07a6f14089264f03cfa93&oe=5AFB0972",
    link: "https://www.facebook.com/app_scoped_user_id/1343744115642035/",
    email: "tavinhomegas18@hotmail.com",
    city: "São Luis",
    gender: "M",
    preference: "F",
    nationality: "PT_BR",
    friendsTotalFb: "3855"
}
$.ajax({
    url: "http://localhost:9096/wsrepeteco/users",
    method: "POST",
    headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'dataType': 'json'
    },
    crossDomain : true,
    origin: "*",
    processData: false,
    data: JSON.stringify(users),          
    dataType: "json",

});
console.log("POST success",users);
}
//Delete User
function deleteApiUser(){

	$.ajax({
    url: "http://localhost:9096/wsrepeteco/users/"+ id,
    method: "DELETE",
    headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'dataType': 'json'
    },
    crossDomain : true,
    origin: "*",
    processData: false,        
    dataType: "json",
});
console.log("DELETE");
}

//Refresh na pagina
function refresh(){
	window.location.reload();
}
