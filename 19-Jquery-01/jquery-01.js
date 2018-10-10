$(document).ready(function(){

});

$(function(){
    //$('p').text('ALL PARAGRAPHS REPLACED');  //모든 p태그의 text를 바꿀때
    //$('p').html('<i>ALL</i> PARAGRAPHS REPLACED'); //html을 이용해 모든 p태그의 내용을 바꿀 때
    // $('p')
    //     .eq(2)
    //     .html('<i>Third</i> PARAGRAPHS REPLACED'); //세번째 p만 바뀜
    // $('p').remove(); //모든 p태그를 제거
    // $('p')
    //     .append('<sup>*</sup>') //일치하는 요소에 자식 추가
    //     .after('<hr>') //앞뒤로 형제 추가
    //     .before('<hr>');
    // $('<sup>*</sup>').appendTo('p'); //$('p').append('<sup>*</sup>')와 같다.
    // $('<hr>').insertBefore('p'); //$('p').before('<hr>')와 같다
    // $('<hr>').insertAfter('p'); //$('p').after('<hr>')와 같다    

    // $('p:odd').css('color', 'red'); //p태그들 중 홀수번째만 스타일 변경 (0부터 시작하니까 2번째부터 된다 -_-)

    // $('p') //이렇게 filter를 이용해 원하는 것만 선택해서 그 아래의 것들로 변경할 수 있다.
    //     .after('<hr>')
    //     .append('<sup>*</sup>')
    //     .filter(':odd') //.not으로 하면 반대. 없는 것만 선택하게 됨
    //     .css('color', 'red'); 
    $('p') 
        .before('<hr>')        
        .find('.code') //정확히 일치하는 요소만 선택
        .css('font-size', '50px'); 
    
});

