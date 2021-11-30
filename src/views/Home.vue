<template>
<v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          v-for="link in links"
          :key="link"
        >
          {{ link }}
        </v-tab>
        <v-tab>
          <v-btn
                color="accent"
                elevation="6"
                large
                x-small
                v-on:click= "compiledCode()"
              >Compilar</v-btn>
        </v-tab>

        <!-- <v-tab>
        <v-btn
              color="accent"
              large
              x-small
              elevation="6"
            >Ejecutar</v-btn>
        </v-tab> -->
        <v-tab>
          <v-btn
                color="accent"
                elevation="6"
                large
                x-small
                v-on:click= "saveProgram()"
              >Guardar Programa</v-btn>
        </v-tab>
        <v-tab>
          <v-btn
                color="accent"
                elevation="6"
                large
                x-small
                v-on:click= "clearModuleSelected()"
              >Clear</v-btn>
              
              
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              

      <div   >
        <h4>OPERACIONES</h4>
      </div>

    <div class="col">
      
      <div class="drag-drawflow" draggable  v-on:dragstart="drag" data-node="add">
        <i class="fab fa-facebook"></i><span> ADD </span>
      </div>
      <div class="drag-drawflow" draggable v-on:dragstart="drag"  data-node="assing">
        <i class="fas fa-fill"></i><span> ASSING</span>
      </div>
      <div class="drag-drawflow" draggable  v-on:dragstart="drag" data-node="number">
        <i class="fas fa-fill"></i><span> NUMBER</span>
      </div>
    </div>

   
     <div><h4>Programas guardados</h4></div>
    <div class="col">
      <div class="" v-for="cli in clientes" :key="cli.uid">
        <i class="fab fa-facebook"></i><span> {{cli.nameProgram}} </span>
      </div>
    </div>


  
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="8"
          >
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >

            <div class="col-right">
              <div class="menu">
                  <ul>
                    <li v-on:click="editor.changeModule('Home'); changeModule(event);" class="selected">New Diagram</li>
                    <li v-on:click="editor.changeModule('Other'); changeModule(event);">Test Diagram</li>
                  </ul>
                </div>
              </div>
              <!-- <div id="drawflow"  v-on:drop="onDrop"  v-on:dragover="allowDrop"> -->
              <div id="drawflow"  v-on:drop="onDrop"  @dragover.prevent @dragenter.prevent>


                <div class="btn-export" v-on:click="executeCode()">Ejecutar</div>
                 <div class="btn-clear" v-on:click="clearModuleSelected()">Clear</div>
                  <!-- <div class="btn-lock">
                    <i id="lock" class="fas fa-lock" v-on:click="editor.editor_mode='fixed'; changeMode('lock');"></i>
                    <i id="unlock" class="fas fa-lock-open" v-on:click="editor.editor_mode='edit'; changeMode('unlock');" style="display:none;"></i>
                  </div>
                  <div class="bar-zoom">
                    <i class="fas fa-search-minus" v-on:click="editor.zoom_out()"></i>
                    <i class="fas fa-search" v-on:click="editor.zoom_reset()"></i>
                    <i class="fas fa-search-plus" v-on:click="editor.zoom_in()"></i>
                  </div> -->
                     
        </div> 
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="800"
            >
              
            <pre></pre>
             <v-textarea
                outlined
                name="code"
                rows="15"
                label="View Code"
                :value="cadena_input"
              >
              </v-textarea>

               <v-textarea
                outlined
                name="console"
                label="Console"
                rows="10"
                :value="cadena_output"
              ></v-textarea>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    </v-app>   
     

</template>

<script>

import Vue from 'vue'
import Drawflow from 'drawflow'
// import Number from '@/components/Number.vue'
// import Add from '@/components/Add.vue'
// import Assign from '@/components/Assign.vue'

