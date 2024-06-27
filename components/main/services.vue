<script setup>
import { ref } from "vue";

const services = ref([
   {
      title: "Web Design",
      description:
         "Create stunning, responsive websites that are tailored to your needs. Whether you need a personal blog, a portfolio, or a full-fledged business site, I will design a web presence that stands out and provides a seamless user experience. I make sure SEO is implemented correctly and that your site is optimized for speed and performance.",
      image: "/icons/web-design.svg",
   },
   {
      title: "RESTful API Development",
      description:
         "Develop robust and scalable RESTful APIs to power your applications. From backend services to integrations with third-party systems, I ensure your API is secure, efficient, and easy to use.",
      image: "/icons/api.svg",
   },
   {
      title: "Hosting & Maintenance",
      description:
         "Host your website or application with reliable and scalable solutions. I offer full support including updates, security patches, and package maintenance to keep your site running smoothly and securely.",
      image: "/icons/hosting.svg",
   },
]);
</script>

<template>
   <section
      id="services"
      class="mx-auto flex w-9/12 flex-col justify-between py-20"
   >
      <h2
         class="mb-20 text-4xl font-semibold leading-tight text-black dark:text-white md:text-5xl"
      >
         What I offer
      </h2>
      <div class="flex flex-col gap-52">
         <MainService
            v-for="service in services"
            :key="service.title"
            :title="service.title"
            :description="service.description"
            :image="service.image"
            :image-left="services.indexOf(service) % 2 === 0"
         />
      </div>
   </section>
</template>
