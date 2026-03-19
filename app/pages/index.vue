<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale } = useI18n()

const collection = computed(() => ('content_' + locale.value) as keyof Collections)

const { data: page } = await useAsyncData('index-' + locale.value, async () => {
  const content = await queryCollection(collection.value).path('/').first()

  if (!content && locale.value !== 'en') {
    return await queryCollection('content_en').path('/').first()
  }

  return content
}, {
  watch: [locale]
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
    :prose="false"
  />
</template>
