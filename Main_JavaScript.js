function showPage(pageName){
  const pages = document.querySelectorAll('.page');
  const pageToShow = document.getElementById(pageName);
  pages.forEach(page => page.style.display = 'none');
  if (pageName === 'ModTrilogy'){
    document.getElementById('ModTrilogy').style.display = 'block';
    return;
  }
  if (pageToShow){
    pageToShow.style.display = 'block';
  }
}
function UpdateFooterYear(){
  const baseYear = 2025;
  const currentYear = new Date().getFullYear();
  const footer = document.getElementById("Update_Footer");
  if(currentYear > baseYear){
    footer.textContent = `© ${baseYear} - ${currentYear} Developed and maintained by MaxUwU`;
  }else{
    footer.textContent = `© ${baseYear} Developed and maintained by MaxUwU`;
  }
}
window.onload = function(){
  showPage('Home');
  UpdateFooterYear();
}
