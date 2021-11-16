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
              >Compilar</v-btn>
        </v-tab>

        <v-tab>
        <v-btn
              color="accent"
              large
              x-small
              elevation="6"
            >Ejecutar</v-btn>
        </v-tab>
        <v-tab>
          <v-btn
                color="accent"
                elevation="6"
                large
                x-small
                v-on:click= "exportData()"
              >Exportar datos</v-btn>
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
        <h2> OPERACIONES</h2>
      </div>
      <div class="drag-drawflow" draggable="true" v-on:ondragstart="drag(event)" data-node="facebook">
        <i class="fab fa-facebook"></i><span> ADD (SUMAR)</span>
      </div>
      <div class="drag-drawflow" draggable="true" v-on:ondragstart="drag(event)" data-node="slack">
        <i class="fab fa-slack"></i><span> Ress (RETAR)</span>
      </div>
      <div class="drag-drawflow" draggable="true" v-on:ondragstart="drag(event)" data-node="github">
        <i class="fab fa-github"></i><span> Multiplicar</span>
      </div>
      <div class="drag-drawflow" draggable="true" v-on:ondragstart="drag(event)" data-node="telegram">
        <i class="fab fa-telegram"></i><span> Dividir</span>
      </div>
      <div class="drag-drawflow" draggable="true" v-on:ondragstart="drag(event)" data-node="aws">
        <i class="fab fa-aws"></i><span> Concatenar</span>
      </div>
      <div class="drag-drawflow" draggable="true" v-on:ondragstart="drag(event)" data-node="log">
        <i class="fas fa-file-signature"></i><span> Reverar</span>
      </div>
      <div class="drag-drawflow" draggable="true" v-on:ondragstart="drag(event)" data-node="google">
        <i class="fab fa-google-drive"></i><span> POST</span>
      </div>
      <div class="drag-drawflow" draggable="true" v-on:ondragstart="drag(event)" data-node="email">
        <i class="fas fa-at"></i><span> GET</span>
      </div>
      <div class="drag-drawflow" draggable="true" v-on:ondragstart="drag(event)" data-node="template">
        <i class="fas fa-code"></i><span> UPDATE</span>
      </div>
      <div class="drag-drawflow" draggable="true" v-on:ondragstart="drag(event)" data-node="multiple">
        <i class="fas fa-code-branch"></i><span> DELETE</span>
      </div>
      <div class="drag-drawflow" draggable="true" v-on:ondragstart="drag(event)" data-node="personalized">
        <i class="fas fa-fill"></i><span> ASSING</span>
      </div>
      <div class="drag-drawflow" draggable="true" v-on:ondragstart="drag(event)" data-node="dbclick">
        <i class="fas fa-mouse"></i><span> IF ELSE</span>
      </div>
      <div class="drag-drawflow" draggable="true" v-on:ondragstart="drag(event)" data-node="dbclick">
        <i class="fas fa-mouse"></i><span> FOR</span>
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
             <div class="menu">
                <ul>
                  <li v-on:click="editor.changeModule('Home'); changeModule(event);" class="selected">New Diagram</li>
                  <li v-on:click="editor.changeModule('Other'); changeModule(event);">Test Diagram</li>
                </ul>
              </div>
              <div id="drawflow" v-on:ondrop="drop(event)" v-on:ondragover="allowDrop(event)" >

                 <!-- <div class="btn-clear" v-on:click="clearModuleSelected()">Clear</div>
                  <div class="btn-lock">
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
              min-height="268"
            >
            <div   >
                <h2> Code View</h2>
              </div>
               <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    language
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item >
                    <v-list-item-title>Python</v-list-item-title>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-title>JS</v-list-item-title>
                  </v-list-item>
                    
                </v-list>
              </v-menu>
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
import Number from '@/components/Number.vue'
import Add from '@/components/Add.vue'
import Assign from '@/components/Assign.vue'
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
      links: [
        'Inicio',
        'Archivo',
        'About',
      ],
    }
    },
  mounted() {
    const id = document.getElementById("drawflow");
    this.editor = new Drawflow(id, Vue);
    // this.editor.reroute = true;
    this.editor.start();
    
    const props = {};
    const options = {};
    //NUMERO 1
    // const data = {};
    this.editor.registerNode('Number', Number, props, options);
    this.editor.addNode('Name', 0, 1, 100, 50, 'Class', {num:2}, 'Number', 'vue');

    //NUMERO 2
    this.editor.registerNode('Number', Number, props, options);
    this.editor.addNode('Name', 0, 1, 100, 250, 'Class', {num:3}, 'Number', 'vue');

    //ADD
    this.editor.registerNode('Add', Add, props, options);
    this.editor.addNode('Add', 2, 1, 500, 150, 'Class', {sum:2}, 'Add', 'vue');
    // editor.addNode(name, inputs, outputs, posx, posy, class, data, html);
    
    //ASSING
    this.editor.registerNode('Assign', Assign, props, options);
    this.editor.addNode('Assign', 1, 0, 800, 150, 'Class', {sum:2}, 'Assign', 'vue');
    // editor.addNode(name, inputs, outputs, posx, posy, class, data, html);
    
    
    // Events!
    // this.editor.on('nodeCreated', function(id) {
    //   console.log("Node created " + id);
    // })

    // this.editor.on('nodeRemoved', function(id) {
    //   console.log("Node removed " + id);
    // })

    // this.editor.on('nodeSelected', function(id) {
    //   console.log("Node selected " + id);
    // })

    // this.editor.on('moduleCreated', function(name) {
    //   console.log("Module Created " + name);
    // })

    // this.editor.on('moduleChanged', function(name) {
    //   console.log("Module Changed " + name);
    // })

    // this.editor.on('connectionCreated', function(connection) {
    //   console.log('Connection created');
    //   console.log(connection);
    // })

    // this.editor.on('connectionRemoved', function(connection) {
    //   console.log('Connection removed');
    //   console.log(connection);
    // })

    // this.editor.on('mouseMove', function(position) {
    //   console.log('Position mouse x:' + position.x + ' y:'+ position.y);
    // })

    // this.editor.on('nodeMoved', function(id) {
    //   console.log("Node moved " + id);
    // })

    // this.editor.on('zoom', function(zoom) {
    //   console.log('Zoom level ' + zoom);
    // })

    // this.editor.on('translate', function(position) {
    //   console.log('Translate x:' + position.x + ' y:'+ position.y);
    // })

    // this.editor.on('addReroute', function(id) {
    //   console.log("Reroute added " + id);
    // })

    // this.editor.on('removeReroute', function(id) {
    //   console.log("Reroute removed " + id);
    // })

    var elements = document.getElementsByClassName('drag-drawflow');
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('touchend', this.drop, false);
      elements[i].addEventListener('touchmove', this.positionMobile, false);
      elements[i].addEventListener('touchstart', this.drag, false );
    }

  
  },
  methods:{
    exportData(){
      // console.log('ásdad')
      var exportdata = this.editor.export();
      // editor.import(exportdata);
      console.log('exportdata',exportdata)
    },
    positionMobile(ev) {
     this.mobile_last_move = ev;
   },
    clearModuleSelected(){
      this.editor.clearModuleSelected()
    },
    drag(ev) {
      if (ev.type === "touchstart") {
        this.mobile_item_selec = ev.target.closest(".drag-drawflow").getAttribute('data-node');
      } else {
      ev.dataTransfer.setData("node", ev.target.getAttribute('data-node'));
      }
    },
    drop(ev) {
      if (ev.type === "touchend") {
        var parentdrawflow = document.elementFromPoint( this.mobile_last_move.touches[0].clientX, this.mobile_last_move.touches[0].clientY).closest("#drawflow");
        if(parentdrawflow != null) {
          this.addNodeToDrawFlow(this.mobile_item_selec, this.mobile_last_move.touches[0].clientX, this.mobile_last_move.touches[0].clientY);
        }
        this.mobile_item_selec = '';
      } else {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("node");
        this.addNodeToDrawFlow(data, ev.clientX, ev.clientY);
      }

    },
    addNodeToDrawFlow(name, pos_x, pos_y) {
      if(this.editor.editor_mode === 'fixed') {
        return false;
      }
      pos_x = pos_x * ( this.editor.precanvas.clientWidth / (this.editor.precanvas.clientWidth * this.editor.zoom)) - (this.editor.precanvas.getBoundingClientRect().x * ( this.editor.precanvas.clientWidth / (this.editor.precanvas.clientWidth * this.editor.zoom)));
      pos_y = pos_y * ( this.editor.precanvas.clientHeight / (this.editor.precanvas.clientHeight * this.editor.zoom)) - (this.editor.precanvas.getBoundingClientRect().y * ( this.editor.precanvas.clientHeight / (this.editor.precanvas.clientHeight * this.editor.zoom)));


      switch (name) {
        case 'facebook':
        var facebook = `
        <div>
          <div class="title-box"><i class="fab fa-facebook"></i> Facebook Message</div>
        </div>
        `;
          this.editor.addNode('facebook', 0,  1, pos_x, pos_y, 'facebook', {}, facebook );
          break;
        case 'slack':
          var slackchat = `
          <div>
            <div class="title-box"><i class="fab fa-slack"></i> Slack chat message</div>
          </div>
          `
          this.editor.addNode('slack', 1, 0, pos_x, pos_y, 'slack', {}, slackchat );
          break;
        case 'github':
          var githubtemplate = `
          <div>
            <div class="title-box"><i class="fab fa-github "></i> Github Stars</div>
            <div class="box">
              <p>Enter repository url</p>
            <input type="text" df-name>
            </div>
          </div>
          `;
          this.editor.addNode('github', 0, 1, pos_x, pos_y, 'github', { "name": ''}, githubtemplate );
          break;
        case 'telegram':
          var telegrambot = `
          <div>
            <div class="title-box"><i class="fab fa-telegram-plane"></i> Telegram bot</div>
            <div class="box">
              <p>Send to telegram</p>
              <p>select channel</p>
              <select df-channel>
                <option value="channel_1">Channel 1</option>
                <option value="channel_2">Channel 2</option>
                <option value="channel_3">Channel 3</option>
                <option value="channel_4">Channel 4</option>
              </select>
            </div>
          </div>
          `;
          this.editor.addNode('telegram', 1, 0, pos_x, pos_y, 'telegram', { "channel": 'channel_3'}, telegrambot );
          break;
        case 'aws':
          var aws = `
          <div>
            <div class="title-box"><i class="fab fa-aws"></i> Aws Save </div>
            <div class="box">
              <p>Save in aws</p>
              <input type="text" df-db-dbname placeholder="DB name"><br><br>
              <input type="text" df-db-key placeholder="DB key">
              <p>Output Log</p>
            </div>
          </div>
          `;
          this.editor.addNode('aws', 1, 1, pos_x, pos_y, 'aws', { "db": { "dbname": '', "key": '' }}, aws );
          break;
        case 'log':
            var log = `
            <div>
              <div class="title-box"><i class="fas fa-file-signature"></i> Save log file </div>
            </div>
            `;
            this.editor.addNode('log', 1, 0, pos_x, pos_y, 'log', {}, log );
            break;
          case 'google':
            var google = `
            <div>
              <div class="title-box"><i class="fab fa-google-drive"></i> Google Drive save </div>
            </div>
            `;
            this.editor.addNode('google', 1, 0, pos_x, pos_y, 'google', {}, google );
            break;
          case 'email':
            var email = `
            <div>
              <div class="title-box"><i class="fas fa-at"></i> Send Email </div>
            </div>
            `;
            this.editor.addNode('email', 1, 0, pos_x, pos_y, 'email', {}, email );
            break;

          case 'template':
            var template = `
            <div>
              <div class="title-box"><i class="fas fa-code"></i> Template</div>
              <div class="box">
                Ger Vars
                <textarea df-template></textarea>
                Output template with vars
              </div>
            </div>
            `;
            this.editor.addNode('template', 1, 1, pos_x, pos_y, 'template', { "template": 'Write your template'}, template );
            break;
          case 'multiple':
            var multiple = `
            <div>
              <div class="box">
                Multiple!
              </div>
            </div>
            `;
            this.editor.addNode('multiple', 3, 4, pos_x, pos_y, 'multiple', {}, multiple );
            break;
          case 'personalized':
            var personalized = `
            <div>
              Personalized
            </div>
            `;
            this.editor.addNode('personalized', 1, 1, pos_x, pos_y, 'personalized', {}, personalized );
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
    showpopup(e) {
    e.target.closest(".drawflow-node").style.zIndex = "9999";
    e.target.children[0].style.display = "block";
    //document.getElementById("modalfix").style.display = "block";

    //e.target.children[0].style.transform = 'translate('+translate.x+'px, '+translate.y+'px)';
    this.transform = this.editor.precanvas.style.transform;
    this.editor.precanvas.style.transform = '';
    this.editor.precanvas.style.left = this.editor.canvas_x +'px';
    this.editor.precanvas.style.top = this.editor.canvas_y +'px';
    console.log(this.transform);

    //e.target.children[0].style.top  =  -editor.canvas_y - editor.container.offsetTop +'px';
    //e.target.children[0].style.left  =  -editor.canvas_x  - editor.container.offsetLeft +'px';
    this.editor.editor_mode = "fixed";

  },
  closemodal(e) {
     e.target.closest(".drawflow-node").style.zIndex = "2";
     e.target.parentElement.parentElement.style.display  ="none";
     //document.getElementById("modalfix").style.display = "none";
     this.editor.precanvas.style.transform = this.transform;
       this.editor.precanvas.style.left = '0px';
       this.editor.precanvas.style.top = '0px';
      this.editor.editor_mode = "edit";
   },
    changeModule(event) {
      var all = document.querySelectorAll(".menu ul li");
        for (var i = 0; i < all.length; i++) {
          all[i].classList.remove('selected');
        }
      event.target.classList.add('selected');
    },
    changeMode(option) {

    //console.log(lock.id);
      if(option == 'lock') {
        this.lock.style.display = 'none';
        this.unlock.style.display = 'block';
      } else {
        this.lock.style.display = 'block';
        this.unlock.style.display = 'none';
      }

    }
  }
}
</script>

<style scoped>
  #app {
  text-align: initial;
}
#drawflow {
  text-align:initial;
  position: relative;
  width: 100%;
  height: 800px;
  border: 1px solid red;
}
</style>