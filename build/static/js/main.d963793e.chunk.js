(this.webpackJsonpfvs=this.webpackJsonpfvs||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=(n(11),n(2)),l=n.n(c),s=n(5),m=n(1),u={width:"9rem"};var d=function(e){return a.a.createElement("div",{className:"col"},a.a.createElement("div",{className:"card border-0 mb-3",style:u},a.a.createElement("img",{className:"card-img-top rounded",src:e.movie.image_url,alt:e.movie.original_title}),a.a.createElement("div",{className:"card-body p-0"},a.a.createElement("p",{className:"card-text text-center text-truncate font-weight-light"},e.movie.original_title))))};function b(e){return a.a.createElement("div",{className:"row"},e.movies.map((function(e){return a.a.createElement(d,{movie:e,key:e.imdb_id})})))}var p=function(e){return a.a.createElement("button",{className:"btn btn-warning bg mr-1",type:"button",id:"resetFilter","aria-haspopup":"true","aria-expanded":"false",onClick:function(){e.resetFilter(),e.setIsFiltered(!1)}},"Reset")};var v=function(e){return a.a.createElement("button",{className:"dropdown-item btn-sm",type:"button",id:"Action",onClick:e.onFilter},"Action")};var f=function(e){return a.a.createElement("button",{className:"dropdown-item btn-sm",type:"button",id:"Adventure",onClick:e.onFilter},"Adventure")};var E=function(e){return a.a.createElement("button",{className:"dropdown-item btn-sm",type:"button",id:"Comedy",onClick:e.onFilter},"Comedy")};var y=function(e){return a.a.createElement("button",{className:"dropdown-item btn-sm",type:"button",id:"Drama",onClick:e.onFilter},"Drama")};var F=function(e){return a.a.createElement("button",{className:"dropdown-item btn-sm",type:"button",id:"Animation",onClick:e.onFilter},"Animation")};var w=function(e){return a.a.createElement("button",{className:"dropdown-item btn-sm",type:"button",id:"Crime",onClick:e.onFilter},"Crime")};var g=function(e){return a.a.createElement("button",{className:"dropdown-item btn-sm",type:"button",id:"Documentary",onClick:e.onFilter},"Documentary")};var N=function(e){return a.a.createElement("button",{className:"dropdown-item btn-sm",type:"button",id:"Family",onClick:e.onFilter},"Family")};var h=function(e){return a.a.createElement("button",{className:"dropdown-item btn-sm",type:"button",id:"Fantasy",onClick:e.onFilter},"Fantasy")};var k=function(e){return a.a.createElement("button",{className:"dropdown-item btn-sm",type:"button",id:"History",onClick:e.onFilter},"History")};var C=function(e){return a.a.createElement("button",{className:"dropdown-item btn-sm",type:"button",id:"Horror",onClick:e.onFilter},"Horror")};var D=function(e){return a.a.createElement("button",{className:"dropdown-item btn-sm",type:"button",id:"Music",onClick:e.onFilter},"Music")};var M=function(e){return a.a.createElement("button",{className:"dropdown-item btn-sm",type:"button",id:"Mystery",onClick:e.onFilter},"Mystery")};var x=function(e){return a.a.createElement("button",{className:"dropdown-item btn-sm",type:"button",id:"Romance",onClick:e.onFilter},"Romance")};var A=function(e){return a.a.createElement("button",{className:"dropdown-item btn-sm",type:"button",id:"Science Fiction",onClick:e.onFilter},"Science Fiction")};var j=function(e){return a.a.createElement("button",{className:"dropdown-item btn-sm",type:"button",id:"TV Movie",onClick:e.onFilter},"TV Movie")};var O=function(e){return a.a.createElement("button",{className:"dropdown-item btn-sm",type:"button",id:"Thriller",onClick:e.onFilter},"Thriller")};var T=function(e){return a.a.createElement("button",{className:"dropdown-item btn-sm",type:"button",id:"War",onClick:e.onFilter},"War")};var _=function(e){var t=function(t){e.filterByGenre(t.target.id),e.setIsFiltered(!0)};return a.a.createElement("div",{className:"dropdown"},a.a.createElement("button",{className:"btn btn-secondary dropdown-toggle bg mr-1",type:"button",id:"genreDropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Genre"),a.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"genreDropdown"},a.a.createElement(v,{onFilter:t}),a.a.createElement(f,{onFilter:t}),a.a.createElement(E,{onFilter:t}),a.a.createElement(y,{onFilter:t}),a.a.createElement(F,{onFilter:t}),a.a.createElement(w,{onFilter:t}),a.a.createElement(g,{onFilter:t}),a.a.createElement(N,{onFilter:t}),a.a.createElement(h,{onFilter:t}),a.a.createElement(k,{onFilter:t}),a.a.createElement(C,{onFilter:t}),a.a.createElement(D,{onFilter:t}),a.a.createElement(M,{onFilter:t}),a.a.createElement(x,{onFilter:t}),a.a.createElement(A,{onFilter:t}),a.a.createElement(j,{onFilter:t}),a.a.createElement(O,{onFilter:t}),a.a.createElement(T,{onFilter:t})))};var B=function(e){return a.a.createElement("div",null,a.a.createElement("span",{className:"navbar-brand mb-0 h1"},"Fvs"))};var G=function(e){return a.a.createElement("button",{className:"dropdown-item btn-sm",type:"button",id:"AddedDate",onClick:function(){e.sortMovies("addedDate")}},"Added Date")};var I=function(e){return a.a.createElement("button",{className:"dropdown-item btn-sm",type:"button",id:"releaseDate",onClick:function(){e.sortMovies("releaseDate")}},"Release Date")};var R=function(e){return a.a.createElement("div",{className:"dropdown"},a.a.createElement("button",{className:"btn btn-secondary dropdown-toggle bg mr-1",type:"button",id:"sortDropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sort"),a.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"sortDropdown"},a.a.createElement(G,{sortMovies:e.sortMovies}),a.a.createElement(I,{sortMovies:e.sortMovies})))};var S=function(e){var t=Object(r.useState)(!1),n=Object(m.a)(t,2),o=n[0],i=n[1];return a.a.createElement("div",null,a.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-4"},a.a.createElement(B,null),a.a.createElement(_,{filterByGenre:e.filterByGenre,setIsFiltered:i}),a.a.createElement(R,{sortMovies:e.sortMovies}),o?a.a.createElement(p,{resetFilter:e.resetFilter,setIsFiltered:i}):""))};var H=function(){var e=Object(r.useState)([]),t=Object(m.a)(e,2),n=t[0],o=t[1],i=Object(r.useRef)([]);return Object(r.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://movies.andimenge.de/api/movies");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,i.current=n.movies,o(n.movies);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),a.a.createElement("div",{className:"container-flex mx-2"},a.a.createElement(S,{filterByGenre:function(e){var t=n.filter((function(t){return function(e,t){return e.genres.indexOf(t)>-1}(t,e)}));t.length>0?o(t):console.log("no movies found with genre:",e)},resetFilter:function(){o(i.current)},sortMovies:function(e){var t=n.concat();"addedDate"===e&&o(function(e){return e.sort((function(e,t){return new Date(t.created_date).getTime()-new Date(e.created_date).getTime()}))}(t)),"releaseDate"===e&&o(function(e){return e.sort((function(e,t){return new Date(t.release_date).getTime()-new Date(e.release_date).getTime()}))}(t))}}),a.a.createElement(b,{movies:n}))};var W=function(){return a.a.createElement("div",{id:"App"},a.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,n){e.exports=n(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.d963793e.chunk.js.map