<template>
  <div id ='panelCompletoObras'>
    <HeaderObra
      :obra="obra"
      @agregaObra="muestraObraNueva($event)"/>
    <PanelDeObras/>

  </div>
</template>

<script>
import HeaderObra from './HeaderObra'
import PanelDeObras from './PanelObrasUsuario'
export default {
  name: 'app',
  components:{
    HeaderObra,
    PanelDeObras
  },
  data(){
    return{
     obra:{
       nombre:'',
       descripcion:''
     }
    }
  },
  methods:{
    muestraObraNueva(event){
      console.log(this.obra);

      }
    
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
