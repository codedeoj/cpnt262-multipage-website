<template>
  <main>
    <PageHeader title="Who We Are"/>
    <div class="flex flex-col gap-5 mx-10 my-8">
      <p class="text-2xl md:text-3xl text-gray-900 max-w-6xl mx-auto">We are a Calgary-based end-to-end digital innovation firm with a passon for building beautiful & functional products that deliver results.</p>
    </div>
    <SectionHeader title="Our Team"/>
    <AppSection>
      <p class="max-w-5xl mx-auto text-2xl md:text-3xl text-gray-900">We are a group of bright, experienced, passionate and fun-loving individuals</p>
      <div class="flex justify-center flex-wrap gap-5 mx-auto max-w-6xl my-8 text-2xl">
        <div>
          <nuxt-img src="public/images/team-1.jpg" alt="Team Photos" sizes="sm:100vw md:50vw lg:400px"/>
        </div>
        <div>
          <nuxt-img src="public/images/team-2.jpg" alt="Team Photos" sizes="sm:100vw md:50vw lg:400px"/>
        </div>
        <div>
          <nuxt-img src="public/images/team-3.jpg" alt="Team Photos" sizes="sm:100vw md:50vw lg:400px"/>
        </div>
        <div>
          <nuxt-img src="public/images/team-4.jpg" alt="Team Photos" sizes="sm:100vw md:50vw lg:400px"/>
        </div>
      </div>
    </AppSection>
  </main>
</template>
