<template>
    <div>
        <Header title="我的喵喵"/>
        <TabBar/>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import TabBar from '@/components/TabBar'

    export default {
        name: "Mine",
        components: {
            Header,
            TabBar
        }
    }
</script>

<style scoped>

</style>
