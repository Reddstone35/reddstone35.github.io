const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const redirToken = urlParams.get('token');

function redirect(_href) {
  window.location = _href;
}

function getFile(_token) {
  if (_token === "PlumTOS-YLi3M8Q4TXbe") {
    redirect("https://docs.google.com/document/d/1c0XF0HsGfmcMwNNdo5M1dJYgLZIft-yWYYiAA6RMPZo/view")
  } else if (_token === "DOC_tS-UMKsPfiftRcjYTEFpP5tyF34FhAwiv") {
    redirect("/docs/scripts/usage#chromebook-scripts_fake-error")
  } else if (_token === "rNBnY1") {
    redirect("/RennyBenni")
  } else if (_token === null){
    redirect("/?error=REDIRECT_TOKEN_NOT_FOUND")
  } else {
    redirect("/?error=REDIRECT_UNKOWN_TOKEN")
  }
}

document.write("Redirecting...")

getFile(redirToken)