<template>
    <div class="bg"></div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg{
	height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
	background-image: url("../../../static/img/bg/jcxx.svg");
	background-repeat: no-repeat;
	background-position: 50% 40%;
    text-align: center;
}
@media (max-width: 1366px) {
    .bg {
        background-size: 60%;
    }
}
</style>