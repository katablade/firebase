var firebaseConfig = {
    apiKey: "AIzaSyDejTOz_yQPm96669RwPCLk9NGlVw7fz3I",
    authDomain: "gmc-checkpoint.firebaseapp.com",
    databaseURL: "https://gmc-checkpoint.firebaseio.com",
    projectId: "gmc-checkpoint",
    storageBucket: "gmc-checkpoint.appspot.com",
    messagingSenderId: "824073131815",
    appId: "1:824073131815:web:e91f019632e97550163b02",
    measurementId: "G-S0HKJGNMHJ"
};
firebase.initializeApp(firebaseConfig);
firebase.database();
var messagesRef = firebase.database().ref("contact");
function SubmitForm(e){
    e.preventDefault();
    var name = document.getElementById("name").value;
    var track = document.getElementById("track").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    if(document.getElementById("name").value==""){
        alert("fill your name first!")}
    if(document.getElementById("email").value==""){
        alert("fill your email first!")}
    if(document.getElementById("number").value==""){
        alert("fill your number first!")}
    saveMessage(name, track, email, number);
    document.getElementById("name").value=""
    document.getElementById("track").value="Web"
    document.getElementById("email").value=""
    document.getElementById("number").value=""
}
document.getElementById("ContactForm").addEventListener("submit", SubmitForm);
// save message to firebase
function saveMessage(name, track, email, number){

    var NewmessageRef = messagesRef.push();
    NewmessageRef.set({
        name: name,
        track: track,
        email: email,
        number: number,
    });
    
}

