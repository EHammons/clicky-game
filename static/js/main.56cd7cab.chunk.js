(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"../img/img1.jpg","clicked":false},{"id":2,"image":"../img/img2.jpg","clicked":false},{"id":3,"image":"../img/img3.jpg","clicked":false},{"id":4,"image":"../img/img4.jpg","clicked":false},{"id":5,"image":"../img/img5.jpg","clicked":false},{"id":6,"image":"../img/img6.jpg","clicked":false},{"id":7,"image":"../img/img7.jpg","clicked":false},{"id":8,"image":"../img/img8.jpg","clicked":false},{"id":9,"image":"../img/img9.jpg","clicked":false},{"id":10,"image":"../img/img10.jpg","clicked":false},{"id":11,"image":"../img/img11.jpg","clicked":false},{"id":12,"image":"../img/img12.jpg","clicked":false}]')},,,,,,,,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),c=t(3),r=t.n(c),l=t(4),s=t(5),g=t(7),m=t(6),o=t(8);t(14);var d=function(e){return n.a.createElement("div",{className:"card container",value:e.id,onClick:function(){return e.handleClick(e.id)}},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image})))};t(15);var h=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)};t(16);var f=function(e){return n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"title"},e.children),n.a.createElement("div",{className:"scores"},"Score: ",e.score," Highscore: ",e.highscore),n.a.createElement("div",{className:"instructions"},e.rightWrong))},u=t(1),k=(t(17),function(e){function a(){var e,t;Object(l.a)(this,a);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(t=Object(g.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={cards:u,score:0,highscore:0,rightWrong:"Click on an image to earn points, but don't click on them more than once!",clicked:[]},t.shuffleArray=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),i=e[a];e[a]=e[t],e[t]=i}return e},t.handleClick=function(e){-1===t.state.clicked.indexOf(e)?(t.handleIncrement(),t.setState({clicked:t.state.clicked.concat(e)}),t.handleShuffle()):t.handleReset()},t.handleIncrement=function(){var e=t.state.score+1;t.setState({score:e,rightWrong:"Click on an image to earn points, but don't click on them more than once!"}),e>=t.state.highscore&&(t.setState({highscore:e}),12===e&&t.setState({rightWrong:"You win!"})),t.handleShuffle()},t.handleReset=function(){t.setState({score:0,highscore:t.state.highscore,rightWrong:"Try Again!",clicked:[]}),t.handleShuffle()},t.handleShuffle=function(){var e=t.shuffleArray(u);t.setState({cards:e})},t}return Object(o.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"backapp"},n.a.createElement(f,{score:this.state.score,highscore:this.state.highscore,rightWrong:this.state.rightWrong},"Clicky Game!"),n.a.createElement(h,null,this.state.cards.map((function(a){return n.a.createElement(d,{id:a.id,key:a.id,image:a.image,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle})}))))}}]),a}(i.Component));r.a.render(n.a.createElement(k,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.56cd7cab.chunk.js.map