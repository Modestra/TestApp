<template>
    <Header></Header>
    <section class="container">
        <div class="container selector">
            <div class="selector-container">
                <label class="selector-label label-info">Название курса</label>
                <input class="selector-input" />
            </div>
            <div class="selector-container"></div>
            <div class="selector-container"></div>
            <div class="selector-container"></div>
        </div>
    </section>
    <div class="container">
        <div class="rating-container"></div>
    </div>
    <div class="container">
        <div class="catalog">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    </div>
    <div class="container">
        <section class="catalog-allcourse"></section>
    </div>
    <Footer></Footer>
</template>

<script setup>
import { Header, Footer, Card } from '@components/index.ts';
import { ref } from 'vue';

const cards = ref([{}]);
</script>
<style lang="scss" scoped>
.catalog {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(368px, 1fr));
    row-gap: 15px;
    column-gap: 20px;
    justify-items: center;
    overflow: auto;
    width: 80%;
    margin-top: 50px;
    padding: 10px 5px 5px 10px;
    max-height: 1174px;
    scrollbar-width: 4px;

    &-allcourse {
        width: 100%;
        height: 48px;
        margin-top: 50px;
        margin-bottom: 50px;
    }
}
</style>
