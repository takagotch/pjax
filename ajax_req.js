//.jq
//$('a').pjax('#content');
//
function getContents(href){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      document.getElementById('content').innerHTML = xhr.responseText;
    }
  };
  xhr.open('GET', href, false);
  xhr.setRequestHeader('X-AJAX-REQUEST', 'true');
  xhr.send();
}

window.addEventListener('popstate', function(e){
  if(e.state){
    getCotents(location.href);
  }	
}, false);

document.addEventListner('click', function(e){
  if(e.target.tagName === 'A'){
    var href = e.target.getAttribute('href');
    getContents(href);
    history.pushState(true, null, href);
  }
  e.preventDefault();
});

