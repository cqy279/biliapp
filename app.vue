<template>
    <NuxtPage />
</template>
<script setup lang="ts">
useSeoMeta({
    // 网站标题
    title: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili官方',
    // 网站描述
    description:
        '哔哩哔哩（bilibili.com)是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。',
    // 搜索关键词
    keywords: 'B站,bilibili,哔哩哔哩,哔哩哔哩动画,动漫,电影,在线动漫,高清电影',
    // 绕开 B 站图片防盗链
    referrer: 'no-referrer',
})
</script>

<style lang="scss">
@import url('~/assets/style/base.scss');
@import url('~/assets/style/color.scss');
</style>
