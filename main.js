import './style.css';
import tutorial from './tutorial.gif';

const code = `
  setInterval(()=>{
    const papers = document.querySelectorAll('li.acPaper');
    papers.forEach(paper => {
      paper.style.backgroundColor = '#9711df';
    });
  }, 500)
`;

document.querySelector('#app').innerHTML = `
  <div class="side">
    <h5><b>Drag me</b> to the bookmarks bar:</h5>
    <button type="button" class="btn btn-primary">
      <a href="
      javascript: (() => {${code}})()">
        PCS highlighter
      </a>
    </button>
  </div>
  <div class="gif">
    <img src="${tutorial}" alt="">
  </div>
  <div class="footer">
    Then go to the PCS Chair page and click the bookmarlet to highlight the papers.
  </div>
`;
