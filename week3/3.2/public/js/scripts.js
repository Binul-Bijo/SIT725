const cardList = [
  {
    title: "Iron Man",
    image: "images/ironman.jpeg",
    link: "Brave warrior",
    desciption:
      "Iron Man is the alter ego of Tony Stark, a brilliant inventor and industrialist who inherited Stark Industries from his father, Howard Stark.",
  },
  {
    title: "Captian America",
    image: "images/camerica.jpeg",
    link: "Captain Marvelous",
    desciption:
      "Steve Rogers, a sickly young man from Brooklyn, was transformed into a super-soldier through the Super-Soldier Serum during World War II.",
  },
];
const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!")
  }
  $(document).ready(function(){
  $('.materialboxed').materialbox();
  $('#clickMeButton').click(()=>{
  clickMe();
  })
  });
  
const submitForm = () => {
  let formData = {};
  formData.first_name = $("#first_name").val();
  formData.last_name = $("#last_name").val();
  formData.password = $("#password").val();
  formData.email = $("#email").val();
  console.log("Form Data Submitted: ", formData);
};
const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend =
      '<div class="col s4 center-align">' +
      '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' +
      item.image +
      '" >' +
      '</div><div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span><p><a href="#">' +
      item.link +
      "</a></p></div>" +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text" style="color: black">' +
      item.desciption +
      "</p>" +
      "</div></div></div>";
    $("#card-section").append(itemToAppend);
  });
};
$(document).ready(function () {
    $(".materialboxed").materialbox();
    $(".modal").modal();
    $("#clickMeButton").click(() => {
      $("#modal1").modal("open"); 
    });
  
    $("#formSubmit").click(() => {
      submitForm();
      $("#modal1").modal("close"); 
    });
  
    addCards(cardList);
  });
  
