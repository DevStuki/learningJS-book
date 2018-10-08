function printDOM(node, prefix){
    console.log(prefix + node.nodeName);
    for (let i = 0; i < node.childNodes.length; i++) {
        printDOM(node.childNodes[i], prefix + '\t');
        
    }
}

//printDOM(document, '');

const p1 = document.createElement('p'); //<p>요소 생성
const p2 = document.createElement('p'); //<p>요소 생성

//textContent는 태그 안에 있는 텍스트를 바꾸어 버린다.
p1.textContent = "I was created dynamically!"; //각각 내용 입력
p2.textContent = "I was also created dynamically!";

//document는 html 문서를 가리킴. 그러므로 content라는 ID를 가진 요소를 찾아넣음.
const parent = document.getElementById('content'); 
const firstChild = parent.childNodes[0]; //그중에 첫번째 자식을 찾아 넣음

parent.insertBefore(p1, firstChild); //이 요소(p1)를, 이거(firstChild) 앞에 넣음
parent.appendChild(p2); //이거(p2) 뒤에 추가함 

function highlightParas(containing){
    if(typeof containing === 'string'){
        containing = new RegExp(`\\b${containing}\\b`, 'i');
    }
    const paras = document.getElementsByTagName('p'); //<p>태그를 모두 담는다.
    console.log(paras);
    for(let p of paras){
        if(!containing.test(p.textContent)) continue; //containing과 같은 것이 없으면 패스
        p.classList.add('highlight'); //있다면 클래스 이름에 highlight를 추가한다. 이것은 미리 css를 설정해두고 추가되면 css에 따라 바뀐다.
    }
}

//highlightParas('unique');

function removeParaHighlights(){
    const paras = document.querySelectorAll('p.highlight');
    for(let p of paras){
        p.classList.remove('highlight');
    }
}

const highlightActions = document.querySelectorAll('[data-action = "highlight"]');
for(let a of highlightActions){
    a.addEventListener('click', evt => {
        evt.preventDefault(); //기본 이벤트 핸들러를 막는다.
        highlightParas(a.dataset.containing);
    });
}

const removeHighlightActions = document.querySelectorAll('[data-action = "removeHighlights"]');
for(let a of removeHighlightActions){
    a.addEventListener('click', evt => {
        evt.preventDefault(); //기본 이벤트 핸들러를 막는다.
        removeParaHighlights();
    });
}
