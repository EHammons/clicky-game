(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"../img/img1.jpg","clicked":false},{"id":2,"image":"../img/img2.jpg","clicked":false},{"id":3,"image":"../img/img3.jpg","clicked":false},{"id":4,"image":"../img/img4.jpg","clicked":false},{"id":5,"image":"../img/img5.jpg","clicked":false},{"id":6,"image":"../img/img6.jpg","clicked":false},{"id":7,"image":"../img/img7.jpg","clicked":false},{"id":8,"image":"../img/img8.jpg","clicked":false},{"id":9,"image":"../img/img9.jpg","clicked":false},{"id":10,"image":"../img/img10.jpg","clicked":false},{"id":11,"image":"../img/img11.jpg","clicked":false},{"id":12,"image":"../img/img12.jpg","clicked":false}]')},,,,,,,,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),c=t.n(i),n=t(3),r=t.n(n),l=t(4),s=t(5),m=t(7),g=t(6),d=t(8);t(14);var o=function(e){return c.a.createElement("div",{className:"card container",value:e.id,onCLick:function(){return e.handleClick(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})))};t(15);var h=function(e){return c.a.createElement("div",{className:"wrapper"},e.children)};t(16);var u=function(e){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"title"},e.children),c.a.createElement("div",{className:"scores"},"Score: ",e.score," Highscore: ",e.highscore),c.a.createElement("div",{className:"instructions"},"Click on an image to earn points, but don't click on any more than once!"))};t(17);var f=function(e){return c.a.createElement("div",{className:"status"},e.rightWrong)},k=t(1),p=function(e){function a(){var e,t;Object(l.a)(this,a);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(t=Object(m.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(c)))).state={cards:k,score:0,highscore:0,rightWrong:"",clicked:[]},t.shuffleArray=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),i=e[a];e[a]=e[t],e[t]=i}return e},t.handleClick=function(e){-1===t.state.clicked.indexOf(e)?(t.handleIncrement(),t.setState({clicked:t.state.clicked.concat(e)})):t.handleReset()},t.handleIncrement=function(){var e=t.state.score+1;t.setState({score:e,rightWrong:""}),e>=t.state.highscore?t.setState({highscore:e}):12===e&&t.setState({rightWrong:"You win!"}),t.handleShuffle()},t.handleReset=function(){t.setState({score:0,highscore:t.state.highscore,rightWrong:"You lose!",clicked:[]}),t.handleShuffle()},t.handleShuffle=function(){var e=t.shuffleArray(k);t.setState({cards:e})},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(h,null,c.a.createElement(u,{score:this.state.score,highscore:this.state.highscore},"Clicky Game!"),c.a.createElement(f,null),this.state.cards.map((function(a){return c.a.createElement(o,{id:a.id,key:a.id,image:a.image,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle})}))))}}]),a}(i.Component);r.a.render(c.a.createElement(p,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.54bafce6.chunk.js.map