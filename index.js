const DEFAULT_PASSWORD = "********";
let passwordData = {
  website: "binus.ac.id",
  username: "email@binus.ac.id",
  password: "binus123",
};
$(document).ready(function () {
  let show = false;
  let timer = null;
  let isEdit = false;
  const setTimer = (time) => {
    $("#timer").html(`00:${time < 10 ? `0${time}` : time}`);
    return setInterval(() => {
      if (time > 1) {
        time--;
        $("#timer").html(`00:${time < 10 ? `0${time}` : time}`);
      } else {
        show = false;
        $("#btn-pass").text("show password");
        $("#btn-pass").addClass("btn-info");
        $("#btn-pass").removeClass("btn-danger");
        $("#password").html(`password : ${DEFAULT_PASSWORD}`);
        $("#timer").html("");
      }
    }, 1000);
  };

  const clearTimer = (timer) => {
    if (timer) {
      clearInterval(timer);
    }
  };

  const changeToEditCard = () => {
    $("#username").html(`
    <label>username : <label>
    <input type="text" value="${passwordData.username}"/>
    `);
    $("#password").html(`
    <label>password : <label>
    <input type="text" value="${passwordData.password}"/>
    `);
  };
  const changeToShowCard = () => {
    $("#username").html(`username : ${passwordData.username}`);
    $("#password").html(`password : ${DEFAULT_PASSWORD}`);
  };

  $("#btn-pass").click(function () {
    if (show) {
      clearTimer(timer);
      show = false;
      $("#btn-pass").text("show password");
      $("#btn-pass").addClass("btn-info");
      $("#btn-pass").removeClass("btn-danger");
      $("#password").html(`password : ${DEFAULT_PASSWORD}`);
      $("#timer").html("");
    } else {
      timer = setTimer(30);
      $("#btn-pass").text("hide password");
      $("#btn-pass").addClass("btn-danger");
      $("#btn-pass").removeClass("btn-info");

      $("#password").html(`password : ${passwordData.password}`);
      show = true;
    }
  });

  $("#btn-edit").click(function () {
    if (isEdit) {
      passwordData.password = $("#password").find("input").val();
      passwordData.username = $("#username").find("input").val();
      changeToShowCard();
      isEdit = false;
      $("#btn-pass").show();
      $("#btn-edit").text("edit");
      $("#btn-edit").addClass("btn-secondary");
      $("#btn-edit").removeClass("btn-success");
    } else {
      isEdit = true;
      show = false;
      changeToEditCard();
      $("#timer").html("");
      clearTimer(timer);
      $("#btn-pass").hide();
      $("#btn-pass").text("show password");
      $("#btn-pass").addClass("btn-info");
      $("#btn-pass").removeClass("btn-danger");
      $("#btn-edit").text("save");
      $("#btn-edit").addClass("btn-success");
      $("#btn-edit").removeClass("btn-secondary");
    }
  });
});
