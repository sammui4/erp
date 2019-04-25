<template>
  <div id="app">
  	<div v-if="sitState" class="sit-model">
  		<span>温馨提醒，您当前所在的环境是非正式环境</span>
  	</div>
    <router-view/>
  </div>
</template>

<script>
export default {
	name: 'app',
    data () {
        return {
            sitState: false
        }
    },
    created() {

		let hostname = location.host;

		console.log(hostname)

		if (hostname !== 'eip.hkmtl.com') {
			this.sitState = true
		}

    },
}
</script>

<style>
.sit-model {
	position: fixed;
    left: 0;
    top: 4px;
    width: 100%;
    z-index: 199;
    color: #fff;
    text-align: center;
    box-sizing: border-box;
}

.sit-model > span {
	display: inline-block;
	background-color: #cc0000;
    box-sizing: border-box;
    padding: 0 30px;
    border-radius: 7px;
}
</style>
