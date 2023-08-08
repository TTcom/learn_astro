<template>
  <div  flex class="w-100% -ml-5px" flex-wrap>
    <span c-white text-20px>test</span> 
    <div pl="10px"  mb-10px class="w-25%" box-border v-for="(item,i) in user">
      <div class="card h-100%" bg-white flex flex-col justify-center box-border   px-16px py-16px pb-3  rounded-5px lh-20px>
        <div v-for="(val, key, index) in item" mb-15px>
              <div fw-700 text-16px >{{key}}</div>
              <div flex justify-between pt-10px text-14px class="c-#606266">
                <div>{{ val }}</div> 
                <div cursor-pointer @click="copyText(val)">
                  <i icon-btn w-20px h-20px class="i-carbon-copy" />
                </div> 
              </div>
        </div>
      </div> 
    </div>
</div>
</template>
<script setup>
// import {usermsg} from './userMsg.js'
let user = 'usermsg'
// function copyText(val) {
//   var copyipt = document.createElement("input");
//       var text = val;
//       copyipt.setAttribute("value", text);
//       document.body.appendChild(copyipt);
//       copyipt.select();
//       document.execCommand("copy");
// 	    document.body.removeChild(copyipt);
// }
</script>
<style>
.card{
  box-shadow: 0 0 rgba(0,0,0,0),0 0 rgba(0,0,0,0), 0px 0px 12px rgba(0,0,0,12%);
}
  
</style>