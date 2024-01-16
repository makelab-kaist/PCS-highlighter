import './style.css';
import tutorial from './tutorial.gif';

document.querySelector('#app').innerHTML = `
  <div>
    <h2>Drag me: </h2>
    <button type="button" class="btn btn-primary">
      <a href="
      javascript: (() => {
        setInterval(()=>{
                const papers = document.querySelectorAll('li.acPaper');
                papers.forEach(paper => {
                  paper.style.backgroundColor = 'yellow';
                });
        }, 500)})();
        ">
        PCS highlighter
      </a>
    </button>
  </div>
  <div class="gif">
    <img src="${tutorial}" alt="">
  </div>
`;
