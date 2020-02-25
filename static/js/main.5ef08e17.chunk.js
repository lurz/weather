(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(9)},function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(2),s=n(4),i=n(3),c=n(5),o=n(0),u=n.n(o),l=n(7),d=n.n(l),p=(n(14),function(t){function e(){return Object(a.a)(this,e),Object(s.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return u.a.createElement("div",{className:"weather-card"},u.a.createElement("div",{className:"weather-icon"},u.a.createElement("img",{src:n(15)("./"+this.props.cond+".svg"),alt:"icon"})),u.a.createElement("h1",null,this.props.temp,"\xba"),u.a.createElement("p",null,this.props.dt))}}]),e}(u.a.Component));function h(t){return t>=200&&t<300?"thunder":t<500?"rainy-4":t<600?"rainy-6":t<700?"snowy-5":t<800?"cloudy-day-1":800===t?"day":"cloudy"}var v=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(s.a)(this,Object(i.a)(e).call(this,t))).state={weather:[],currentCity:"",currentCountry:""},n}return Object(c.a)(e,t),Object(r.a)(e,[{key:"componentDidUpdate",value:function(t){var e=this;if(this.props.url!==t.url){var n={weekday:"short",month:"short",day:"2-digit"};console.log(this.props.url),fetch(this.props.url).then((function(t){if(!t.ok)throw Error(t.statusText);return t.json()})).then((function(t){console.log(t);var a=[];for(var r in t.list)if(r%8===3){var s={},i=t.list[r],c=new Date(1e3*i.dt);s.dt=c.toLocaleString("en-US",n),s.temp=Math.round(i.main.temp),s.cond=h(i.weather[0].id),a.push(s)}console.log(a),e.setState({currentCity:t.city.name,currentCountry:t.city.country,weather:a})})).catch((function(t){return console.log(t)}))}}},{key:"componentDidMount",value:function(){var t=this,e={weekday:"short",month:"short",day:"2-digit"};console.log(this.props.url),fetch(this.props.url).then((function(t){if(!t.ok)throw Error(t.statusText);return t.json()})).then((function(n){console.log(n);var a=[];for(var r in n.list)if(r%8===3){var s={},i=n.list[r],c=new Date(1e3*i.dt);s.dt=c.toLocaleString("en-US",e),s.temp=Math.round(i.main.temp),s.cond=h(i.weather[0].id),a.push(s)}console.log(a),t.setState({currentCity:n.city.name,currentCountry:n.city.country,weather:a})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){var t=[];return this.state.weather.forEach((function(e){t.push(u.a.createElement(p,{dt:e.dt,temp:e.temp,cond:e.cond}))})),u.a.createElement("div",{className:"weather-large"},u.a.createElement("div",{className:"weather-header"},u.a.createElement("h1",null,this.state.currentCity,", ",this.state.currentCountry)),u.a.createElement("div",{className:"weather-wrapper"},t))}}]),e}(u.a.Component),m=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(s.a)(this,Object(i.a)(e).call(this,t))).state={apiKey:"312b1bac995abc93b80f070e12bc0b95",setCity:"Ann Arbor"},n}return Object(c.a)(e,t),Object(r.a)(e,[{key:"handleClick",value:function(t){console.log(t.target.value),this.setState({setCity:t.target.value})}},{key:"render",value:function(){var t=this;return u.a.createElement("div",null,u.a.createElement("div",{className:"header-content"},u.a.createElement("nav",{className:"header-nav-wrap"},u.a.createElement("ul",{className:"header-nav"},u.a.createElement("li",null,u.a.createElement("button",null,"My Weather")),u.a.createElement("li",null,u.a.createElement("button",{onClick:function(e){return t.handleClick(e)},value:"Ann Arbor"},"Ann Arbor")),u.a.createElement("li",null,u.a.createElement("button",{onClick:function(e){return t.handleClick(e)},value:"Beijing"},"Beijing")),u.a.createElement("div",{className:"search-container"},u.a.createElement("form",null,u.a.createElement("input",{type:"text",placeholder:"Search..",name:"search"}),u.a.createElement("button",{type:"submit"},u.a.createElement("i",{className:"fa fa-search"}))))))),u.a.createElement(v,{url:"https://api.openweathermap.org/data/2.5/forecast?units=metric&q="+this.state.setCity+"&appid="+this.state.apiKey}))}}]),e}(u.a.Component);d.a.render(u.a.createElement(m,null),document.getElementById("root"))},,,,,function(t,e,n){},function(t,e,n){var a={"./cloudy-day-1.svg":16,"./cloudy-day-2.svg":17,"./cloudy-day-3.svg":18,"./cloudy-night-1.svg":19,"./cloudy-night-2.svg":20,"./cloudy-night-3.svg":21,"./cloudy.svg":22,"./day.svg":23,"./night.svg":24,"./rainy-1.svg":25,"./rainy-2.svg":26,"./rainy-3.svg":27,"./rainy-4.svg":28,"./rainy-5.svg":29,"./rainy-6.svg":30,"./rainy-7.svg":31,"./snowy-1.svg":32,"./snowy-2.svg":33,"./snowy-3.svg":34,"./snowy-4.svg":35,"./snowy-5.svg":36,"./snowy-6.svg":37,"./thunder.svg":38,"./weather-sprite.svg":39,"./weather.svg":40,"./weather_sagittarius.svg":41,"./weather_sunset.svg":42};function r(t){var e=s(t);return n(e)}function s(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=s,t.exports=r,r.id=15},function(t,e,n){t.exports=n.p+"static/media/cloudy-day-1.80a5d865.svg"},function(t,e,n){t.exports=n.p+"static/media/cloudy-day-2.b931d84d.svg"},function(t,e,n){t.exports=n.p+"static/media/cloudy-day-3.109368f6.svg"},function(t,e,n){t.exports=n.p+"static/media/cloudy-night-1.7e65840b.svg"},function(t,e,n){t.exports=n.p+"static/media/cloudy-night-2.ef1c6aa1.svg"},function(t,e,n){t.exports=n.p+"static/media/cloudy-night-3.bf91ac0f.svg"},function(t,e,n){t.exports=n.p+"static/media/cloudy.ad789581.svg"},function(t,e,n){t.exports=n.p+"static/media/day.7f93fbdb.svg"},function(t,e,n){t.exports=n.p+"static/media/night.a3f3f38d.svg"},function(t,e,n){t.exports=n.p+"static/media/rainy-1.f134a51c.svg"},function(t,e,n){t.exports=n.p+"static/media/rainy-2.35eb268d.svg"},function(t,e,n){t.exports=n.p+"static/media/rainy-3.c17e7a5d.svg"},function(t,e,n){t.exports=n.p+"static/media/rainy-4.c8cdb216.svg"},function(t,e,n){t.exports=n.p+"static/media/rainy-5.2bd23641.svg"},function(t,e,n){t.exports=n.p+"static/media/rainy-6.d235ab65.svg"},function(t,e,n){t.exports=n.p+"static/media/rainy-7.c915395f.svg"},function(t,e,n){t.exports=n.p+"static/media/snowy-1.f78cba60.svg"},function(t,e,n){t.exports=n.p+"static/media/snowy-2.d103c77c.svg"},function(t,e,n){t.exports=n.p+"static/media/snowy-3.b6eea2cf.svg"},function(t,e,n){t.exports=n.p+"static/media/snowy-4.474b6da7.svg"},function(t,e,n){t.exports=n.p+"static/media/snowy-5.3def7c9f.svg"},function(t,e,n){t.exports=n.p+"static/media/snowy-6.67d63a14.svg"},function(t,e,n){t.exports=n.p+"static/media/thunder.7142c78b.svg"},function(t,e,n){t.exports=n.p+"static/media/weather-sprite.2738019d.svg"},function(t,e,n){t.exports=n.p+"static/media/weather.56c46d80.svg"},function(t,e,n){t.exports=n.p+"static/media/weather_sagittarius.166882bc.svg"},function(t,e,n){t.exports=n.p+"static/media/weather_sunset.cf01f54e.svg"}],[[8,1,2]]]);
//# sourceMappingURL=main.5ef08e17.chunk.js.map