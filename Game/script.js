new Vue({
    data(){
        return{
            all:'ABCDEFGHIJKLMNOPQRDTUVWXYZ',
            list: ["A"]
        }
    },
    mounted(){
        window.onkeydown=(e) =>{
            var ev=window.event||e;
            var key=String.fromCharCode(ev.keyCode);
            for(var i=0;i<this.list.length;i++){
                if(this.list[i]==key){
                    this.list.splice(i,1)
                    var p_old_top=this.$refs.box.offsetTop;
                    var p_new_top=p_old_top-150;
                    this.$refs.box.style.top=p_new_top+"px";
                    var left= Math.floor(Math.random()*(1000-1+1-0)+0);
                    this.$refs.box.style.left=left+"px";
                    var num=Math.floor(Math.random()*(this.all.lenght-1+1-0)+0);

                    this.list.push(this.all[num]);
                }
            }
        }
        var time=setInterval(()=>{
            var old_top=this.$refs.box.offsetTop;
            var new_top=old_top+2;
            this.$refs.box.style.top=new_top+"px";
        },15)
    }
}).$mount('#app')