import { ProgramsService } from '../services/ProgramsService';
/*eslint-disable */
// import PxHeader from '@/components/PxHeader.vue'
import styleDrawflow from 'drawflow/dist/drawflow.min.css' // eslint-disable-line no-use-before-define
/*eslint-enable */
export default {
  name: 'Home',
  components: {
    // PxHeader
  },
   data() {
     return {
      editor:null,
      mobile_item_selec : '',
      mobile_last_move : null,
      transform:'',
      lock:'',
      unlock:'',
      cadena_input:'',
      cadena_output:'',
      links: [
        'Inicio',
        'Archivo',
        'About',
      ],
      clientes:null
    }
    },
  mounted() {

    
    this.obtenerPrograms()
    const id = document.getElementById("drawflow");
    this.editor = new Drawflow(id, Vue);
    // this.editor.reroute = true;
    // this.editor.start();
    
    const dataToImport = {"drawflow":{"Home":{"data":{"1":{"id":1,"name":"add","data":{},"class":"add","html":"\n        <div>\n          <h2> ADD </h2>\n          <p>Suma 2 elmentos</p>\n        </div>\n        ","typenode":false,"inputs":{"input_1":{"connections":[{"node":"3","input":"output_1"}]},"input_2":{"connections":[{"node":"4","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"2","output":"input_1"}]}},"pos_x":274,"pos_y":153},"2":{"id":2,"name":"assing","data":{},"class":"assing","html":"\n         <div>\n          <h2>ASSING</h2>\n          <p>Resultado:{{23}}</p>\n        </div>\n        ","typenode":false,"inputs":{"input_1":{"connections":[{"node":"1","input":"output_1"}]}},"outputs":{},"pos_x":504,"pos_y":150},"3":{"id":3,"name":"number","data":{"value":"10"},"class":"number","html":"\n           <div>\n            <h2>NUMBER</h2>\n            <p>Enter number</p>\n            <input type=\"number\" df-value>\n          </div>\n          ","typenode":false,"inputs":{},"outputs":{"output_1":{"connections":[{"node":"1","output":"input_1"}]}},"pos_x":48,"pos_y":24},"4":{"id":4,"name":"number","data":{"value":"13"},"class":"number","html":"\n           <div>\n            <h2>NUMBER</h2>\n            <p>Enter number</p>\n            <input type=\"number\" df-value>\n          </div>\n          ","typenode":false,"inputs":{},"outputs":{"output_1":{"connections":[{"node":"1","output":"input_2"}]}},"pos_x":51,"pos_y":249}}}}}
  
    this.editor.start();
    this.editor.import(dataToImport);

    // const props = {};
    // const options = {};
    //NUMERO 1
    // const data = {};
    // this.editor.registerNode('Number', Number, props, options);
    // this.editor.addNode('Name', 0, 1, 100, 50, 'Class', {num:2}, 'Number', 'vue');

    // //NUMERO 2
    // this.editor.registerNode('Number', Number, props, options);
    // this.editor.addNode('Name', 0, 1, 100, 250, 'Class', {num:3}, 'Number', 'vue');

    // //ADD
    // this.editor.registerNode('Add', Add, props, options);
    // this.editor.addNode('Add', 2, 1, 500, 150, 'Class', {sum:2}, 'Add', 'vue');
    // // editor.addNode(name, inputs, outputs, posx, posy, class, data, html);
    
    // //ASSING
    // this.editor.registerNode('Assign', Assign, props, options);
    // this.editor.addNode('Assign', 1, 0, 800, 150, 'Class', {sum:2}, 'Assign', 'vue');
    // editor.addNode(name, inputs, outputs, posx, posy, class, data, html);
    
    
    // Events!
    // this.editor.on('nodeCreated', function(id) {
    //   console.log("Node created " + id);
    // })


    var elements = document.getElementsByClassName('drag-drawflow');
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('touchend', this.onDrop, false);
      elements[i].addEventListener('touchmove', this.positionMobile, false);
      elements[i].addEventListener('touchstart', this.drag, false );
    }

  
  },
  methods:{
     obtenerPrograms() {
        console.log('llamando API')
      return ProgramsService.obtenerPrograms()
        .then((clientes) => {
          console.log(clientes)
          this.clientes = clientes.getAll;
        });
    }, 
    exportData(){
      var exportdata = this.editor.export();
      console.log('exportdata',exportdata)
    },
    saveProgram(){      
     const data= {
        "nameProgram": "sumThrreNumber",
        "user": "CharliesTejada",
        "language": "python",
        "codeTex": `import sys
i=0
while i<10:
    print ("Hello")
    sys.stdout.flush()
    i=i+1
n1 = 3
n2 = 10
suma = n1+n2
print("La suma es: ", suma)`,
        "codeCompiled": "aun no compila"
      }
      return ProgramsService.agregarPrograms(data)
          .then((programs) => {
            console.log(programs.create)
          });
    },
    executeCode(){
      
      
      console.log('Exceute code')
       const data= {
        "codeTex": `import sys
n1 = 3
n2 = 10
suma = n1+n2
print("La suma es: ", suma)`
      }
      this.cadena_input = data.codeTex
      return ProgramsService.ejecutarProgram(data)
          .then((programs) => {
            console.log(programs)
            this.cadena_output = programs.obj
          });
    },
    compiledCode( ){
      this.cadena_input =''
      // console.log(exportdata)
      // translateProgram()
      // this.cadena_input = exportdata.drawflow.Home.data
      // this.cadena_input= JSON.stringify(this.cadena_input)
      this.translateProgram()
      // console.log(this.cadena_input)
    },
     translateProgram(){
      //  var dataProgram = JSON.stringify(this.editor.export(), null,4)
       var dataProgram=this.editor.export()
       dataProgram = dataProgram.drawflow.Home.data
       dataProgram = JSON.stringify(dataProgram)
       dataProgram = JSON.parse(dataProgram)

        var arrayProg=[]
      //  console.log("dataProgram",dataProgram)
       var cadenaProg="import sys \n";
       
      
       for (const iterator in dataProgram) {
         console.log("iterator",iterator)
         arrayProg.push(iterator)
       }
       

       const person = {fname:"John", lname:"Doe", age:25};

        let text = "";
        for (let x in person) {
          text += person[x];
        }
        console.log("text",text)
        console.log("arrayProg",arrayProg)

          
        this.cadena_input = cadenaProg
        console.log("cadenaProg",cadenaProg)


     },
    allowDrop:function(event) {
      // console.log(event)
      // console.log('previniendo evento')
      event.preventDefault();
    },
    positionMobile(ev) {
     this.mobile_last_move = ev;
   },
    clearModuleSelected(){
      this.editor.clearModuleSelected()
    },
    drag:function(event) {
      // console.log('event DRAG')
      // console.log(event)
      if (event.type === "touchstart") {
        this.mobile_item_selec = event.target.closest(".drag-drawflow").getAttribute('data-node');
      } else {
      event.dataTransfer.setData("node", event.target.getAttribute('data-node'));
      }
    },
    onDrop:function(event) {
      if (event.type === "touchend") {
        var parentdrawflow = document.elementFromPoint( this.mobile_last_move.touches[0].clientX, this.mobile_last_move.touches[0].clientY).closest("#drawflow");
        if(parentdrawflow != null) {
          this.addNodeToDrawFlow(this.mobile_item_selec, this.mobile_last_move.touches[0].clientX, this.mobile_last_move.touches[0].clientY);
        }
        this.mobile_item_selec = '';
      } else {
        // event.prevententDefault();
        var data = event.dataTransfer.getData("node");
        this.addNodeToDrawFlow(data, event.clientX, event.clientY);
      }

    },
    addNodeToDrawFlow(name, pos_x, pos_y) {
      if(this.editor.editor_mode === 'fixed') {
        return false;
      }
      pos_x = pos_x * ( this.editor.precanvas.clientWidth / (this.editor.precanvas.clientWidth * this.editor.zoom)) - (this.editor.precanvas.getBoundingClientRect().x * ( this.editor.precanvas.clientWidth / (this.editor.precanvas.clientWidth * this.editor.zoom)));
      pos_y = pos_y * ( this.editor.precanvas.clientHeight / (this.editor.precanvas.clientHeight * this.editor.zoom)) - (this.editor.precanvas.getBoundingClientRect().y * ( this.editor.precanvas.clientHeight / (this.editor.precanvas.clientHeight * this.editor.zoom)));


      switch (name) {
        case 'add':
        var add = `
        <div>
          <h2> ADD </h2>
          <p>Suma 2 elmentos</p>
        </div>
        `;
          this.editor.addNode('add', 2,  1, pos_x, pos_y, 'add', {}, add );
          break;
        case 'assing':
        var assing = `
         <div>
          <h2>ASSING</h2>
          <p>Resultado:{{23}}</p>
        </div>
        `;
          this.editor.addNode('assing', 1,  0, pos_x, pos_y, 'assing', {}, assing );
          break;
        case 'number':
          var number = `
           <div>
            <h2>NUMBER</h2>
            <p>Enter number</p>
            <input type="number" df-value>
          </div>
          `
          this.editor.addNode('number', 0, 1, pos_x, pos_y, 'number', {value: 2 }, number );
          break;
          
          case 'dbclick':
            var dbclick = `
            <div>
            <div class="title-box"><i class="fas fa-mouse"></i> Db Click</div>
              <div class="box dbclickbox" ondblclick="showpopup(event)">
                Db Click here
                <div class="modal" style="display:none">
                  <div class="modal-content">
                    <span class="close" onclick="closemodal(event)">&times;</span>
                    Change your variable {name} !
                    <input type="text" df-name>
                  </div>

                </div>
              </div>
            </div>
            `;
            this.editor.addNode('dbclick', 1, 1, pos_x, pos_y, 'dbclick', { name: ''}, dbclick );
            break;

        default:
      }
    },
  
  }
}
</script>

<style scoped>
  #app {
  text-align: center;
}
#drawflow {
  text-align:initial;
  position: relative;
  width: 100%;
  height: 800px;
  border: 1px dashed grey;
}
</style>