<script setup lang="ts">

</script>

<template>
  <div class="main">
    <h1 class="main__title">Обо мне</h1>
    <div class="main__row">
      <div class="main__col-content">
        <p class="main__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quaerat, quam! Amet
          architecto autem deserunt dignissimos ducimus explicabo fugiat iste itaque labore laboriosam magnam nesciunt
          porro, possimus quae qui quis, repellat repellendus rerum sed sequi sit vitae voluptas? Alias commodi dolor
          dolorum! Alias at consectetur corporis enim exercitationem inventore iste libero quae qui quia repellendus,
          sed soluta totam vero voluptatem? At consequuntur dicta dolorum enim ex explicabo neque reiciendis
          reprehenderit suscipit tempore. Doloremque doloribus earum ex fugiat, harum ipsa ipsam, labore magni quo
          reprehenderit similique sit veniam voluptatum? Ad animi error hic minus modi necessitatibus sit voluptatem!
          Inventore provident, quod!</p>

        <p class="main__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa, enim eos harum
          impedit quibusdam? Alias, autem blanditiis, culpa deserunt doloribus eos, esse incidunt mollitia nam nobis
          nostrum quibusdam quod? Beatae dolorum eligendi expedita harum incidunt odit praesentium! Adipisci delectus
          doloremque dolores doloribus, esse excepturi iste laborum magnam mollitia officia, placeat possimus reiciendis
          reprehenderit temporibus voluptates! Ab, accusantium amet, asperiores debitis dicta distinctio dolores error
          eum, exercitationem explicabo fuga illo inventore ipsam iure iusto minima molestias nesciunt non obcaecati
          perferendis repellendus sequi sit suscipit tempora ut? Aspernatur esse ex incidunt ipsa? Architecto delectus,
          ducimus itaque magni mollitia obcaecati sapiente ut.</p>
        <p class="main__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa, enim eos harum
          impedit quibusdam? Alias, autem blanditiis, culpa deserunt doloribus eos, esse incidunt mollitia nam nobis
          nostrum quibusdam quod? Beatae dolorum eligendi expedita harum incidunt odit praesentium! Adipisci delectus
          doloremque dolores doloribus, esse excepturi iste laborum magnam mollitia officia, placeat possimus reiciendis
          reprehenderit temporibus voluptates! Ab, accusantium amet, asperiores debitis dicta distinctio dolores error
          eum, exercitationem explicabo fuga illo inventore ipsam iure iusto minima molestias nesciunt non obcaecati
          perferendis repellendus sequi sit suscipit tempora ut? Aspernatur esse ex incidunt ipsa? Architecto delectus,
          ducimus itaque magni mollitia obcaecati sapiente ut.</p>
      </div>
      <div class="main__col-image">
        <div class="main__image-wrapper">
          <img class="main__image" src="../assets/img/me.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__image-wrapper {
    width: 40rem;
    height: 60rem;
  }

  &__title {
    font-weight: 600;
    font-size: 4.8rem;
    text-transform: uppercase;
    margin-bottom: 6rem;
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

  &__row {
    display: grid;
    gap: 5rem;
    grid-template-columns: 60% 40%;
    overflow: hidden;
  }
}

@media (max-width: 991px) {
  .main {
    &__row {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }

    &__image-wrapper {
      width: auto;
      height: auto;
    }
  }
}
</style>