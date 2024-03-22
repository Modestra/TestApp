<template>
    <Header></Header>
    <section class="container">
        <div class="container selector">
            <div class="selector-container">
                <label class="selector-label label-info">Название курса</label>
                <input class="selector-input" />
            </div>
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
    <div class="container">
        <div class="addblock"></div>
    </div>
    <div class="container question">
        <div class="question-logo">
            <p>Остались вопросы? Напишите нам и мы ответим вам на все!</p>
            <img src="\src\assets\images\MiddleLogo.svg" alt="Изображение" />
        </div>
        <div class="question-block">
            <div class="question-form"></div>
        </div>
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
.addblock {
    width: 80%;
    height: 600px;
    background: linear-gradient(
        90deg,
        rgb(255, 240, 106),
        rgb(246, 190, 67) 65%
    );
    border-radius: 25px;
    margin-bottom: 50px;
}
.question {
    &-block {
        display: flex;
        justify-content: end;
        width: 40%;
        height: 100%;
    }
    &-logo {
        display: flex;
        flex-direction: column;
        width: 40%;
        height: 662px;
    }
    &-logo img {
        width: 431px;
        height: 463px;
        margin-left: 15px;
    }
    &-logo p {
        width: 80%;
        font-family: Plovdiv Display;
        font-size: 42px;
        font-weight: 400;
        line-height: 50.4px;
        text-align: left;
    }
    &-form {
        width: 592px;
        height: 543px;
        background-color: #f3f3f3;
    }
}
@media (max-width: 1024px) {
    .question {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        &-logo {
            width: 80%;
            height: 100%;
            margin-bottom: 5px;
        }
        &-logo p {
            width: 100%;
            text-align: center;
        }
        &-logo img {
            display: none;
        }
        &-block {
            width: 80%;
            height: 100%;
            margin-bottom: 15px;
        }
        &-form {
            width: 100%;
        }
    }
}
</style>
