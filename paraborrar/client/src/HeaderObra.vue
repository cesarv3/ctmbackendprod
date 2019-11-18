<template>
    <div id = "panelObrasHeader">
        <h1 id = "panelTitle">Obras</h1>
        <b-button class="botonAgregar" pill size="sm"  @click="openForm">+</b-button>
            <div class = "form-popup" id ="formaAgregar">
                <b-form class="contenedorForma">
                    <div
                        id="grupo-header-agregar"
                    >
                        <h1 class="tituloVentana" align="center">Nueva Obra</h1>
                        <b-button class="botonCerrar" pill size="sm" @click="closeForm" >x</b-button>
                    </div>
                    <b-form-group
                        class="grupoEntrada"
                        id="grupo-Nombre"
                        label="Nombre de la Obra:"
                        label-for="inputNombreObra"
                    >
                        <b-form-input
                            id="inputNombreObra"
                            v-model="obra.nombre"
                            required
                            placeholder="Nombre de la Obra"
                            class="entradaDatos"
                        ></b-form-input>         
                    </b-form-group>
                    <b-form-group
                        class="grupoEntrada"
                        id="grupo-Descripcion"
                        label="Descripción"
                        label-for="inputDescripcionObra"
                    >
                        <b-form-textarea
                            id="textAreaDescripcion"
                            v-model="obra.descripcion"
                            placeholder="Descripción de la obra"
                            rows= "2"
                            max-rows="4"
                            class="entradaDatos"
                        ></b-form-textarea>
                    </b-form-group>
                    <b-button class="btCrearObra" @click="crearObra">Crear obra</b-button>
                </b-form>
        </div>
    </div>
</template>

<script>
export default {
    name:"HeaderObra",
    props:{
        obra:Object
    },
    methods:{
        openForm(){
            document.getElementById("formaAgregar").style.display = "block";
        },
        closeForm(){
             document.getElementById("formaAgregar").style.display = "none";
        },
        crearObra(){
            console.log(this.obra);
            this.$emit('agregaObra',this.obra);
        }
    }
}
</script>

<style>
    .tituloVentana{
        text-align:center;
        margin-left:5px;
    }
    .grupoEntrada{
        margin-left:5px;
        width:390px;
    }
    .contenedorForma{
        max-width:600px;
        width:400px;
    }
    .btCrearObra{
        margin:auto;
        display:block;
        background-color:#F17800;
        margin-bottom:5px;
    }
    h1{
        display:inline;
    }
    .form-popup{
        display:none;
        position:fixed;
        bottom:0;
        right:15px;
        border:5px solid #F17800;
        z-index:9;
    }
    .botonAgregar{
        font-size:10px;
        top:18px;
        position:fixed;
        margin-left:10px;
        background-color: #F17800;
    }
    .botonCerrar{
        font-size:7px;
        margin-left:155px;
        margin-bottom:50px;
        background-color: #C10000;
    }
</style>