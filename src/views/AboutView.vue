<script setup lang="ts">

</script>

<template>
  <div class="about">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h1 class="title">Обо мне</h1>
        </div>
        <div class="col-8">
          <p class="about__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quaerat, quam! Amet
            architecto autem deserunt dignissimos ducimus explicabo fugiat iste itaque labore laboriosam magnam nesciunt
            porro, possimus quae qui quis, repellat repellendus rerum sed sequi sit vitae voluptas? Alias commodi dolor
            dolorum! Alias at consectetur corporis enim exercitationem inventore iste libero quae qui quia repellendus,
            sed soluta totam vero voluptatem? At consequuntur dicta dolorum enim ex explicabo neque reiciendis
            reprehenderit suscipit tempore. Doloremque doloribus earum ex fugiat, harum ipsa ipsam, labore magni quo
            reprehenderit similique sit veniam voluptatum? Ad animi error hic minus modi necessitatibus sit voluptatem!
            Inventore provident, quod!</p>

          <p class="about__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa, enim eos harum
            impedit quibusdam? Alias, autem blanditiis, culpa deserunt doloribus eos, esse incidunt mollitia nam nobis
            nostrum quibusdam quod? Beatae dolorum eligendi expedita harum incidunt odit praesentium! Adipisci delectus
            doloremque dolores doloribus, esse excepturi iste laborum magnam mollitia officia, placeat possimus reiciendis
            reprehenderit temporibus voluptates! Ab, accusantium amet, asperiores debitis dicta distinctio dolores error
            eum, exercitationem explicabo fuga illo inventore ipsam iure iusto minima molestias nesciunt non obcaecati
            perferendis repellendus sequi sit suscipit tempora ut? Aspernatur esse ex incidunt ipsa? Architecto delectus,
            ducimus itaque magni mollitia obcaecati sapiente ut.</p>
          <p class="about__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa, enim eos harum
            impedit quibusdam? Alias, autem blanditiis, culpa deserunt doloribus eos, esse incidunt mollitia nam nobis
            nostrum quibusdam quod? Beatae dolorum eligendi expedita harum incidunt odit praesentium! Adipisci delectus
            doloremque dolores doloribus, esse excepturi iste laborum magnam mollitia officia, placeat possimus reiciendis
            reprehenderit temporibus voluptates! Ab, accusantium amet, asperiores debitis dicta distinctio dolores error
            eum, exercitationem explicabo fuga illo inventore ipsam iure iusto minima molestias nesciunt non obcaecati
            perferendis repellendus sequi sit suscipit tempora ut? Aspernatur esse ex incidunt ipsa? Architecto delectus,
            ducimus itaque magni mollitia obcaecati sapiente ut.</p>
        </div>
        <div class="col-4 justify-content-end d-flex">
          <div class="about__image-wrapper">
            <img class="about__image" src="../assets/img/me.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about {
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__image-wrapper {
    width: 40rem;
    height: 60rem;
  }

  &__content {
    font-weight: 600;
    font-size: 2rem;

    &:not(:last-of-type) {
      margin-bottom: 5rem;
    }
  }

  &__col-image {
    display: flex;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .about{
    &__content{
      font-size: 1.6rem;
    }
  }
}
</style>