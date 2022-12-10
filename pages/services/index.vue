<script setup>
  const cards = [
    {
      info: {
        title: "Web Design & Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?",
      },
      link: {
        url: "#",
        text: "Learn More",
      },
   },
   {
      info: {
        title: "Website Maintenance",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?"
      },
      link: {
        url: "#",
        text: "Learn More",
      },
  },
  {
      info: {
        title: "Branding",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?"
      },
      link: {
        url: "#",
        text: "Learn More",
      },
  },
  {
    info: {
      title: "Search Engine Optimization",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?"
    },
    link: {
        url: "#",
        text: "Learn More",
    },
  },
  {
    info: {
      title: "Video Animation",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?"
    },
    link: {
        url: "#",
        text: "Learn More",
    },
  },
  {
    info: {
      title: "Mobile Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?"
    },
    link: {
        url: "#",
        text: "Learn More",
    },
  },
  ]
</script>

<template>
  <main class="mx-5">
    <PageHeader title="Services"/>
    <SectionHeader title="THINK DIGITAL, BUILD SMART, LAUNCH FAST."/>
    <CardLayout>
    <AppCard 
      v-for="card in cards"
      :key="card.id"
      :info="card.info"
      :link="card.link"
    />
    </CardLayout>
  </main>
</template>